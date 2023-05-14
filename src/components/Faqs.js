import React from "react";
import { Accordian } from "./Accordian";

export const Faqs = () => {
    return (
        <div>
            <div className="text-cyan-500 font-medium mb-4 mt-10 text-center">FAQS</div>
            <div className="font-bold text-2xl mb-4 text-center">FREQUENTLY ASKED QUESTIONS</div>
            <div className="flex">
                <div className="flex-col w-1/2">
                    <Accordian heading={'WHERE ARE YOUR COMPANY BRANCHES LOCATED?'} />
                    <Accordian heading={'WHERE IS THE NFTX-SPACE?'} />
                    <Accordian heading={'WHERE IS METAMASK?'} />
                    <Accordian heading={'HOW CAN I BUY,SELL AND MINT NFTS?'} />
                </div>
                <div className="flex-col w-1/2">
                    <Accordian heading={'WHAT IS THE BEST-SELLING LIQUID AT THE MOMENT?'} />
                    <Accordian heading={'HOW CAN I BUY,SELL AND MINT NFTS?'} />
                    <Accordian heading={'WHERE ARE YOUR COMPANY BRANCHES LOCATED?'} />
                    <Accordian heading={'WHAT IS THE SERVICE FEE?'} />
                </div>
            </div>
        </div>
    )
}