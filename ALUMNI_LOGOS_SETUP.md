# 🎓 Alumni Logos Setup Guide

Complete guide to crop and set up individual alumni company logos.

## 📋 Overview

This process will:
1. ✅ Crop individual logos from your composite image
2. ✅ Auto-detect logo boundaries
3. ✅ Save each logo as a separate PNG file
4. ✅ Organize them in `src/assets/logos/alumni/`
5. ✅ Create an index file for easy importing

## 🚀 Quick Start (3 Steps)

### Step 1: Prepare Your Image
Save the alumni logos composite image as:
```
public/alumni-logos-composite.png
```

**File location:**
```
d:\INTELLIGO ID\new-website\intelligo-id-landing-page\public\alumni-logos-composite.png
```

### Step 2: Install Sharp (Image Processing)
```bash
npm install sharp
```

### Step 3: Run the Setup Script
```bash
npm run setup:alumni
```

That's it! The script will automatically:
- Detect individual logos in the image
- Crop each logo with smart padding
- Resize to standard size (200x100px)
- Save individual PNG files
- Create an index file

## 📁 Output Structure

After running the script, you'll have:

```
src/assets/logos/alumni/
├── logo-01.png
├── logo-02.png
├── logo-03.png
├── ...
└── index.ts
```

## 🎨 What the Script Does

### Image Analysis
1. **Detects content** - Scans for non-white pixels
2. **Finds boundaries** - Identifies column and row separations
3. **Groups logos** - Identifies individual logo regions
4. **Smart padding** - Adds padding around each logo

### Logo Processing
1. **Crops** - Extracts each logo region
2. **Resizes** - Scales to 200x100px with white background
3. **Optimizes** - Saves as PNG with transparency
4. **Indexes** - Creates TypeScript index file

## 💡 Advanced Usage

### Renaming Logos

After cropping, rename files to be more meaningful:

```bash
# Rename individual files
mv src/assets/logos/alumni/logo-01.png src/assets/logos/alumni/indosat.png
mv src/assets/logos/alumni/logo-02.png src/assets/logos/alumni/telkom.png
# etc...
```

Or rename in file explorer.

### Using Cropped Logos

**Option 1: Use index file**
```tsx
import alumniLogos from "@/assets/logos/alumni/index.ts";

const logos = alumniLogos.map((src, idx) => ({
  name: `Alumni ${idx + 1}`,
  src: src
}));
```

**Option 2: Import individually**
```tsx
import indosatLogo from "@/assets/logos/alumni/indosat.png";
import telkomLogo from "@/assets/logos/alumni/telkom.png";

const alumniCompanies = [
  { name: "Indosat", src: indosatLogo },
  { name: "Telkom", src: telkomLogo },
  // ...
];
```

**Option 3: Update TestimonialSection**
```tsx
// Import all logos
import alumniLogos from "@/assets/logos/alumni";

const alumniCompanies = alumniLogos.map((src, idx) => ({
  name: `Alumni ${idx + 1}`,
  src: src
}));
```

## 🔍 Troubleshooting

### Sharp module not found
```bash
npm install sharp
```

### Image not detected
- Make sure the file is at: `public/alumni-logos-composite.png`
- Check file format (PNG, JPG, or JPEG)
- Verify image is not corrupted

### Some logos not detected
- The script has minimum size requirements (30x15px minimum)
- Very small logos might be skipped
- Logos with poor contrast might not be detected

### Quality issues
- Increase/decrease padding in script
- Adjust resize dimensions
- Use higher quality source image

## 📊 Image Format Requirements

**Supported formats:**
- PNG (recommended)
- JPG / JPEG
- WebP
- TIFF

**Recommended specifications:**
- Width: 500-2000px
- Height: 300-800px
- White background
- Logos with clear contrast
- No overlapping logos

## 🎯 Best Practices

### Image Preparation
1. ✅ White background (255,255,255)
2. ✅ Logos should have clear boundaries
3. ✅ No overlapping logos
4. ✅ Consistent spacing between logos
5. ✅ Good contrast between logo and background

### Before Processing
1. Clean up composite image
2. Remove any watermarks
3. Ensure consistent sizing
4. Good lighting/clarity

### After Processing
1. Review cropped logos
2. Rename for clarity
3. Delete unused logos
4. Test in components

## 🔧 Customization

### Change output size

Edit `scripts/setup-alumni-logos.cjs`:

```javascript
// Change this line:
.resize(200, 100, { 
  fit: 'contain',
  background: { r: 255, g: 255, b: 255, alpha: 1 }
})

// To your desired size:
.resize(300, 150, { fit: 'contain' })
```

### Change padding

```javascript
// Change this:
const padding = 10;

// To your desired padding:
const padding = 20;
```

### Change minimum logo size

```javascript
// Change this:
if (cropWidth < 30 || cropHeight < 15) continue;

// To:
if (cropWidth < 50 || cropHeight < 25) continue;
```

## 📚 Manual Process (Alternative)

If automatic cropping doesn't work, you can manually crop:

1. **Use image editor** (Photoshop, GIMP, Paint.NET)
2. **Crop each logo individually**
3. **Resize to 200x100px**
4. **Save as PNG** in `src/assets/logos/alumni/`
5. **Name logically** (e.g., indosat.png, telkom.png)

## ✅ Verification

After running the script:

```bash
# Check that logos were created
ls src/assets/logos/alumni/
# Should show: logo-01.png, logo-02.png, etc.

# Check index file
cat src/assets/logos/alumni/index.ts
# Should show TypeScript export
```

## 🎉 Success!

When completed, you should have:
- ✅ Individual logo PNG files
- ✅ Organized in `src/assets/logos/alumni/`
- ✅ Index file for easy importing
- ✅ Ready to use in components

## 📞 Support

If you encounter issues:

1. Check `setup-alumni-logos.cjs` comments
2. Review troubleshooting section above
3. Run script with verbose output
4. Check image format and size

---

**Ready to crop logos? Run: `npm run setup:alumni`** ✨
