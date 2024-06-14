import React from 'react';
import MaxWLayout from '../MaxWLayout';

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <MaxWLayout>
            {children}
        </MaxWLayout>

    );
};

export default ProfileLayout;