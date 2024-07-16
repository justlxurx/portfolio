export {
  shengenApi,
  useGetShengenInfoFromNameQuery,
  useGetShengenImagesQuery,
  useUpdateShengenZoneMutation,
  useSaveShengenZoneMutation
} from "./shengen";
export { visaApi, useGetAllVisaQuery } from "./visa";
export { formApi, useFormMutation } from "./form";
export { otherApi, useGetOtherCountryQuery, useGetCountryInfoFromNameQuery, useSaveCountryMutation, useUpdateCountryMutation } from "./other";
export { adminApi, useGetClientQuery, useDeleteUserMutation, useLoginMutation} from "./admin";
export { commentApi, useCreateCommentMutation,useGetCommentQuery} from './comments'
