import { useAuth } from "@/core";
import { Button, Text, View } from "@/ui/core";
import React from "react";

export const Login = () => {
	const signIn = useAuth.use.signIn();

	const onSubmit = () => {
		signIn({ access: "access-token", refresh: "refresh-token" });
	};

	return (
		<View className="flex-1 items-center justify-center">
			<Text className="text-slate-800 text-xl">Login</Text>
			<Button label="Login" variant="primary" onPress={() => onSubmit()} />
		</View>
	);
};
