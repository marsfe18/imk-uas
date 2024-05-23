import Image from "next/image";

export default function Home() {
  return (
    <html>
      <head />
      <body>
        <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Selamat Datang di Kementrian Pertanian
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Pusat informasi dan layanan terkait pertanian di Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Informasi Pertanian
              </h2>
              <p className="text-gray-600">
                Dapatkan informasi terbaru tentang pertanian, termasuk berita,
                tips, dan panduan praktis.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Layanan Penyuluhan
              </h2>
              <p className="text-gray-600">
                Konsultasikan masalah dan dapatkan saran dari para ahli
                penyuluhan pertanian kami.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Program Bantuan
              </h2>
              <p className="text-gray-600">
                Cari tahu tentang program bantuan pemerintah untuk petani dan
                peternak.
              </p>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}