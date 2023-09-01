import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Button, ControlledInput, Text, View } from "@/ui/core";

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

const schema = z.object({
	mobileNumber: z
		.string({
			required_error: "Number is required",
		})
		.regex(phoneRegex, "Invalid Number")
		.min(10, "Minimum 10 digits required")
		.max(10, "Maximum 10 digits are allowed"),
	password: z
		.string({
			required_error: "Password is required",
		})
		.min(6, "Password must be at least 6 characters"),
});

export type FormType = z.infer<typeof schema>;

export type LoginFormProps = {
	onSubmit?: SubmitHandler<FormType>;
	loading: boolean;
};

export const LoginForm = ({ onSubmit = () => {}, loading }: LoginFormProps) => {
	const { control, handleSubmit } = useForm<FormType>({
		resolver: zodResolver(schema),
	});

	return (
		<View className="flex-1 justify-center p-4">
			<Text testID="form-title" variant="h1" className="pb-6 text-center">
				Sign In
			</Text>
			<ControlledInput testID="phone" control={control} name="mobileNumber" label="Phone" />
			<ControlledInput
				testID="password-input"
				control={control}
				name="password"
				label="Password"
				placeholder="***"
				secureTextEntry={true}
			/>
			<Button
				testID="login-button"
				label="Login"
				onPress={handleSubmit(onSubmit)}
				variant="primary"
				loading={loading}
			/>
		</View>
	);
};
