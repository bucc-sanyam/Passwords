import { axiosInstance } from "../../network";
import { APIMethods } from "../../constants";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const asyncValidate = (values /*, dispatch */) => {
  return sleep(1000).then(async () => {
    const website = values.website;
    const response = await axiosInstance.get("websitecheck/", {
      method: APIMethods.GET,
      params: { website },
    });
    console.log("Response received is : ", response.data);
    if (response.data) {
      // eslint-disable-next-line no-throw-literal
      throw { email: "Website already Exists" };
    }
  });
};

export default asyncValidate;
