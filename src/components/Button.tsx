import React from "react"

interface BottonProps{
    children:React.ReactNode
    color?: 'blue' | 'green' | 'gray'
    className?: string
    onClick?: () => void 
}

export default function Button(props: BottonProps) {

    const colorVariants = {
        gray:'from-gray-400 to-gray-700',
        blue:'from-blue-400 to-blue-700',
        green:'from-green-400 to-green-700'
      }

    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r ${colorVariants[props.color ?? 'gray'] }
            text-white px-4 py-2 rounded-md

            ${props.className}
        `}>
            {props.children}
        </button>
    )
}
