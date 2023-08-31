import React from 'react';

import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const App = () => {
	return (
		<StyledView className="flex-1 items-center justify-center">
			<StyledText className="text-slate-800 text-xl">
				Tailwind implemented successfully 🎉
			</StyledText>
		</StyledView>
	);
};

export default App;
