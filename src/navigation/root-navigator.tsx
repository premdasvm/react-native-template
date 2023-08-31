import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthNavigator } from "./auth-navigator";
import { NavigationContainer } from "./navigation-container";
import { TabNavigator } from "./tab-navigator";
import { useAuth } from "@/core";

const Stack = createNativeStackNavigator();

export const Root = () => {
	const status = useAuth.use.status();

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				gestureEnabled: false,
				animation: "none",
			}}>
			<Stack.Group>
				{status === "signOut" ? (
					<Stack.Screen name="Auth" component={AuthNavigator} />
				) : (
					<Stack.Screen name="App" component={TabNavigator} />
				)}
			</Stack.Group>
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
