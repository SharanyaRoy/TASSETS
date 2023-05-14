import React, { useState } from "react";

const MinusIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 float-right">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
        </svg>
    )
}

const PlusIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    )
}

export const Accordian = ({ heading }) => {
    const [show, setShow] = useState(false)
    return (
        <div className="mr-10 mt-10">
            <div className={show ? "bg-sky-500 flex rounded-t-2xl p-2 justify-between" : "bg-zinc-600 cursor-pointer flex rounded-2xl p-2 justify-between"} onClick={() => setShow(!show)} >
                {heading}
                {show ? <MinusIcon /> : <PlusIcon />}
            </div>
            <div className={show ? "block bg-zinc-600 rounded-b-2xl p-2" : "hidden"}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </div>
        </div>
    )
}