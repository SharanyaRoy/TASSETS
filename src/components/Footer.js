import React from "react";

export const Footer = () => {
    return(
        <div className="flex mt-10">
            <div className="w=1/3 mr-96">
                <div className="text-2xl font-extrabold">SPACE.</div>
            </div>
            <div className="w-2/3 ml-84">
                <div className="flex">
                    <ul className="w-1/3 ml-24">
                        <li className="text-lg">MarketPlace</li>
                        <li className="text-slate-400">About us</li>
                        <li className="text-slate-400">Our team</li>
                        <li className="text-slate-400">Team details</li>
                        <li className="text-slate-400">Error 404</li>
                        <li className="text-slate-400">Cart page</li>
                    </ul>
                    <ul className="w-1/3 ml-24">
                        <li className="text-lg">Company</li>
                        <li className="text-slate-400">Wallet</li>
                        <li className="text-slate-400">Create page</li>
                        <li className="text-slate-400">Login page</li>
                        <li className="text-slate-400">Registration</li>
                        <li className="text-slate-400">Checkout</li>
                    </ul>
                    <ul className="w-1/3 ml-24">
                        <li className="text-lg">Services</li>
                        <li className="text-slate-400">Contact us</li>
                        <li className="text-slate-400">Shop page</li>
                        <li className="text-slate-400">Shop details</li>
                        <li className="text-slate-400">Collectors</li>
                    </ul>

                </div>

            </div>
        </div>
    )
}