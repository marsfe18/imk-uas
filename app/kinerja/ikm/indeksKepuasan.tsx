import { iKepuasan } from '@/components/data/dataKinerja';
import FileCard from '@/components/File-unduh';
import { Divider } from 'antd';
import React from 'react';

const IndeksKonten: React.FC = () => {
    return (
        <>
            <header id='indeks1'>
                <h2 className="text-heading2 lg:text-heading1">Indeks Kepuasan Masyarakat</h2>
            </header>
            <Divider style={{ borderTop: '4px solid #8A8817' }} />
            <div id='ikm'>
                <p className="text-xl leading-relaxed">
                    Pengukuran Indek Kepuasan Masyarakat (IKM), merupakan tingkat hasil kepuasan yang dirasakan oleh masyarakat dalam pelayanan publik yang diberikan oleh Kementerian Pertanian.
                </p>
                <div>
                    {
                        iKepuasan.map((data, index) => (
                            <div key={index} className='mt-4'>
                                <FileCard title={data.title} fileSize={data.fileSize} fileLink={data.fileLink} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default IndeksKonten;