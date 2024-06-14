import { dipa } from "./dataAnggaran";
import { dataBerita } from "./dataBerita";
import { iKepuasan, lKEselon, lKeuangan, lKinerja, lTahunan, lTPpid, rKAnggaran, rKTahunan, rKUnit } from "./dataKinerja";
import { dataPengumuman } from "./dataPengu";

export interface PengumumanProps {
    judul: string;
    nomor: string;
    file: string;
    deskripsi: string;
    gambar: string;
}

export interface AlamatType {
    key: React.Key;
    atase: string;
    pejabat: string;
    alamat: string;
    email: String;
    phone: String;
    fax: String;
}

export interface DipaProps {
    judul: string;
    t_2020: string;
    t_2021: string;
    t_2022: string;
    t_2023: string;
    t_2024: string;
    ukuran: string;
}

export interface FileProps {
    judul: string;
    ukuran: string;
    file: string;
}


export interface BeritaProps {
    tanggal: Date;
    author: string;
    judul: string;
    deskripsi: string;
    ringkasan: string;
    gambar: string;
}

export interface PvtProps {
    judul: string;
    tanggal: Date;
    gambar: string;
    link: string;
}

export interface DataGlobalProps {
    judul: string;
    gambar: string;
    file?: string;
    tanggal?: Date;
    tipe: 'Berita' | 'Pengumuman' | 'Laporan' | 'Rencana Kerja' | 'Anggaran';
}
