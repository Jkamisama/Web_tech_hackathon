# 🚀 Deployment Guide

## GitHub Pages Setup

Your site is configured for automatic deployment using GitHub Actions!

### Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/Jkamisama/Web_tech_hackathon
2. Click **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. Click **Save**

### Step 2: Automatic Deployment

Every time you push to the `main` branch:
- GitHub Actions automatically runs
- Your site is deployed to GitHub Pages
- Live at: **https://jkamisama.github.io/Web_tech_hackathon/**

### Step 3: Check Deployment Status

1. Go to **Actions** tab in your repo
2. You'll see the workflow running
3. Wait for the green checkmark ✓
4. Your site is live!

## 🎉 That's It!

Your manga store is now:
- ✅ Automatically deployed
- ✅ No build process needed
- ✅ Pure static HTML/CSS/JS
- ✅ Uses CDN for anime.js
- ✅ Fast and reliable

## 📝 Making Updates

To update your site:

```bash
# Make your changes
git add .
git commit -m "Your update message"
git push origin main
```

GitHub Actions will automatically redeploy!

## 🔧 Troubleshooting

**Site not loading?**
- Check Actions tab for errors
- Make sure GitHub Pages is enabled
- Wait 1-2 minutes after first deployment

**Images not showing?**
- All images are in `data/img/` folder
- Paths are relative, should work automatically

**Theme not persisting?**
- Uses localStorage, works automatically
- No server configuration needed

## 🌐 Alternative Deployments

### Netlify
1. Drag & drop your folder to netlify.com
2. Done!

### Vercel
1. Import from GitHub
2. Deploy
3. Done!

### Cloudflare Pages
1. Connect your GitHub repo
2. Build command: (leave empty)
3. Output directory: `/`
4. Deploy!

---

**Your site is live at: https://jkamisama.github.io/Web_tech_hackathon/**
