import { dipa } from "./dataAnggaran";
import { dataBerita } from "./dataBerita";
import { iKepuasan, lKEselon, lKeuangan, lKinerja, lTahunan, lTPpid, rKAnggaran, rKTahunan, rKUnit } from "./dataKinerja";
import { dataPengumuman } from "./dataPengu";
import { BeritaProps, DataGlobalProps, FileProps, PengumumanProps } from "./dataType";


export const convertToGlobalData = (): DataGlobalProps[] => {
    let globalData: DataGlobalProps[] = [];

    // Konversi data berita
    globalData = globalData.concat(dataBerita.map((item: BeritaProps) => ({
        judul: item.judul,
        gambar: item.gambar,
        file: '',
        tanggal: item.tanggal,
        tipe: 'Berita'
    })));

    // Konversi data pengumuman
    globalData = globalData.concat(dataPengumuman.map((item: PengumumanProps) => ({
        judul: item.judul,
        gambar: item.gambar,
        file: item.file,
        tanggal: new Date(), // Set a placeholder date or modify accordingly
        tipe: 'Pengumuman'
    })));

    // Konversi data anggaran
    globalData = globalData.concat(dipa.map((item: FileProps) => ({
        judul: item.judul,
        gambar: '/pdf.webp',
        file: item.file,
        tanggal: undefined,
        tipe: 'Anggaran'
    })));

    // Tambahkan konversi data lainnya seperti rKAnggaran, rKTahunan, rKUnit sesuai kebutuhan

    return globalData;
};
