import "./App.css";
import { MantineProvider, Text } from "@mantine/core";

function App() {
	return (
		<MantineProvider
			theme={{ fontFamily: "Space Mono" }}
			withGlobalStyles
			withNormalizeCSS>
			<Text>Tip Calculator!</Text>
		</MantineProvider>
	);
}

export default App;
