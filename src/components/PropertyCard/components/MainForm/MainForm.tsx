import s from "./MainForm.module.scss";
import { Input } from "../../../../features/Input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BalanceInfo } from "../BalanceInfo/BalanceInfo";
import { useState } from "react";
import { useSmarts } from "../../../../hooks/useSmart";
import { manageNftApi } from "../../../../api/nft/manageNft";

import { useAppSelector } from "../../../../hooks/hooks.ts";
import { authSelect } from "../../../../slice/authSlice.ts";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

export const MainForm = ({ data }: { data: any }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [payableBalance, setPayableBalance] = useState<string>("0");
  const { address, isConnected } = useWeb3ModalAccount();
  const auth = useAppSelector(authSelect);
  const { smarts } = useSmarts();
  const getOutputPosition = () => {
    const min = 0;
    const max = data.total_tokens;

    const sliderContainer = document.querySelector(`.${s.sliderWrap}`);
    const sliderContainerWidth = sliderContainer
      ? sliderContainer.clientWidth
      : 200;
    const sliderWidthPercent = 110;
    const thumbWidthPercent = 15;

    const sliderWidth = (sliderWidthPercent / 100) * sliderContainerWidth;
    const thumbWidth = (thumbWidthPercent / 100) * sliderContainerWidth;

    const position = ((value - min) / (max - min)) * (sliderWidth - thumbWidth);
    return position;
  };

  const [value, setValue] = useState(0);
  const [valueUsdt, setValueUsdt] = useState(0);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    setValueUsdt(newValue * data.token_price);
  };
  const getBackgroundStyle = () => {
    const percentage = (value / data.total_tokens) * 100;
    return {
      background: `linear-gradient(
        to right,
       rgba(190, 255, 107, 1)${percentage}%,  /* Левая часть */
       rgba(123, 189, 39, 0.11) ${percentage}%       /* Правая часть */
      )`,
    };
  };
  const soldTokens =
    ((data.total_tokens - data.tokens_available) * 100) / data.total_tokens;

  const formik = useFormik({
    initialValues: {
      amount: "",
    },
    validationSchema: Yup.object({
      amount: Yup.string()
        // .matches(/^\d+$/, "")
        .required()
        .test(
          "max-amount",
          "Amount exceeds the maximum allowed",
          function (value) {
            const sum = data.token_price * data.tokens_available;
            return value ? parseFloat(value) <= sum : false;
          }
        ),
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsLoading((prevState) => !prevState);
      try {
        if (data.id) {
          const val = Number(values.amount) * Math.pow(10, 18);
          console.log("val is:" + val);
          const nft = await manageNftApi.getNft(data.id);
          await smarts?.realEstate.approve(
            smarts.marketplace.SMART_ADDRESS,
            `${val}`
          );
          console.log("id: " + data.id);
          console.log("amount: " + values.amount);
          const b = smarts?.marketplace.buyNFT(
            data.id,
            `${values.amount}`,
            "0xc3460e1dda5b67fb7d6d1f62516f73c0c14026cc"
          );

          smarts?.realEstate
            .balanceOf(address!)
            .then((res) => setPayableBalance(res));

          console.log(nft);
          // console.log("smart buy");

          console.log(b);
          resetForm();
        }
        const r = await smarts?.marketplace.NFT();
        console.log("nft is: " + r);
        console.log(r);
      } catch (err) {
        alert("Buy shares is failed");
        console.log(err);
      }
      setIsLoading(false);
    },
  });

  // const onClickBuy = async () => {
  //   if (buyOption === "ETH" && Number(buyAmount) < 0.001) {
  //     alert("Min ETH buy amount is 0.001");
  //   } else {
  //     setIsLoading((prevState) => !prevState);

  //     try {
  //
  //         await smarts?.usdt.approve(smarts?.sale.SMART_ADDRESS, buyAmount);

  //         await smarts?.sale.buyTokensBuyUSDT(buyAmount);

  //         orderCRMAPI
  //           .order({
  //             buyAmount: Number(buyAmount),
  //             usdAmount: Number(buyAmount),
  //             address,
  //           })
  //           .then(console.log)
  //           .catch(console.error);

  //         smarts?.usdt
  //           .balanceOf(address!)
  //           .then((res) => setPayableBalance(res));
  //

  //       dispatch(refresh());
  //       setIsOpenCongrats(true);

  //
  //     } catch (e) {
  //       console.error(e);
  //       if (isError(e, "INSUFFICIENT_FUNDS")) {
  //         alert("Make sure you have enough funds for the transaction!");
  //       } else {
  //         alert("Something went wrong try again later!");
  //       }
  //     }

  //     setIsLoading(false);
  //   }
  // };

  return (
    <form className={s.main} onSubmit={formik.handleSubmit}>
      <BalanceInfo />
      <div className={s.form}>
        <div className={s.inputWrap}>
          <h1 className={s.main__heading}>Amount</h1>
          <Input
            name="amount"
            placeholder="0"
            value={formik.values.amount}
            onChange={formik.handleChange}
            style={{
              border:
                formik.touched.amount && formik.errors.amount
                  ? "1px solid red"
                  : "",
            }}
          >
            <p className={s.input__text}>MAX</p>
          </Input>
        </div>
        <div className={s.wrap}>
          <div className={s.sliderWrap}>
            <div className={s.slider}>
              <output
                className={s.output1}
                htmlFor="tokens"
                id="volume"
                style={{
                  left: `${getOutputPosition()}px`,
                  transform: `${
                    value == 0 ? "translateX(0%)" : " translateX(-50%)"
                  }`,
                }}
              >
                {value}
              </output>
              <input
                type="range"
                id={s.tokens}
                min="0"
                max={data ? data.total_tokens : ""}
                value={value}
                onChange={handleChange}
                step={"1"}
                style={getBackgroundStyle()}
              />
              <p className={s.label}>shares</p>
            </div>
            <div className={s.slider}>
              <output
                className={s.output2}
                htmlFor="usdt"
                id="volume2"
                style={{
                  left: ` ${getOutputPosition()}px`,
                  transform: `${
                    valueUsdt == 0 ? "translateX(0%)" : " translateX(-50%)"
                  }`,
                }}
              >
                {valueUsdt}
              </output>
              <input
                type="range"
                id={s.usdt}
                min="0"
                max={data ? data.token_price * data.total_tokens : ""}
                value={valueUsdt}
                onChange={handleChange}
                step={"1"}
                style={getBackgroundStyle()}
                disabled
              />
              <p className={s.label}>USDT</p>
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className={`${s.main__button} ${
          soldTokens == 100 || (!auth.isAuthorized && s.notAllow)
        }`}
        disabled={soldTokens === 100 || !auth.isAuthorized}
      >
        {isLoading ? <span className={s.loader} /> : `BUY SHARES`}
      </button>
    </form>
  );
};
