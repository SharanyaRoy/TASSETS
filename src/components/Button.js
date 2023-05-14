import React from 'react'


export const Button = ({text,type}) =>{
    return(
        <button className={type=="primary"?"bg-blue-600 rounded-1 text-white h-12 w-40 m-4":"to-transparent border-2 rounded-1 h-12 m-2 w-40"}>
            {text}
        </button>
    )
}