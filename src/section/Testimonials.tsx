import { TestimonialCard } from "../components/TestimonialCard"
import Profile_1 from '../Assets/Profile.png'
import Profile_2 from '../Assets/Profile2.png'
import { motion } from "framer-motion"

export const Testimonials = () => {
    const testimonials = [{
        keyPhrase : 'Nebula s development has increased our productivity by 54% ',
        testimonial : 'Can t recommend Nebula enough, they absolutely transformed us into a productive machine!',
        name : 'John Fisher',
        position : 'CEO - T&B Real Estate',
        companyImage : Profile_1.src,
        personImage : Profile_2.src
    },
    {
        keyPhrase : 'Nebula s development has increased our productivity by 54% ',
        testimonial : 'Can t recommend Nebula enough, they absolutely transformed us into a productive machine!',
        name : 'John Fisher',
        position : 'CEO - T&B Real Estate',
        companyImage : Profile_1.src,
        personImage : Profile_2.src
    },{
        keyPhrase : 'Nebula s development has increased our productivity by 54% ',
        testimonial : 'Can t recommend Nebula enough, they absolutely transformed us into a productive machine!',
        name : 'John Fisher',
        position : 'CEO - T&B Real Estate',
        companyImage : Profile_1.src,
        personImage : Profile_2.src
    },{
        keyPhrase : 'Nebula s development has increased our productivity by 54% ',
        testimonial : 'Can t recommend Nebula enough, they absolutely transformed us into a productive machine!',
        name : 'John Fisher',
        position : 'CEO - T&B Real Estate',
        companyImage : Profile_1.src,
        personImage : Profile_2.src
    },]
    return <div className="m-12 mt-48">
        <div >
            <h1 className="text-7xl font-['Anton_SC'] text-[#9CB0A9]  uppercase">Testimonials</h1>
        </div>
        <div className="overflow-x-clip w-full">
        <motion.div className="flex flex-row gap-4 "
            initial={{ x:0 }}
            animate={{ x:'-50%'}}
            transition={{
                repeat: Infinity,
                ease: 'linear',
                duration : 18
            }}
        >
{        [...testimonials,...testimonials].map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
        ))}
        </motion.div>
        </div>
    </div>
}
