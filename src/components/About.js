import AboutImg from '../assets/about.png';
export default function About(){
    const config ={
        line1:'My name is Vinisha. I am a full-stack developer',
        line2:'I am proficient in skills like Java, Backend API, Spring Boot, Tailwind CSS',
        line3:'In Backend I know tools like Node.js, Express.js, MongoDb',
    }
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src ={AboutImg}></img>
        </div>
        <div className='md:w-1/2 flex justify-center '>
            <div className='flex flex-col flex justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-2 w-[130px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
            
        </div>
    </section>
}