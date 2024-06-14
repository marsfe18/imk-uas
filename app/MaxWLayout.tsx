import React from 'react';

const MaxWLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="px-6 md:px-10 xl:px-24 max-w-[1440px] mx-auto my-0 pb-10">
            {children}
        </div>
    );
};

export default MaxWLayout;