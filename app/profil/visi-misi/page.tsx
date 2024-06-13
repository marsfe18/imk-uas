"use client"
import React, { useState } from 'react';
import VisiMisi from '../visiMisi';
import { Anchor } from 'antd';


const VisiPage: React.FC = () => {
    const [targetOffset, setTargetOffset] = useState<number>();
    return (
        <div className='px-6 md:px-10 xl:px-16 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center'>
            <div className=" bg-white text-black pb-10 md:pr-10">
                <VisiMisi />
            </div>
            <div className="anchor-profile mt-10 min-w-[160px]">
                <Anchor
                    offsetTop={64}
                    targetOffset={targetOffset}
                    items={[
                        {
                            key: 'visi',
                            href: '#visi',
                            title: <p className='text-lg'>Visi</p>,
                        },
                        {
                            key: 'visi2',
                            href: '#visi2',
                            title: <p className='text-lg'>Makna dari Visi</p>,
                        },
                        {
                            key: 'misi',
                            href: '#misi',
                            title: <p className='text-lg'>Misi</p>,
                        },
                        {
                            key: 'misi2',
                            href: '#misi2',
                            title: <p className='text-lg'>Makna dari Misi</p>,
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default VisiPage;
