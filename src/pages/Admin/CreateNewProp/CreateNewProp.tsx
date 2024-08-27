import s from "./CreateNewProp.module.scss";
import { Logo } from "../../../assets/icons/logo";
import Input from "../../../features/Input2/Input";
import info from "../../../assets/icons/info.svg";
import home from "../../../assets/icons/home.svg";
import dollar from "../../../assets/icons/dollar.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import UploadImg from "../../../features/UploadImg/UploadImg";
import { Link } from "react-router-dom";

export const CreateNewProp = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      location: "",
      investment: "",
      aboutProperty: "",
      price: "",
      rentalReturn: "",
      capitalAprec: "",
      nftQuantity: "",
      nftPrice: "",
      beds: "",
      bath: "",
      rooms: "",
      kitchen: "",
      livingRooms: "",
      terrace: "",
      balcon: "",
      garage: "",
      size: "",
      type: "",
    },
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
    onSubmit: async (values, { resetForm }) => {
      event.preventDefault();
      try {
        const response = ""; //await submitForm(values);
        console.log(response);
        alert("Successfully created");
        // if (response.error) {
        //   console.error("Ошибка в ответе сервера:", response.error);
        // } else {
        //   resetForm();
        // }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });
  const [apartNum, setApartNum] = useState(0);

  const property = [
    {
      label: "Number of Beds:",
      value: formik.values.beds,
      error: formik.errors.beds,
      name: "beds",
    },
    {
      label: "Number of Bath:",
      value: formik.values.bath,
      error: formik.errors.bath,
      name: "bath",
    },
    {
      label: "Number of Rooms:",
      value: formik.values.rooms,
      error: formik.errors.rooms,
      name: "rooms",
    },
    {
      label: "Number of Kitchen:",
      value: formik.values.kitchen,
      error: formik.errors.kitchen,
      name: "kitchen",
    },
    {
      label: "Number of LivingRooms:",
      value: formik.values.livingRooms,
      error: formik.errors.livingRooms,
      name: "livingRooms",
    },
    {
      label: "Number of Terraces:",
      value: formik.values.terrace,
      error: formik.errors.terrace,
      name: "terrace",
    },
    {
      label: "Number of Balconies:",
      value: formik.values.balcon,
      error: formik.errors.balcon,
      name: "balcon",
    },
    {
      label: "Number of Garages:",
      value: formik.values.garage,
      error: formik.errors.garage,
      name: "garage",
    },
  ];

  const addNew = () => {
    event.preventDefault();
    setApartNum(apartNum + 1);
  };
  console.log(apartNum);
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
                        borderColor: item.error ? "red" : "",
                      }}
                      className={s.property__input}
                      type="text"
                      value={item.value}
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
                      borderColor: formik.errors.size ? "red" : "",
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
                      borderColor: formik.errors.type ? "red" : "",
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
            </div>{" "}
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
                name="title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                color="black"
                inputColor="rgba(29, 29, 29, 0.35)"
              />
              <p className={s.apartment__text}>Text</p>
              <div className={s.apartment__info}>
                <textarea
                  className={s.area}
                  name="property"
                  id="property"
                  placeholder="Text area"
                  rows={5}
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
              borderColor={formik.errors.price ? "red" : ""}
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
              borderColor={formik.errors.rentalReturn ? "red" : ""}
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
              borderColor={formik.errors.capitalAprec ? "red" : ""}
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
              borderColor={formik.errors.nftQuantity ? "red" : ""}
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
              borderColor={formik.errors.nftPrice ? "red" : ""}
            />
          </div>

          <button className={s.NFTButton}>Issue NFT</button>

          <div className={s.uploadImg}>
            <UploadImg />
          </div>
          <div className={s.buttons}>
            <Link to="/admin/properties">
              <button className={s.buttons__cancel}>Cancel</button>
            </Link>
            <button className={s.buttons__create}>Create Property</button>
          </div>
        </form>
      </div>
    </div>
  );
};
