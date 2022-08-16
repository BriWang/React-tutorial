import React, { useState, useEffect } from 'react';

// set default Context obj, which has your component-wide states
const AuthContext = React.createContext({
    isLogin: false,
    onLogout: () => {},
    onLogin: () => {}
});
  
export const AuthContextProvider = (props) => {
    const [isLogin, setIsLogin] = useState(false);

	useEffect(() => {
		const storeLoginInfo = localStorage.getItem('isLogin');
		if (storeLoginInfo === '1') {
			setIsLogin(true);
		}
	},
	[]);

    const loginHandler = () => {
		localStorage.setItem('isLogin', '1'); 
		setIsLogin(true);
	}

	const logoutHandler = () => {
		localStorage.removeItem('isLogin');
		setIsLogin(false);
    }
    
    return (
        <AuthContext.Provider
            value={{
                isLogin: isLogin,
                onLogout: logoutHandler,
                onLogin: loginHandler
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;