import { Container, NumberInput, Text } from "@mantine/core";

export default function TipCalculator() {
	return (
		<div>
			<Text>SPLI</Text>
			<Text>TTER</Text>

			<Container mt={40}>
				<NumberInput
					hideControls
					icon="$"
					styles={{
						input: {
							textAlign: "right",
						},
					}}
				/>
			</Container>
		</div>
	);
}
