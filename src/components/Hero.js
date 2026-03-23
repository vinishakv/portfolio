import HeroImg from '../assets/hero.png';
import { BsTwitterX, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Hero(){
    const config={
        subtitle: 'I am a FullStack Developer',
        social:{
            twitter: 'https://x.com/vinisha0909',
            Instagram: 'https://www.instagram.com/takdu_vini/',
            LinkedIn: 'https://www.linkedin.com/in/vinishakv/' 
        }
    };

    return(
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className='text-white text-6xl font-hero-font'>
                Hi!! <br/>Am Vinisha
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>

            <div className='flex py-10'>
                <a href={config.social.twitter} className='pr-5 hover:text-white'><BsTwitterX size={40}/></a>
                <a href={config.social.Instagram} className='pr-5 hover:text-white'><BsInstagram size={40}/></a>
                <a href={config.social.LinkedIn} className='pr-5 hover:text-white'><BsLinkedin size={40}/></a>
            </div>
        </div>
        <img className='md:w-1/3' src={HeroImg}/>
        </section>
    ); 
}