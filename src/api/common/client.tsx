import axios from "axios";
import { Env } from "@env";
export const client = axios.create({
	baseURL: Env.API_URL,
});

export const setHeaderToken = (accessToken: string) => {
	client.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
};

export const removeHeader = () => {
	client.defaults.headers.common.Authorization = null;
};
