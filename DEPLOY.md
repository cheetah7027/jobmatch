# Quick Deployment Commands

## ⚠️ IMPORTANT: Before You Start

1. **Replace placeholders** in these files:
   - In `package.json` line 5: Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username
   - In `vite.config.ts` line 7: Replace `/jobmatch-app/` with `/YOUR-REPO-NAME/` if you use a different name

## 🚀 Deploy in 3 Steps

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `jobmatch-app`
3. Make it **Public**
4. Click "Create repository"

### Step 2: Push Code to GitHub
```bash
cd "/Users/ashwanipratapsingh/Downloads/JobMatch Mobile UI Layout 2"

git init
git add .
git commit -m "Initial commit - JobMatch app"
git remote add origin https://github.com/YOUR_USERNAME/jobmatch-app.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to GitHub Pages
```bash
npm run deploy
```

## 🌐 Your Live URL

After deployment (2-3 minutes), your app will be at:
```
https://YOUR_USERNAME.github.io/jobmatch-app/
```

## 📝 Enable GitHub Pages (One-time setup)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

## 🔄 Update Your App

Whenever you make changes:
```bash
git add .
git commit -m "Your change description"
git push
npm run deploy
```

## ✅ What I've Done

- ✅ Installed `gh-pages` package
- ✅ Added deployment scripts to `package.json`
- ✅ Configured `vite.config.ts` for GitHub Pages
- ✅ Set up build output directory

## 🎯 Next Steps

1. **Update placeholders** (YOUR_USERNAME, repo name)
2. **Create GitHub repository**
3. **Run the commands above**
4. **Wait 2-3 minutes** for deployment
5. **Visit your live app!**

---

**Need help?** Check the full guide: `github_deployment_guide.md`
