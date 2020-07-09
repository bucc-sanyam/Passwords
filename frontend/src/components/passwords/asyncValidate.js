import { axiosInstance } from "../../network";
import { APIMethods } from "../../constants";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const asyncValidate = (values /*, dispatch */) => {
  return sleep(1000).then(async () => {
    const email = values.email;
    const response = await axiosInstance.get("passwords/", {
      method: APIMethods.GET,
      params: { email },
    });
    if (response.data) {
      // eslint-disable-next-line no-throw-literal
      throw { email: "Email already Exists" };
    }
  });
};

export default asyncValidate;
