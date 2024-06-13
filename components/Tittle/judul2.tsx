// components/Title.tsx
import React from 'react';

interface TitleProps {
    text: string;
}

const Judul2: React.FC<TitleProps> = ({ text }) => {
    return (
        <>
            <h2 className="text-lg sm:text-xl md:text-2xl">{text}</h2>
        </>
    );
};

export default Judul2;
