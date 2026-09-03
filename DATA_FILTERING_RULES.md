# Data filtering rules

Version: 3D-evidence v3 (2026-09-03)

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

## Step 5: depth-to-cuboid surface check

This check asks whether the measured object surface is at the depth occupied by
the 3D cuboid. It uses the depth map after the same unit conversion,
ray-distance-to-camera-Z conversion, image rotation, and intrinsic update as the
training loader.

For each sampled object pixel, intersect its camera ray with the cuboid. The
measured depth should fall between the ray's cuboid entry and exit depths after
expanding the cuboid by 10% and allowing a minimum 3 cm tolerance for metric
data.

When an exact instance mask and at least 128 valid depth pixels are available:

- hard reject if fewer than 10% of the measured object depths are supported by
  the expanded cuboid;
- human review if support is below 50%.

When only a visible 2D box is available, background and occluder pixels are
unavoidable. The same values are recorded as `diagnostic_only` and cannot
cause an automatic reject.

Transparent or reflective categories such as windows, glass, and mirrors are
also `diagnostic_only`: the instance mask may be exact while the depth sensor
measures a surface behind the labeled object.

## Step 6: backprojected 3D-point containment check

Backproject valid object depth pixels with the loader intrinsics and test the
resulting camera-frame 3D points against the oriented cuboid. Report the
fractions inside the original box and inside the 10%-expanded box.

With an exact instance mask and at least 128 valid points:

- hard reject if fewer than 10% of the points lie inside the expanded cuboid;
- human review if fewer than 50% lie inside it.

This check and Step 5 use related evidence, so they count as one depth-based
evidence family in the final decision. They must not be counted twice to turn a
single weak depth signal into a hard rejection.

## Step 7: pose validity check

Validate rotations **before** projecting them to SO(3). For both the object
rotation and any camera-to-world pose, record
`max(abs(R.T @ R - I))` and `abs(det(R) - 1)`.

- hard reject malformed, non-finite, or singular transforms, or either error
  above 0.05;
- human review if either error is above 0.005.

Known dataset-wide axis and handedness conversions are applied first. A model
that repairs a slightly noisy rotation for training must not hide the original
pose error from the audit.

An object being tilted or lying on its side is not by itself an error. We do
not hard reject an object from a category-level "upright" assumption; its pose
must instead disagree with depth, source geometry, or multiple views.

## Step 8: multi-view world-cuboid consistency check

Apply this check only to a static object observed in at least three frames with
valid, non-placeholder camera-to-world poses and actual camera motion. Transform
each camera-frame cuboid to world coordinates and compare its eight corners to
the same object's robust multi-view reference. Corner matching ignores cuboid
corner order and axis-sign flips.

Normalize the symmetric corner-set distance by the cuboid diagonal:

- hard reject if the 90th-percentile normalized distance is above 0.25;
- human review if it is above 0.10.

Do not apply a static-scene rule to moving or manipulated objects (for example,
HOI4D hands/objects, Kubric moving objects, or traffic participants). An
identity/placeholder camera pose also makes this check `unavailable`, not a
failure.

## Step 9: free-space contradiction check

For rays through an exact object mask, count pixels whose measured object depth
is farther than the expanded cuboid's exit depth. A high fraction means the
annotated cuboid is floating in known free space in front of the measured
object.

With at least 128 valid exact-mask depth pixels:

- hard reject if more than 90% are behind the cuboid and surface support from
  Step 5 is below 10%;
- human review if more than 50% are behind the cuboid and surface support is
  below 50%.

With only a 2D-box proxy, free-space results are `diagnostic_only`, because the
farther depth may belong to background rather than the object.
The same exception applies to transparent/reflective objects.

## 3D-evidence coverage and final labels

The five added checks are evidence-dependent. Missing depth, mask, camera pose,
or additional views is reported as `unavailable`; it is never treated as a
pass or a failure.

| Evidence level | Meaning |
| --- | --- |
| `3d_evidence_pass` | Steps 1--4 pass and at least one independent 3D evidence family (exact-mask depth/points, valid static multi-view consistency, or source mesh/point containment) passes. |
| `projection_only_pass` | Steps 1--4 pass, but no independent 3D evidence is available. The projection is internally consistent; the physical 3D placement has not been verified. |
| `review` | A review threshold is triggered, or strong but proxy-only evidence is suspicious. |
| `hard_reject` | A hard rule is triggered using valid same-semantic or exact 3D evidence. |

Current source capability is summarized below. `Exact` means that the source
used here gives object pixels or source geometry; `proxy` means that only a 2D
box is available for selecting depth pixels.

| Dataset group | Depth / 3D points | Pose | Static multi-view | Free-space |
| --- | --- | --- | --- | --- |
| Structured3D, 3D-FRONT, Kubric | Exact synthetic evidence | Yes | Structured3D/3D-FRONT only; Kubric only for explicitly static objects | Exact |
| uCO3D | Exact mask + aligned depth/point cloud | Yes | Yes | Exact |
| ScanNet++ | Official instance mesh and sensor geometry | Yes | Yes | Exact source-mesh/raycast evidence |
| ABO, ShapeNet | Exact object-render depth silhouette, but normalized/non-metric scale | Yes | Yes | Exact within each render's own scale |
| HSSD, Replica, HyperSim | Dense metric depth; current converted package lacks a direct instance mask | Yes | Yes where multiple valid views exist | Proxy only until masks are linked |
| WildDet3D, CA-1M, ADT, HOI4D, HOPE, SUN RGB-D, Synscapes, ATEK | Depth availability varies; current standardized package often has only a 2D-box proxy | Yes where non-placeholder | Dataset/object dependent | Proxy only unless an exact mask is resolved |
| Omni3D, Pix3D, Objectron, SceneVerse++ | No dense depth in the current training package | Yes where non-placeholder | Objectron/SceneVerse++ where static and multi-view | Unavailable |
| ProcTHOR | Source simulator can provide all evidence, but the current package provenance must first be resolved | To be resolved | To be resolved | To be resolved |

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
visible-to-amodal IoU or center thresholds must be re-audited under this v3
policy before being treated as confirmed errors. Existing projection-audit
totals remain labeled as projection results until the corresponding 3D-evidence
pass has completed; they must not be silently relabeled as physically verified
3D boxes.
