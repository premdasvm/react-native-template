import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ComponentType } from "react";

import { Home, Settings } from "@/screens";

export type TabParamList = {
	Home: undefined;
	Settings: undefined;
};

type TabType = {
	name: keyof TabParamList;
	component: ComponentType<any>;
	label: string;
};

const tabs: TabType[] = [
	{
		name: "Home",
		component: Home,
		label: "Home",
	},
	{
		name: "Settings",
		component: Settings,
		label: "Settings",
	},
];

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Group>
				{tabs.map(({ name, component, label }) => {
					return (
						<Tab.Screen
							key={name}
							name={name}
							component={component}
							options={{
								title: label,
								tabBarTestID: `${name}-tab`,
							}}
						/>
					);
				})}
			</Tab.Group>
		</Tab.Navigator>
	);
};
