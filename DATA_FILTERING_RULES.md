# Data filtering rules

Version: semantic-aware v2 (2026-09-02)

## Principle

The audit must identify the semantics of the training 2D target before using
any 2D/3D consistency threshold. A visible/modal box and an amodal projected
3D-cuboid envelope are not expected to have the same area or center under
occlusion and image-boundary truncation.

The following comparisons are valid:

- amodal projected box versus independently recomputed amodal projection;
- visible box or visible mask versus the amodal projection using asymmetric
  visible containment.

Visible-to-amodal symmetric IoU and center offset are diagnostic values only.
They must not directly cause review or rejection.

## Official annotation availability

This table separates boxes stored by an official release from boxes constructed
by our adapter. It describes the source packages used by this project, not just
the fields in our converted training JSON.

- `✓` means the official release directly stores the box, or stores the full
  projected 2D cuboid whose envelope is obtained by a simple min/max.
- `△` means the box is deterministically derived from official masks, meshes,
  point clouds, object poses, cameras, or simulator output. It is **not** an
  official box field.
- `—` means the source package used here does not contain that annotation.
- `✓*` means availability is source-dependent within an aggregate dataset.
- In the **Metric scale** column, `✓` means the released geometry has a common
  physical scale with a documented conversion to meters; `△` means only an
  approximate or sequence-relative pseudo-metric scale is available; and `—`
  means the current source geometry is normalized/non-metric. This column is
  about absolute scale, not merely whether a `camera_scale` field exists.

| Dataset | Visible 2D box | 3D box / cuboid | Projected 2D cuboid envelope | Metric scale | Official field or derivation used here |
| --- | :---: | :---: | :---: | :---: | --- |
| WildDet3D | ✓ | ✓ | ✓ | ✓ | `bbox2D_tight`; metric `bbox3D_cam`; `bbox2D_proj` / `bbox2D_trunc` |
| Omni3D | ✓* | ✓ | ✓ | ✓ | `bbox2D_tight` is not present for every source; `bbox3D_cam` center/dimensions are in meters; `bbox2D_proj` / `bbox2D_trunc` |
| Pix3D | ✓ | △ | △ | △ | Official `bbox`/mask; CAD model + `rot_mat`/`trans_mat` -> cuboid and projection; category-prior pseudometric scale is ours |
| Structured3D | △ | ✓ | △ | ✓ | `instance.png` -> visible box; `bbox_3d.json` and depth are released in millimeters; camera projection is ours |
| 3D-FRONT | △ | △ | △ | ✓ | Semantic render -> visible box; metric 3D-FUTURE mesh bounds + scene transform -> cuboid and projection |
| Kubric | ✓ | ✓ | △ | ✓ | `instances/bboxes`; metric `instances/bboxes_3d` and depth; camera projection is ours |
| uCO3D | ✓ | △ | △ | △ | Released mask; officially aligned point cloud/camera/depth has consistent scale only within each sequence, not a shared physical scale |
| CA-1M | — | ✓ | ✓ | ✓ | No separate occlusion-aware visible target in the package used here; metric camera-frame center/scale/rotation and `camera_box_2d_proj` are stored |
| HyperSim | △ | ✓ | △ | ✓ | Semantic-instance image -> visible box; released metric tight 9-DoF instance box; camera projection is ours |
| ADT | ✓ | ✓ | △ | ✓ | `2d_bounding_box.csv`; metric `3d_bounding_box.csv` + `scene_objects.csv`; cuboid-envelope reprojection is ours |
| HSSD | △ | △ | △ | ✓ | Habitat semantic render -> visible box; metric semantic-scene object/asset bounds -> cuboid and projection |
| ProcTHOR | △ | △ | △ | ✓ | Official AI2-THOR simulator uses metric world units and can render masks/object bounds; no fixed box files in source scenes |
| ABO | △ | △ | △ | — | Official render/alpha -> visible box; current 3D package and project render use normalized CAD geometry, not absolute metric object size |
| ShapeNet | △ | △ | △ | — | Project render -> visible box; normalized CAD mesh bounds + project camera, without absolute physical scale |
| Replica | △ | △ | △ | ✓ | Habitat semantic render; released metric semantic mesh/depth -> object cuboid and projection |
| HOI4D | △ | ✓ | ✓ | ✓ | Official instance mask; metric `objpose` center/dimensions/rotation and its full projected `2dBox` |
| HOPE Image / Video | — | △ | △ | ✓ | No visible box in the source package used here; metric eval CAD mesh + released pose/camera -> cuboid and projection |
| Objectron | — | ✓ | ✓ | ✓ | Released metric 3D cuboid plus per-frame projected 2D cuboid keypoints; no visible box |
| SceneVerse++ | — | △ | △ | ✓ | Released metric instance point IDs/reconstructed mesh -> world AABB; released cameras -> projection; no visible target |
| SUN RGB-D | ✓ | ✓ | △ | ✓ | `gtBb2D`; released metric `groundtruth3DBB`; projection through `Rtilt` and `K` is ours |
| Synscapes | ✓ | ✓ | △ | ✓ | Released metric instance 2D/ego-frame 3D boxes; cuboid-envelope projection is ours |
| ATEK | ✓ | ✓ | ✓ | ✓ | `camera_box_2d_rend`; metric camera-frame center/scale/rotation; stored `camera_box_2d_proj`; camera-Z depth in meters |
| ScanNet++ | △ | ✓ | △ | ✓ | Official annotated mesh -> visible box; released metric OBB; official DSLR/iPhone cameras or panorama direction maps + scanner poses -> projection |

Primary format references include [WildDet3D](https://github.com/allenai/WildDet3D),
[Omni3D](https://github.com/facebookresearch/omni3d/blob/main/cubercnn/data/datasets.py),
[Pix3D](https://github.com/xingyuansun/pix3d),
[Structured3D](https://github.com/bertjiazheng/Structured3D/blob/master/data_organization.md),
[Kubric](https://github.com/google-research/kubric),
[uCO3D](https://github.com/facebookresearch/uco3d),
[HyperSim](https://github.com/apple/ml-hypersim),
[ADT](https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_format),
[ABO](https://github.com/jazcollins/amazon-berkeley-objects),
[ShapeNet](https://shapenet.org/annotations),
[Replica](https://github.com/facebookresearch/Replica-Dataset),
[Objectron](https://github.com/google-research-datasets/Objectron), and
[Synscapes](https://synscapes.on.liu.se/features.html). The remaining entries
also use the provenance reports packaged beside their converted datasets.

## Step 1: geometry validation

Hard reject an observation when any required intrinsic, center, dimension, or
rotation value is missing, non-finite, or has an invalid shape; when dimensions
are non-positive; when the cuboid intersects/lies behind the camera; or when
the recomputed projection is invalid.

Known dataset-wide axis, handedness, dimension-order, and scale conventions
must be repaired before this decision.

## Step 2: same-semantic amodal projection check

When the reference 2D target is an amodal projection, compare it with the
independently recomputed cuboid envelope after applying the same image clipping
policy.

Hard reject:

- stored-versus-recomputed envelope maximum error greater than 1 px when the
  stored projection is expected to be exact;
- IoU below 0.15 when either normalized box diagonal is at least 0.05;
- normalized center error above 0.20; or
- IoU below 0.25 and normalized center error above 0.10.

Human review, if not hard rejected:

- IoU below 0.40; or
- normalized center error above 0.05.

Center error is divided by the image diagonal. Dataset-specific exceptions
such as legacy approximate projections must be documented and may keep the
stored-versus-recomputed pixel error diagnostic-only.

## Step 3: visible-to-amodal containment check

For a genuine visible box or visible instance mask, first clip the amodal
projection to the image and compute:

```text
visible containment = area(visible ∩ projected) / area(visible)
```

When an exact instance mask is available, use mask-pixel containment in
preference to bounding-box containment.

Hard reject:

- visible containment below 0.50.

Human review, if not hard rejected:

- visible containment below 0.90.

The ordinary visible-to-amodal IoU, center offset, and
`area(visible) / area(amodal)` are recorded for diagnosis only. A small visible
fraction can be caused by valid occlusion or truncation.

## Step 4: target-semantics provenance

Every observation should eventually store an explicit source tag:

```text
box_2d_source = mask | tight | trunc | projected
```

Until all packages contain this tag, converters with visible-to-projected
fallbacks are resolved as follows:

- if `camera_box_2d_rend` equals the full or image-clipped
  `camera_box_2d_proj` within 2 px, treat it as `amodal_projected`;
- otherwise treat it as `visible` only for a dataset whose converter is known
  to supply visible render/mask boxes.

Current target policies:

| Policy | Datasets |
| --- | --- |
| Visible | Pix3D, Structured3D, 3D-FRONT, Kubric, uCO3D, ABO, ShapeNet, Replica v2, SUN RGB-D, Synscapes, ATEK, ScanNet++ |
| Amodal projected/clipped | CA-1M, HyperSim, ADT, HOPE Image/Video, Objectron, SceneVersepp |
| Per-observation mixed | Omni3D, HSSD, HOI4D, WildDet3D |
| Source unavailable; must be rechecked | ProcTHOR |

## Dataset-specific extensions

- Omni3D OBB fit, released-corner projection, and axis-fit checks remain valid
  because they compare two 3D-derived, same-semantic projections.
- Kubric additionally checks the released object-origin projection. Its
  visible/amodal IoU is never used for filtering.
- uCO3D may additionally use projected precision to detect a cuboid that is
  implausibly larger than the visible object, but this remains a
  dataset-specific rule and is not a universal visible-box criterion.

## Decision and deletion policy

Review thresholds only produce candidates for human verification. Files or
metadata may be deleted only after a hard rule based on valid semantic
comparison, or after manual confirmation. Historical candidates generated by
visible-to-amodal IoU or center thresholds must be re-audited under this v2
policy before being treated as confirmed errors.
