import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
	const [users, setUsers] = useState([]);
	const [referralCode, setReferralCode] = useState("");
	const [amount, setAmount] = useState("");

	const getUsersData = async () => {
		try {
			const response = await axios.get(process.env.BACKEND_URL + "/users");
			setUsers(response.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUsersData();
	}, []);

	const handleDonate = () => {
		if (!amount) {
			alert(`Enter the Amount`);
		}
		if (amount) {
			alert(
				`Thank you for donating $${amount} with referral code: ${referralCode}`
			);
		}
	};
	return (
		<div className="mt-12">
			<div className="">
				<div className="max-w-md mx-auto bg-pink-100 shadow-lg rounded-lg p-6 border border-gray-200">
					<h2 className="text-2xl font-bold mb-4 text-center">Donate Now</h2>
					<div className="mb-4">
						<label className="block text-sm font-semibold mb-1">
							Referral Code
						</label>
						<input
							type="text"
							value={referralCode}
							onChange={(e) => setReferralCode(e.target.value)}
							placeholder="Enter your referral code"
							className="w-full border rounded px-3 py-2  border-gray-400 outline-none"
						/>
					</div>

					<div className="mb-4">
						<label className="block text-sm font-semibold mb-1">
							Donation Amount ($)
						</label>
						<input
							type="number"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							placeholder="Enter amount"
							className="w-full border rounded px-3 py-2  border-gray-400 outline-none"
						/>
					</div>

					<button
						onClick={handleDonate}
						className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-700 transition"
					>
						Donate
					</button>
				</div>
				<div className="relative overflow-x-auto max-w-[880px] mx-auto mt-10 rounded-xl">
					<table className="w-full text-sm text-left  text-black font-medium ">
						<thead className="text-xs text-gray-700 uppercase bg-pink-100  ">
							<tr>
								<th scope="col" className="px-6 py-3">
									No.
								</th>
								<th scope="col" className="px-6 py-3 rounded-s-lg">
									Name
								</th>
								<th scope="col" className="px-6 py-3">
									Referral Code
								</th>
								<th scope="col" className="px-6 py-3 rounded-e-lg">
									Amount Raised
								</th>
							</tr>
						</thead>
						<tbody>
							{users.map((item, index) => (
								<tr key={index} className="bg-white dark:bg-pink-300">
									<td className="px-6 py-4">{index + 1}</td>

									<th
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
									>
										{item.name}
									</th>
									<td className="px-6 py-4">{item.referralCode}</td>
									<td className="px-6 py-4">RS. {item.amountRaised}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Home;
