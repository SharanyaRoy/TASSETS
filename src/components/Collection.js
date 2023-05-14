import React from "react";
import { Button } from "./Button";
import ape1 from '../assets/image/ape1.jpeg'
import ape2 from '../assets/image/ape2.jpeg'
import ape3 from '../assets/image/ape3.jpeg'

export const Collection = () => {
    return(
        <div className="flex mt-10">
            <div className="w-2/6 h-72">
                <div className="text-cyan-500 font-medium mb-4">COLLECTION</div>
                <div className="font-bold text-2xl mb-4">BORED APES</div> 
                <div className="font-bold text-2xl mb-8">NFT ITEMS</div>
                <div className='text-slate-400 mb-8'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div>
                <Button type={'secondary'} text={'View on Opensea'}/>
            </div>
            <div className="ml-10 flex">
                <img src={ape1} className='rounded-2xl h-72 w-52 mr-10'/>
                <img src={ape2} className='rounded-2xl h-72 w-52 mr-10'/>
                <img src={ape3} className='rounded-2xl h-72 w-52'/>
            </div>
        </div>
    )
}