import resumeImg from '../assets/resume.jpg';
export default function Resume(){
    const config ={
        link: ''
    }
    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src ={resumeImg}></img>
        </div>
        <div className='md:w-1/2 flex justify-center '>
            <div className='flex flex-col flex justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-2 w-[100px] font-bold'>Resume</h1>
                <p className='pb-5'>You can view my resume <a className='btn' href='#'>Download</a>  </p>
            </div>
            
        </div>
    </section>
}