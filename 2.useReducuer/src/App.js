import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {

	const [isLogin, setIsLogin] = useState(false);

	// Use Case 1: store data in localStorage
	useEffect(() => {
		const storeLoginInfo = localStorage.getItem('isLogin');
		if (storeLoginInfo === '1') {
			setIsLogin(true);
		}
	},
	[]); // only run once

	const loginHandler = () => {
		localStorage.setItem('isLogin', '1'); //save login data in browser
		setIsLogin(true);
	}

	const logoutHandler = () => {
		localStorage.removeItem('isLogin');
		setIsLogin(false);
	}

	return (
		<React.Fragment>
			{!isLogin ? <Login onSubmit={loginHandler} /> : (
				<React.Fragment>
					<Header onSubmit={logoutHandler} />
					<main>
						<Home />
					</main>
				</React.Fragment>
			)}
		</React.Fragment>
	);
}

export default App;
