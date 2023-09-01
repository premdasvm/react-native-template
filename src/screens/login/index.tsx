import React from "react";
import { LoginForm, LoginFormProps } from "./login-form";
import { useSoftKeyboardEffect } from "@/core/keyboard";
import { FocusAwareStatusBar } from "@/ui";
import { useAuth } from "@/core";
import { useLogin } from "@/api";

export const Login = () => {
	const signIn = useAuth.use.signIn();

	const { mutate: logIn, isLoading } = useLogin();

	useSoftKeyboardEffect();

	const onSubmit: LoginFormProps["onSubmit"] = data => {
		logIn(data, {
			onSuccess: ({ accessToken, refreshToken }) => {
				signIn({ access: accessToken, refresh: refreshToken });
			},
			onError: error => {
				console.log(error.response?.data);

				//
			},
		});
	};

	return (
		<>
			<FocusAwareStatusBar />
			<LoginForm onSubmit={onSubmit} loading={isLoading} />
		</>
	);
};
