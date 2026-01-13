# Resume Store

A simple, production-ready web app to store, preview, and download your resumes.

## Features

- 📱 **Responsive Design**: Works perfectly on mobile and desktop
- 🖼️ **Visual Preview**: Large preview of your resume before downloading
- ⚡ **Fast & Lightweight**: Built with React and Vite
- 💅 **Modern UI**: Clean aesthetics with styling powered by Tailwind CSS

## 🚀 How to Deploy on Vercel

1. **Push to GitHub**
   - Initialize a git repository: `git init`
   - Add files: `git add .`
   - Commit: `git commit -m "Initial commit"`
   - Create a repository on GitHub (keep it public or private)
   - Push your code to GitHub

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) and sign up/login
   - Click **Add New** > **Project**
   - Import your GitHub repository
   - Keep all default settings (Framework Preset: Vite)
   - Click **Deploy**

Your app will be live in seconds!

## 📝 How to Add New Resumes

1. **Add PDF File**
   - Place your new resume PDF in `public/resumes/`
   - Example: `public/resumes/MyNewResume.pdf`

2. **Add Preview Image**
   - Take a screenshot of your PDF
   - Place the image (PNG/JPG) in `public/previews/`
   - Example: `public/previews/MyNewResume-preview.png`

3. **Update Data**
   - Open `src/data/resumes.js`
   - Add a new object to the array:

```javascript
{
  id: 3, // Unique ID
  title: "New Role Resume",
  pdfUrl: "/resumes/MyNewResume.pdf",
  previewImageUrl: "/previews/MyNewResume-preview.png",
  downloadName: "Nikhil's_resume.pdf" // Customized download filename
}
```

## 🛠️ Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
