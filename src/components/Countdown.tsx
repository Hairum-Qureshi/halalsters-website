import { useEffect, useState } from "react";

export default function Countdown() {
	const currentDate = Number(new Date());
	const ramadan = Number(new Date("3/1/2025"));

	// Difference is stored in the state
	const [difference, setDifference] = useState(ramadan - currentDate);
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	function ramadanCountdown() {
		const newDifference = ramadan - Number(new Date()); // Calculate the new difference

		if (newDifference > 0) {
			const newDays = Math.floor(newDifference / (1000 * 60 * 60 * 24));
			const newHours = Math.floor((newDifference / (1000 * 60 * 60)) % 24);
			const newMinutes = Math.floor((newDifference / (1000 * 60)) % 60);
			const newSeconds = Math.floor((newDifference / 1000) % 60);

			// Update the state if the difference has changed
			if (newDifference !== difference) {
				setDifference(newDifference);
				setDays(newDays);
				setHours(newHours);
				setMinutes(newMinutes);
				setSeconds(newSeconds);
			}
		}
	}

	useEffect(() => {
		const interval = setInterval(() => {
			ramadanCountdown(); // Call the countdown function on each interval
		}, 1000);

		return () => clearInterval(interval); // Cleanup on unmount
	}, [difference]); // Re-run the effect when the difference changes

	return (
		<div className="p-3 mt-40 flex flex-col items-center justify-center">
			{difference <= 0 ? (
				<h1 className="lg:text-8xl text-7xl -mt-30 text-yellow-400 font-quinquenary drop-shadow-[0_0_10px_rgba(255,255,0,0.8)] animate-pulse text-center">
					RAMADAN MUBARAK!
				</h1>
			) : (
				<>
					<p className="font-secondary text-lg lg:text-xl text-center -mt-36 mb-10 lg:mx-44 lg:text-orange-500 text-orange-500">
						Take advantage of our special Ramadan offer and stock up for your
						iftars with huge portions at unbeatable prices! Enjoy delicious,
						handmade Pakistani frozen foods that make prepping for suhoor and
						iftar effortless. Don't miss; order now and save big!
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
			{!(days === 0 && hours === 0 && minutes === 0 && seconds === 0) && (
				<div>
					<h1 className="text-6xl font-primary flex items-center justify-center text-center mb-5">
						Remaining until Ramadan 2025
					</h1>
				</div>
			)}
		</div>
	);
}
