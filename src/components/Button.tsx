import React from 'react';
import { motion } from 'framer-motion';
type ButtonProps = {
    label: string; // Define the type of the `label` prop
};

export const Button: React.FC<ButtonProps> = ({ label }) => {
    return <motion.button
    className={`bg-teal-600 py-[10px] px-5 rounded-lg  font-semibold uppercase text-[12px]  text-white/90 drop-shadow-md`}
    whileTap={{ scale: 0.85 }}
    >{label}</motion.button>; // Use a lowercase 'button' tag instead of a self-referencing 'Button'
};
