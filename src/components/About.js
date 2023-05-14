import React from 'react';
import mekaverse from '../assets/image/mekaverse.jpeg'
import { Button } from './Button';

export const About = () => {
    return (
        <div className='flex mt-10'>
            <div className='w-2/6 mr-6'><img src={mekaverse} className='rounded-2xl h-72 w-96' /></div>
            <div className='w-4/6'>
                <div className='text-cyan-500 font-medium mb-4'>About Us</div>
                <div className='font-bold text-2xl mb-4'>DISCOVER MORE COLLECT AND SELL MORE NFTS</div>
                <div className='text-slate-400'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim
                </div>
                <div className='flex mt-1 h-6/6'>
                    <div className='flex-row h-3/6 w-2/6'>
                        <Button type='secondary' text={'Wide range of platforms'}></Button>
                        <Button type='secondary' text={'World class artists'}></Button>
                    </div>
                    <div className='flex-row h-3/6 w-2/6'>
                        <Button type='secondary' text={'Any type of assets'}></Button>
                        <Button type='secondary' text={'Fast payments'}></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}