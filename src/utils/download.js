export const handleDownload = async (url, filename) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    // Force the content type to octet-stream to prevent Safari from trying to preview it
    const octetBlob = new Blob([blob], { type: 'application/octet-stream' });
    const blobUrl = window.URL.createObjectURL(octetBlob);
    
    // Check if device is iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename || "Nikhil's_resume.pdf";
    
    // For normal browsers
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Small timeout to allow iOS to register the click before revoking
    setTimeout(() => {
      window.URL.revokeObjectURL(blobUrl);
    }, 100);

  } catch (error) {
    console.error('Download failed:', error);
    // Fallback: If fetch fails, try to force download via a temporary form 
    // (Another trick to bypass some browser restrictions)
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename || "Nikhil's_resume.pdf");
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
