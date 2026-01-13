import React, { useEffect } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
import { handleDownload } from '../utils/download';

const ResumePreviewModal = ({ resume, onClose }) => {
  if (!resume) return null;

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const onDownload = () => {
    handleDownload(resume.pdfUrl, resume.downloadName);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" />
      
      <div 
        className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white z-10">
          <h2 className="text-xl font-bold text-gray-800">{resume.title}</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={onDownload}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-black text-white hover:bg-gray-800 rounded-lg transition-colors text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-8 flex justify-center">
          <div className="relative shadow-2xl max-w-4xl w-full">
            <img
              src={resume.previewImageUrl}
              alt={resume.title}
              className="w-full h-auto block bg-white"
            />
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="sm:hidden p-4 border-t border-gray-100 bg-white">
          <button
            onClick={onDownload}
            className="flex w-full items-center justify-center gap-2 px-4 py-3 bg-black text-white hover:bg-gray-800 rounded-xl transition-colors font-medium shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumePreviewModal;
