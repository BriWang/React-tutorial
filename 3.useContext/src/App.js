import React, { useContext } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import AuthContext from './store/auth-context';

function App() {

	const ctx = useContext(AuthContext);

	return (
		<React.Fragment>
			{!ctx.isLogin ? <Login /> : (
				<React.Fragment>
					<Header />
					<main>
						<Home />
					</main>
				</React.Fragment>
			)}
		</React.Fragment>
	);
}

export default App;
