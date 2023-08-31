import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "@/ui/core";
import React from "react";

export const Home = () => {
	const { navigate } = useNavigation();

	return (
		<View className="flex-1 items-center justify-center">
			<Text className="text-slate-800 text-xl">Home</Text>
			<Button label="Go to Settings" variant="primary" onPress={() => navigate("Settings")} />
		</View>
	);
};
