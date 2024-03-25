import { BASE_URL } from "@/constants";
import axios, { AxiosResponse } from "axios";

export async function getAccessToken(code?: string) {
  const response: AxiosResponse = await axios.post(
    "https://developers.teachable.com/v1/current_user/oauth2/token",
    {
      grant_type: "authorization_code",
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: BASE_URL,
      code: code,
    }
  );

  return response.data;
}
