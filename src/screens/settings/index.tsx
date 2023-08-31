import { Button, Text, View } from "@/ui/core";
import React from "react";
import { useAuth } from "@/core";

export const Settings = () => {
	const signOut = useAuth.use.signOut();

	return (
		<View className="flex-1 items-center justify-center">
			<Text className="text-slate-800 text-xl">Settings</Text>
			<Button label="Logout" variant="primary" onPress={signOut} />
		</View>
	);
};
