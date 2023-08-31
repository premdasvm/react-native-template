import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "@/ui/core";
import React from "react";

export const Settings = () => {
	const { navigate } = useNavigation();

	return (
		<View className="flex-1 items-center justify-center">
			<Text className="text-slate-800 text-xl">Settings</Text>
			<Button label="Go to Home" variant="primary" onPress={() => navigate("Home")} />
		</View>
	);
};
