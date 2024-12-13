import React from 'react';

type ButtonProps = {
    label: string; // Define the type of the `label` prop
};

export const Button: React.FC<ButtonProps> = ({ label }) => {
    return <button className={`bg-[#00CBA9] py-[10px] px-5 rounded-lg  font-semibold uppercase text-[12px]  text-white/90 drop-shadow-md`}>{label}</button>; // Use a lowercase 'button' tag instead of a self-referencing 'Button'
};
