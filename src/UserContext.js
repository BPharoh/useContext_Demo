import { createContext } from "react";
export const UserContext = createContext();

const UserContextProvider = (props) => {

    const user = {
        name: "Martin",
        Job: "Teacher"
    }

    return (
        <UserContext.Provider value={user} >
            {props.children}
        </UserContext.Provider>
    )
};

export { UserContextProvider};