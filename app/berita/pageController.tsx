import React from "react";
import { defaultPerPage, beritaLength } from "./page";
import Link from "next/link";
import { useRouter } from "next/router";
import { Pagination } from "antd";

interface PagesControllerProps {
    page: number;
    router: NextRouter;
}

export const PagesController: React.FC<PagesControllerProps> = ({ page, router }) => {
    // const router = useRouter();
    const setPage = (page) => {
        const newUrl = `/berita?${new URLSearchParams({ page: String(page) }).toString()}`;
        console.log(newUrl);
        router.push(newUrl, undefined, { shallow: true });
    };
    console.log(defaultPerPage);
    return (
        <div className='flex justify-center'>
            <Pagination current={page} defaultCurrent={1} total={beritaLength} pageSize={defaultPerPage} onChange={setPage} />
        </div>
    )
}