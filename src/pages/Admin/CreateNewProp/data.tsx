export const property = [
  {
    label: "Number of Beds:",
    name: "beds",
    value: "formik.values.beds",
    error: "formik.errors.beds",
  },
  {
    label: "Number of Bath:",
    name: "bath",
    value: "formik.values.bath",
    error: "formik.errors.bath",
  },
  {
    label: "Number of Rooms:",
    name: "rooms",
    value: "formik.values.rooms",
    error: "formik.errors.rooms",
  },
  {
    label: "Number of Kitchen:",
    name: "kitchen",
    value: "formik.values.kitchen",
    error: "formik.errors.kitchen",
  },
  {
    label: "Number of LivingRooms:",
    name: "livingRooms",
    value: "formik.values.livingRooms",
    error: "formik.errors.livingRooms",
  },
  {
    label: "Number of Terraces:",
    name: "terrace",
    value: "formik.values.terrace",
    error: "formik.errors.terrace",
  },
  {
    label: "Number of Balconies:",
    name: "balcon",
    value: "formik.values.balcon",
    error: "formik.errors.balcon",
  },
  {
    label: "Number of Garages:",
    name: "garage",
    value: "formik.values.garage",
    error: "formik.errors.garage",
  },
];

export const initVal = {
  name: "",
  location: "",
  investment: "",
  aboutProperty: "",
  price: "",
  nftQuantity: "",
  nftPrice: "",
  beds: 0,
  bath: 0,
  rooms: 0,
  kitchen: 0,
  livingRooms: 0,
  terrace: 0,
  balcon: 0,
  garage: 0,
  size: 0,
  type: "",
  characteristic_name: "",
  characteristic_value: "",
  estimated_capital_appreciation: 0,
  estimated_rental_return: 0,
};

export type Apartment = {
  characteristic_name: string;
  characteristic_value: string;
};
