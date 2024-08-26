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
    },
    validationSchema: Yup.object({
      name: Yup.string()
        // .matches(/^[A-Za-zА-Яа-яЁё]+$/, ``)
        .required(`Password is required`),
      location: Yup.string()
        // .matches(/^(\d{1}-\d{3}-\d{3}-\d{2}-\d{2})$/, "")
        .required("Password is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = ""; //await submitForm(values);
        console.log(response);
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
      name: "Number of Beds:",
    },
    {
      name: "Number of Bath:",
    },
    {
      name: "Number of Rooms:",
    },
    {
      name: "Number of Kitchen:",
    },
    {
      name: "Number of LivingRooms:",
    },
    {
      name: "Number of Terraces:",
    },
    {
      name: "Number of Balconies:",
    },
    {
      name: "Number of Garages:",
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
        <form className={s.mainForm}>
          <Input
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
          <Input
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

          <div className={s.apartmentWrap}>
            <div className={s.apartment}>
              <img src={info} alt="info" className={s.apartment__img} />
              <p className={s.apartment__text}>About apartments</p>
            </div>

            <div className={s.apartment__info}>
              <div className={s.propertyWrap}>
                {property.map((item, index) => (
                  <div className={s.property} key={index}>
                    <p className={s.property__text}>{item.name}</p>
                    <input className={s.property__input} type="text" />
                  </div>
                ))}
              </div>

              <div className={s.propertyWrap}>
                <div className={s.property}>
                  <p className={s.property__text}>
                    Size of the apartment (m²):
                  </p>
                  <input className={s.property__input} type="text" />
                </div>
                <div className={s.property}>
                  <p className={s.property__text}>Type of the apartment:</p>
                  <input className={s.property__input} type="text" />
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
                name="property"
                id="property"
                placeholder="Text area "
                rows={5}
                className={s.area}
              ></textarea>
            </div>
          </div>

          <div className={s.apartmentWrap}>
            <div className={s.apartment}>
              <img src={dollar} alt="dollar" className={s.apartment__img} />
              <p className={s.apartment__text}>Investment Appeal</p>
            </div>
            <div className={s.apartment__info}>
              <textarea
                className={s.area}
                name="property"
                id="property"
                placeholder="Text area "
                rows={5}
              ></textarea>
            </div>
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
            />

            <Input
              title="Estimated Rental Return:"
              placeholder="Enter %"
              type="text"
              name="rental"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color="black"
              inputColor="rgba(29, 29, 29, 0.35)"
            />

            <Input
              title="Estimated Capital Appreciation:"
              placeholder="Enter %"
              type="text"
              name="capital"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color="black"
              inputColor="rgba(29, 29, 29, 0.35)"
            />
          </div>

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
