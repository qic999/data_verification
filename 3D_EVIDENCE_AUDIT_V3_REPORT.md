# Full 3D evidence audit

Version: 3D-evidence v3 (2026-09-03)

This run covers every JSON scene and every object-frame in the eleven standardized dataset components listed below. It applies the depth-surface, backprojected-point, raw-pose, static multi-view, and free-space checks when their required evidence exists. It does not delete source data.

| Dataset | Scenes | Object frames | Exact-mask depth | 2D-box depth proxy | 3D evidence pass | Projection-only pass | Review | Hard | Scene errors |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Structured3D | 18,083 | 252,345 | 252,345 | 0 | 242,347 | 9,541 | 419 | 38 | 0 |
| 3DFront | 7,938 | 24,704 | 24,704 | 0 | 19,271 | 12 | 5,154 | 267 | 0 |
| HSSD | 167 | 20,475 | 0 | 20,475 | 4,169 | 15,927 | 0 | 379 | 0 |
| ABO | 7,953 | 47,718 | 47,716 | 2 | 44,774 | 0 | 2,790 | 154 | 0 |
| ShapeNet | 53,730 | 322,380 | 322,378 | 2 | 322,360 | 0 | 16 | 4 | 0 |
| HOI4D | 522 | 206,263 | 0 | 206,263 | 0 | 206,263 | 0 | 0 | 0 |
| HOPEImage | 50 | 915 | 0 | 915 | 0 | 915 | 0 | 0 | 0 |
| HOPEVideo | 10 | 12,949 | 0 | 12,949 | 0 | 12,949 | 0 | 0 | 0 |
| SUN RGB-D | 9,968 | 45,155 | 0 | 45,155 | 0 | 42,569 | 2,189 | 397 | 0 |
| Synscapes | 24,991 | 326,756 | 0 | 326,756 | 0 | 326,703 | 53 | 0 | 0 |
| ATEK | 965 | 1,450,396 | 0 | 1,450,396 | 0 | 1,295,424 | 153,569 | 1,403 | 0 |
| **Overall full run** | **124,377** | **2,710,056** | **647,143** | **2,062,913** | **632,921** | **1,910,303** | **164,190** | **2,642** | **0** |

## Cases missed by the previous projection rule

A missed case is defined exactly as `projection_decision = accept` and the new final label being `review` or `hard_reject`. These cases looked internally consistent in 2D projection, but independent 3D evidence found a problem.

| Dataset | Missed total | New review | New hard | New evidence |
| --- | ---: | ---: | ---: | --- |
| 3DFront | 5,421 | 5,154 | 267 | backprojected_points: 5,421, depth_surface: 5,421 |
| ShapeNet | 2 | 2 | 0 | multi_view: 2 |
| Structured3D | 192 | 157 | 35 | backprojected_points: 192, depth_surface: 192, free_space: 82 |
| **Overall** | **5,615** | **5,313** | **302** | |

## Interpretation

- `3d_evidence_pass` requires an independent exact-depth or valid static multi-view pass in addition to projection checks.
- `projection_only_pass` means the projection is internally consistent, but this package does not contain enough independent 3D evidence to verify physical placement.
- A visible 2D box used as a depth selector remains diagnostic only and cannot automatically reject a case.
- `review` is not a deletion decision. `hard_reject` records are candidates for confirmation; this run does not alter source data.
- ScanNet++ keeps its separate complete official mesh/camera audit. Datasets that do not expose standardized JSON plus the required evidence remain explicitly outside this run instead of being marked as passed.

Machine-readable per-dataset summaries and candidate records are stored beside this report. The local delta directory contains separate review/hard manifests and two-mode visual galleries.
