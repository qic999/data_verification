# Dataset QA website

Live site: <https://qic999.github.io/data_verification/>

Open `index.html` directly in a browser. The site is fully static and does not
require a web server.

It presents the seven adapted datasets with:

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
figures are deletion-time audit evidence because the rejected source cases are
no longer loadable from the cleaned training datasets.

Rebuild the generated images and data after an audit update:

```bash
cd /mnt/data/qichen/cvpr27/model/spatial_encoder_v2
python scripts/build_dataset_case_qa_site.py
```

The builder refreshes `assets/`, `cases-data.js`, and `cases-data.json` from the
recorded audit artifacts. It converts the source visualizations to web-sized
WebP files while preserving the original source figures.

The public website is published from the repository's `main` branch via GitHub
Pages.
