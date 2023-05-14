import { Button } from "./Button"
import landingIcon from '../assets/image/landing-icon.jpeg'


export const Landing= () =>{

    return(
        <div className="flex">
            <div className="flex-auto lineheight-initial">
                <div className="text-83 font-bold"><b>DISCOVER </b></div>
                <div className="text-83 font-bold"><b>COLLECT SELL </b></div>
                <div className="text-83 font-bold"><b> DIGITAL NFT.</b></div>
            <div className="text-3xl text-slate-300"> Generate 10,000+ NFT Collection Only</div>
            <div className="text-3xl text-slate-300"> by uploading the layers, and get ready to</div>
            <div className="text-3xl text-slate-300 mb-8">sell your collection.</div>
                <Button type={"primary"} text={'Get Started'}/>
                <Button type={"seconday"} text={'Join Discord'}/>
            </div>
           
            <div className="flex-auto">
                <img src={landingIcon} className='float-right'/>
            </div>
        </div>
    )
}