import "../css/index.css";
import "../css/imports.css";
import { useEffect, useState } from "react";
// import background from "../assets/background.png";
// import logo from "../assets/logo.png";

export default function App() {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	function ramadanCountdown() {
		const currentDate = Number(new Date());
		const ramadan = Number(new Date("2/28/2025"));
		const difference = ramadan - currentDate;
		if (difference > 0) {
			const days = Math.floor(difference / (1000 * 60 * 60 * 24));
			const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
			const minutes = Math.floor((difference / (1000 * 60)) % 60);
			const seconds = Math.floor((difference / 1000) % 60);

			setDays(days);
			setHours(hours);
			setMinutes(minutes);
			setSeconds(seconds);
		}
	}

	useEffect(() => {
		const interval = setInterval(() => {
			ramadanCountdown();
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className="w-full min-h-screen bg-black text-white"
			// style={{ backgroundImage: `url(${background})` }}
		>
			{/* Heading */}
			<div className="h-auto flex items-center justify-center">
				<div className="w-full mt-10 text-center">
					{/* <img src={logo} alt="Logo image" /> */}
					<h1 className="text-7xl text-white">
						<span className="text-orange-400 font-primary font-semibold">
							HALAL
						</span>
						<span className="font-primary">STER'S</span>
					</h1>
					<h3 className="text-3xl -mt-2 text-gray-300 font-secondary">
						Frozen Foods
					</h3>
					<p className="text-sm text-gray-300 font-secondary text-center px-4 mb-2">
						Authentic, cheap, tasty, & hand-made&nbsp;
						<span className="text-green-500">Pakistani</span> food
					</p>
					<div className="flex items-center justify-center text-center mt-10">
						<h2 className="relative font-semibold text-2xl lg:mx-20 mx-10 font-quaternary bg-gradient-to-r from-red-500 via-orange-400 to-sky-500 bg-clip-text text-transparent select-none">
							Halalster's:{" "}
							<span className="from-red-500 to-red-400 bg-gradient-to-r bg-clip-text text-transparent">
								Samosas So Good
							</span>
							, Your Inner Desi Will Demand
							<span className="from-orange-400 to-orange-300 bg-gradient-to-r bg-clip-text text-transparent">
								{" "}
								Chai
							</span>
							—And a
							<span className="from-sky-400 to-sky-500 bg-gradient-to-r bg-clip-text text-transparent">
								{" "}
								Round Two
							</span>
							!
						</h2>
						<span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-red-500 via-orange-400 to-sky-500 bg-clip-text text-2xl font-extrabold text-transparent select-none">
							Halalster's: Not Halal Sisters, But Samosas So Good, They'll Make
							You Forget Chai—And Feel Like Family!
						</span>
					</div>
				</div>
			</div>
			{/* Countdown */}
			<div className="w-full h-auto">
				<div className="p-3 mt-40 flex flex-col items-center justify-center">
					{days === 0 && hours === 0 && minutes === 0 && seconds === 0 ? (
						<h1 className="text-6xl">HAPPY RAMADAN!</h1>
					) : (
						<>
							<p className="font-secondary text-lg lg:text-xl text-center -mt-36 mb-10 lg:mx-44 lg:text-orange-500 text-orange-500">
								Take advantage of our special Ramadan offer and stock up for
								your iftars with huge portions at unbeatable prices! Enjoy
								delicious, handmade Pakistani frozen foods that make prepping
								for suhoor and iftar effortless. Don't miss; order now and save
								big!
							</p>
							<h3 className="lg:text-6xl text-4xl font-primary">
								<div className="grid grid-cols-2 gap-4 lg:flex lg:flex-row lg:gap-10 text-center">
									<div>
										<div>{days}</div>
										<div>Days</div>
									</div>
									<div>
										<div>{hours}</div>
										<div>Hours</div>
									</div>
									<div>
										<div>{minutes}</div>
										<div>Minutes</div>
									</div>
									<div>
										<div>{seconds}</div>
										<div>Seconds</div>
									</div>
								</div>
							</h3>
						</>
					)}
				</div>
				{!(days === 0 && hours === 0 && minutes === 0 && seconds === 0) && (
					<div>
						<h1 className="text-6xl font-primary flex items-center justify-center text-center mb-5">
							Remaining until Ramadan 2025
						</h1>
					</div>
				)}
			</div>
			{/* Menu */}
			<div>
				<h1 className="text-4xl text-center font-secondary mt-10 text-orange-500">
					Menu
				</h1>
				<div className="mt-8 flex items-center justify-center">
					<div className="lg:w-1/2 w-full lg:mx-0 mx-10 h-auto">
						<div className="font-secondary text-lg sm:text-2xl">
							<div className="flex flex-col sm:flex-row justify-between border-b pb-2">
								<h3>20 piece potato samosas</h3>
								<h3 className="text-orange-500 font-semibold">$4.99</h3>
							</div>
							<div className="flex flex-col sm:flex-row justify-between border-b py-2">
								<h3>20 piece chicken and vegetable samosas</h3>
								<h3 className="text-orange-500 font-semibold">$8.99</h3>
							</div>
							<div className="flex flex-col sm:flex-row justify-between border-b py-2">
								<h3>20 piece chicken and vegetable rolls</h3>
								<h3 className="text-orange-500 font-semibold">$10.49</h3>
							</div>
							<div className="flex flex-col sm:flex-row justify-between border-b py-2">
								<h3>20 piece potato rolls</h3>
								<h3 className="text-orange-500 font-semibold">$5.49</h3>
							</div>
						</div>
						<div className="text-center font-secondary text-base sm:text-xl my-5 text-green-500">
							<h3>
								<i>More items coming soon Insha'Allah!</i>
								<br />
							</h3>
						</div>
					</div>
				</div>
			</div>
			<div className="">
				{/* Disclaimers Section */}
				<div className="w-full">
					<h1 className="text-4xl font-secondary text-center mt-5 text-orange-500">
						Disclaimers
					</h1>
					<div className="flex items-center justify-center">
						<div className="lg:w-1/2 lg:mx-0 mx-10 w-full mt-10 font-secondary text-xl">
							<p>
								1. Please follow proper cooking instructions to ensure food
								safety. Undercooked samosas may pose a health risk.
							</p>
							<br />
							<p>
								2. We are not responsible for any foodborne illnesses caused by
								improper storage, handling, or cooking after delivery.
							</p>
							<br />
							<p>
								3. Prices are subject to change without notice. We reserve the
								right to modify or cancel any item or order at any time.
							</p>
							<br />
							<p>4. All orders are final and non-refundable. No exceptions.</p>
							<br />
							<p>
								5. Delivery times are estimated and may be affected by weather,
								traffic, or unforeseen circumstances.
							</p>
							<br />
							<p>6. All products are 100% halal certified</p>
							<br />
							<p>
								7. Currently, we only deliver within Delaware, specifically
								within a 7-mile radius of Newark, including areas like Bear,
								Glasgow, Christiana, and parts of Middletown.
							</p>
							<br />
							<p>
								8. If you live 8-10 miles and are interested in ordering, there
								will be an extra cost of $4.63 for delivery charges
							</p>
							<br />
							<p>
								9. We do not do same-day delivery. Please order at most a day
								ahead for your orders!
							</p>
						</div>
					</div>
				</div>
				{/* FAQ */}
				{/* <div className="mt-10">
					<h1 className="text-4xl font-secondary text-center text-orange-500">
						FAQ
					</h1>
					<div className = "w-full border-2 border-white p-3">
						<div className = "flex grid-rows-1">
							<div className = "border-2 border-red-500">
								hello
							</div>
							<div className = "border-2 border-yellow-500">
								hello again
							</div>
						</div>
					</div>
				</div> */}
				<footer className="relative w-full p-2 mt-14 bg-sky-950 text-center border-t-2 border-t-sky-500">
					{/* Sky Blue Glow at the Top */}
					<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-20 bg-gradient-to-b from-sky-400 to-transparent blur-3xl opacity-60"></div>
					<h3 className="lg:text-5xl text-4xl text-sky-400 font-tertiary mt-5">
						Hungry? Call (or text) Mohid at (302)-344-7160 <br /> or Hairum at
						(302)-480-0559
					</h3>
					<h3 className="text-3xl text-sky-300 font-tertiary">
						WE OFFER FREE DELIVERY!*
					</h3>
					<p className="text-xs font-secondary">
						Unless you live outside the 7 mile radius, additional delivery
						charges will apply. See disclaimer #8 for more details*
					</p>
					<p className="text-white text-base mt-5">
						Copyright {new Date().getFullYear()} All Rights Reserved
					</p>
					<p className="my-2">
						<small>Website developed by Hairum Qureshi</small>
					</p>
				</footer>
			</div>
		</div>
	);
}
