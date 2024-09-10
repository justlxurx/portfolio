import s from "./CreateNewProp.module.scss";
import { Logo } from "../../../assets/icons/logo";
import Input from "../../../features/Input2/Input";
import info from "../../../assets/icons/info.svg";
import home from "../../../assets/icons/home.svg";
import dollar from "../../../assets/icons/dollar2.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import UploadImg from "../../../features/UploadImg/UploadImg";
import { Link } from "react-router-dom";
import { property, initVal } from "./data";
import { managePropertyApi } from "../../../api/property/manageProperty";
import { useNavigate } from "react-router-dom";
import type { UploadFile, UploadProps } from "antd";
import { manageImgApi } from "../../../api/property/manageImg";
import { characacteristicsApi } from "../../../api/property/manageCharacteristics";
import type { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { manageNftApi } from "../../../api/nft/manageNft";

type Apartment = {
  charName: string;
  charVal: string;
};

export const CreateNewProp = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [propertyId, setPropertyId] = useState<number>(0);
  const navigate = useNavigate();
  const [nft, setNft] = useState(0);
  const [apartNum, setApartNum] = useState(0);
  const [characteristic, setCharacteristic] = useState<Apartment[]>([
    { charName: "", charVal: "" },
  ]);

  const [mainImg, setMainImg] = useState("");

  const handleIssueNFT = async () => {
    event?.preventDefault();
    const total =
      Number(formik.values.nftQuantity) * Number(formik.values.nftPrice);
    setNft(total);
  };

  // add new inputs for characteristics
  const addNew = () => {
    event?.preventDefault();
    setApartNum(apartNum + 1);
    setCharacteristic([...characteristic, { charName: "", charVal: "" }]);
  };

  const formik = useFormik({
    initialValues: initVal,
    validationSchema: Yup.object({
      name: Yup.string()
        // .matches(/^[A-Za-zА-Яа-яЁё]+$/, ``)
        .required(`Name is required`),
      location: Yup.string()
        // .matches(/^(\d{1}-\d{3}-\d{3}-\d{2}-\d{2})$/, "")
        .required("Location is required"),
      investment: Yup.string().required(`Investment Appeal is required`),
      aboutProperty: Yup.string().required("About the Property is required"),
      price: Yup.number().required("required"),
      rentalReturn: Yup.string().required("equired"),
      capitalAprec: Yup.string().required("required"),
      nftQuantity: Yup.string().required("required"),
      nftPrice: Yup.number().required("required"),
      beds: Yup.number().required("required"),
      bath: Yup.number().required("required"),
      rooms: Yup.number().required("required"),
      kitchen: Yup.number().required("required"),
      livingRooms: Yup.number().required("required"),
      terrace: Yup.number().required("required"),
      balcon: Yup.number().required("required"),
      garage: Yup.number().required("required"),
      size: Yup.string().required("required"),
      type: Yup.string().required("required"),
    }),
    onSubmit: async (values) => {
      event?.preventDefault();

      const formattedValues = {
        token_price: Number(values.nftPrice),
        tokens_available: Number(values.nftQuantity),
        total_tokens: Number(values.nftQuantity),

        balconies: Number(values.balcon),
        bathrooms: Number(values.bath),
        bedrooms: Number(values.beds),
        garages: Number(values.garage),
        kitchens: Number(values.kitchen),
        living_rooms: Number(values.livingRooms),
        terraces: Number(values.terrace),
        total_rooms: Number(values.rooms),

        property_area: Number(values.size),
        property_type: values.type,

        description: values.aboutProperty,
        location: values.location,
        name: values.name,

        // construction_status: "",
        expected_apr: 0,
        expected_irr: 0,
        // is_on_secondary_market: true,
        // leasehold_years: 0,
        main_image_url: mainImg,
        // occupation_status: "",
        // land_area: 0,
        // land_type: "",
        // rent_start_date: "",
        // completion_date: "",
        completion_date: new Date().toISOString(),
        rent_start_date: new Date().toISOString(),
      };

      try {
        const result = await managePropertyApi.create(formattedValues);
        setPropertyId(result.id);

        alert("Property created successfully");
        setTimeout(() => navigate("/admin/properties"), 3000);
        console.log(result);
        console.log("result id:" + result.id);
      } catch (err) {
        console.error("Error when trying to create property:", err);
      }
    },
  });

  useEffect(() => {
    const fetchUploadImg = async () => {
      if (!propertyId) {
        console.warn("No property ID available for uploading images");
        return;
      }

      for (const file of fileList) {
        if (file.status !== "uploading") {
          try {
            const formData = new FormData();
            formData.append("file", file.originFileObj as Blob);

            await manageImgApi.uploadImg(propertyId, formData);
            await manageNftApi.mintNft(propertyId, formData);

            console.log("Image uploaded successfully");
          } catch (error) {
            console.error("Image upload failed", error);
          }
        }
      }
    };
    fetchUploadImg();
  }, [propertyId]);

  useEffect(() => {
    const fetchCharac = async () => {
      try {
        for (const char of characteristic) {
          const values = {
            name: char.charName,
            value: char.charVal,
          };
          const res = await characacteristicsApi.create(propertyId, values);
          console.log("charac: " + res);
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (propertyId) {
      fetchCharac();
    }
  }, [propertyId, characteristic]);

  const handleInputChange = (
    index: number,
    field: "charName" | "charVal",
    value: string
  ) => {
    const newApartments = [...characteristic];
    newApartments[index][field] = value;
    setCharacteristic(newApartments);
  };

  //file upload functions
  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList.length > 0) {
      const latestFile = newFileList[newFileList.length - 1].originFileObj;
      if (latestFile) {
        const fileUrl = URL.createObjectURL(latestFile);
        setMainImg(fileUrl);
      }
    }
  };

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setFileList((prev) => {
        const activeIndex = prev.findIndex((i) => i.uid === active.id);
        const overIndex = prev.findIndex((i) => i.uid === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };

  return (
    <div className={s.main}>
      <div className={s.logo}>
        <Logo color="rgba(24, 39, 67, 1)" />
      </div>
      <div className={s.main__content}>
        <h1 className={s.main__title}>Create new property</h1>
        <form className={s.mainForm} onSubmit={formik.handleSubmit}>
          <div>
            <Input
              value={formik.values.name}
              title="Name"
              placeholder="Name of the property"
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color="black"
              inputColor="rgba(29, 29, 29, 0.35)"
              className={s.mainForm__input}
            />
            {formik.errors.name && formik.touched.name && (
              <p className={s.error}>{formik.errors.name}</p>
            )}
          </div>
          <div>
            <Input
              value={formik.values.location}
              className={s.mainForm__input}
              inputColor="rgba(29, 29, 29, 0.35)"
              color="black"
              title="Location"
              placeholder="Choose location"
              type="text"
              name="location"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.location && formik.touched.location && (
              <p className={s.error}>{formik.errors.location}</p>
            )}
          </div>

          <div className={s.apartmentWrap}>
            <div className={s.apartment}>
              <img src={info} alt="info" className={s.apartment__img} />
              <p className={s.apartment__text}>About apartments</p>
            </div>

            <div className={s.apartment__info}>
              <div className={s.propertyWrap}>
                {property.map((item, index) => (
                  <div className={s.property} key={index}>
                    <p className={s.property__text}>{item.label}</p>
                    <input
                      style={{
                        borderColor:
                          formik.errors[
                            item.name as keyof typeof formik.errors
                          ] || ""
                            ? "red"
                            : "",
                      }}
                      className={s.property__input}
                      type="text"
                      value={
                        formik.values[
                          item.name as keyof typeof formik.values
                        ] || ""
                      }
                      onChange={formik.handleChange}
                      name={item.name}
                    />
                  </div>
                ))}
              </div>

              <div className={s.propertyWrap}>
                <div className={s.property}>
                  <p className={s.property__text}>
                    Size of the apartment (m²):
                  </p>
                  <input
                    name="size"
                    className={s.property__input}
                    type="text"
                    value={formik.values.size}
                    style={{
                      borderColor:
                        formik.touched.size && formik.errors.size ? "red" : "",
                    }}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className={s.property}>
                  <p className={s.property__text}>Type of the apartment:</p>
                  <input
                    name="type"
                    onChange={formik.handleChange}
                    className={s.property__input}
                    type="text"
                    value={formik.values.type}
                    style={{
                      borderColor:
                        formik.touched.type && formik.errors.type ? "red" : "",
                      width: "127px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={s.apartmentWrap}>
            <div className={s.apartment}>
              <img src={home} alt="home" className={s.apartment__img} />
              <p className={s.apartment__text}>About the Property</p>
            </div>
            <div className={s.apartment__info}>
              <textarea
                name="aboutProperty"
                id="property"
                placeholder="Text area "
                rows={5}
                className={s.area}
                value={formik.values.aboutProperty}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
            {formik.errors.aboutProperty && formik.touched.aboutProperty && (
              <p className={s.error}>{formik.errors.aboutProperty}</p>
            )}
          </div>

          <div className={s.apartmentWrap}>
            <div className={s.apartment}>
              <img src={dollar} alt="dollar" className={s.apartment__img} />
              <p className={s.apartment__text}>Investment Appeal</p>
            </div>
            <div className={s.apartment__info}>
              <textarea
                onChange={formik.handleChange}
                className={s.area}
                name="investment"
                id="property"
                placeholder="Text area "
                rows={5}
                value={formik.values.investment}
              ></textarea>
            </div>
            {formik.errors.investment && formik.touched.investment && (
              <p className={s.error}>{formik.errors.investment}</p>
            )}
          </div>

          {Array.from({ length: apartNum }).map((_, a) => (
            <div key={a} className={s.apartmentWrap}>
              <Input
                className={s.mainForm__input2}
                title="Title"
                placeholder="Title"
                type="text"
                name={`charName-${a}`}
                onChange={(e) =>
                  handleInputChange(a, "charName", e.target.value)
                }
                color="black"
                inputColor="rgba(29, 29, 29, 0.35)"
                value={characteristic[a].charName}
              />
              <p className={s.apartment__text}>Text</p>
              <div className={s.apartment__info}>
                <textarea
                  className={s.area}
                  name={`charVal-${a}`}
                  id="property"
                  placeholder="Text area"
                  rows={5}
                  onChange={(e) =>
                    handleInputChange(a, "charVal", e.target.value)
                  }
                  value={characteristic[a].charVal}
                ></textarea>
              </div>
            </div>
          ))}

          <button className={s.addApartment} onClick={addNew}>
            + Add new characteristics
          </button>

          <div className={s.percents}>
            <Input
              title="Price in USDT:"
              placeholder="Enter the price"
              type="text"
              name="price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color="black"
              inputColor="rgba(29, 29, 29, 0.35)"
              className={s.mainForm__input}
              value={formik.values.price}
              borderColor={
                formik.touched.price && formik.errors.price ? "red" : ""
              }
            />

            <Input
              title="Estimated Rental Return:"
              placeholder="Enter %"
              type="text"
              name="rentalReturn"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color="black"
              inputColor="rgba(29, 29, 29, 0.35)"
              className={s.mainForm__input}
              value={formik.values.rentalReturn}
              borderColor={
                formik.touched.rentalReturn && formik.errors.rentalReturn
                  ? "red"
                  : ""
              }
            />

            <Input
              title="Estimated Capital Appreciation:"
              placeholder="Enter %"
              type="text"
              name="capitalAprec"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color="black"
              inputColor="rgba(29, 29, 29, 0.35)"
              className={s.mainForm__input}
              value={formik.values.capitalAprec}
              borderColor={
                formik.touched.capitalAprec && formik.errors.capitalAprec
                  ? "red"
                  : ""
              }
            />
          </div>

          <div className={s.nft}>
            <Input
              title="NFT Quantity:"
              placeholder="NFT Quantity"
              type="text"
              name="nftQuantity"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color="black"
              inputColor="rgba(29, 29, 29, 0.35)"
              className={s.mainForm__input}
              value={formik.values.nftQuantity}
              borderColor={
                formik.touched.nftQuantity && formik.errors.nftQuantity
                  ? "red"
                  : ""
              }
            />

            <Input
              title="NFT Price:"
              placeholder="NFT Price"
              type="text"
              name="nftPrice"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color="black"
              inputColor="rgba(29, 29, 29, 0.35)"
              className={s.mainForm__input}
              value={formik.values.nftPrice}
              borderColor={
                formik.touched.nftPrice && formik.errors.nftPrice ? "red" : ""
              }
            />
          </div>

          <button className={s.NFTButton} onClick={handleIssueNFT}>
            {nft === 0 ? "Issue NFT" : "Total nft:  " + nft}
          </button>

          <div className={s.uploadImg}>
            <UploadImg
              onChange={onChange}
              onDragEnd={onDragEnd}
              fileList={fileList}
            />
          </div>
          <div className={s.buttons}>
            <Link to="/admin/properties">
              <button className={s.buttons__cancel}>Cancel</button>
            </Link>
            <button className={s.buttons__create} type="submit">
              Create Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
