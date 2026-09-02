# Dataset QA website

Live site: <https://qic999.github.io/data_verification/>

The deployed gallery has a temporary client-side password gate. Successful
authentication is remembered only for the current browser session. Because
GitHub Pages is static hosting, this is suitable for casual access control but
does not make the public repository or its static asset URLs private.

Open `index.html` directly in a browser when developing locally. The site is
fully static and does not require a web server.

It presents twenty-one audited datasets (WildDet3D, Omni3D, Pix3D, Structured3D,
3D-FRONT, Kubric, uCO3D, CA-1M, HyperSim, ADT, HSSD, ABO, ShapeNet, and
Replica, HOI4D, HOPE, Objectron, SceneVerse++, SUN RGB-D, Synscapes, and ATEK) with:

- the exact general and dataset-specific filtering/review rules before the
  dataset statistics and galleries;
- an official-annotation availability table that distinguishes direct source
  fields from boxes derived by the project and records whether absolute metric
  scale exists;
- a top-level audit statistics table;
- a 2D-box switch that compares using a visible 2D box across all datasets
  with using a 2D box calculated from each 3D box;
- an English-only / English-and-Chinese display toggle;
- up to six examples that need no human review per dataset;
- up to six ambiguous examples that still need human review per dataset;
- up to six confirmed filtered/error or current hard-reject examples per
  dataset;
- a per-case explanation of why a review case is ambiguous or why a filtered
  case was confirmed erroneous, including the relevant measured values;
- explicit empty states when a dataset has no review or filtered examples;
- click-to-enlarge case images and per-case projection metrics.

The 2D-box switch updates the active filtering rules and thresholds, 2D-box
source, image/video-frame coverage, human-review and rejection counts, gallery
grouping, and visualization focus. These values are policy
simulations derived from the recorded audits, not a new deletion run. Known 3D
and source-label errors remain fixed in both modes. When the 2D box is calculated
from the 3D box, the two boxes agree by design, so 2D/3D projection agreement
is true by construction; a low flag count therefore does not prove that the 3D
cuboid fits the object.

Each gallery image follows one fixed visual standard. **Visible 2D box** mode
shows only the visible 2D box and the projected 3D cuboid. **2D box from 3D**
mode shows only the projected 2D envelope and the projected 3D cuboid. Source
audit figures with three panels are converted into these two separate two-panel
views before publication.

The three lanes are intentionally distinct: review cases are not counted as
confirmed errors until a reviewer rejects them. HSSD has 379 excluded image/frame
cases. ABO's 154 rule rejections and 2,790 manually reviewed image/frame cases
are all reported as errors; ShapeNet's 14 manually reviewed cases are also
reported as errors. Replica reports 29 pending review cases and five current
rule rejections separately; those five still
exist in the source package and must be excluded before it is declared clean.
Pix3D correctly contains only three error examples because only three cases
were confirmed irreparable. 3D-FRONT and Kubric correctly contain zero error
examples. The 4,596 old Kubric generic-rule candidates are intentionally not
shown as errors because the mask and exact-projection recheck proved them valid.
Objectron and SceneVerse++ have no separate visible 2D boxes. Their projected-box
mode includes six current-loader examples for each dataset. HOPE also has no
separate visible 2D box; its combined HOPE Image and HOPE Video entry contains
13,864 accepted projected-box cases and six current-loader examples.
ATEK reports 245,810 video frames from 965 scenes and 1,450,396 object cases.
Under the visible-box rule, 153,569 cases need human review and 1,403 are hard
rejects; its separately stored and recomputed 3D projections agree within 1 px.

The **No human review needed** and **Needs human review** figures are generated
through the current training loaders. Their loader source files, combined
SHA-256, and generation time are recorded in `cases-data.json`; the site builder
refuses to publish them after those loader sources change. The **Filtered**
figures are either deletion-time evidence or loader-exclusion evidence. CA-1M
uses exact `(scene, frame, object)` exclusions, while HyperSim's 34 fully
offscreen image cases are rejected by the current loader validity filter.

Rebuild the generated images and data after an audit update:

```bash
cd /mnt/data/qichen/cvpr27/model/spatial_encoder_v2
python scripts/build_dataset_case_qa_site.py
python scripts/build_target_mode_assets.py \
  --mode visible \
  --input-root debug_dataset_case_qa_website_20260827/assets \
  --output-root debug_dataset_case_qa_website_20260827/assets_modes/visible
python scripts/build_target_mode_assets.py \
  --mode projected \
  --input-root debug_dataset_case_qa_website_20260827/assets \
  --output-root debug_dataset_case_qa_website_20260827/assets_modes/projected
```

The builder refreshes `assets/`, `cases-data.js`, and `cases-data.json` from the
recorded audit artifacts. It converts the source visualizations to web-sized
WebP files while preserving the original source figures. The final two commands
create the standardized two-panel views used by the visible-box and
projected-envelope modes.

The complete filtering rules and the official-annotation availability table
are also recorded in `DATA_FILTERING_RULES.md`.

The public website is published from the repository's `gh-pages` branch via
GitHub Pages; `main` is kept at the same release commit.
