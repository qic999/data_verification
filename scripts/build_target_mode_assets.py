#!/usr/bin/env python3
"""Create the projection-focused right-panel assets used by the policy toggle."""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input-root", type=Path, required=True)
    parser.add_argument("--output-root", type=Path, required=True)
    args = parser.parse_args()

    count = 0
    total_bytes = 0
    for source in sorted(args.input_root.rglob("*.webp")):
        destination = args.output_root / source.relative_to(args.input_root)
        destination.parent.mkdir(parents=True, exist_ok=True)
        with Image.open(source) as image:
            rgb = image.convert("RGB")
            projected_view = rgb.crop((rgb.width // 2, 0, rgb.width, rgb.height))
            projected_view.save(destination, "WEBP", quality=88, method=4)
        count += 1
        total_bytes += destination.stat().st_size

    print(f"wrote {count} projection-focused assets ({total_bytes / 1024 / 1024:.1f} MiB)")


if __name__ == "__main__":
    main()
