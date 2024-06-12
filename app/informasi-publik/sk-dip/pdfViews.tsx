// pages/pdf-viewer.tsx
import { NextPage } from 'next';

const PdfViewer: NextPage = () => {
    return (
        <div className="container mx-auto my-8 p-4 border-2 border-gray-400">
            <iframe
                src="sk_dip.pdf"
                className="w-full h-screen"
                title="PDF Viewer"
            >
                This browser does not support PDFs. Please download the PDF to view it:
                <a href="sk_dip.pdf">Download PDF</a>.
            </iframe>
        </div>
    );
};

export default PdfViewer;
