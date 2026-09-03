# 3D evidence audit pilot

Version: 3D-evidence v3 (2026-09-03)

This is a deterministic 100-scene calibration pilot per available dataset/component. It adds depth-surface, backprojected-point, raw-pose, static multi-view, and free-space checks. It does not replace the existing full projection-audit totals and it does not delete data.

| Dataset | Scenes | Object frames | Exact-mask depth | 2D-box depth proxy | 3D evidence pass | Projection-only pass | Review | Hard |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Structured3D | 100 | 1,280 | 1,280 | 0 | 1,228 | 50 | 1 | 1 |
| 3DFront | 100 | 332 | 332 | 0 | 268 | 0 | 63 | 1 |
| HSSD | 100 | 10,715 | 0 | 10,715 | 2,006 | 8,483 | 0 | 226 |
| ABO | 100 | 600 | 600 | 0 | 600 | 0 | 0 | 0 |
| ShapeNet | 100 | 600 | 600 | 0 | 600 | 0 | 0 | 0 |
| HOI4D | 100 | 19,865 | 0 | 19,865 | 0 | 19,865 | 0 | 0 |
| HOPEImage | 50 | 915 | 0 | 915 | 0 | 915 | 0 | 0 |
| HOPEVideo | 10 | 2,000 | 0 | 2,000 | 0 | 2,000 | 0 | 0 |
| SUN_RGB-D | 100 | 380 | 0 | 380 | 0 | 355 | 24 | 1 |
| Synscapes | 100 | 1,333 | 0 | 1,333 | 0 | 1,333 | 0 | 0 |
| ATEK | 100 | 1,990 | 0 | 1,990 | 0 | 1,767 | 223 | 0 |
| **Overall pilot** | **960** | **40,010** | **2,812** | **37,198** | **4,702** | **34,768** | **311** | **229** |

## How to read the labels

- **3D evidence pass:** projection rules pass and at least one independent exact-depth or valid static multi-view check passes.
- **Projection-only pass:** projection rules pass, but the current package does not supply independent exact 3D evidence for this case.
- **Review / Hard:** at least one applicable v3 threshold fires. Hard rows can also include the already-existing invalid geometry/projection rule; inspect each record's `projection_decision`, `depth_evidence`, and `multiview_evidence` to identify the source.

## Calibration notes

- A visible 2D box is not an instance mask. Depth selected only by that box remains diagnostic and cannot automatically reject a case.
- Transparent/reflective objects (for example windows, glass, and mirrors) remain diagnostic even with an exact instance mask because the depth can come from a surface behind the object.
- Static multi-view consistency is disabled for moving/manipulated datasets and for identity or placeholder camera poses.
- The detailed machine-readable results are in each dataset directory's `summary.json` and `records.jsonl.gz`.
