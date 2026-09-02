#!/usr/bin/env python3
"""Build the two-panel gallery images used by each website box mode."""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input-root", type=Path, required=True)
    parser.add_argument("--output-root", type=Path, required=True)
    parser.add_argument(
        "--mode",
        choices=("visible", "projected"),
        default="projected",
        help="Build the panel pair used by the selected website mode.",
    )
    args = parser.parse_args()

    count = 0
    total_bytes = 0
    three_panel_datasets = {
        "hoi4d",
        "hope",
        "objectron",
        "sceneversepp",
        "sunrgbd",
        "synscapes",
    }
    for source in sorted(args.input_root.rglob("*.webp")):
        destination = args.output_root / source.relative_to(args.input_root)
        destination.parent.mkdir(parents=True, exist_ok=True)
        with Image.open(source) as image:
            rgb = image.convert("RGB")
            dataset_id = source.relative_to(args.input_root).parts[0]
            if dataset_id in three_panel_datasets:
                one_third = rgb.width // 3
                if args.mode == "visible":
                    first_panel = rgb.crop((0, 0, one_third, rgb.height))
                else:
                    first_panel = rgb.crop(
                        (one_third, 0, 2 * one_third, rgb.height)
                    )
                cuboid_panel = rgb.crop(
                    (2 * one_third, 0, rgb.width, rgb.height)
                )
                mode_view = Image.new(
                    "RGB",
                    (first_panel.width + cuboid_panel.width, rgb.height),
                )
                mode_view.paste(first_panel, (0, 0))
                mode_view.paste(cuboid_panel, (first_panel.width, 0))
            elif args.mode == "visible":
                # Older galleries already contain visible 2D + projected 3D.
                continue
            else:
                # In older two-panel galleries the right panel overlays the
                # projected envelope and full cuboid in the same image.
                mode_view = rgb.crop((rgb.width // 2, 0, rgb.width, rgb.height))
            mode_view.save(destination, "WEBP", quality=88, method=4)
        count += 1
        total_bytes += destination.stat().st_size

    print(
        f"wrote {count} {args.mode}-mode assets "
        f"({total_bytes / 1024 / 1024:.1f} MiB)"
    )


if __name__ == "__main__":
    main()
