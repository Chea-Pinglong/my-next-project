import { Dispatch, FC, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface UserInfo{
    id: string
    username: string
    profile: string

}
const Context = createContext<{
    userInfo: UserInfo[],   
    setUserInfo: Dispatch<SetStateAction<UserInfo[]>>
    handleDelete: (id: string)=> void,
    selectUser: string,
    setSelectUser: Dispatch<SetStateAction<string>>
    findUser: UserInfo | undefined;
}>({
    userInfo: [], 
    setUserInfo: ()=> {},

    handleDelete: ()=>{},

    selectUser: "",
    setSelectUser: ()=>{},

    findUser: undefined
})

interface MyContextProps{
    children: ReactNode
}

const ContextProvider: FC<MyContextProps> = ({children}: {children: ReactNode}) => {

    const [userInfo, setUserInfo] = useState([
        {
            id: "",
            username: "",
            profile: ""
        }
    ])

    const [selectUser, setSelectUser] = useState("")

    const handleDelete = (id: string)=>{
        const newUser = userInfo.filter((user) =>  user.id !== id);
        setUserInfo(newUser);

        if(selectUser == id){
            setSelectUser("")
        }
    }

    const findUser = userInfo.filter((user)=> user.id == selectUser);

    const contextValue = {
        userInfo,
        setUserInfo,
        handleDelete,
        setSelectUser,
        selectUser,
        findUser,
    }

    return(
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export const useMyContext = () => useContext(Context)


    

