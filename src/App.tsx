import "./App.css";
import { MantineProvider } from "@mantine/core";
import TipCalculator from "./Components/TipCalculator";

function App() {
	return (
		<MantineProvider
			theme={{ fontFamily: "Space Mono" }}
			withGlobalStyles
			withNormalizeCSS>
			<TipCalculator />
		</MantineProvider>
	);
}

export default App;
