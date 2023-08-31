import "react-native-gesture-handler";

import React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootNavigator } from "@/navigation";

const App = () => {
	return (
		<GestureHandlerRootView style={styles.container}>
			<RootNavigator />
		</GestureHandlerRootView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default App;