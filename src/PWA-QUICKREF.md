# 🚀 JobMatch PWA - Quick Reference Card

## ⚡ 30-Second Setup

```bash
# 1. Generate icons
Open: /public/icons/generate-icons.html
Save all icons to: /public/icons/

# 2. Test locally
npm run dev

# 3. Deploy
vercel
```

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `/public/manifest.json` | App configuration |
| `/public/sw.js` | Service worker (offline) |
| `/App.tsx` | Main app + PWA components |
| `/index.html` | PWA meta tags |
| `/public/icons/icon.svg` | App icon |

---

## 🔧 Quick Commands

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel

# Deploy to Netlify
netlify deploy --prod

# Deploy to Firebase
firebase deploy
```

---

## ✅ Pre-Deploy Checklist

- [ ] Generate PNG icons (72-512px)
- [ ] Test service worker (DevTools)
- [ ] Run Lighthouse audit
- [ ] Verify HTTPS enabled
- [ ] Test install on Android
- [ ] Test install on iOS

---

## 🧪 Testing Commands

```javascript
// Check if PWA installed
window.matchMedia('(display-mode: standalone)').matches

// Check service worker
navigator.serviceWorker.controller

// Check online status
navigator.onLine

// Force service worker update
navigator.serviceWorker.ready.then(reg => reg.update())
```

---

## 📱 Install Instructions

**Android (Chrome):**
1. Visit site → Wait 3s → Tap "Install"

**iOS (Safari):**
1. Share button → "Add to Home Screen"

**Desktop (Chrome):**
1. Address bar → Install icon → Click

---

## 🐛 Quick Fixes

**No install prompt?**
- Check HTTPS enabled
- Clear cache
- Wait 3-5 seconds

**Offline not working?**
- Check service worker active
- Verify in DevTools → Application

**Icons not showing?**
- Generate PNG versions
- Check `/public/icons/` folder

---

## 📊 Lighthouse Target

```
PWA Score: 100%
Performance: 90+
Accessibility: 90+
Best Practices: 90+
SEO: 90+
```

---

## 🎯 PWA Features

✅ Installable
✅ Offline support
✅ Fast loading
✅ Auto-updates
✅ Fullscreen mode
✅ App shortcuts
✅ Network status
✅ Update alerts

---

## 🔗 Quick Links

- **Test Locally:** http://localhost:5173
- **PWA Builder:** https://pwabuilder.com
- **Icon Generator:** https://pwabuilder.com/imageGenerator
- **Lighthouse:** Chrome DevTools → Lighthouse

---

## 📚 Documentation

| Doc | Use Case |
|-----|----------|
| `QUICKSTART-PWA.md` | First time setup |
| `PWA-SETUP.md` | Technical details |
| `PWA-CHECKLIST.md` | Deployment guide |
| `PWA-README.md` | Overview |
| `PWA-COMPLETE.md` | Full summary |
| `PWA-QUICKREF.md` | This cheat sheet |

---

## 🎨 Brand Colors

```css
Primary:    #2E6CE6  /* LinkedIn Blue */
Secondary:  #FF5A5F  /* Tinder Red */
Background: #FFFFFF  /* White */
```

---

## 🚀 Deploy Now

```bash
# Choose one:
vercel              # Recommended
netlify deploy      # Alternative
firebase deploy     # Alternative
```

---

## ✨ Success!

Your PWA is ready! Deploy and share! 🎉

**Questions?** Check `/PWA-README.md`
