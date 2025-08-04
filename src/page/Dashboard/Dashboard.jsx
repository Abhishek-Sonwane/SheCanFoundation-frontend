import axios from "axios";
import React, { useEffect, useState } from "react";
import Rewards from "../../Components/Rewards";

const Dashboard = () => {
	const [users, setUsers] = useState([]);
	const getUsersData = async () => {
		try {
			const response = await axios.get(
				import.meta.env.VITE_BACKEND_URL + "/users"
			);
			setUsers(response.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUsersData();
	}, []);
	return (
		<>
			<div>
				{users && (
					<div className="w-full mt-24 flex items-center justify-center">
						<div className="bg-white/50 backdrop-blur-2xl px-12 py-6 rounded-xl shadow-xl flex flex-col gap-2 items-center">
							<h1 className="text-xl text-pink-500 font-medium">
								{users[0]?.name}
							</h1>
							<h4 className="text-gray-700 text-sm -mt-1">
								{users[0]?.referralCode}
							</h4>
							<h2 className="text-lg font-bold">
								RS. {users[0]?.amountRaised}
							</h2>
						</div>
					</div>
				)}

				<Rewards />
			</div>
		</>
	);
};

export default Dashboard;
