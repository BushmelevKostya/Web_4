import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const changeLogin = (login) => {
        setLogin(login);
        console.log(login)
    };

    const changePassword = (password) => {
        setPassword(password);
    };

    const logout = () => {
        setLogin("");
        setPassword("");
    };

    return (
        <AuthContext.Provider value={{ changeLogin, changePassword, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};