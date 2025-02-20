import menuItems from "../json/menu.json";

export default function Menu() {
	interface MenuItem {
		item_no: number;
		item_name: string;
		item_price: string;
	}

	return (
		<div>
			<h1 className="text-4xl text-center font-secondary mt-10 text-orange-500">
				Menu
			</h1>
			<div className="mt-8 flex items-center justify-center">
				<div className="lg:w-1/2 w-full lg:mx-0 mx-10 h-auto">
					<div className="font-secondary text-lg sm:text-2xl">
						{menuItems.map((menuItem: MenuItem) => {
							return (
								<div
									className="flex flex-col sm:flex-row justify-between border-b py-2"
									key={menuItem.item_no}
								>
									<h3>{menuItem.item_name}</h3>
									<h3 className="text-orange-500 font-semibold">
										{menuItem.item_price}
									</h3>
								</div>
							);
						})}
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
	);
}
