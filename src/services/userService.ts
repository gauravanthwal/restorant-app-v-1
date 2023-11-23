import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1";

export const loginService = async (userInfo: any) => {
  try {
    const res = await axios.post(`${BASE_URL}/user/login`, userInfo);
    console.log(res);

    return res.data;
  } catch (err: any) {
    console.log(err.response.data.message);
  }
};
