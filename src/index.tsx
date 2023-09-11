import "react-native-gesture-handler";

import React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootNavigator } from "@/navigation";

import { hydrateAuth, loadSelectedTheme } from "@/core";
import { APIProvider } from "@/api";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import * as SplashScreen from "expo-splash-screen";

hydrateAuth();
loadSelectedTheme();
SplashScreen.preventAutoHideAsync();

const App = () => {
	return (
		<GestureHandlerRootView style={styles.container}>
			<BottomSheetModalProvider>
				<APIProvider>
					<RootNavigator />
				</APIProvider>
			</BottomSheetModalProvider>
		</GestureHandlerRootView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default App;
