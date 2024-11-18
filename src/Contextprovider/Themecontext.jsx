import { createContext, useState } from "react"



export const Themecontext=createContext()
export default function Themecontextprovider({children}){
    const[mode,setmode]=useState(false)
    return(
        <Themecontext.Provider value={{mode,setmode}}>
        {children}
        </Themecontext.Provider>

    )
}