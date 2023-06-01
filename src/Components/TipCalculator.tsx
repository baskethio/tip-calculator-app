import { Container, NumberInput, Text } from "@mantine/core";
import { User } from "tabler-icons-react";
export default function TipCalculator() {
	const tipPercentages = ["5%", "10%", "15%", "25%", "50%", "custom"];
	const activatePercentage = (percentage: React.MouseEvent<HTMLDivElement>) => {
		console.log(percentage.currentTarget.innerText);
	};
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
				<Text size="sm">Select Tip &#37;</Text>
				<div className="select-tip">
					{tipPercentages.map((percentage) => (
						<div
							className="percentage"
							key={percentage}
							onClick={(percentage) => activatePercentage(percentage)}>
							{percentage}
						</div>
					))}
				</div>

				<Text>Number of People</Text>
				<NumberInput
					hideControls
					icon={<User />}
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
