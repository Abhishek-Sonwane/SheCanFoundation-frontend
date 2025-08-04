import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div className="pt-32">
			<form className="max-w-xl mx-auto bg-white/50 px-10 py-6 rounded-2xl shadow-xl border border-gray-100">
				<div className="relative z-0 w-full mb-5 group">
					<h1 className="text-3xl font-bold text-pink-500 text-center underline underline-offset-3">
						Register
					</h1>
				</div>
				<div className="relative z-0 w-full mb-5 group">
					<input
						type="email"
						name="floating_email"
						id="floating_email"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-pink-400 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer"
						placeholder=" "
						required
					/>
					<label
						for="floating_email"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Email address
					</label>
				</div>
				<div className="relative z-0 w-full mb-5 group">
					<input
						type="password"
						name="floating_password"
						id="floating_password"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-pink-400 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer"
						placeholder=" "
						required
					/>
					<label
						for="floating_password"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Password
					</label>
				</div>
				<div className="relative z-0 w-full mb-5 group">
					<input
						type="password"
						name="repeat_password"
						id="floating_repeat_password"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-pink-400 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer"
						placeholder=" "
						required
					/>
					<label
						for="floating_repeat_password"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Confirm password
					</label>
				</div>
				<div className="grid md:grid-cols-2 md:gap-6">
					<div className="relative z-0 w-full mb-5 group">
						<input
							type="text"
							name="floating_first_name"
							id="floating_first_name"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-pink-400 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer"
							placeholder=" "
							required
						/>
						<label
							for="floating_first_name"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							First name
						</label>
					</div>
					<div className="relative z-0 w-full mb-5 group">
						<input
							type="text"
							name="floating_last_name"
							id="floating_last_name"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-pink-300 appearance-none dark:text-black dark:border-pink-400 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer"
							placeholder=" "
							required
						/>
						<label
							for="floating_last_name"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Last name
						</label>
					</div>
				</div>
				<div className="grid md:grid-cols-2 md:gap-6">
					<div className="relative z-0 w-full mb-5 group">
						<input
							type="tel"
							name="floating_phone"
							id="floating_phone"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-pink-400 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer"
							placeholder=" "
							required
						/>
						<label
							for="floating_phone"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Phone number (1234567890)
						</label>
					</div>
					<div className="relative z-0 w-full mb-5 group">
						<input
							type="text"
							name="floating_company"
							id="floating_company"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-pink-400 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer"
							placeholder=" "
							required
						/>
						<label
							for="floating_company"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Company (Ex. Google)
						</label>
					</div>
				</div>
				<button
					type="submit"
					className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
				>
					Register
				</button>
				<div className="mt-1.5 text-end">
					<Link to={`/login`} className="text-sm hover:text-pink-600 underline">
						Already have an Account?
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Register;
