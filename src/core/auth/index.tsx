import { create } from "zustand";
import { TokenType } from "./utils";
import { createSelectors } from "../utils";

interface AuthState {
	token: TokenType | null;
	status: "idle" | "signOut" | "signIn";
	signIn: (data: TokenType) => void;
	signOut: () => void;
	hydrate: () => void;
}

const _useAuth = create<AuthState>((set, get) => ({
	status: "signOut",
	token: null,
	signIn: token => {
		set({ status: "signIn", token });
	},
	signOut: () => {
		set({ status: "signOut", token: null });
	},
	hydrate: () => {
		//  Implement Later
	},
}));

export const useAuth = createSelectors(_useAuth);

export const signOut = () => _useAuth.getState().signOut();
export const signIn = (token: TokenType) => _useAuth.getState().signIn(token);
export const hydrate = () => _useAuth.getState().hydrate();
