import React from 'react';
import { Download, Eye } from 'lucide-react';
import { handleDownload } from '../utils/download';

const ResumeCard = ({ resume, onPreview }) => {
  const onDownload = (e) => {
    e.stopPropagation();
    handleDownload(resume.pdfUrl, resume.downloadName);
  };

  return (
    <div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img 
          src={resume.previewImageUrl} 
          alt={resume.title}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
          <button
            onClick={() => onPreview(resume)}
            className="p-3 bg-white/10 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm border border-white/30 transform hover:scale-110"
            title="Preview"
          >
            <Eye className="w-6 h-6" />
          </button>
          <button
            onClick={onDownload}
            className="p-3 bg-white/10 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm border border-white/30 transform hover:scale-110"
            title="Download PDF"
          >
            <Download className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 truncate" title={resume.title}>
          {resume.title}
        </h3>
        <p className="text-sm text-gray-500 mb-4">PDF Format</p>
        
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => onPreview(resume)}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-medium transition-colors text-sm"
          >
            <Eye className="w-4 h-4" />
            Preview
          </button>
          <button
            onClick={onDownload}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-xl font-medium transition-colors text-sm shadow-lg hover:shadow-xl"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
