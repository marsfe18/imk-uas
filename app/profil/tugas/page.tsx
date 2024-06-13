"use client"
import React, { useState } from 'react';
import { Anchor } from 'antd';
import Tugas from '../tugas';


const VisiPage: React.FC = () => {
    const [targetOffset, setTargetOffset] = useState<number>();
    return (
        <div className='px-6 md:px-10 xl:px-16 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center'>
            <div className=" bg-white text-black pb-10 md:pr-10">
                <Tugas />
            </div>
            <div className="anchor-profile mt-10 min-w-[160px]">
                <Anchor
                    offsetTop={64}
                    targetOffset={targetOffset}
                    items={[
                        {
                            key: 'tugas',
                            href: '#tugas',
                            title: <p className='text-lg'>Tugas</p>,
                        },
                        {
                            key: 'fungsi',
                            href: '#fungsi',
                            title: <p className='text-lg'>Fungsi</p>,
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default VisiPage;
