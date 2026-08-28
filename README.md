# Dataset QA website

Live site: <https://qic999.github.io/data_verification/>

The deployed gallery has a temporary client-side password gate. Successful
authentication is remembered only for the current browser session. Because
GitHub Pages is static hosting, this is suitable for casual access control but
does not make the public repository or its static asset URLs private.

Open `index.html` directly in a browser when developing locally. The site is
fully static and does not require a web server.

It presents ten audited datasets (WildDet3D, Omni3D, Pix3D, Structured3D,
3D-FRONT, Kubric, uCO3D, CA-1M, HyperSim, and ADT) with:

- the exact general and dataset-specific filtering/review rules before the
  dataset statistics and galleries;
- a top-level audit statistics table;
- an English-only / English-and-Chinese display toggle;
- up to six examples that need no human review per dataset;
- up to six ambiguous examples that still need human review per dataset;
- up to six confirmed filtered/error examples per dataset;
- a per-case explanation of why a review case is ambiguous or why a filtered
  case was confirmed erroneous, including the relevant measured values;
- explicit empty states when a dataset has no review or filtered examples;
- click-to-enlarge case images and per-case projection metrics.

The three lanes are intentionally distinct: review candidates are not counted
as confirmed errors until a reviewer rejects them. Pix3D correctly contains
only three error examples because only three cases were confirmed irreparable.
3D-FRONT and Kubric correctly contain zero error examples. The 4,596 old Kubric
generic-rule candidates are intentionally not shown as errors because the mask
and exact-projection recheck proved them valid.

The **No human review needed** and **Needs human review** figures are generated
through the current training loaders. Their loader source files, combined
SHA-256, and generation time are recorded in `cases-data.json`; the site builder
refuses to publish them after those loader sources change. The **Filtered**
figures are either deletion-time evidence or loader-exclusion evidence. CA-1M
uses exact `(scene, frame, object)` exclusions, while HyperSim's 34 fully
offscreen observations are rejected by the current loader validity filter.

Rebuild the generated images and data after an audit update:

```bash
cd /mnt/data/qichen/cvpr27/model/spatial_encoder_v2
python scripts/build_dataset_case_qa_site.py
```

The builder refreshes `assets/`, `cases-data.js`, and `cases-data.json` from the
recorded audit artifacts. It converts the source visualizations to web-sized
WebP files while preserving the original source figures.

The public website is published from the repository's `gh-pages` branch via
GitHub Pages; `main` is kept at the same release commit.
