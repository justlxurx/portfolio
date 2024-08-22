import { decode } from "js-base64";

const base64UrlDecode = (str: string) => {
  let newStr = str.replace(/-/g, "+").replace(/_/g, "/");

  const pad = newStr.length % 4;

  if (pad) {
    if (pad === 1) {
      throw new Error(
        "InvalidLengthError: Input base64url string is the wrong length to determine padding"
      );
    }
    newStr += new Array(5 - pad).join("=");
  }

  return decode(newStr);
};

export const parseJwt = (token: string) => {
  const parts = token.split(".");

  const payload = base64UrlDecode(parts[1]);

  const payloadObject = JSON.parse(payload);

  return payloadObject;
};
