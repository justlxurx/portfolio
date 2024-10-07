import s from "./MainTable.module.scss";
import edit from "../../../../assets/icons/edit.svg";
import trash from "../../../../assets/icons/trash.svg";
import { formatDate } from "../../../../utils/formatData";
import { DistributeRewards } from "../DistributeRewards/DistributeRewards";
import { useState } from "react";
import { Gift } from "../../../../assets/icons/gift";
import { Link } from "react-router-dom";
import { manageImgApi } from "../../../../api/property/manageImg";
import { manageNftApi } from "../../../../api/nft/manageNft";
import { useCallback } from "react";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import { ethers } from "ethers";
import { useSmarts } from "../../../../hooks/useSmart";

interface Property {
  id: number;
  name: string;
  location: string;
  token_price: number;
  rental: string;
  capital: string;
  created_at: string;
}

interface MainTableProps {
  properties: Property[];
  deleteProp: (id: number) => void;
  openDistributeRew: () => void;
}

export const MainTable = ({
  properties,
  deleteProp,
}: // openDistributeRew,
MainTableProps) => {
  const { smarts } = useSmarts();
  const { walletProvider } = useWeb3ModalProvider();
  const [status, setStatus] = useState<"not distributed" | "distributed">(
    "not distributed"
  );
  const [openDistributeRew, setOpenDistributeRew] = useState(false);
  const [id, setId] = useState(0);
  const [img, setImg] = useState("");

  const signTransaction = useCallback(
    async (txData: any): Promise<string | null> => {
      try {
        const web3Provider = new ethers.BrowserProvider(walletProvider!);
        const signer = web3Provider.getSigner();

        const tx = {
          to: txData.to,
          nonce: parseInt(txData.nonce, 16),
          gasLimit: txData.gas,
          gasPrice: txData.gasPrice,
          data: txData.input,
          value: txData.value,
          chainId: await web3Provider
            .getNetwork()
            .then((network) => network.chainId),
        };

        const transactionResponse = await (await signer).sendTransaction(tx);

        console.log("Transaction sent:", transactionResponse);
        console.log(transactionResponse);

        return transactionResponse.hash; // Возвращаем хэш транзакции
      } catch (error) {
        console.error("Error signing transaction:", error);
        return null;
      }
    },
    [walletProvider]
  );

  const handleOpenModal = async (num: number, num2: number) => {
    setOpenDistributeRew(true);
    setId(num);
    if (num2) {
      try {
        const img = await manageImgApi.getImg(num2);
        setImg(img[0].image_url);
      } catch (err) {
        console.log(err);
        setImg("");
      }
    }
  };

  const handleSetOffer = async (num: number) => {
    try {
      const approve = await manageNftApi.approve(num);

      console.log("approve: ");
      console.log(approve);

      if (approve) {
        const jsonData = atob(approve);
        const txData = JSON.parse(jsonData);

        const signature = await signTransaction(txData);
        console.log("signature: ", signature);

        if (signature) {
          const formData = new FormData();
          formData.append("tx_hex", signature);

          const provider = new ethers.BrowserProvider(walletProvider!);

          // Ожидаем подтверждения транзакции
          let receipt = null;
          while (!receipt) {
            console.log("Ожидание квитанции о транзакции...");
            receipt = await provider.getTransactionReceipt(signature);

            if (receipt) {
              console.log("Квитанция о транзакции:", receipt);
            } else {
              await new Promise((resolve) => setTimeout(resolve, 5000)); // Ждем 5 секунд перед повторной проверкой
            }
          }

          // Теперь транзакция подтверждена, и можно отправлять данные
          const approveVerify = await manageNftApi.approveVerify(num, formData);
          console.log("Результат отправки sendMint:", approveVerify);
          // while(!approveVerify)

          const setOffer = await manageNftApi.setOffer(num);

          console.log("setOffer: ");
          console.log(setOffer);

          if (setOffer) {
            const jsonData = atob(setOffer);
            const txData = JSON.parse(jsonData);

            const tx = await signTransaction(txData);
            console.log("tx: ", tx);

            if (tx) {
              const formData = new FormData();
              formData.append("tx_hex", tx);

              const provider = new ethers.BrowserProvider(walletProvider!);

              // Ожидаем подтверждения транзакции
              let receipt = null;
              while (!receipt) {
                console.log("Ожидание квитанции о транзакции...");
                receipt = await provider.getTransactionReceipt(tx);

                if (receipt) {
                  console.log("Квитанция о транзакции:", receipt);
                } else {
                  await new Promise((resolve) => setTimeout(resolve, 5000)); // Ждем 5 секунд перед повторной проверкой
                }
              }

              // Теперь транзакция подтверждена, и можно отправлять данные
              const setOfferVerify = await manageNftApi.setOfferVerify(
                num,
                formData
              );
              console.log("Результат отправки sendMint:", setOfferVerify);
            }
          }
        }
      }
      // await smarts?.nft.setApprovalForAll(
      //   smarts.marketplace.SMART_ADDRESS,
      //   true
      // );
    } catch (err) {
      console.log(err);
      setImg("");
    }
  };

  return (
    <div className={s.tableWrap}>
      <table className={s.usersTable}>
        <thead>
          <tr className={s.usersTable__headRow}>
            <th className={s.firstColumnItem}>Name</th>
            <th>Location</th>
            <th>Price</th>
            <th>
              Date of <br /> publication
            </th>
            <th>Set offer</th>
            <th>
              Distribute <br /> rewards
            </th>
            <th>Manage</th>
            <th>
              Dividend <br /> date
            </th>
            <th>
              Dividend <br /> status
            </th>
          </tr>
        </thead>
        <tbody>
          {properties !== null &&
            properties.map((data, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: `${
                    index % 2 === 0 ? "rgba(239, 239, 239, 1)" : "white"
                  }`,
                }}
              >
                <td className={s.firstColumnItem}>{data.name}</td>
                <td>{data.location}</td>
                <td>{data.token_price} $</td>
                <td>{formatDate(data.created_at)}</td>
                <td>
                  <button onClick={() => handleSetOffer(data.id)}>
                    set offer
                  </button>
                </td>
                <td>
                  <button
                    className={s.giftButton}
                    onClick={() => handleOpenModal(index, data.id)}
                  >
                    <Gift />
                  </button>
                </td>
                <td>
                  <div className={s.buttons}>
                    <Link to={`/admin/properties/update/${data.id}`}>
                      <button className={s.manageButton}>
                        Edit <img src={edit} alt="edit" />
                      </button>
                    </Link>
                    <button
                      className={s.manageButton}
                      onClick={() => deleteProp(data.id)}
                    >
                      Delete <img src={trash} alt="trash" />
                    </button>
                  </div>
                </td>
                <td>01/01/2024</td>
                <td
                  style={{
                    color:
                      status == "not distributed"
                        ? "rgba(204, 112, 92, 1)"
                        : "rgba(94, 165, 3, 1)",
                  }}
                >
                  {status}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {openDistributeRew && (
        <DistributeRewards
          closeModal={() => setOpenDistributeRew(false)}
          title={`${properties[id].name}`}
          img={img ? `https://minio.hotcode.kz/${img}` : ""}
        />
      )}
    </div>
  );
};
