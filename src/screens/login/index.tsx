import { useAuth } from "@/core";
import { Button, Input, Text, View } from "@/ui/core";
import React from "react";
import { LoginForm, LoginFormProps } from "./login-form";
import { useSoftKeyboardEffect } from "@/core/keyboard";
import { FocusAwareStatusBar } from "@/ui";

export const Login = () => {
	const signIn = useAuth.use.signIn();
	useSoftKeyboardEffect();

	const onSubmit: LoginFormProps["onSubmit"] = data => {
		console.log(data);

		signIn({ access: "access-token", refresh: "refresh-token" });
	};

	return (
		<>
			<FocusAwareStatusBar />
			<LoginForm onSubmit={onSubmit} />
		</>
	);
};
