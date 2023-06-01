import { Container, NumberInput, SimpleGrid, Text } from "@mantine/core";
import { Formik } from "formik";
import { User } from "tabler-icons-react";
export default function TipCalculator() {
	const tipPercentages = [5, 10, 15, 25, 50];
	const activatePercentage = (event: React.MouseEvent<HTMLDivElement>) => {
		console.log(event.currentTarget.dataset.percentage);
	};
	type TipType = {
		bill: number;
		tipPercentage: number;
		numberOfPeople: number;
	};
	const calculateTipAmount = (values: TipType) => {
		console.log(values);
	};
	return (
		<div>
			<div className="title">
				<Text>SPLI</Text>
				<Text>TTER</Text>
			</div>

			<Formik
				initialValues={{ bill: 142.55, tipPercentage: 15, numberOfPeople: 5 }}
				onSubmit={(values, { setSubmitting }) => {
					console.log(values);
					calculateTipAmount(values);
					setSubmitting(false);
				}}>
				{({ values, setFieldValue }) => {
					const tipAmount =
						(values.bill * values.tipPercentage) / 100 / values.numberOfPeople;
					return (
						<form>
							<Container mt={40}>
								<SimpleGrid
									cols={2}
									breakpoints={[{ maxWidth: "45rem", cols: 1, spacing: "sm" }]}>
									<div>
										<Text>Bill</Text>
										<NumberInput
											hideControls
											icon="$"
											styles={{
												input: {
													textAlign: "right",
												},
											}}
											precision={2}
											value={values.bill}
											onChange={(val) => setFieldValue("bill", val)}
										/>
										<Text size="sm">Select Tip &#37;</Text>
										<div className="select-tip">
											{tipPercentages.map((percentage) => (
												<div
													className={`percentage button ${
														percentage === values.tipPercentage
															? " primary-button"
															: ""
													}`}
													key={percentage}
													data-percentage={percentage}
													onClick={(event) =>
														setFieldValue(
															"tipPercentage",
															event.currentTarget.dataset.percentage
														)
													}>
													{percentage}&#37;
												</div>
											))}
											<div className="custom button">Custom</div>
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
											value={values.numberOfPeople}
											onChange={(val) => setFieldValue("numberOfPeople", val)}
										/>
									</div>
									<div className="tip-amount-container">
										<div>
											<div>
												<Text className="white-text">Tip Amount</Text>
												<Text className="grayish-cyan-text">/ person</Text>
											</div>
											<Text>${tipAmount}</Text>
										</div>
									</div>
								</SimpleGrid>
							</Container>
						</form>
					);
				}}
			</Formik>
		</div>
	);
}
