import "../css/index.css";
import "../css/imports.css";
import Countdown from "./Countdown";
import Menu from "./Menu";
import Disclaimers from "./Disclaimers";
import Footer from "./Footer";
// import background from "../assets/background.png";
// import logo from "../assets/logo.png";

export default function App() {
	return (
		<div
			className="w-full min-h-screen bg-black text-white"
			// style={{ backgroundImage: `url(${background})` }}
		>
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
							<span className="from-orange-500 to-orange-300 bg-gradient-to-r bg-clip-text text-transparent">
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
				<Countdown />
			</div>
			{/* Menu */}
			<div>
				<Menu />
			</div>
			<div>
				{/* Disclaimers Section */}
				<Disclaimers />
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
				<Footer />
			</div>
		</div>
	);
}
