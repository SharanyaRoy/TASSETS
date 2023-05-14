import React from 'react'
import { CircleTick } from '../assets/image/circle-tick.js'
import {ShieldTick} from '../assets/image/shield-tick.js'
import { Wallet } from '../assets/image/wallet.js'

export const Stats = () => {
    return (
        <div>
            <div className='flex bg-slate-600 h-32 w-12/12 mt-12 text-center rounded-t-xl bg-opacity-75 pt-8'>
                <div className='flex-auto'>
                    <div className='font-extrabold text-5xl'>1.5K+ </div>
                    <div>Collections</div>
                </div>
                <div className='flex-auto'>
                    <div className='font-extrabold text-5xl'>102K+</div>
                    <div>Artworks</div>
                </div>
                <div className='flex-auto'>
                    <div className='font-extrabold text-5xl'>3.2K+</div>
                    <div>Artists</div>
                </div>
            </div>
            <div className='flex w-12/12 my-px h-56'>
                <div className='w-1/3 bg-slate-600 rounded-es-xl bg-opacity-75 mr-px flex-auto  pt-4 px-6'>
                    <ShieldTick/>
                    <div className='font-extrabold text-2xl pt-8'>
                        STRONG SECURITY
                    </div>
                    <p className='pt-4 text-slate-400'>Secure transactions and record information with 2-factor authentication (2FA)</p>
                </div>
                <div className='w-1/3 bg-slate-600 bg-opacity-75 mr-px pt-4 px-6'>
                    <Wallet/>
                    <div className='font-extrabold text-2xl pt-8'>
                        PAYMENT OPTIONS
                    </div>
                    <p className='pt-4 text-slate-400'>Flexible payment of methods with Visa, Mastercard, Paypal, bank transfer</p>
                </div>
                <div className='w-1/3 bg-slate-600 rounded-ee-xl bg-opacity-75 px-6 pt-4'>
                    <CircleTick/>
                    <div className='font-extrabold text-2xl pt-8'>
                        MARKET UPDATED
                    </div>
                    <p className='pt-4 text-slate-400'>The most accurate and trusted source for market cap, valuation, and cryptocurrency information</p>
                </div>

            </div>
        </div>
    )
}