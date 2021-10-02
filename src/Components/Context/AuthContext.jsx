import React, { createContext, useRef, useState, useEffect } from 'react'

export const AuthContext = createContext()



export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const loginFalse = false;
    const loginTrue = true;

     const toggleAuth = (tru) => {
         if (tru === "true") {
             localStorage.setItem("Auth", JSON.stringify(loginTrue));
         }
         if (tru === "false") {
             localStorage.setItem("Auth", JSON.stringify(loginFalse));
         }
     }; 

    const value = {toggleAuth};
    return (
        <div>
            <AuthContext.Provider value={ value}>{ children}</AuthContext.Provider>
        </div>
    )
}
