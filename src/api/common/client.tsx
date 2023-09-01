import axios from "axios";
export const client = axios.create({
	baseURL: "http://152.67.183.110:3000/",
});

export const setHeaderToken = (accessToken: string) => {
	client.defaults.headers.common["Authorization"] = accessToken;
};
