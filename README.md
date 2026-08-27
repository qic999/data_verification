# SpatialEncoder Dataset Verification

Interactive QA gallery for the datasets adapted to the SpatialEncoder training
format.

Live site: <https://qic999.github.io/data_verification/>

The site presents:

- a top-level audit statistics table;
- six accepted training examples per dataset;
- up to six confirmed filtered/error examples per dataset;
- an explicit empty state when the current audit has no confirmed error;
- click-to-enlarge 2D/3D projection comparisons and per-case metrics.

Pix3D contains only three error examples because only three cases were confirmed
irreparable. 3D-FRONT and Kubric contain zero confirmed error examples. The 4,596
old Kubric generic-rule candidates are intentionally not shown as errors because
the mask and exact-projection recheck proved them valid.

This repository contains only static website files and web-optimized QA images.
Pushes to `main` are mirrored automatically to the GitHub Pages `gh-pages`
branch.
