import { Container, NumberInput, SimpleGrid, Text } from "@mantine/core";
import { User } from "tabler-icons-react";
export default function TipCalculator() {
	const tipPercentages = [5, 10, 15, 25, 50];
	const activatePercentage = (event: React.MouseEvent<HTMLDivElement>) => {
		console.log(event.currentTarget.dataset.percentage);
	};
	return (
		<div>
			<Text>SPLI</Text>
			<Text>TTER</Text>

			<Container mt={40}>
				<SimpleGrid
					cols={2}
					breakpoints={[{ maxWidth: "45rem", cols: 1, spacing: "sm" }]}>
					<div>
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
									data-percentage={percentage}
									onClick={(event) => activatePercentage(event)}>
									{percentage}&#37;
								</div>
							))}
							<div className="custom">Custom</div>
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
					</div>
					<div></div>
				</SimpleGrid>
			</Container>
		</div>
	);
}
