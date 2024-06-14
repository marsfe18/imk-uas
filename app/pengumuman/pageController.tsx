import React from "react";
import { penguLength, defaultPerPage } from '@/utils/constants';
import { Pagination } from "antd";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface PagesControllerProps {
    page: number;
    router: AppRouterInstance;
}

export const PagesController: React.FC<PagesControllerProps> = ({ page, router }) => {
    // const router = useRouter();
    const setPage = (newPage: number) => {
        const newUrl = `/pengumuman?${new URLSearchParams({ page: String(newPage) }).toString()}`;
        console.log(newUrl);
        router.push(newUrl, undefined);
    };
    // console.log(defaultPerPage);
    return (
        <div className='flex justify-center'>
            <Pagination current={page} defaultCurrent={1} total={penguLength} pageSize={defaultPerPage} onChange={setPage} />
        </div>
    )
}