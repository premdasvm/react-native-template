import { createMutation } from "react-query-kit";
import { client } from "../common";
import { Auth } from "./types";
import { AxiosError } from "axios";

type Variables = { mobileNumber: string; password: string };
type Response = Auth;

export const useLogin = createMutation<Response, Variables, AxiosError>({
	mutationFn: async variables =>
		client({
			url: "v1/auth/login",
			method: "POST",
			data: variables,
		}).then(response => response.data),
});
