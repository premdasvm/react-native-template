import type { ConfigContext, ExpoConfig } from "@expo/config";
import { ClientEnv, Env } from "./env";

export default ({ config }: ConfigContext): ExpoConfig => ({
	...config,
	name: Env.NAME,
	description: `${Env.NAME} Mobile app`,
	owner: Env.EXPO_ACCOUNT_OWNER,
	slug: "rnapp",
	version: Env.VERSION.toString(),
	orientation: "portrait",
	icon: "./assets/icon.png",
	userInterfaceStyle: "automatic",
	splash: {
		image: "./assets/splash.png",
		resizeMode: "contain",
		backgroundColor: "#ffffff",
	},
	assetBundlePatterns: ["**/*"],
	ios: {
		supportsTablet: true,
		bundleIdentifier: Env.BUNDLE_ID,
	},
	android: {
		adaptiveIcon: {
			foregroundImage: "./assets/adaptive-icon.png",
			backgroundColor: "#ffffff",
		},
		package: Env.PACKAGE,
	},
	web: {
		favicon: "./assets/favicon.png",
	},
	plugins: [
		["@bacons/link-assets", ["./assets/fonts/Inter.ttf"]],
		[
			"expo-build-properties",
			{
				android: {
					compileSdkVersion: 33,
					targetSdkVersion: 33,
					buildToolsVersion: "33.0.0",
					kotlinVersion: "1.8.10",
				},
				ios: {
					deploymentTarget: "13.0",
				},
			},
		],
	],
	extra: {
		...ClientEnv,
		eas: {
			projectId: Env.EAS_PROJECT_ID,
		},
	},
});
