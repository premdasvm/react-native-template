import { create } from "zustand";
import { TokenType, getToken, removeToken, setToken } from "./utils";
import { createSelectors } from "../utils";
import { setHeaderToken } from "@/api";

interface AuthState {
	token: TokenType | null;
	status: "idle" | "signOut" | "signIn";
	signIn: (data: TokenType) => void;
	signOut: () => void;
	hydrate: () => void;
}

const _useAuth = create<AuthState>((set, get) => ({
	status: "idle",
	token: null,
	signIn: token => {
		setToken(token);
		set({ status: "signIn", token });
		setHeaderToken(token.access);
	},
	signOut: () => {
		removeToken();
		set({ status: "signOut", token: null });
		setHeaderToken("");
	},
	hydrate: () => {
		try {
			const userToken = getToken();

			if (userToken !== null) {
				get().signIn(userToken);
			} else {
				get().signOut();
			}
		} catch (e) {
			// catch error here
			// Maybe sign_out user!
		}
	},
}));

export const useAuth = createSelectors(_useAuth);

export const signOut = () => _useAuth.getState().signOut();
export const signIn = (token: TokenType) => _useAuth.getState().signIn(token);
export const hydrateAuth = () => _useAuth.getState().hydrate();
