import Image, { StaticImageData } from 'next/image'
import { CgClose } from 'react-icons/cg'
import { motion } from 'motion/react'
import Link from 'next/link'
import { SiGithub } from 'react-icons/si'
import { BiWorld } from 'react-icons/bi'
type ComponentProps = {
    title: string,
    description: string
    features: string[],
    githup: string,
    preview: string,
    color: string,
    image: StaticImageData,
    tech: React.ReactNode[],
    closeModal: () => void
}
const ProjectDetails = ({ title, tech, description, color, features, githup, preview, image, closeModal }: ComponentProps) => {
    return (
        <>
            <div className='fixed z-50 inset-0 flex items-center justify-center w-full h-full p-2 overflow-hidden bg-black-50/10 backdrop-blur-sm'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className='bg-color9 rounded-md min-h-[50vh] max-h-[97vh] overflow-hidden  p-2 flex flex-col gap-2 w-full md:w-[60%] lg:w-[45%] mx-auto relative'>
                    <div className='noise opacity-20 h-full'></div>
                    <button onClick={closeModal} className=' sticky top-0 left-0 self-end text-black/70 hover:text-red-700 duration-200 cursor-pointer' ><CgClose size={30} /></button>
                    <Image src={image} alt={title} className='rounded-md border-2 w-full' />
                    <h1 className={`text-black/80 text-2xl ${color} rounded-sm text-white w-fit p-1`}>{title}</h1>
                    <p className='text-[12px] md:text-sm text-black/70 mt-2 mb-2'>{description}</p>
                    {features.map((item, idx) => {
                        return (
                            <p key={idx} className='text-[12px] md:text-sm text-black/60'>{item}</p>
                        )
                    })}
                    <div className='mt-2 flex justify-between p-2 items-center'>
                        <div className='flex justify-center items-center gap-2'>
                            {tech.map((item, idx) => (<p key={idx} className='text-black/70 border border-black/70 p-1 overflow-clip rounded-full'>{item}</p>))}
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <Link href={githup} className='text-black/70 border border-black/70 p-1 overflow-clip rounded-full'><SiGithub size={30} /></Link>
                            <Link href={preview} className='text-black/70 border border-black/70 p-1 overflow-clip rounded-full'><BiWorld size={30} /></Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default ProjectDetails
