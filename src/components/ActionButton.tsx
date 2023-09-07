import React from "react";

interface ActButtonProps {
    children: React.ReactNode
    color?: 'red' | 'green' 
    onClick:() => void
}


export default function ActButton(props: ActButtonProps) {
    
    const colorVariants = {
        red: 'text-red-500',
        green: 'text-green-600',
      }
   
    return (

        <button className={`
                flex justify-center items-center
                rounded-full p-2 m-1
                hover:bg-purple-50
                ${colorVariants[props.color ?? 'green']}
            `}

            onClick={props.onClick}
            >{props.children}</button>

    )
}