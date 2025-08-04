import React from "react";

const rewards = [
	{ title: "Bronze Badge", description: "Unlocked at $500 raised", icon: "🥉" },
	{
		title: "Silver Badge",
		description: "Unlocked at $1500 raised",
		icon: "🥈",
	},
	{ title: "Gold Badge", description: "Unlocked at $3000 raised", icon: "🥇" },
	{
		title: "Platinum Badge",
		description: "Unlocked at $5000 raised",
		icon: "🏆",
	},
	{
		title: "Special Gift Box",
		description: "Unlocked at $7000 raised",
		icon: "🎁",
	},
];

function Rewards() {
	return (
		<div className="w-full sm:w-[550px] md:w-[700px] lg:w-[900px] mx-auto p-6 mt-12 bg-white rounded-lg shadow-md">
			<h2 className="text-2xl font-bold mb-4">Rewards & Unlockables</h2>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
				{rewards.map((reward, index) => (
					<div
						key={index}
						className="border rounded-lg p-4 flex items-center gap-4 hover:shadow-lg transition"
					>
						<span className="text-3xl">{reward.icon}</span>
						<div>
							<h3 className="font-semibold">{reward.title}</h3>
							<p className="text-gray-600 text-sm">{reward.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Rewards;
