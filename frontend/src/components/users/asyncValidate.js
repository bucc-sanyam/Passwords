import passwords from "../../network";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const asyncValidate = async (values /*, dispatch */) => {
  return sleep(1000).then(async () => {
    const website = values.website;
    const response = await passwords.get("passwords/", {
      method: "GET",
      params: { website },
    });
    if (response.includes(values.email)) {
      // eslint-disable-next-line no-throw-literal
      throw { email: "Email already Exists" };
    }
  });
};

export default asyncValidate;
