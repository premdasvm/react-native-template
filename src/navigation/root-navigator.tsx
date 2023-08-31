import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthNavigator } from "./auth-navigator";
import { NavigationContainer } from "./navigation-container";
import { TabNavigator } from "./tab-navigator";

const Stack = createNativeStackNavigator();

export const Root = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				gestureEnabled: false,
				animation: "none",
			}}>
			{/* <Stack.Screen name="Auth" component={AuthNavigator} /> */}
			<Stack.Screen name="App" component={TabNavigator} />
		</Stack.Navigator>
	);
};

export const RootNavigator = () => {
	return (
		<NavigationContainer>
			<Root />
		</NavigationContainer>
	);
};
