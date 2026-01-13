import React, { useState } from 'react';
import { resumes } from './data/resumes';
import ResumeCard from './components/ResumeCard';
import ResumePreviewModal from './components/ResumePreviewModal';
import { FileText } from 'lucide-react';

function App() {
  const [selectedResume, setSelectedResume] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 selection:bg-black selection:text-white font-[Inter]">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header */}
        <header className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-4 animate-fade-in-up">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-600">Available for hire</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
            Resume <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Store</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Select, preview, and download the latest version of my professional resume.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {resumes.map((resume) => (
            <ResumeCard
              key={resume.id}
              resume={resume}
              onPreview={setSelectedResume}
            />
          ))}
        </div>
        
        {/* Empty State */}
        {resumes.length === 0 && (
          <div className="text-center py-20 bg-white/50 rounded-3xl border border-dashed border-gray-300">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900">No resumes uploaded yet</h3>
            <p className="text-gray-500 mt-2">Check back later for updates.</p>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-24 text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Nikhil Pahuja. All rights reserved.</p>
        </footer>
      </div>

      {/* Modal */}
      {selectedResume && (
        <ResumePreviewModal
          resume={selectedResume}
          onClose={() => setSelectedResume(null)}
        />
      )}
    </div>
  );
}

export default App;
