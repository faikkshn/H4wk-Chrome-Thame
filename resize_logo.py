#!/usr/bin/env python3
"""
Resize logo.png to different icon sizes for Chrome extension
"""

from PIL import Image
import sys

def resize_logo(input_path, output_path, size):
    """Resize image to specified size maintaining quality"""
    try:
        # Open the image
        img = Image.open(input_path)

        # Convert RGBA if needed
        if img.mode != 'RGBA':
            img = img.convert('RGBA')

        # Resize with high quality
        resized = img.resize((size, size), Image.Resampling.LANCZOS)

        # Save
        resized.save(output_path, 'PNG', optimize=True)
        print(f"✓ Created {output_path} ({size}x{size})")
        return True

    except Exception as e:
        print(f"✗ Error creating {output_path}: {e}")
        return False

def main():
    sizes = [
        (128, 'icons/icon128.png'),
        (48, 'icons/icon48.png'),
        (16, 'icons/icon16.png')
    ]

    print("🦅 H4WK Logo Resizer")
    print("=" * 50)

    success_count = 0
    for size, output in sizes:
        if resize_logo('logo.png', output, size):
            success_count += 1

    print("=" * 50)
    print(f"✓ Successfully created {success_count}/{len(sizes)} icons")

    if success_count == len(sizes):
        print("🎉 All icons ready for Chrome extension!")
        return 0
    else:
        print("⚠ Some icons failed to create")
        return 1

if __name__ == '__main__':
    sys.exit(main())
