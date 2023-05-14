import { useState } from 'react';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { Toggle } from './components/toggle';
import { Landing } from './components/Landing';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Feature } from './components/Features';
import { Collection } from './components/Collection';
import { Footer } from './components/Footer';
import icon from './assets/image/icon.jpeg'
import { Faqs } from './components/Faqs';


function App() {
  const [mode, setMode] = useState(false);
  return (
    <div className={!mode ? ' p-5 bg-gradient-to-tl from-purple-950 to-black text-white px-36' : ' p-5 text-black px-36'}>
      <div className='flex h-16 '>
        <div className='flex-auto flex justify-center items-center' ><img className='h-8 w-36' src={icon} /></div>
        <div className='flex-auto flex w-full justify-center items-center'><Header /></div>
        <div className='flex-auto flex justify-center items-center'>
          <div className='flex justify-center items-center'>
            <Toggle setMode={setMode} mode={mode} />
            <Button type='primary' text={'Connect wallet'} />
          </div>
        </div>
      </div>
      <Landing />
      <Stats />
      <About />
      <Feature />
      <Collection />
      <Faqs/>
      <Footer />

    </div>
  );
}

export default App;
