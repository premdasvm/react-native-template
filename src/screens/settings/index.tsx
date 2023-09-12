import { Button, Text, View, useModalRef } from "@/ui";
import React from "react";
import { ColorSchemeType, useAuth, useSelectedTheme } from "@/core";
import type { Option } from "@/ui";
import { Options } from "@/ui";

export const Settings = () => {
	const signOut = useAuth.use.signOut();

	const { selectedTheme, setSelectedTheme } = useSelectedTheme();

	const optionRef = useModalRef();

	const themes = React.useMemo(
		() => [
			{ label: `Dark 🌙`, value: "dark" },
			{ label: `Light 🌞`, value: "light" },
			{ label: `System ⚙️`, value: "system" },
		],
		[],
	);

	const onSelect = React.useCallback(
		(option: Option) => {
			setSelectedTheme(option.value as ColorSchemeType);
			optionRef.current?.dismiss();
		},
		[selectedTheme, optionRef],
	);

	const theme = React.useMemo(
		() => themes.find(t => t.value === selectedTheme),
		[selectedTheme, themes],
	);

	const handleModal = React.useCallback(() => optionRef.current?.present(), [optionRef]);

	return (
		<View className="flex-1 items-center justify-center">
			<Text className="text-slate-800 text-xl">Settings</Text>
			<Button label="Logout" variant="primary" onPress={signOut} />
			<Button label="Change Theme" variant="primary" onPress={handleModal} />
			<Options ref={optionRef} options={themes} onSelect={onSelect} value={theme?.value} />
		</View>
	);
};
