export default function Footer() {
	return (
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
			<p className="text-xs font-sexenary">
				Unless you live outside the 7 mile radius, additional delivery charges
				will apply. See disclaimer #8 for more details*
			</p>
			<p className="text-white text-base mt-5 font-sexenary font-semibold">
				Copyright {new Date().getFullYear()} All Rights Reserved
			</p>
			<p className="my-2 font-sexenary font-semibold">
				<small>Website developed by Hairum Qureshi</small>
			</p>
		</footer>
	);
}
