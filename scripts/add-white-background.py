#!/usr/bin/env python3
"""
Add White Background to Alumni Logos
Converts all logo images with transparent backgrounds to white background

Usage: python scripts/add-white-background.py
Requires: Pillow (PIL)
Install: pip install Pillow
"""

import os
import sys
from pathlib import Path

# Try to import PIL
try:
    from PIL import Image
except ImportError:
    print("\n❌ ERROR: Pillow (PIL) module not installed\n")
    print("📦 Install it with:")
    print("   pip install Pillow\n")
    sys.exit(1)

INPUT_DIR = 'public/assets/logo-alumni'
OUTPUT_DIR = 'public/assets/logo-alumni'

print('\n╔════════════════════════════════════════════════════════════════╗')
print('║         🎨 Add White Background to Alumni Logos               ║')
print('╚════════════════════════════════════════════════════════════════╝\n')

def process_image(input_path, output_path, filename):
    """Add white background to image with transparency"""
    try:
        # Open image
        img = Image.open(input_path)
        
        # Convert RGBA to RGB with white background
        if img.mode in ('RGBA', 'LA', 'P'):
            # Create white background
            white_bg = Image.new('RGB', img.size, (255, 255, 255))
            
            # Convert image to RGBA if not already
            if img.mode == 'P':
                img = img.convert('RGBA')
            
            # Paste image on white background using alpha channel as mask
            white_bg.paste(img, (0, 0), img if img.mode == 'RGBA' else None)
            img = white_bg
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Save image
        img.save(output_path, 'PNG', quality=95)
        return True
    except Exception as error:
        print(f"  ✗ {filename}: {str(error)}")
        return False

def process_all_images():
    """Process all images in directory"""
    if not os.path.exists(INPUT_DIR):
        print(f"❌ Input directory not found: {INPUT_DIR}")
        sys.exit(1)
    
    print(f"📂 Processing images from: {INPUT_DIR}\n")
    
    # Get all image files
    image_extensions = ('.png', '.jpg', '.jpeg', '.webp', '.bmp', '.gif')
    files = [f for f in os.listdir(INPUT_DIR) 
             if f.lower().endswith(image_extensions)]
    
    print(f"📊 Found {len(files)} image files\n")
    print("🎨 Adding white background:\n")
    
    processed = 0
    failed = 0
    
    for filename in sorted(files):
        input_path = os.path.join(INPUT_DIR, filename)
        output_path = os.path.join(OUTPUT_DIR, filename)
        
        try:
            if process_image(input_path, output_path, filename):
                print(f"  ✓ {filename.ljust(50)} → background added")
                processed += 1
            else:
                failed += 1
        except Exception as error:
            print(f"  ✗ {filename.ljust(50)} → Error: {str(error)}")
            failed += 1
    
    print(f"\n═════════════════════════════════════════════════════════════\n")
    print(f"📊 Results:")
    print(f"   Processed: {processed}/{len(files)}")
    if failed > 0:
        print(f"   Failed: {failed}")
    print(f"\n✨ White background added to all logo images!")
    print(f"📁 Output: {OUTPUT_DIR}/\n")

if __name__ == '__main__':
    try:
        process_all_images()
    except Exception as error:
        print(f'\n❌ Error: {str(error)}')
        sys.exit(1)
