import resumeImg from '../assets/resume.jpg';
export default function Contact(){
    return <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
        <div className='flex flex-col items-center '>
                <h1 className='text-4xl border-b-4 border-secondary mb-2 w-[100px] font-bold'>Contact</h1>
                <p className='pb-5'>If you want to discuss more in detail, please Contact me</p>   
                <p className='py-2'><span className='font-bold'>Email:</span>vinishakoravenkatesalu@gmail.com</p>
                <p className='py-2'><span className='font-bold'>Phone:</span>+1-(514)-###-####</p>
        </div>
    </section>
}