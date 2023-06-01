import "./App.css";
import { MantineProvider, Text } from "@mantine/core";

function App() {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<Text>Tip Calculator!</Text>
		</MantineProvider>
	);
}

export default App;
