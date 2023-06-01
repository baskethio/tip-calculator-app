import { Box, Center, NumberInput, SimpleGrid, Text } from "@mantine/core";
import { Formik } from "formik";
import { User } from "tabler-icons-react";
export default function TipCalculator() {
	const tipPercentages = [5, 10, 15, 25, 50];
	type TipType = {
		bill: number;
		tipPercentage: number;
		numberOfPeople: number;
	};
	const calculateTipAmount = (values: TipType) => {
		console.log(values);
	};
	return (
		<Box
			className="light-cyan-container"
			sx={{
				width: "80%",
				margin: "0 auto",
				paddingBottom: "50px",
				"@media (max-width: 45rem)": {
					borderRadius: "12px 12px 0 0 !important",
					paddingBottom: "0",
				},
			}}>
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
				{({ values, setFieldValue, resetForm }) => {
					const tipTotal = (values.bill * values.tipPercentage) / 100;
					const tipAmount =
						values.numberOfPeople > 0 ? tipTotal / values.numberOfPeople : 0;
					return (
						<Box
							className="white-container"
							sx={{
								borderRadius: "12px",
								fontSize: "11px",
								width: "80%",
								margin: "0 auto",
								"@media (max-width: 45rem)": {
									borderRadius: "12px 12px 0 0 !important",
									width: "100%",
								},
							}}>
							<form>
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
										<Text mt={21}>Select Tip &#37;</Text>
										<SimpleGrid
											cols={3}
											breakpoints={[
												{ maxWidth: "45rem", cols: 2, spacing: "xs" },
											]}>
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
													}}
													style={{
														fontSize: "15px",
													}}>
													{percentage}&#37;
												</div>
											))}
											<div className="custom button">Custom</div>
										</SimpleGrid>

										<Text mt={21}>Number of People</Text>
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
											<Text className="primary-text" size="md">
												${Math.trunc(tipAmount * 100) / 100}
											</Text>
										</div>
										<div className="two-cols">
											<div>
												<Text className="white-text">Total</Text>
												<Text className="grayish-cyan-text">/ person</Text>
											</div>
											<Text className="primary-text" size="md">
												${Math.trunc(tipTotal * 100) / 100}
											</Text>
										</div>
										<Center mt={50}>
											<input
												type="button"
												className="reset-button"
												value="RESET"
												onClick={() => resetForm()}
											/>
										</Center>
									</div>
								</SimpleGrid>
							</form>
						</Box>
					);
				}}
			</Formik>
		</Box>
	);
}
