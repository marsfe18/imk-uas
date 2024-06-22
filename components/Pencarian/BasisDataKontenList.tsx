import React from 'react';
import { Empty } from 'antd';
import { MagazineProps } from '@/utils/dataType';
import CardBukuMagazine from '../Card/cardBukuMagazine';
import FilterMagazine from '../Filter/pencarian/filterMagazine';
import { useSearchParams } from 'next/navigation';
import { searchFilterMaga } from '@/utils/searchGlobal';
import { defaultPage } from '@/utils/constants';
import { PaginationList } from './PaginationList';
import ItemCounter from './ItemCounter';


interface MagazineListProps {
    query: string;
}

const MagazineKontenList: React.FC<MagazineListProps> = ({ query }) => {
    const searchParams = useSearchParams();
    const sort = searchParams.get('sort') || "terbaru";
    const kat = searchParams.get('kat') || "semua";
    const startDate = searchParams.get('startDate') as string | undefined;
    const endDate = searchParams.get('endDate') as string | undefined;

    const listMagazine = searchFilterMaga(query, sort, startDate, endDate);

    const page = Number(searchParams.get('page') ?? defaultPage);
    const per_page = Number(searchParams.get('per_page') ?? 6);

    return (
        <div>
            <FilterMagazine query={query} />
            <ItemCounter jumlah={listMagazine.length} page={page} per_page={per_page} />
            {listMagazine.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-3">
                    {listMagazine.slice((page - 1) * per_page, page * per_page).map((item, index) => (
                        <CardBukuMagazine
                            judul={item.judul}
                            gambar={item.gambar}
                            query={query}
                            link={item.link}
                            key={index}
                            tanggal={item.tanggal}
                        />
                    ))}
                </div>
            ) : (
                <Empty style={{ marginTop: 10 }} description="Tidak ada hasil yang ditemukan" />
            )}
            <div className='mt-4'><PaginationList page={page} per_page={per_page} listLenght={listMagazine.length} /></div>
        </div>
    );
};

export default MagazineKontenList;
