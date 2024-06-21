import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import { useRouter } from 'next/navigation';

interface SearchInputProps {
    initialQuery?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ initialQuery = "" }) => {
    const [query, setQuery] = useState(initialQuery);
    const router = useRouter();

    const handleSearch = () => {
        const searchParams = new URLSearchParams({
            query,
            sort: 'terbaru',
            kat: 'semua'
        });
        const newUrl = `/pencarian?${searchParams.toString()}`;
        window.history.pushState({}, '', newUrl);
        window.location.reload();
    }

    return (
        <div className='mt-3'>
            <Space.Compact style={{ width: '100%', height: '72px' }}>
                <Input
                    placeholder='Cari...'
                    style={{ fontSize: '36px', padding: '0 1rem', borderRadius: 0 }}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onPressEnter={handleSearch}
                />
                <Button
                    style={{ height: '72px', fontSize: '40px', borderRadius: 0, display: 'flex', alignItems: 'center', backgroundColor: '#E2EED9' }}
                    onClick={handleSearch}
                >
                    <SearchOutlined color='white' />
                </Button>
            </Space.Compact>
        </div>
    );
};

export default SearchInput;
