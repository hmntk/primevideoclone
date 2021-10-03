import React, { createContext, useRef, useState, useEffect } from 'react'

export const UserContext = createContext({})



export const UserContextProvider = ({ children }) => {
   
    const [userId, setUserId] = useState("");

    const handleUserId = (id) => {
        console.log("userContext", id);
        setUserId(id);
    }
   
    
    return (
        <div>
            <UserContext.Provider value={{handleUserId, userId}}>{ children}</UserContext.Provider>
        </div>
    )
}
