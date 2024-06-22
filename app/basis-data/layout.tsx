import React from 'react';
import MaxWLayout from '../MaxWLayout';
import Judul2 from '@/components/Tittle/judul2';

const BasisDataLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <MaxWLayout>
            <header className='text-gray-700 '>
                <Judul2 text='BASIS DATA' />
            </header>
            {children}
        </MaxWLayout>

    );
};

export default BasisDataLayout;