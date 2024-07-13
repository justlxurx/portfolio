export { shengenSlice, setShengen, default as shengenReducer } from "./shengen";
export { otherSlice, setOther, default as otherReducer } from "./other";
export { visaSlice, setVisa, default as visaReducer } from "./visa";
export { sendFormSlice, sendForm, default as formReducer } from "./form";
// export { reviewSlice, setReview, default as reviewReducer } from "./review";
export {
  countrySlice,
  setCountry,
  setType,
  default as countryReducer,
} from "./country";

export { adminSlice, setClient, removeClient, filterClient, setSearchClient, default as adminReducer } from "./admin";

export {sendCommentSlice, setComment, addComment, rmComment, default as commentReducer} from './comments'
