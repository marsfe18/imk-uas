import React from 'react';
import { Empty } from 'antd';
import CardBeritaMain from '@/components/Card/cardBeritaMain';
import { BukuProps } from '@/utils/dataType';
import CardBukuMagazine from '../Card/cardBukuMagazine';
import { searchBuku } from '@/utils/searchGlobal';
import { useSearchParams } from 'next/navigation';
import { defaultPage, defaultPerPage } from '@/utils/constants';
import { PaginationList } from './PaginationList';
import ItemCounter from './ItemCounter';


interface BukuListProps {
    query: string;
}

const BukuKontenList: React.FC<BukuListProps> = ({ query }) => {
    const listBuku = searchBuku(query);
    const searchParams = useSearchParams();
    const page = Number(searchParams.get('page') ?? defaultPage);
    const per_page = Number(searchParams.get('per_page') ?? 6);
    return (
        <div>
            <ItemCounter jumlah={listBuku.length} page={page} per_page={per_page} />
            {listBuku.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-3">
                    {listBuku.slice((page - 1) * per_page, page * per_page).map((item, index) => (
                        <CardBukuMagazine
                            judul={item.judul}
                            gambar={item.gambar}
                            query={query}
                            link={item.link}
                            key={index}
                        />
                    ))}
                </div>
            ) : (
                <Empty style={{ marginTop: 10 }} description="Tidak ada hasil yang ditemukan" />
            )}
            <div className='mt-4'><PaginationList page={page} per_page={per_page} listLenght={listBuku.length} /></div>
        </div>
    );
};

export default BukuKontenList;
