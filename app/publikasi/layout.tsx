import React from 'react';
import MaxWLayout from '../MaxWLayout';

const DetailBeritaLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <MaxWLayout>
            {children}
        </MaxWLayout>

    );
};

export default DetailBeritaLayout;