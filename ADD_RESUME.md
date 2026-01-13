# How to Add a New Resume

Follow these 3 simple steps to add a new resume version to your Resume Store.

## Step 1: Add Your Files
1.  **Rename your files** to something simple (e.g., `Software_Eng.pdf` and `Software_Eng_Preview.png`).
2.  **Add the PDF** to the `public/resumes/` folder.
3.  **Add the Preview Image** to the `public/previews/` folder.
    *   *Tip: You can take a screenshot of your PDF to create the preview image.*

---

## Step 2: Update the Data File
1.  Open the file: `src/data/resumes.js`
2.  Add a new block to the `resumes` list.

**Copy and paste this template:**

```javascript
  {
    id: 3,                                      // Make sure this ID is unique (1, 2, 3...)
    title: "Software Engineer Role",            // The title shown on the card
    pdfUrl: "/resumes/Software_Eng.pdf",        // Your PDF filename from Step 1
    previewImageUrl: "/previews/Software_Eng_Preview.png", // Your Image filename from Step 1
    downloadName: "Nikhil_Pahuja_Resume.pdf"    // The filename users see when they download
  },
```

---

## Step 3: Deploy
Open your terminal in the project folder and run these commands to push your changes to GitHub. Vercel will automatically update your site.

```bash
git add .
git commit -m "Added new software engineer resume"
git push
```

**That's it! 🚀**
Your new resume will be live in about 1 minute.
