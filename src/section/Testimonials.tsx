import { TestimonialCard } from "../components/TestimonialCard";
import Profile_1 from '../assets/Profile.png';
import Profile_2 from '../assets/Profile2.png';
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Index from "../pages/index.astro";

export const Testimonials = () => {
    const testimonials = [
        {
            keyPhrase: 'Nebula s development has increased our productivity by 54% ',
            testimonial: 'Can t recommend Nebula enough, they absolutely transformed us into a productive machine!',
            name: 'John Fisher',
            position: 'CEO - T&B Real Estate',
            companyImage: Profile_1.src,
            personImage: Profile_2.src
        },
        {
            keyPhrase: 'Nebula s development has increased our productivity by 54% ',
            testimonial: 'Can t recommend Nebula enough, they absolutely transformed us into a productive machine!',
            name: 'John Fisher',
            position: 'CEO - T&B Real Estate',
            companyImage: Profile_1.src,
            personImage: Profile_2.src
        },
        {
            keyPhrase: 'Nebula s development has increased our productivity by 54% ',
            testimonial: 'Can t recommend Nebula enough, they absolutely transformed us into a productive machine!',
            name: 'John Fisher',
            position: 'CEO - T&B Real Estate',
            companyImage: Profile_1.src,
            personImage: Profile_2.src
        },
        {
            keyPhrase: 'Nebula s development has increased our productivity by 54% ',
            testimonial: 'Can t recommend Nebula enough, they absolutely transformed us into a productive machine!',
            name: 'John Fisher',
            position: 'CEO - T&B Real Estate',
            companyImage: Profile_1.src,
            personImage: Profile_2.src
        },
    ];

    const testimonialRef = useRef(null);
    const isInView = useInView(testimonialRef, { once: true, margin: '-10px' });

    // State to track if a card is hovered
    const [isHovered, setIsHovered] = useState(-1);

    return (
        <section ref={testimonialRef} id="Testimonials" className="m-12 mt-48">
            <div className="relative inline-flex">
                <motion.h1
                    initial={{ width: '0%' }}
                    animate={isInView ? { width: '100%' } : { width: '0%' }}
                    transition={{
                        ease: 'easeOut',
                        duration: 2,
                    }}
                    className="text-7xl text-nowrap overflow-clip absolute left-0 font-['Anton_SC'] text-teal-500 uppercase"
                >
                    Testimonials
                </motion.h1>
                <h1 className="text-7xl font-['Anton_SC'] text-[#9CB0A9] uppercase">
                    Testimonials
                </h1>
            </div>
            <div className="overflow-x-clip w-full">
                <motion.div
                    className="flex flex-row gap-4"
                    initial={{ x: 0 }}
                    animate={{ x: '-80%' }}
                    transition={{
                        repeat: Infinity,
                        ease: 'linear',
                        duration: 10 ,
                    }}
                    whileHover={{
                    transition: {
                        repeat: Infinity,
                        ease: 'linear',
                        duration: 80 ,}}}
                >
                    {[...testimonials,...testimonials, ...testimonials].map((testimonial, index) => (
                        <motion.div
                            key={index}
                            onMouseEnter={() => setIsHovered(index)}
                            onMouseLeave={() => setIsHovered(-1)}
                            whileHover={{
                                scale: 1.2,
                                transition: { type: 'spring', stiffness: 300,damping: 30  },
                            }}
                            className="testimonial-card "
                        >
                            <TestimonialCard {...testimonial} hover={isHovered === index} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
