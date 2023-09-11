import { Button, Text, View } from "@/ui/core";
import React from "react";
import { useAuth, useSelectedTheme } from "@/core";

export const Settings = () => {
	const signOut = useAuth.use.signOut();

	const { selectedTheme, setSelectedTheme } = useSelectedTheme();

	const handleToggleTheme = () => {
		console.log("Toggle Theme Pressed");
		setSelectedTheme(selectedTheme === "dark" ? "light" : "dark");
	};

	return (
		<View className="flex-1 items-center justify-center">
			<Text className="text-slate-800 text-xl">Settings</Text>
			<Button label="Logout" variant="primary" onPress={signOut} />
			<Button label="Toggle Theme" variant="primary" onPress={handleToggleTheme} />
		</View>
	);
};
