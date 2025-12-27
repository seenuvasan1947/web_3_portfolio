# 🚀 Deployment Guide

This guide will help you run the portfolio locally and deploy it to GitHub Pages.

---

## 📋 Table of Contents

- [Local Development](#local-development)
- [GitHub Pages Deployment](#github-pages-deployment)
- [Custom Domain Setup](#custom-domain-setup)
- [Troubleshooting](#troubleshooting)

---

## 💻 Local Development

### Prerequisites

No special prerequisites needed! This is a pure HTML/CSS/JavaScript portfolio with no build process required.

### Method 1: Direct File Opening

1. **Navigate to the project directory**
   ```bash
   cd web_3_portfolio
   ```

2. **Open `index.html` in your browser**
   - Double-click `index.html`, or
   - Right-click → Open with → Your preferred browser

### Method 2: Using Python HTTP Server (Recommended)

This method is better for testing as it serves files over HTTP instead of the `file://` protocol.

1. **Navigate to the project directory**
   ```bash
   cd web_3_portfolio
   ```

2. **Start a local server**

   **Python 3:**
   ```bash
   python -m http.server 8000
   ```

   **Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```

3. **Open your browser**
   ```
   http://localhost:8000
   ```

### Method 3: Using Node.js

If you have Node.js installed:

1. **Install `serve` globally** (one-time setup)
   ```bash
   npm install -g serve
   ```

2. **Navigate to the project directory**
   ```bash
   cd web_3_portfolio
   ```

3. **Start the server**
   ```bash
   serve
   ```

4. **Open your browser** at the URL shown (usually `http://localhost:3000`)

### Method 4: Using VS Code Live Server

If you're using Visual Studio Code:

1. Install the **Live Server** extension
2. Right-click on `index.html`
3. Select **"Open with Live Server"**

---

## 🌐 GitHub Pages Deployment

### Step 1: Prepare Your Repository

1. **Ensure all files are committed**
   ```bash
   git status
   ```

2. **Add any uncommitted files**
   ```bash
   git add .
   ```

3. **Commit your changes**
   ```bash
   git commit -m "Add Web3 security portfolio"
   ```

4. **Push to GitHub**
   ```bash
   git push origin main
   ```

   > **Note:** If your default branch is `master`, use `git push origin master`

### Step 2: Enable GitHub Pages

#### Method 1: Via GitHub Settings (Recommended)

1. **Go to your repository on GitHub**
   ```
   https://github.com/seenuvasan1947/web_3_portfolio
   ```

2. **Click on "Settings"** (top navigation bar)

3. **Scroll down to "Pages"** (left sidebar under "Code and automation")

4. **Configure the source:**
   - **Source:** Deploy from a branch
   - **Branch:** Select `main` (or `master`)
   - **Folder:** Select `/ (root)`

5. **Click "Save"**

6. **Wait for deployment** (usually takes 1-2 minutes)
   - GitHub will show a message: "Your site is ready to be published at..."
   - Refresh the page after a minute to see the live URL

7. **Access your portfolio**
   ```
   https://seenuvasan1947.github.io/web_3_portfolio/
   ```

#### Method 2: Using GitHub Actions (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**Commit and push:**
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment workflow"
git push origin main
```

---

## 🌍 Custom Domain Setup (Optional)

If you want to use a custom domain like `portfolio.yourname.com`:

### Step 1: Configure DNS

Add these DNS records at your domain provider:

**For apex domain (yourname.com):**
```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

**For subdomain (portfolio.yourname.com):**
```
CNAME portfolio seenuvasan1947.github.io
```

### Step 2: Configure GitHub Pages

1. Go to **Settings → Pages**
2. Under **Custom domain**, enter your domain
3. Click **Save**
4. Wait for DNS check to complete
5. Enable **Enforce HTTPS** (recommended)

### Step 3: Add CNAME File

Create a file named `CNAME` in your repository root:

```
portfolio.yourname.com
```

Commit and push:
```bash
git add CNAME
git commit -m "Add custom domain"
git push origin main
```

---

## 🔧 Troubleshooting

### Issue: Page Not Loading

**Solution:**
1. Check that `index.html` is in the root directory
2. Ensure the branch is set correctly in Settings → Pages
3. Wait 2-3 minutes after enabling GitHub Pages
4. Clear browser cache and try again

### Issue: Styles Not Loading

**Solution:**
1. Check that `styles.css` is in the same directory as `index.html`
2. Verify the file paths in `index.html`:
   ```html
   <link rel="stylesheet" href="styles.css">
   <script src="script.js"></script>
   ```
3. If using a subdirectory, update paths accordingly

### Issue: 404 Error on GitHub Pages

**Solution:**
1. Ensure your repository is public
2. Check that GitHub Pages is enabled in Settings
3. Verify the correct branch is selected
4. Make sure `index.html` exists in the root

### Issue: Changes Not Reflecting

**Solution:**
1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Wait a few minutes for GitHub Pages to rebuild
3. Check the Actions tab for deployment status
4. Verify changes are pushed to the correct branch

### Issue: Animations Not Working

**Solution:**
1. Ensure JavaScript is enabled in your browser
2. Check browser console for errors (F12)
3. Verify `script.js` is loading correctly
4. Try a different browser to rule out compatibility issues

---

## 📊 Deployment Checklist

Before deploying, ensure:

- [ ] All files are committed and pushed
- [ ] `index.html` is in the root directory
- [ ] All links are relative (not absolute file paths)
- [ ] Social media links are updated
- [ ] Personal information is correct
- [ ] Images are optimized
- [ ] Tested locally in multiple browsers
- [ ] No console errors in browser DevTools

---

## 🔄 Updating Your Portfolio

To update your deployed portfolio:

1. **Make changes locally**
   ```bash
   # Edit files as needed
   ```

2. **Test changes locally**
   ```bash
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

3. **Commit and push**
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

4. **Wait for deployment** (1-2 minutes)

5. **Verify changes** at your GitHub Pages URL

---

## 📱 Testing Checklist

Before going live, test your portfolio on:

### Browsers
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Devices
- [ ] Desktop (1920x1080 and higher)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667 and similar)

### Features
- [ ] All animations work smoothly
- [ ] Counter animations trigger on scroll
- [ ] All links open correctly
- [ ] Hover effects work on all cards
- [ ] Navigation scrolls to correct sections
- [ ] Page loads in under 3 seconds

---

## 🎨 Performance Optimization

Your portfolio is already optimized, but here are some tips:

### Image Optimization
If you add images later:
- Use WebP format for better compression
- Optimize images with tools like TinyPNG
- Use lazy loading for images below the fold

### Caching
GitHub Pages automatically handles caching, but you can add:

```html
<meta http-equiv="Cache-Control" content="max-age=31536000">
```

### CDN
GitHub Pages uses a CDN automatically, so your site will load fast globally.

---

## 📈 Analytics (Optional)

To track visitors, add Google Analytics:

1. **Get your tracking ID** from Google Analytics
2. **Add to `index.html`** before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🆘 Need Help?

If you encounter issues:

1. **Check GitHub Pages Status:** [githubstatus.com](https://www.githubstatus.com/)
2. **Review GitHub Pages Docs:** [docs.github.com/pages](https://docs.github.com/en/pages)
3. **Check browser console** for JavaScript errors
4. **Verify file paths** are correct and relative

---

## 🎉 Success!

Once deployed, your portfolio will be live at:

```
https://seenuvasan1947.github.io/web_3_portfolio/
```

Share this link on:
- LinkedIn profile
- Twitter/X bio
- GitHub profile README
- Email signature
- Resume/CV

---

<div align="center">

**Happy Deploying! 🚀**

If you found this guide helpful, consider starring the repository!

</div>
