window.DATASET_QA = {
  "generatedAt": "2026-08-27",
  "auditDate": "2026-08-27",
  "assetVersion": "cdf0ac82af79",
  "loaderProvenance": {
    "wilddet3d": {
      "loader": "ObjectDetectionDataset._load_frames",
      "sources": [
        "sam3/train/data/object_detection_dataset.py",
        "sam3/train/data/ca1m_dataset.py"
      ],
      "sha256": "c6473a6a127b40835fd5ee64d387af5929a7510d5dbe154bd1ecab177cc7f10f",
      "visualizationsGeneratedAt": "2026-08-27T22:44:33.765989+00:00"
    },
    "omni3d": {
      "loader": "ObjectDetectionDataset._load_frames",
      "sources": [
        "sam3/train/data/object_detection_dataset.py",
        "sam3/train/data/ca1m_dataset.py"
      ],
      "sha256": "c6473a6a127b40835fd5ee64d387af5929a7510d5dbe154bd1ecab177cc7f10f",
      "visualizationsGeneratedAt": "2026-08-27T22:42:49.647389+00:00"
    },
    "pix3d": {
      "loader": "ObjectDetectionDataset._load_frames",
      "sources": [
        "sam3/train/data/object_detection_dataset.py",
        "sam3/train/data/ca1m_dataset.py"
      ],
      "sha256": "c6473a6a127b40835fd5ee64d387af5929a7510d5dbe154bd1ecab177cc7f10f",
      "visualizationsGeneratedAt": "2026-08-27T22:43:10.616889+00:00"
    },
    "structured3d": {
      "loader": "ObjectDetectionDataset._load_frames",
      "sources": [
        "sam3/train/data/object_detection_dataset.py",
        "sam3/train/data/ca1m_dataset.py"
      ],
      "sha256": "c6473a6a127b40835fd5ee64d387af5929a7510d5dbe154bd1ecab177cc7f10f",
      "visualizationsGeneratedAt": "2026-08-27T22:43:36.307183+00:00"
    },
    "3dfront": {
      "loader": "ObjectDetectionDataset._load_frames",
      "sources": [
        "sam3/train/data/object_detection_dataset.py",
        "sam3/train/data/ca1m_dataset.py"
      ],
      "sha256": "c6473a6a127b40835fd5ee64d387af5929a7510d5dbe154bd1ecab177cc7f10f",
      "visualizationsGeneratedAt": "2026-08-27T22:42:05.937866+00:00"
    },
    "kubric": {
      "loader": "ObjectDetectionDataset._load_frames",
      "sources": [
        "sam3/train/data/object_detection_dataset.py",
        "sam3/train/data/ca1m_dataset.py"
      ],
      "sha256": "c6473a6a127b40835fd5ee64d387af5929a7510d5dbe154bd1ecab177cc7f10f",
      "visualizationsGeneratedAt": "2026-08-27T22:42:35.725205+00:00"
    },
    "uco3d": {
      "loader": "UCO3DDetectionDataset._load_clip",
      "sources": [
        "sam3/train/data/uco3d_dataset.py",
        "sam3/train/data/ca1m_dataset.py"
      ],
      "sha256": "6d3d89bc9375f2475f56af68b2476fe26f98ffe6f018b2fafe001db2c9765171",
      "visualizationsGeneratedAt": "2026-08-27T22:46:25.040133+00:00"
    }
  },
  "datasets": [
    {
      "id": "wilddet3d",
      "name": "WildDet3D",
      "samples": 776563,
      "dataType": "Single image",
      "videos": null,
      "observations": 3712952,
      "review": 65188,
      "filtered": 274,
      "description": "In-the-wild real images with object-level 2D boxes and metric 3D cuboids.",
      "statusDetail": "274 confirmed source-annotation failures were filtered; the current training data has no hard failures.",
      "currentHard": 0,
      "filteredRate": 7.379028370478931e-05,
      "validCases": [
        {
          "id": "obj365_train_000000318028__img000546644 / frame 0",
          "title": "Case 01 · obj365_train_000000318028__img000546644",
          "subtitle": "train-json/train_synthetic/obj365_train_000000318028__img000546644.json",
          "image": "assets/wilddet3d/valid/01.webp",
          "tag": "accepted",
          "reason": "All loader-retained objects pass the current projection checks after the WildDet3D axis adaptation",
          "metrics": {
            "objects": 3,
            "medianIoU": 0.749,
            "centerError": 0.0114,
            "depthRangeM": [
              3.9672634601593018,
              5.305595397949219
            ]
          }
        },
        {
          "id": "obj365_train_000000709536__img000707540 / frame 0",
          "title": "Case 02 · obj365_train_000000709536__img000707540",
          "subtitle": "train-json/train_synthetic/obj365_train_000000709536__img000707540.json",
          "image": "assets/wilddet3d/valid/02.webp",
          "tag": "accepted",
          "reason": "All loader-retained objects pass the current projection checks after the WildDet3D axis adaptation",
          "metrics": {
            "objects": 3,
            "medianIoU": 0.71,
            "centerError": 0.0037,
            "depthRangeM": [
              5.539475440979004,
              6.980785846710205
            ]
          }
        },
        {
          "id": "v3det_train_000000068996__img000058076 / frame 0",
          "title": "Case 03 · v3det_train_000000068996__img000058076",
          "subtitle": "train-json/v3det_synthetic/v3det_train_000000068996__img000058076.json",
          "image": "assets/wilddet3d/valid/03.webp",
          "tag": "accepted",
          "reason": "All loader-retained objects pass the current projection checks",
          "metrics": {
            "objects": 5,
            "medianIoU": 0.624,
            "centerError": 0.0148,
            "depthRangeM": [
              2.4094347953796387,
              6.342728614807129
            ]
          }
        },
        {
          "id": "obj365_train_000000234580__img000130925 / frame 0",
          "title": "Case 04 · obj365_train_000000234580__img000130925",
          "subtitle": "train-json/train_synthetic/obj365_train_000000234580__img000130925.json",
          "image": "assets/wilddet3d/valid/04.webp",
          "tag": "accepted",
          "reason": "All loader-retained objects pass the current projection checks",
          "metrics": {
            "objects": 2,
            "medianIoU": 0.732,
            "centerError": 0.0078,
            "depthRangeM": [
              5.287174701690674,
              5.547533988952637
            ]
          }
        },
        {
          "id": "obj365_train_000000671547__img000561998 / frame 0",
          "title": "Case 05 · obj365_train_000000671547__img000561998",
          "subtitle": "train-json/train_synthetic/obj365_train_000000671547__img000561998.json",
          "image": "assets/wilddet3d/valid/05.webp",
          "tag": "accepted",
          "reason": "All loader-retained objects pass the current projection checks",
          "metrics": {
            "objects": 9,
            "medianIoU": 0.743,
            "centerError": 0.0054,
            "depthRangeM": [
              4.448734283447266,
              5.61116886138916
            ]
          }
        },
        {
          "id": "obj365_train_000000727360__img000721279 / frame 0",
          "title": "Case 06 · obj365_train_000000727360__img000721279",
          "subtitle": "train-json/train_synthetic/obj365_train_000000727360__img000721279.json",
          "image": "assets/wilddet3d/valid/06.webp",
          "tag": "accepted",
          "reason": "All loader-retained objects pass the current projection checks",
          "metrics": {
            "objects": 2,
            "medianIoU": 0.664,
            "centerError": 0.0061,
            "depthRangeM": [
              5.342090606689453,
              7.1440324783325195
            ]
          }
        }
      ],
      "reviewCases": [
        {
          "id": "obj365_train_000000355953__img000000002 / frame 0",
          "title": "slide · ann_72",
          "subtitle": "train-json/train_synthetic/obj365_train_000000355953__img000000002.json",
          "image": "assets/wilddet3d/review/01.webp",
          "tag": "review",
          "reason": "center_review",
          "metrics": {
            "objects": 1,
            "IoU": 0.507,
            "centerError": 0.0688,
            "depthRangeM": [
              2.468874454498291,
              2.468874454498291
            ]
          }
        },
        {
          "id": "obj365_train_000000669447__img000501981 / frame 0",
          "title": "person · ann_6925545",
          "subtitle": "train-json/train_synthetic/obj365_train_000000669447__img000501981.json",
          "image": "assets/wilddet3d/review/02.webp",
          "tag": "review",
          "reason": "center_review",
          "metrics": {
            "objects": 3,
            "IoU": 0.497,
            "centerError": 0.0736,
            "depthRangeM": [
              2.6184844970703125,
              3.6215126514434814
            ]
          }
        },
        {
          "id": "obj365_train_000000139608__img000649192 / frame 0",
          "title": "chair · ann_8950107",
          "subtitle": "train-json/train_synthetic/obj365_train_000000139608__img000649192.json",
          "image": "assets/wilddet3d/review/03.webp",
          "tag": "review",
          "reason": "center_review",
          "metrics": {
            "objects": 1,
            "IoU": 0.628,
            "centerError": 0.0722,
            "depthRangeM": [
              3.0725197792053223,
              3.0725197792053223
            ]
          }
        },
        {
          "id": "obj365_train_000000727163__img000721119 / frame 0",
          "title": "car · ann_10011908",
          "subtitle": "train-json/train_synthetic/obj365_train_000000727163__img000721119.json",
          "image": "assets/wilddet3d/review/04.webp",
          "tag": "review",
          "reason": "center_review",
          "metrics": {
            "objects": 4,
            "IoU": 0.687,
            "centerError": 0.0506,
            "depthRangeM": [
              4.17218017578125,
              22.401443481445312
            ]
          }
        },
        {
          "id": "v3det_train_000000020708__img000003764 / frame 0",
          "title": "Wakame · ann_20019",
          "subtitle": "train-json/v3det_human_only/v3det_train_000000020708__img000003764.json",
          "image": "assets/wilddet3d/review/05.webp",
          "tag": "review",
          "reason": "center_review",
          "metrics": {
            "objects": 1,
            "IoU": 0.541,
            "centerError": 0.0946,
            "depthRangeM": [
              2.64909029006958,
              2.64909029006958
            ]
          }
        },
        {
          "id": "v3det_train_000000166934__img000149823 / frame 0",
          "title": "browntail · ann_1053641",
          "subtitle": "train-json/v3det_synthetic/v3det_train_000000166934__img000149823.json",
          "image": "assets/wilddet3d/review/06.webp",
          "tag": "review",
          "reason": "center_review",
          "metrics": {
            "objects": 1,
            "IoU": 0.721,
            "centerError": 0.0745,
            "depthRangeM": [
              0.8394914865493774,
              0.8394914865493774
            ]
          }
        }
      ],
      "errorCases": [
        {
          "id": "ann_41801",
          "title": "streetlight · ann 41801",
          "subtitle": "train_human_only / image 2451",
          "image": "assets/wilddet3d/error/01.webp",
          "tag": "filtered",
          "reason": "iou_catastrophic",
          "metrics": {
            "IoU": 0.02,
            "centerError": 0.033
          }
        },
        {
          "id": "ann_1994272",
          "title": "person · ann 1994272",
          "subtitle": "train_synthetic / image 139863",
          "image": "assets/wilddet3d/error/02.webp",
          "tag": "filtered",
          "reason": "iou_catastrophic, center_catastrophic, joint_iou_center",
          "metrics": {
            "IoU": 0.0,
            "centerError": 0.2296
          }
        },
        {
          "id": "ann_4260106",
          "title": "train · ann 4260106",
          "subtitle": "train_synthetic / image 304833",
          "image": "assets/wilddet3d/error/03.webp",
          "tag": "filtered",
          "reason": "invalid_geometry",
          "metrics": {
            "IoU": null,
            "centerError": null
          }
        },
        {
          "id": "ann_8787375",
          "title": "bracelet · ann 8787375",
          "subtitle": "train_synthetic / image 637542",
          "image": "assets/wilddet3d/error/04.webp",
          "tag": "filtered",
          "reason": "iou_catastrophic",
          "metrics": {
            "IoU": 0.004,
            "centerError": 0.0571
          }
        },
        {
          "id": "ann_524673",
          "title": "window · ann 524673",
          "subtitle": "v3det_synthetic / image 72304",
          "image": "assets/wilddet3d/error/05.webp",
          "tag": "filtered",
          "reason": "iou_catastrophic",
          "metrics": {
            "IoU": 0.094,
            "centerError": 0.021
          }
        },
        {
          "id": "ann_936133",
          "title": "leather · ann 936133",
          "subtitle": "v3det_synthetic / image 128589",
          "image": "assets/wilddet3d/error/06.webp",
          "tag": "filtered",
          "reason": "center_catastrophic",
          "metrics": {
            "IoU": 0.529,
            "centerError": 0.2535
          }
        }
      ],
      "emptyMessage": ""
    },
    {
      "id": "omni3d",
      "name": "Omni3D",
      "samples": 181068,
      "dataType": "Single image",
      "videos": null,
      "observations": 2393788,
      "review": 0,
      "filtered": 349,
      "description": "Multi-source indoor/outdoor metric 3D detection data normalized to one loader format.",
      "statusDetail": "349 invalid or inconsistent annotations were filtered; the current training data has no hard failures.",
      "currentHard": 0,
      "filteredRate": 0.000145772777414158,
      "validCases": [
        {
          "id": "000000073032 / frame 0",
          "title": "Case 01 · 000000073032",
          "subtitle": "train-json/Objectron_train/000000073032.json",
          "image": "assets/omni3d/valid/01.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.985,
            "centerError": 0.0012,
            "depthRangeM": [
              1.045230507850647,
              1.045230507850647
            ]
          }
        },
        {
          "id": "000000220592 / frame 0",
          "title": "Case 02 · 000000220592",
          "subtitle": "train-json/ARKitScenes_train/000000220592.json",
          "image": "assets/omni3d/valid/02.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.708,
            "centerError": 0.014,
            "depthRangeM": [
              5.152228355407715,
              5.152228355407715
            ]
          }
        },
        {
          "id": "000000221979 / frame 0",
          "title": "Case 03 · 000000221979",
          "subtitle": "train-json/ARKitScenes_train/000000221979.json",
          "image": "assets/omni3d/valid/03.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.999,
            "centerError": 0.0002,
            "depthRangeM": [
              1.9551739692687988,
              1.9551739692687988
            ]
          }
        },
        {
          "id": "000000008257 / frame 0",
          "title": "Case 04 · 000000008257",
          "subtitle": "train-json/nuScenes_train/000000008257.json",
          "image": "assets/omni3d/valid/04.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 4,
            "medianIoU": 0.988,
            "centerError": 0.0001,
            "depthRangeM": [
              19.659847259521484,
              19.962377548217773
            ]
          }
        },
        {
          "id": "000000204268 / frame 0",
          "title": "Case 05 · 000000204268",
          "subtitle": "train-json/ARKitScenes_train/000000204268.json",
          "image": "assets/omni3d/valid/05.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.994,
            "centerError": 0.0002,
            "depthRangeM": [
              5.365348815917969,
              5.365348815917969
            ]
          }
        },
        {
          "id": "000000020963 / frame 0",
          "title": "Case 06 · 000000020963",
          "subtitle": "train-json/nuScenes_train/000000020963.json",
          "image": "assets/omni3d/valid/06.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 7,
            "medianIoU": 0.988,
            "centerError": 0.0001,
            "depthRangeM": [
              16.028663635253906,
              33.33323287963867
            ]
          }
        }
      ],
      "reviewCases": [],
      "errorCases": [
        {
          "id": "ann_636186",
          "title": "chair · ann 636186",
          "subtitle": "Hypersim_train / image 104649",
          "image": "assets/omni3d/error/01.webp",
          "tag": "filtered",
          "reason": "axis_fit_error",
          "metrics": {
            "axisFitError": 0.1209,
            "projectionIoU": 0.76,
            "centerError": 0.0021
          }
        },
        {
          "id": "ann_477358",
          "title": "blinds · ann 477358",
          "subtitle": "Hypersim_train / image 89765",
          "image": "assets/omni3d/error/02.webp",
          "tag": "filtered",
          "reason": "invalid_geometry",
          "metrics": {}
        },
        {
          "id": "ann_407735",
          "title": "bicycle · ann 407735",
          "subtitle": "Objectron_train / image 42397",
          "image": "assets/omni3d/error/03.webp",
          "tag": "filtered",
          "reason": "projection_center_error",
          "metrics": {
            "axisFitError": 0.0553,
            "projectionIoU": 0.808,
            "centerError": 0.0529
          }
        },
        {
          "id": "ann_590624",
          "title": "lamp · ann 590624",
          "subtitle": "Hypersim_train / image 99634",
          "image": "assets/omni3d/error/04.webp",
          "tag": "filtered",
          "reason": "projection_iou",
          "metrics": {
            "axisFitError": 0.0,
            "projectionIoU": 0.0,
            "centerError": 0.0
          }
        },
        {
          "id": "ann_636191",
          "title": "towel · ann 636191",
          "subtitle": "Hypersim_train / image 104649",
          "image": "assets/omni3d/error/05.webp",
          "tag": "filtered",
          "reason": "axis_fit_error",
          "metrics": {
            "axisFitError": 0.122,
            "projectionIoU": 0.766,
            "centerError": 0.0005
          }
        },
        {
          "id": "ann_406973",
          "title": "bicycle · ann 406973",
          "subtitle": "Objectron_train / image 41651",
          "image": "assets/omni3d/error/06.webp",
          "tag": "filtered",
          "reason": "axis_fit_error",
          "metrics": {
            "axisFitError": 0.1031,
            "projectionIoU": 0.837,
            "centerError": 0.0241
          }
        }
      ],
      "emptyMessage": ""
    },
    {
      "id": "pix3d",
      "name": "Pix3D",
      "samples": 9372,
      "dataType": "Single image",
      "videos": null,
      "observations": 9372,
      "review": 530,
      "filtered": 3,
      "description": "Single-view object images calibrated to the pseudometric training convention.",
      "statusDetail": "Three irreparable chair cases were physically removed. They are the only confirmed Pix3D errors.",
      "currentHard": 0,
      "filteredRate": 0.00032,
      "validCases": [
        {
          "id": "00684 / frame 0",
          "title": "Case 01 · 00684",
          "subtitle": "train-json/bed/00684.json",
          "image": "assets/pix3d/valid/01.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.953,
            "centerError": 0.0045,
            "depthRangeM": [
              5.490584850311279,
              5.490584850311279
            ]
          }
        },
        {
          "id": "09174 / frame 0",
          "title": "Case 02 · 09174",
          "subtitle": "train-json/table/09174.json",
          "image": "assets/pix3d/valid/02.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.869,
            "centerError": 0.0262,
            "depthRangeM": [
              3.766566753387451,
              3.766566753387451
            ]
          }
        },
        {
          "id": "01628 / frame 0",
          "title": "Case 03 · 01628",
          "subtitle": "train-json/chair/01628.json",
          "image": "assets/pix3d/valid/03.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.858,
            "centerError": 0.0096,
            "depthRangeM": [
              2.549496650695801,
              2.549496650695801
            ]
          }
        },
        {
          "id": "02551 / frame 0",
          "title": "Case 04 · 02551",
          "subtitle": "train-json/chair/02551.json",
          "image": "assets/pix3d/valid/04.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.857,
            "centerError": 0.0044,
            "depthRangeM": [
              1.7337161302566528,
              1.7337161302566528
            ]
          }
        },
        {
          "id": "08080 / frame 0",
          "title": "Case 05 · 08080",
          "subtitle": "train-json/table/08080.json",
          "image": "assets/pix3d/valid/05.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.985,
            "centerError": 0.0019,
            "depthRangeM": [
              4.498253345489502,
              4.498253345489502
            ]
          }
        },
        {
          "id": "00608 / frame 0",
          "title": "Case 06 · 00608",
          "subtitle": "train-json/bed/00608.json",
          "image": "assets/pix3d/valid/06.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.897,
            "centerError": 0.0125,
            "depthRangeM": [
              3.128694534301758,
              3.128694534301758
            ]
          }
        }
      ],
      "reviewCases": [
        {
          "id": "00219 / frame 0",
          "title": "bed · ann_219",
          "subtitle": "train-json/bed/00219.json",
          "image": "assets/pix3d/review/01.webp",
          "tag": "review",
          "reason": "center_review",
          "metrics": {
            "objects": 1,
            "IoU": 0.819,
            "centerError": 0.0688,
            "depthRangeM": [
              2.442176103591919,
              2.442176103591919
            ]
          }
        },
        {
          "id": "00253 / frame 0",
          "title": "bed · ann_253",
          "subtitle": "train-json/bed/00253.json",
          "image": "assets/pix3d/review/02.webp",
          "tag": "review",
          "reason": "center_review",
          "metrics": {
            "objects": 1,
            "IoU": 0.769,
            "centerError": 0.065,
            "depthRangeM": [
              2.0900630950927734,
              2.0900630950927734
            ]
          }
        },
        {
          "id": "00270 / frame 0",
          "title": "bed · ann_270",
          "subtitle": "train-json/bed/00270.json",
          "image": "assets/pix3d/review/03.webp",
          "tag": "review",
          "reason": "center_review",
          "metrics": {
            "objects": 1,
            "IoU": 0.7,
            "centerError": 0.1326,
            "depthRangeM": [
              1.8124480247497559,
              1.8124480247497559
            ]
          }
        },
        {
          "id": "00286 / frame 0",
          "title": "bed · ann_286",
          "subtitle": "train-json/bed/00286.json",
          "image": "assets/pix3d/review/04.webp",
          "tag": "review",
          "reason": "center_review",
          "metrics": {
            "objects": 1,
            "IoU": 0.728,
            "centerError": 0.0792,
            "depthRangeM": [
              2.0843007564544678,
              2.0843007564544678
            ]
          }
        },
        {
          "id": "00388 / frame 0",
          "title": "bed · ann_388",
          "subtitle": "train-json/bed/00388.json",
          "image": "assets/pix3d/review/05.webp",
          "tag": "review",
          "reason": "center_review",
          "metrics": {
            "objects": 1,
            "IoU": 0.347,
            "centerError": 0.2669,
            "depthRangeM": [
              1.7839901447296143,
              1.7839901447296143
            ]
          }
        },
        {
          "id": "00521 / frame 0",
          "title": "bed · ann_521",
          "subtitle": "train-json/bed/00521.json",
          "image": "assets/pix3d/review/06.webp",
          "tag": "review",
          "reason": "center_review",
          "metrics": {
            "objects": 1,
            "IoU": 0.324,
            "centerError": 0.18,
            "depthRangeM": [
              2.6538233757019043,
              2.6538233757019043
            ]
          }
        }
      ],
      "errorCases": [
        {
          "id": "pix3d_01506",
          "title": "chair · ann 1506",
          "subtitle": "img/chair/0152.jpg",
          "image": "assets/pix3d/error/01.webp",
          "tag": "deleted",
          "reason": "center_catastrophic",
          "metrics": {
            "IoU": 0.391,
            "centerError": 0.2197
          }
        },
        {
          "id": "pix3d_03017",
          "title": "chair · ann 3017",
          "subtitle": "img/chair/1663.jpg",
          "image": "assets/pix3d/error/02.webp",
          "tag": "deleted",
          "reason": "center_catastrophic, joint_iou_center",
          "metrics": {
            "IoU": 0.203,
            "centerError": 0.211
          }
        },
        {
          "id": "pix3d_03018",
          "title": "chair · ann 3018",
          "subtitle": "img/chair/1664.jpg",
          "image": "assets/pix3d/error/03.webp",
          "tag": "deleted",
          "reason": "center_catastrophic, joint_iou_center",
          "metrics": {
            "IoU": 0.224,
            "centerError": 0.2762
          }
        }
      ],
      "emptyMessage": "Only three confirmed Pix3D errors exist; all three were physically deleted."
    },
    {
      "id": "structured3d",
      "name": "Structured3D",
      "samples": 62040,
      "dataType": "Single image",
      "videos": null,
      "observations": 252345,
      "review": 265,
      "filtered": 82,
      "description": "Synthetic indoor views with metric scene geometry, camera parameters, and instance annotations.",
      "statusDetail": "82 visible-mask/cuboid containment failures were filtered; the current training data has no hard failures.",
      "currentHard": 0,
      "filteredRate": 0.0003248463912339013,
      "validCases": [
        {
          "id": "room_1413026372 / frame 2",
          "title": "Case 01 · room_1413026372",
          "subtitle": "train-json/scene_00355/room_1413026372.json",
          "image": "assets/structured3d/valid/01.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 2,
            "medianIoU": 0.77,
            "centerError": 0.0034,
            "depthRangeM": [
              2.9463376998901367,
              3.394118547439575
            ]
          }
        },
        {
          "id": "room_369189 / frame 0",
          "title": "Case 02 · room_369189",
          "subtitle": "train-json/scene_00044/room_369189.json",
          "image": "assets/structured3d/valid/02.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 3,
            "medianIoU": 0.812,
            "centerError": 0.0136,
            "depthRangeM": [
              2.5739617347717285,
              3.2470836639404297
            ]
          }
        },
        {
          "id": "room_1687 / frame 2",
          "title": "Case 03 · room_1687",
          "subtitle": "train-json/scene_03234/room_1687.json",
          "image": "assets/structured3d/valid/03.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.902,
            "centerError": 0.0031,
            "depthRangeM": [
              4.8965253829956055,
              4.8965253829956055
            ]
          }
        },
        {
          "id": "room_449237 / frame 0",
          "title": "Case 04 · room_449237",
          "subtitle": "train-json/scene_02885/room_449237.json",
          "image": "assets/structured3d/valid/04.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.876,
            "centerError": 0.01,
            "depthRangeM": [
              1.4239654541015625,
              1.4239654541015625
            ]
          }
        },
        {
          "id": "room_373118 / frame 4",
          "title": "Case 05 · room_373118",
          "subtitle": "train-json/scene_03129/room_373118.json",
          "image": "assets/structured3d/valid/05.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 3,
            "medianIoU": 0.791,
            "centerError": 0.0124,
            "depthRangeM": [
              2.381521701812744,
              4.156519889831543
            ]
          }
        },
        {
          "id": "room_1295 / frame 4",
          "title": "Case 06 · room_1295",
          "subtitle": "train-json/scene_01880/room_1295.json",
          "image": "assets/structured3d/valid/06.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.947,
            "centerError": 0.0038,
            "depthRangeM": [
              4.928798675537109,
              4.928798675537109
            ]
          }
        }
      ],
      "reviewCases": [
        {
          "id": "room_532 / frame 0",
          "title": "cabinet · instance_69",
          "subtitle": "train-json/scene_00153/room_532.json",
          "image": "assets/structured3d/review/01.webp",
          "tag": "review",
          "reason": "visible_containment_review",
          "metrics": {
            "objects": 15,
            "IoU": 0.527,
            "centerError": 0.0336,
            "depthRangeM": [
              0.8663973808288574,
              5.75596284866333
            ]
          }
        },
        {
          "id": "room_534 / frame 2",
          "title": "window · instance_53",
          "subtitle": "train-json/scene_00169/room_534.json",
          "image": "assets/structured3d/review/02.webp",
          "tag": "review",
          "reason": "visible_containment_review",
          "metrics": {
            "objects": 1,
            "IoU": 0.427,
            "centerError": 0.0355,
            "depthRangeM": [
              4.220220565795898,
              4.220220565795898
            ]
          }
        },
        {
          "id": "room_436 / frame 0",
          "title": "otherprop · instance_189",
          "subtitle": "train-json/scene_00214/room_436.json",
          "image": "assets/structured3d/review/03.webp",
          "tag": "review",
          "reason": "visible_containment_review",
          "metrics": {
            "objects": 2,
            "IoU": 0.725,
            "centerError": 0.0121,
            "depthRangeM": [
              1.0289283990859985,
              1.332613229751587
            ]
          }
        },
        {
          "id": "room_12995 / frame 2",
          "title": "window · instance_90",
          "subtitle": "train-json/scene_00230/room_12995.json",
          "image": "assets/structured3d/review/04.webp",
          "tag": "review",
          "reason": "visible_containment_review",
          "metrics": {
            "objects": 4,
            "IoU": 0.849,
            "centerError": 0.0029,
            "depthRangeM": [
              2.993022918701172,
              3.7855286598205566
            ]
          }
        },
        {
          "id": "room_367652 / frame 0",
          "title": "door · instance_208",
          "subtitle": "train-json/scene_00248/room_367652.json",
          "image": "assets/structured3d/review/05.webp",
          "tag": "review",
          "reason": "visible_containment_review",
          "metrics": {
            "objects": 15,
            "IoU": 0.485,
            "centerError": 0.0076,
            "depthRangeM": [
              1.332465648651123,
              8.242705345153809
            ]
          }
        },
        {
          "id": "room_928855 / frame 2",
          "title": "chair · instance_82",
          "subtitle": "train-json/scene_00258/room_928855.json",
          "image": "assets/structured3d/review/06.webp",
          "tag": "review",
          "reason": "visible_containment_review",
          "metrics": {
            "objects": 6,
            "IoU": 0.57,
            "centerError": 0.0047,
            "depthRangeM": [
              4.6940131187438965,
              9.764144897460938
            ]
          }
        }
      ],
      "errorCases": [
        {
          "id": "structured3d_scene_00073_room_2064 / frame 0",
          "title": "cabinet · instance_24",
          "subtitle": "structured3d_scene_00073_room_2064",
          "image": "assets/structured3d/error/01.webp",
          "tag": "filtered",
          "reason": "visible_box_not_contained",
          "metrics": {
            "maskContainment": null,
            "visibleContainment": 0.0
          }
        },
        {
          "id": "structured3d_scene_00819_room_212 / frame 4",
          "title": "window · instance_54",
          "subtitle": "structured3d_scene_00819_room_212",
          "image": "assets/structured3d/error/02.webp",
          "tag": "filtered",
          "reason": "visible_box_not_contained",
          "metrics": {
            "maskContainment": null,
            "visibleContainment": 0.0
          }
        },
        {
          "id": "structured3d_scene_02102_room_395 / frame 1",
          "title": "window · instance_55",
          "subtitle": "structured3d_scene_02102_room_395",
          "image": "assets/structured3d/error/03.webp",
          "tag": "filtered",
          "reason": "visible_box_not_contained",
          "metrics": {
            "maskContainment": null,
            "visibleContainment": 0.72
          }
        },
        {
          "id": "structured3d_scene_02603_room_1348 / frame 3",
          "title": "window · instance_174",
          "subtitle": "structured3d_scene_02603_room_1348",
          "image": "assets/structured3d/error/04.webp",
          "tag": "filtered",
          "reason": "visible_box_not_contained",
          "metrics": {
            "maskContainment": null,
            "visibleContainment": 0.278
          }
        },
        {
          "id": "structured3d_scene_03008_room_686 / frame 0",
          "title": "window · instance_103",
          "subtitle": "structured3d_scene_03008_room_686",
          "image": "assets/structured3d/error/05.webp",
          "tag": "filtered",
          "reason": "visible_box_not_contained",
          "metrics": {
            "maskContainment": null,
            "visibleContainment": 0.0
          }
        },
        {
          "id": "structured3d_scene_03497_room_966196 / frame 2",
          "title": "window · instance_110",
          "subtitle": "structured3d_scene_03497_room_966196",
          "image": "assets/structured3d/error/06.webp",
          "tag": "filtered",
          "reason": "visible_box_not_contained",
          "metrics": {
            "maskContainment": null,
            "visibleContainment": 0.44
          }
        }
      ],
      "emptyMessage": ""
    },
    {
      "id": "3dfront",
      "name": "3D-FRONT",
      "samples": 7938,
      "dataType": "Single image",
      "videos": null,
      "observations": 24704,
      "review": 386,
      "filtered": 0,
      "description": "Rendered indoor scenes with metric object geometry and known cameras.",
      "statusDetail": "No confirmed hard error remains under the current dataset-specific audit rule.",
      "currentHard": 0,
      "filteredRate": 0.0,
      "validCases": [
        {
          "id": "LivingRoom-13648 / frame 0000",
          "title": "Case 01 · LivingRoom-13648",
          "subtitle": "train-json/val/f8c4e5e9-8ba5-4694-8ac1-4823082e99d8/LivingRoom-13648.json",
          "image": "assets/3dfront/valid/01.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 4,
            "medianIoU": 0.97,
            "centerError": 0.0007,
            "depthRangeM": [
              2.7155137062072754,
              3.565491199493408
            ]
          }
        },
        {
          "id": "Bedroom-197 / frame 0000",
          "title": "Case 02 · Bedroom-197",
          "subtitle": "train-json/train/da1c0014-f0bd-4b1c-beaa-c9d34490efbb/Bedroom-197.json",
          "image": "assets/3dfront/valid/02.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 3,
            "medianIoU": 0.939,
            "centerError": 0.0014,
            "depthRangeM": [
              3.2338027954101562,
              3.544332504272461
            ]
          }
        },
        {
          "id": "MasterBedroom-11619 / frame 0000",
          "title": "Case 03 · MasterBedroom-11619",
          "subtitle": "train-json/val/f8c4e5e9-8ba5-4694-8ac1-4823082e99d8/MasterBedroom-11619.json",
          "image": "assets/3dfront/valid/03.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 3,
            "medianIoU": 0.941,
            "centerError": 0.0041,
            "depthRangeM": [
              2.826923131942749,
              3.6897311210632324
            ]
          }
        },
        {
          "id": "SecondBedroom-32238 / frame 0000",
          "title": "Case 04 · SecondBedroom-32238",
          "subtitle": "train-json/train/ce427ceb-7eb7-423e-b68b-d01cf1fa516a/SecondBedroom-32238.json",
          "image": "assets/3dfront/valid/04.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 5,
            "medianIoU": 0.976,
            "centerError": 0.0015,
            "depthRangeM": [
              2.6311898231506348,
              4.290844440460205
            ]
          }
        },
        {
          "id": "MasterBedroom-193 / frame 0000",
          "title": "Case 05 · MasterBedroom-193",
          "subtitle": "train-json/train/856c1df0-c383-4960-819e-e9caddd88631/MasterBedroom-193.json",
          "image": "assets/3dfront/valid/05.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 3,
            "medianIoU": 0.848,
            "centerError": 0.0041,
            "depthRangeM": [
              3.3093676567077637,
              4.249427795410156
            ]
          }
        },
        {
          "id": "SecondBedroom-31150 / frame 0000",
          "title": "Case 06 · SecondBedroom-31150",
          "subtitle": "train-json/val/ea7e0a92-a291-446c-b428-75aafe1db99a/SecondBedroom-31150.json",
          "image": "assets/3dfront/valid/06.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 2,
            "medianIoU": 0.959,
            "centerError": 0.0054,
            "depthRangeM": [
              2.7556748390197754,
              3.7491559982299805
            ]
          }
        }
      ],
      "reviewCases": [
        {
          "id": "MasterBedroom-8348 / frame 0000",
          "title": "cabinet shelf desk · Cabinet_Shelf_Desk_bb2af2f5-b2b5-4541-b553-7157415e39ac_1",
          "subtitle": "train-json/train/01832fd4-ab39-461a-8ba7-7a65e7e5fef8/MasterBedroom-8348.json",
          "image": "assets/3dfront/review/01.webp",
          "tag": "review",
          "reason": "iou_review, center_review",
          "metrics": {
            "objects": 4,
            "IoU": 0.363,
            "centerError": 0.0791,
            "depthRangeM": [
              2.635666847229004,
              4.239563941955566
            ]
          }
        },
        {
          "id": "Bedroom-2872 / frame 0000",
          "title": "cabinet shelf desk · Cabinet_Shelf_Desk_6cce85c1-50b5-49fb-9b4b-c3a7aa3baa73_3",
          "subtitle": "train-json/train/01ba1742-4fa5-4d1e-8ba4-2f807fe6b283/Bedroom-2872.json",
          "image": "assets/3dfront/review/02.webp",
          "tag": "review",
          "reason": "iou_review",
          "metrics": {
            "objects": 2,
            "IoU": 0.35,
            "centerError": 0.0327,
            "depthRangeM": [
              3.1746907234191895,
              3.9182848930358887
            ]
          }
        },
        {
          "id": "Bedroom-44231 / frame 0000",
          "title": "cabinet shelf desk · Cabinet_Shelf_Desk_6e16ad24-712f-4d40-abe6-93ecdf10bcb9_3",
          "subtitle": "train-json/train/01df4fc6-be42-4c30-ab7f-0add3ec82213/Bedroom-44231.json",
          "image": "assets/3dfront/review/03.webp",
          "tag": "review",
          "reason": "iou_review, center_review",
          "metrics": {
            "objects": 5,
            "IoU": 0.362,
            "centerError": 0.0553,
            "depthRangeM": [
              3.1502275466918945,
              4.322166442871094
            ]
          }
        },
        {
          "id": "Bedroom-118 / frame 0000",
          "title": "cabinet shelf desk · Cabinet_Shelf_Desk_0eafbc4c-760e-4f66-b149-78fb144fa9e7_3",
          "subtitle": "train-json/train/026d9b2e-f9e3-4754-b234-32e25b1974e5/Bedroom-118.json",
          "image": "assets/3dfront/review/04.webp",
          "tag": "review",
          "reason": "iou_review",
          "metrics": {
            "objects": 3,
            "IoU": 0.393,
            "centerError": 0.0209,
            "depthRangeM": [
              3.1981019973754883,
              4.297469615936279
            ]
          }
        },
        {
          "id": "Library-245 / frame 0000",
          "title": "cabinet shelf desk · Cabinet_Shelf_Desk_a35ba93a-a794-41db-b36c-989981a0f148_1",
          "subtitle": "train-json/train/02861dfe-ed53-41f1-b554-b02d0c170c61/Library-245.json",
          "image": "assets/3dfront/review/05.webp",
          "tag": "review",
          "reason": "iou_review",
          "metrics": {
            "objects": 5,
            "IoU": 0.386,
            "centerError": 0.0269,
            "depthRangeM": [
              2.75459885597229,
              3.724942684173584
            ]
          }
        },
        {
          "id": "MasterBedroom-25712 / frame 0000",
          "title": "bed · Bed_5d0f5f8f-333f-49fe-91f8-26748c1419a9_1",
          "subtitle": "train-json/train/02b90cf0-5313-425d-961e-3151b633c729/MasterBedroom-25712.json",
          "image": "assets/3dfront/review/06.webp",
          "tag": "review",
          "reason": "iou_review, center_review",
          "metrics": {
            "objects": 4,
            "IoU": 0.34,
            "centerError": 0.0563,
            "depthRangeM": [
              2.6760146617889404,
              4.2730536460876465
            ]
          }
        }
      ],
      "errorCases": [],
      "emptyMessage": "No hard errors were confirmed in the current audit, so no fabricated error examples are shown."
    },
    {
      "id": "kubric",
      "name": "Kubric",
      "samples": 1266071,
      "dataType": "Video",
      "videos": 54270,
      "observations": 4910681,
      "review": 0,
      "filtered": 0,
      "description": "Synthetic video frames with exact camera, pose, metric geometry, and instance masks.",
      "statusDetail": "4,596 generic-rule candidates were verified as valid false positives; none were removed.",
      "currentHard": 0,
      "filteredRate": 0.0,
      "validCases": [
        {
          "id": "002_5010 / frame 0010",
          "title": "Case 01 · 002_5010",
          "subtitle": "train-json/movi_c/train/00271-of-01024/002_5010.json",
          "image": "assets/kubric/valid/01.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 2,
            "medianIoU": 0.912,
            "centerError": 0.0027,
            "depthRangeM": [
              6.482629299163818,
              7.808774948120117
            ]
          }
        },
        {
          "id": "006_8300 / frame 0005",
          "title": "Case 02 · 006_8300",
          "subtitle": "train-json/movi_b/train/00899-of-01024/006_8300.json",
          "image": "assets/kubric/valid/02.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 7,
            "medianIoU": 0.599,
            "centerError": 0.0072,
            "depthRangeM": [
              5.22325325012207,
              9.160016059875488
            ]
          }
        },
        {
          "id": "008_9405 / frame 0001",
          "title": "Case 03 · 008_9405",
          "subtitle": "train-json/movi_d/train/00065-of-01024/008_9405.json",
          "image": "assets/kubric/valid/03.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 5,
            "medianIoU": 0.658,
            "centerError": 0.0124,
            "depthRangeM": [
              5.551218509674072,
              9.235618591308594
            ]
          }
        },
        {
          "id": "003_8215 / frame 0001",
          "title": "Case 04 · 003_8215",
          "subtitle": "train-json/movi_b/train/00454-of-01024/003_8215.json",
          "image": "assets/kubric/valid/04.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 4,
            "medianIoU": 0.534,
            "centerError": 0.0138,
            "depthRangeM": [
              3.6030631065368652,
              9.88226318359375
            ]
          }
        },
        {
          "id": "001_44 / frame 0013",
          "title": "Case 05 · 001_44",
          "subtitle": "train-json/movi_f/train/00779-of-01024/001_44.json",
          "image": "assets/kubric/valid/05.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 7,
            "medianIoU": 0.53,
            "centerError": 0.013,
            "depthRangeM": [
              6.073604106903076,
              13.75079345703125
            ]
          }
        },
        {
          "id": "003_8698 / frame 0010",
          "title": "Case 06 · 003_8698",
          "subtitle": "train-json/movi_a/train/00134-of-01024/003_8698.json",
          "image": "assets/kubric/valid/06.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 4,
            "medianIoU": 0.855,
            "centerError": 0.0028,
            "depthRangeM": [
              8.977447509765625,
              12.148386001586914
            ]
          }
        }
      ],
      "reviewCases": [],
      "errorCases": [],
      "emptyMessage": "The current audit has zero confirmed errors. All 4,596 candidates flagged by the old rule passed instance-mask and exact-projection verification and are valid data."
    },
    {
      "id": "uco3d",
      "name": "uCO3D",
      "samples": 32650233,
      "dataType": "Video",
      "videos": 165646,
      "observations": 32650233,
      "review": 5580291,
      "filtered": 483970,
      "description": "Object-centric real video sequences with per-frame cameras and reconstructed 3D boxes.",
      "statusDetail": "483,970 failed frame annotations were excluded from the clean-data construction; current audited training observations have no hard failures.",
      "currentHard": 0,
      "filteredRate": 0.014606357062519355,
      "validCases": [
        {
          "id": "32-55714-58471 / frame 0063",
          "title": "Case 01 · 32-55714-58471",
          "subtitle": "32-55714-58471",
          "image": "assets/uco3d/valid/01.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.63,
            "centerError": 0.0334,
            "depthRangeM": [
              7.315342426300049,
              7.315342426300049
            ]
          }
        },
        {
          "id": "1-48714-88940 / frame 0048",
          "title": "Case 02 · 1-48714-88940",
          "subtitle": "1-48714-88940",
          "image": "assets/uco3d/valid/02.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.874,
            "centerError": 0.0059,
            "depthRangeM": [
              16.169076919555664,
              16.169076919555664
            ]
          }
        },
        {
          "id": "9-68540-80544 / frame 0152",
          "title": "Case 03 · 9-68540-80544",
          "subtitle": "9-68540-80544",
          "image": "assets/uco3d/valid/03.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.644,
            "centerError": 0.0532,
            "depthRangeM": [
              8.788138389587402,
              8.788138389587402
            ]
          }
        },
        {
          "id": "580-63758-36784 / frame 0040",
          "title": "Case 04 · 580-63758-36784",
          "subtitle": "580-63758-36784",
          "image": "assets/uco3d/valid/04.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.748,
            "centerError": 0.0013,
            "depthRangeM": [
              30.174150466918945,
              30.174150466918945
            ]
          }
        },
        {
          "id": "31340-33907-52632 / frame 0046",
          "title": "Case 05 · 31340-33907-52632",
          "subtitle": "31340-33907-52632",
          "image": "assets/uco3d/valid/05.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.834,
            "centerError": 0.0109,
            "depthRangeM": [
              9.489777565002441,
              9.489777565002441
            ]
          }
        },
        {
          "id": "1-10021-15453 / frame 0077",
          "title": "Case 06 · 1-10021-15453",
          "subtitle": "1-10021-15453",
          "image": "assets/uco3d/valid/06.webp",
          "tag": "accepted",
          "reason": "All current-loader objects pass the dataset-specific review checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.571,
            "centerError": 0.0248,
            "depthRangeM": [
              10.245766639709473,
              10.245766639709473
            ]
          }
        }
      ],
      "reviewCases": [
        {
          "id": "1-43511-11635 / frame 0192",
          "title": "tape sticky cloth or paper · target",
          "subtitle": "1-43511-11635",
          "image": "assets/uco3d/review/01.webp",
          "tag": "review",
          "reason": "visible_containment_or_overcoverage_review",
          "metrics": {
            "objects": 1,
            "IoU": 0.672,
            "centerError": 0.0249,
            "visibleContainment": 0.672,
            "projectedPrecision": 1.0,
            "depthRangeM": [
              4.489002227783203,
              4.489002227783203
            ]
          }
        },
        {
          "id": "128-44047-77125 / frame 0180",
          "title": "toothbrush · target",
          "subtitle": "128-44047-77125",
          "image": "assets/uco3d/review/02.webp",
          "tag": "review",
          "reason": "visible_containment_or_overcoverage_review",
          "metrics": {
            "objects": 1,
            "IoU": 0.655,
            "centerError": 0.024,
            "visibleContainment": 0.884,
            "projectedPrecision": 0.717,
            "depthRangeM": [
              1.9112194776535034,
              1.9112194776535034
            ]
          }
        },
        {
          "id": "13-67867-14914 / frame 0074",
          "title": "houseboat · target",
          "subtitle": "13-67867-14914",
          "image": "assets/uco3d/review/03.webp",
          "tag": "review",
          "reason": "visible_containment_or_overcoverage_review",
          "metrics": {
            "objects": 1,
            "IoU": 0.405,
            "centerError": 0.0688,
            "visibleContainment": 0.984,
            "projectedPrecision": 0.408,
            "depthRangeM": [
              0.933632493019104,
              0.933632493019104
            ]
          }
        },
        {
          "id": "289-29763-1408 / frame 0079",
          "title": "toothbrush · target",
          "subtitle": "289-29763-1408",
          "image": "assets/uco3d/review/04.webp",
          "tag": "review",
          "reason": "visible_containment_or_overcoverage_review",
          "metrics": {
            "objects": 1,
            "IoU": 0.128,
            "centerError": 0.2666,
            "visibleContainment": 0.554,
            "projectedPrecision": 0.143,
            "depthRangeM": [
              2.1227855682373047,
              2.1227855682373047
            ]
          }
        },
        {
          "id": "2954-35588-59828 / frame 0080",
          "title": "motorcycle · target",
          "subtitle": "2954-35588-59828",
          "image": "assets/uco3d/review/05.webp",
          "tag": "review",
          "reason": "visible_containment_or_overcoverage_review",
          "metrics": {
            "objects": 1,
            "IoU": 0.153,
            "centerError": 0.8215,
            "visibleContainment": 0.748,
            "projectedPrecision": 0.161,
            "depthRangeM": [
              2.7003092765808105,
              2.7003092765808105
            ]
          }
        },
        {
          "id": "30789-56119-2497 / frame 0179",
          "title": "carrot · target",
          "subtitle": "30789-56119-2497",
          "image": "assets/uco3d/review/06.webp",
          "tag": "review",
          "reason": "visible_containment_or_overcoverage_review",
          "metrics": {
            "objects": 1,
            "IoU": 0.761,
            "centerError": 0.0019,
            "visibleContainment": 0.761,
            "projectedPrecision": 1.0,
            "depthRangeM": [
              5.818353652954102,
              5.818353652954102
            ]
          }
        }
      ],
      "errorCases": [
        {
          "id": "22011-50107-8644 / frame 0095",
          "title": "Sequence 22011-50107-8644",
          "subtitle": "frame 0095",
          "image": "assets/uco3d/error/01.webp",
          "tag": "excluded",
          "reason": "invalid_geometry",
          "metrics": {
            "containment": null,
            "projectedPrecision": null
          }
        },
        {
          "id": "41108-37307-42201 / frame 0018",
          "title": "Sequence 41108-37307-42201",
          "subtitle": "frame 0018",
          "image": "assets/uco3d/error/02.webp",
          "tag": "excluded",
          "reason": "invalid_geometry",
          "metrics": {
            "containment": null,
            "projectedPrecision": null
          }
        },
        {
          "id": "113-2231-52560 / frame 0020",
          "title": "Sequence 113-2231-52560",
          "subtitle": "frame 0020",
          "image": "assets/uco3d/error/03.webp",
          "tag": "excluded",
          "reason": "projected_bbox_overcoverage",
          "metrics": {
            "containment": 1.0,
            "projectedPrecision": 0.034
          }
        },
        {
          "id": "12814-31358-19358 / frame 0121",
          "title": "Sequence 12814-31358-19358",
          "subtitle": "frame 0121",
          "image": "assets/uco3d/error/04.webp",
          "tag": "excluded",
          "reason": "projected_bbox_overcoverage",
          "metrics": {
            "containment": 0.659,
            "projectedPrecision": 0.045
          }
        },
        {
          "id": "16-24533-89253 / frame 0135",
          "title": "Sequence 16-24533-89253",
          "subtitle": "frame 0135",
          "image": "assets/uco3d/error/05.webp",
          "tag": "excluded",
          "reason": "visible_bbox_not_contained",
          "metrics": {
            "containment": 0.064,
            "projectedPrecision": 1.0
          }
        },
        {
          "id": "1-16691-26786 / frame 0056",
          "title": "Sequence 1-16691-26786",
          "subtitle": "frame 0056",
          "image": "assets/uco3d/error/06.webp",
          "tag": "excluded",
          "reason": "visible_bbox_not_contained+projected_bbox_overcoverage",
          "metrics": {
            "containment": 0.0,
            "projectedPrecision": 0.0
          }
        }
      ],
      "emptyMessage": ""
    }
  ]
};
