#!/usr/bin/env bash

# This script creates *-min folder with 400x300 minimized
# images using ImageMagick CLI tool. Use it with caution
# for developer purposes only
# Supports png,jpg,jpeg filetypes.

# Prompt for source directory
read -p "Enter source folder (relative to current dir): " src_dir
src_dir=${src_dir%/}          # strip trailing slash if any

# Destination directory (source‑min)
dst_dir="${src_dir}-min"

# Abort if destination already exists
if [[ -d "$dst_dir" ]]; then
  echo "Error: destination folder \"$dst_dir\" already exists." >&2
  exit 1
fi

mkdir -p "$dst_dir"

for f in "$src_dir"/*.{png,jpg,jpeg,JPG,JPEG}; do
  # Skip if no matching files
  [[ -e "$f" ]] || continue
  convert "$f" -resize 400x300^ -gravity center -crop 400x300+0+0 +repage -quality 70 \
    "$dst_dir/$(basename "${f%.*}").jpg"
done

echo "Generation of min folder completed"
