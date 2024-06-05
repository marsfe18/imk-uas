"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="border bg-white text-black py-8">
        <div className="container px-4 sm:px-6 md:px-16 lg:px-36 mb-12">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <div className="flex items-center mb-4">
                <img src="logo.png" alt="Logo Kementerian Pertanian" className="h-12 mr-2" />
                <h2 className="text-xl font-bold">Kementerian Pertanian</h2>
              </div>
              <p className="mb-2"><i className="fas fa-envelope mr-2"></i> info@pertanian.go.id</p>
              <p className="mb-2"><i className="fab fa-whatsapp mr-2"></i> +62 21 1234567</p>
              <p className="mb-4"><i className="fas fa-map-marker-alt mr-2"></i> Jl. RM. Harsono No.3, Ragunan, Jakarta Selatan</p>
              <div className="flex">
                <a href="#" className="mr-4 text-black hover:text-gray-300">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="#" className="mr-4 text-black hover:text-gray-300">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a href="#" className="mr-4 text-black hover:text-gray-300">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="#" className="text-black hover:text-gray-300">
                  <i className="fab fa-youtube fa-2x"></i>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h3 className="text-lg font-bold mb-4">Fitur Lainnya</h3>
              <ul className="list-none">
                <li className="mb-2"><a href="#" className="text-black hover:text-gray-300">Link 1</a></li>
                <li className="mb-2"><a href="#" className="text-black hover:text-gray-300">Link 2</a></li>
                <li className="mb-2"><a href="#" className="text-black hover:text-gray-300">Link 3</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-bold mb-4">Tautan Lainnya</h3>
              <ul className="list-none">
                <li className="mb-2"><a href="#" className="text-black hover:text-gray-300">Link 1</a></li>
                <li className="mb-2"><a href="#" className="text-black hover:text-gray-300">Link 2</a></li>
                <li className="mb-2"><a href="#" className="text-black hover:text-gray-300">Link 3</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
