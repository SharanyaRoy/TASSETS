import React from 'react';
import { ShieldTick } from '../assets/image/shield-tick';

export const Feature = () => {
    return (
        <div className='pt-10'>
            <div className='text-cyan-500 font-medium mb-4 text-center'>KEY FEATURES</div>
            <div className='font-bold text-2xl mb-8 text-center'>ACCESS THE FUTURE</div>
            <div className='flex'>
                <div className="bg-gradient-to-tl from--bg-slate-900 to-purple-950 mr-4 w-1/3 rounded-3xl p-5 h-56 shadow-lg hover:shadow-blue-500/50 ease-in duration-300">
                    <ShieldTick/>
                    <div className='font-small text-lg my-5'>FUELING THE METAVERSE</div>
                    <div className='text-slate-400'>The Metaverse Is The Next Generation Of The Internet. As One of Its Earliest Explorers, You Will Help Fuel Its Expansion.</div>
                </div>
                <div className="bg-gradient-to-tl from--bg-slate-900 to-purple-950 mr-4 w-1/3  rounded-3xl p-5 h-56 shadow-lg hover:shadow-blue-500/50 ease-in duration-300">
                    <ShieldTick/>
                    <div className='font-small text-lg my-5'>INITIAL METAVERSE OFFERING</div>
                    <div className='text-slate-400'>The Metaverse Is The Next Generation Of The Internet. As One of Its Earliest Explorers, You Will Help Fuel Its Expansion.</div>
                </div>
                <div className="bg-gradient-to-tl from--bg-slate-900 to-purple-950 mr-4 w-1/3  rounded-3xl p-5 h-56 shadow-lg hover:shadow-blue-500/50 ease-in duration-300">
                    <ShieldTick/>
                    <div className='font-small text-lg my-5'>INCUBATION</div>
                    <div className='text-slate-400'>The Metaverse Is The Next Generation Of The Internet. As One of Its Earliest Explorers, You Will Help Fuel Its Expansion.</div>
                </div>
            </div>
        </div>
    )
}