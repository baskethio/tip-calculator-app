import {
	Button,
	Center,
	Container,
	NumberInput,
	SimpleGrid,
	Text,
} from "@mantine/core";
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
					const tipTotal = (values.bill * values.tipPercentage) / 100;
					const tipAmount =
						values.numberOfPeople > 0 ? tipTotal / values.numberOfPeople : 0;
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
													onClick={(event) => {
														if (event.currentTarget.dataset.percentage) {
															setFieldValue(
																"tipPercentage",
																parseInt(event.currentTarget.dataset.percentage)
															);
														}
													}}>
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
											min={1}
											onChange={(val) => {
												if (val) {
													setFieldValue("numberOfPeople", val > 0 ? val : 1);
												}
											}}
										/>
									</div>
									<div className="tip-amount-container">
										<div className="two-cols">
											<div>
												<Text className="white-text">Tip Amount</Text>
												<Text className="grayish-cyan-text">/ person</Text>
											</div>
											<Text className="primary-text">${tipAmount}</Text>
										</div>
										<div className="two-cols">
											<div>
												<Text className="white-text">Total</Text>
												<Text className="grayish-cyan-text">/ person</Text>
											</div>
											<Text className="primary-text">${tipTotal}</Text>
										</div>
										<Center mt={50}>
											<input
												type="button"
												className="reset-button"
												value="RESET"
											/>
										</Center>
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
