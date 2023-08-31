import type { RouteProp as NRouteProp } from "@react-navigation/native";
import { AuthStackParamList } from "./auth-navigator";
import { TabParamList } from "./tab-navigator";

export type RootStackParamList = AuthStackParamList & TabParamList; //  & FooStackParamList & BarStackParamList
// very important to type check useNavigation hook
declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

export type RouteProp<T extends keyof RootStackParamList> = NRouteProp<RootStackParamList, T>;
