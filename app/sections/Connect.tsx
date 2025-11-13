import React, { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import emailjs from '@emailjs/browser'

const Connect = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [loading, setIsLoading] = useState(false)
    // service_jonjuwo
    // template_l48feea
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            await emailjs.send(
                "service_jonjuwo",
                "template_l48feea",
                {
                    name: formData.name,
                    to_name: "Salem Alswil",
                    from_email: formData.email,
                    to_email: "sa.al9wel@gmail.com",
                    message: formData.message,
                },
                "7qe5nnd3_we68k-2C"
            );
            setIsLoading(false);
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }
    return (
        <section id="connect" className="p-2 min-h-screen overflow-hidden">
            <div className=" relative">
                <SectionTitle title={"Connect"} />
            </div>
            <div className='mx-auto w-[90%] rounded-md sm:w-[70%] lg:w-[40%] bg-color9 h-[67vh] relative'>
                <div className='noise opacity-20'></div>
                <h1 className='text-xl sm:text-2xl text-black/70 p-2 '>Connect With Us</h1>
                <p className='text-sm sm:text-[16px] text-black/50 p-2 '>Whether you loking to build a new website, improve your existing platform, or bring a unique project to life, Im here to help</p>
                <form onSubmit={(e) => handleSubmit(e)} className='flex justify-center items-start px-6 flex-col mt-6'>
                    <label htmlFor="name" className='text-black/60'>Name</label>
                    <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} id='name' required type="text" placeholder='John Doe' className='w-full p-1  outline-0 border-b-2 rounded-md text-black/60 border-black/40' />
                    <label htmlFor="email" className='text-black/60 mt-2'>Email</label>
                    <input value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} id='email' required type="email" placeholder='johndoe@gmail.com' className='w-full p-1 outline-0 border-b-2 rounded-md text-black/60 border-black/40' />
                    <label htmlFor="message" className='text-black/60 mt-2'>Message</label>
                    <input value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} type='text' required id='message' placeholder='mesaage' className='w-full h-15 sm:h-20 md:h-28 lg:h-20 xl:h-25 p-1 outline-0 border-2  rounded-md text-black/60 border-black/40' />
                    <button disabled={loading} type="submit" className='mt-6 w-full bg-black/80 p-2 rounded-sm text-color1 hover:bg-black hover:text-white duration-300 cursor-pointer'>{loading ? "Submitting..." : "Submit"}</button>
                </form>
            </div>
        </section >
    )
}

export default Connect
