import s from "./EditProperty.module.scss";
import { Logo } from "../../../assets/icons/logo";
import Input from "../../../features/Input2/Input";
import infoImg from "../../../assets/icons/info.svg";
import home from "../../../assets/icons/home.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import UploadImg from "../../../features/UploadImg/UploadImg";
import { Link } from "react-router-dom";
import { property } from "../CreateNewProp/data";
import { managePropertyApi } from "../../../api/property/manageProperty";
import { useNavigate } from "react-router-dom";
import type { UploadFile, UploadProps } from "antd";
import { manageImgApi } from "../../../api/property/manageImg";
import type { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useLocation } from "react-router-dom";
import { characacteristicsApi } from "../../../api/property/manageCharacteristics";
import { Apartment, Apartment2 } from "./interface";
import dollar from "../../../assets/icons/dollar2.svg";

interface CustomUploadFile extends UploadFile {
  imageId: number;
}

export const EditProp = () => {
  const [characacteristic, setCharacacteristic] = useState<Apartment[]>([]);
  const [addCharacacteristic, setAddCharacacteristic] = useState<Apartment2[]>(
    []
  );
  // const [apartments, setApartments] = useState<Apartment[]>([]);
  const location = useLocation().pathname;
  const parts = location.split("/");
  const id = Number(parts.pop() || "");
  const [fileList, setFileList] = useState<CustomUploadFile[]>([]);
  const navigate = useNavigate();
  const [nft, setNft] = useState(0);
  const [mainImg, setMainImg] = useState("");
  const [data, setData] = useState({});

  //fetch all data
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const data = await managePropertyApi.get(id);
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedData();
  }, [id]);

  // delete empty characteristics
  useEffect(() => {
    const deleteProp = async () => {
      try {
        for (const char of characacteristic) {
          if (
            char.characteristic_name == "" &&
            char.characteristic_value == ""
          ) {
            await characacteristicsApi.deleteOne(char.id);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    deleteProp();
  }, [characacteristic]);

  //fetch characteristic
  useEffect(() => {
    const fetchCharacteristic = async () => {
      try {
        const res = await characacteristicsApi.get(id);
        setCharacacteristic(res); // Заполняем массив apartments полученными данными
        console.log("Res: " + res);
      } catch (err) {
        console.log("Error when getting info :" + err);
      }
    };
    fetchCharacteristic();
  }, [id]);

  //fetch img
  useEffect(() => {
    const fetch = async () => {
      try {
        const a = await manageImgApi.getImg(id);
        if (a) {
          const newFileList = a.map((img: any) => ({
            name: img.image_url, // URL изображения
            imageId: img.id,
          }));

          setFileList(newFileList);
        }

        console.log("img are: ", a);
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, [id]);

  //give nft total sum
  const handleIssueNFT = async () => {
    event?.preventDefault();
    const total =
      Number(formik.values.nftQuantity) * Number(formik.values.nftPrice);
    setNft(total);
  };

  // add new characteristic button
  const addNew = () => {
    event?.preventDefault();
    const newCharact = {
      characteristic_name: "",
      characteristic_value: "",
    };

    // Добавляем новый объект в массив apartments и обновляем состояние
    setAddCharacacteristic([...addCharacacteristic, newCharact]);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: data.name,
      location: data.location,
      investment: "",
      aboutProperty: data.description,
      price: data.token_price,
      rentalReturn: "",
      capitalAprec: "",
      nftQuantity: data.tokens_available,
      nftPrice: data.token_price,
      beds: data.bedrooms,
      bath: data.bathrooms,
      rooms: data.total_rooms,
      kitchen: data.kitchens,
      livingRooms: data.living_rooms,
      terrace: data.terraces,
      balcon: data.balconies,
      garage: data.garages,
      size: data.property_area,
      type: data.property_type,
    },
    validationSchema: Yup.object({
      name: Yup.string().required(`Name is required`),
      location: Yup.string().required("Location is required"),
      // investment: Yup.string().required(`Investment Appeal is required`),
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
        const result = await managePropertyApi.update(id, formattedValues);
        const charact = await characacteristicsApi.update(characacteristic);

        for (const char of addCharacacteristic) {
          if (char.characteristic_name && char.characteristic_value) {
            const values = {
              name: char.characteristic_name,
              value: char.characteristic_value,
            };
            const res = await characacteristicsApi.create(id, values);
            console.log("charac: " + res);
          }
        }

        for (const file of fileList) {
          if (file.status !== "uploading") {
            try {
              const formData = new FormData();
              formData.append("file", file.originFileObj as Blob);
              await manageImgApi.uploadImg(id, formData);
              console.log("Image uploaded successfully");
              navigate("/admin/properties");
            } catch (error) {
              console.error("Image upload failed", error);
            }
          }
        }

        console.log(result);
        console.log(charact);
        alert("Property updated successfully");
      } catch (err) {
        console.error("Error when trying to create property:", err);
      }
    },
  });

  //for update input change
  const handleInputChange = (
    index: number,
    field: "characteristic_name" | "characteristic_value",
    value: string
  ) => {
    const newCharact = [...characacteristic];

    if (field === "characteristic_name") {
      newCharact[index].characteristic_name = value;
    } else if (field === "characteristic_value") {
      newCharact[index].characteristic_value = value;
    }

    setCharacacteristic(newCharact);
  };
  //for create input change
  const handleInputChange2 = (
    index: number,
    field: "characteristic_name" | "characteristic_value",
    value: string
  ) => {
    const newApartments = [...addCharacacteristic];
    newApartments[index][field] = value;
    setAddCharacacteristic(newApartments);
  };

  //for file change
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

  //remove img one to one
  const onRemove = async (file: CustomUploadFile) => {
    try {
      const imageId = file.imageId; // получаем `imageId` из файла
      if (imageId) {
        const response = await manageImgApi.delete(imageId); // вызываем API для удаления
        console.log("Remove action:", response);

        // Обновляем список после удаления
        setFileList((prevFileList) =>
          prevFileList.filter((f) => f.imageId !== imageId)
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={s.main}>
      <div className={s.logo}>
        <Logo color="rgba(24, 39, 67, 1)" />
      </div>
      <div className={s.main__content}>
        <h1 className={s.main__title}>Edit property</h1>
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
              <img src={infoImg} alt="info" className={s.apartment__img} />
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

          {characacteristic &&
            characacteristic.map((apartment, a) =>
              a == 0 ? (
                <div className={s.apartmentWrap}>
                  <div className={s.apartment}>
                    <img
                      src={dollar}
                      alt="dollar"
                      className={s.apartment__img}
                    />
                    <p className={s.apartment__text}>
                      {apartment.characteristic_name}
                    </p>
                  </div>
                  <div className={s.apartment__info}>
                    <textarea
                      className={s.area}
                      id="property"
                      placeholder="Text area "
                      rows={5}
                      name={`characteristic_value-${a}`}
                      onChange={(e) =>
                        handleInputChange(
                          a,
                          "characteristic_value",
                          e.target.value
                        )
                      }
                      value={apartment.characteristic_value}
                    ></textarea>
                  </div>
                </div>
              ) : (
                <div key={a} className={s.apartmentWrap}>
                  <Input
                    color="black"
                    className={s.mainForm__input2}
                    title="Title"
                    placeholder="Title"
                    type="text"
                    name={`characteristic_name-${a}`}
                    onChange={(e) =>
                      handleInputChange(
                        a,
                        "characteristic_name",
                        e.target.value
                      )
                    }
                    value={apartment.characteristic_name}
                  />
                  <p className={s.apartment__text}>Text</p>
                  <div className={s.apartment__info}>
                    <textarea
                      className={s.area}
                      name={`characteristic_value-${a}`}
                      id={`property-${a}`}
                      placeholder="Text area"
                      rows={5}
                      onChange={(e) =>
                        handleInputChange(
                          a,
                          "characteristic_value",
                          e.target.value
                        )
                      }
                      value={apartment.characteristic_value}
                    ></textarea>
                  </div>
                </div>
              )
            )}

          {addCharacacteristic &&
            addCharacacteristic.map((apartment, a) => (
              <div key={a} className={s.apartmentWrap}>
                <Input
                  color="black"
                  className={s.mainForm__input2}
                  title="Title"
                  placeholder="Title"
                  type="text"
                  name={`characteristic_name-${a}`}
                  onChange={
                    (e) =>
                      handleInputChange2(
                        a,
                        "characteristic_name",
                        e.target.value
                      ) // используем флаг для дополнительных
                  }
                  value={apartment.characteristic_name}
                />
                <p className={s.apartment__text}>Text</p>
                <div className={s.apartment__info}>
                  <textarea
                    className={s.area}
                    name={`characteristic_value-${a}`}
                    id={`property-${a}`}
                    placeholder="Text area"
                    rows={5}
                    onChange={
                      (e) =>
                        handleInputChange2(
                          a,
                          "characteristic_value",
                          e.target.value
                        ) // используем флаг для дополнительных
                    }
                    value={apartment.characteristic_value}
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
              // onChange={formik.handleChange}
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
              // onChange={formik.handleChange}
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
              onRemove={onRemove}
            />
          </div>
          <div className={s.buttons}>
            <Link to="/admin/properties">
              <button className={s.buttons__cancel}>Cancel</button>
            </Link>
            <button className={s.buttons__create} type="submit">
              Edit Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
