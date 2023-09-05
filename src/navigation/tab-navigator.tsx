import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ComponentType } from "react";

import { SvgProps } from "react-native-svg";

import { Home, Settings } from "@/screens";
import { colors, Home as HomeIcon, Settings as SettingsIcon } from "@/ui";
import { useColorScheme } from "nativewind";

export type TabParamList = {
	Home: undefined;
	Settings: undefined;
};

type TabType = {
	name: keyof TabParamList;
	component: ComponentType<any>;
	label: string;
};

type TabIconsType = {
	[key in keyof TabParamList]: (props: SvgProps) => JSX.Element;
};

const tabsIcons: TabIconsType = {
	Home: (props: SvgProps) => <HomeIcon {...props} />,
	Settings: (props: SvgProps) => <SettingsIcon {...props} />,
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

const Tab = createBottomTabNavigator<TabParamList>();

type BarIconType = {
	name: keyof TabParamList;
	color: string;
};

const BarIcon = ({ color, name, ...reset }: BarIconType) => {
	const Icon = tabsIcons[name];
	return <Icon color={color} {...reset} />;
};

export const TabNavigator = () => {
	const { colorScheme } = useColorScheme();
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarInactiveTintColor:
					colorScheme === "dark" ? colors.charcoal[400] : colors.neutral[400],
				// eslint-disable-next-line react/no-unstable-nested-components
				tabBarIcon: ({ color }) => <BarIcon name={route.name} color={color} />,
			})}>
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
