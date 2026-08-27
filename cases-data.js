window.DATASET_QA = {
  "generatedAt": "2026-08-27",
  "auditDate": "2026-08-27",
  "datasets": [
    {
      "id": "wilddet3d",
      "name": "WildDet3D",
      "observations": 3712952,
      "review": 65188,
      "filtered": 274,
      "description": "In-the-wild real images with object-level 2D boxes and metric 3D cuboids.",
      "statusDetail": "274 confirmed source-annotation failures were filtered; the current training data has no hard failures.",
      "currentHard": 0,
      "filteredRate": 7.379028370478931e-05,
      "validCases": [
        {
          "id": "obj365_train_000000709536__img000707540 / frame 0",
          "title": "Case 01 · obj365_train_000000709536__img000707540",
          "subtitle": "train-json/train_synthetic/obj365_train_000000709536__img000707540.json",
          "image": "assets/wilddet3d/valid/01.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 3,
            "medianIoU": 0.665,
            "centerError": 0.0056,
            "depthRangeM": [
              5.539475440979004,
              6.980785846710205
            ]
          }
        },
        {
          "id": "v3det_train_000000182411__img000164232 / frame 0",
          "title": "Case 02 · v3det_train_000000182411__img000164232",
          "subtitle": "train-json/v3det_synthetic/v3det_train_000000182411__img000164232.json",
          "image": "assets/wilddet3d/valid/02.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 2,
            "medianIoU": 0.649,
            "centerError": 0.0183,
            "depthRangeM": [
              5.366083145141602,
              5.5077009201049805
            ]
          }
        },
        {
          "id": "obj365_train_000000181290__img000063640 / frame 0",
          "title": "Case 03 · obj365_train_000000181290__img000063640",
          "subtitle": "train-json/train_synthetic/obj365_train_000000181290__img000063640.json",
          "image": "assets/wilddet3d/valid/03.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.584,
            "centerError": 0.0512,
            "depthRangeM": [
              3.9418113231658936,
              3.9418113231658936
            ]
          }
        },
        {
          "id": "obj365_train_000000318028__img000546644 / frame 0",
          "title": "Case 04 · obj365_train_000000318028__img000546644",
          "subtitle": "train-json/train_synthetic/obj365_train_000000318028__img000546644.json",
          "image": "assets/wilddet3d/valid/04.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 3,
            "medianIoU": 0.464,
            "centerError": 0.0069,
            "depthRangeM": [
              3.9672634601593018,
              5.305595397949219
            ]
          }
        },
        {
          "id": "obj365_train_000000375615__img000508905 / frame 0",
          "title": "Case 05 · obj365_train_000000375615__img000508905",
          "subtitle": "train-json/train_synthetic/obj365_train_000000375615__img000508905.json",
          "image": "assets/wilddet3d/valid/05.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 5,
            "medianIoU": 0.655,
            "centerError": 0.0018,
            "depthRangeM": [
              11.642049789428711,
              14.452801704406738
            ]
          }
        },
        {
          "id": "obj365_train_000000239142__img000286440 / frame 0",
          "title": "Case 06 · obj365_train_000000239142__img000286440",
          "subtitle": "train-json/train_synthetic/obj365_train_000000239142__img000286440.json",
          "image": "assets/wilddet3d/valid/06.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 2,
            "medianIoU": 0.648,
            "centerError": 0.0061,
            "depthRangeM": [
              9.662752151489258,
              10.044452667236328
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
          "id": "ann_134122",
          "title": "cabinet/shelf · ann 134122",
          "subtitle": "train_synthetic / image 9194",
          "image": "assets/wilddet3d/error/02.webp",
          "tag": "filtered",
          "reason": "invalid_geometry",
          "metrics": {
            "IoU": null,
            "centerError": null
          }
        },
        {
          "id": "ann_2998",
          "title": "firecracker · ann 2998",
          "subtitle": "v3det_human_only / image 545",
          "image": "assets/wilddet3d/error/03.webp",
          "tag": "filtered",
          "reason": "center_catastrophic",
          "metrics": {
            "IoU": 0.453,
            "centerError": 0.2153
          }
        },
        {
          "id": "ann_291646",
          "title": "trifolium subterraneum · ann 291646",
          "subtitle": "v3det_synthetic / image 40906",
          "image": "assets/wilddet3d/error/04.webp",
          "tag": "filtered",
          "reason": "iou_catastrophic",
          "metrics": {
            "IoU": 0.112,
            "centerError": 0.0202
          }
        },
        {
          "id": "ann_57041",
          "title": "bus_(vehicle) · ann 57041",
          "subtitle": "train_human_only / image 3364",
          "image": "assets/wilddet3d/error/05.webp",
          "tag": "filtered",
          "reason": "joint_iou_center",
          "metrics": {
            "IoU": 0.235,
            "centerError": 0.1129
          }
        },
        {
          "id": "ann_111012",
          "title": "dog · ann 111012",
          "subtitle": "train_human_only / image 6508",
          "image": "assets/wilddet3d/error/06.webp",
          "tag": "filtered",
          "reason": "center_catastrophic",
          "metrics": {
            "IoU": 0.385,
            "centerError": 0.2187
          }
        }
      ],
      "emptyMessage": ""
    },
    {
      "id": "omni3d",
      "name": "Omni3D",
      "observations": 2393788,
      "review": 0,
      "filtered": 349,
      "description": "Multi-source indoor/outdoor metric 3D detection data normalized to one loader format.",
      "statusDetail": "349 invalid or inconsistent annotations were filtered; the current training data has no hard failures.",
      "currentHard": 0,
      "filteredRate": 0.000145772777414158,
      "validCases": [
        {
          "id": "000000164185 / frame 0",
          "title": "Case 01 · 000000164185",
          "subtitle": "train-json/SUNRGBD_train/000000164185.json",
          "image": "assets/omni3d/valid/01.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 3,
            "medianIoU": 0.429,
            "centerError": 0.076,
            "depthRangeM": [
              1.3756364583969116,
              3.187941074371338
            ]
          }
        },
        {
          "id": "000000101164 / frame 0",
          "title": "Case 02 · 000000101164",
          "subtitle": "train-json/Hypersim_train/000000101164.json",
          "image": "assets/omni3d/valid/02.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 5,
            "medianIoU": 0.387,
            "centerError": 0.0281,
            "depthRangeM": [
              2.6385319232940674,
              4.914353847503662
            ]
          }
        },
        {
          "id": "000000069327 / frame 0",
          "title": "Case 03 · 000000069327",
          "subtitle": "train-json/Objectron_val/000000069327.json",
          "image": "assets/omni3d/valid/03.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.705,
            "centerError": 0.1055,
            "depthRangeM": [
              0.6068242788314819,
              0.6068242788314819
            ]
          }
        },
        {
          "id": "000000144266 / frame 0",
          "title": "Case 04 · 000000144266",
          "subtitle": "train-json/Hypersim_train/000000144266.json",
          "image": "assets/omni3d/valid/04.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 10,
            "medianIoU": 0.5,
            "centerError": 0.0241,
            "depthRangeM": [
              1.9145164489746094,
              11.383858680725098
            ]
          }
        },
        {
          "id": "000000073032 / frame 0",
          "title": "Case 05 · 000000073032",
          "subtitle": "train-json/Objectron_train/000000073032.json",
          "image": "assets/omni3d/valid/05.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.684,
            "centerError": 0.0072,
            "depthRangeM": [
              1.045230507850647,
              1.045230507850647
            ]
          }
        },
        {
          "id": "000000111002 / frame 0",
          "title": "Case 06 · 000000111002",
          "subtitle": "train-json/Hypersim_train/000000111002.json",
          "image": "assets/omni3d/valid/06.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.031,
            "centerError": 0.1272,
            "depthRangeM": [
              3.066688060760498,
              3.066688060760498
            ]
          }
        }
      ],
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
          "reason": "Passed the current dataset-specific hard checks",
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
          "reason": "Passed the current dataset-specific hard checks",
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
          "reason": "Passed the current dataset-specific hard checks",
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
          "reason": "Passed the current dataset-specific hard checks",
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
          "id": "08810 / frame 0",
          "title": "Case 05 · 08810",
          "subtitle": "train-json/table/08810.json",
          "image": "assets/pix3d/valid/05.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.804,
            "centerError": 0.0603,
            "depthRangeM": [
              1.7630702257156372,
              1.7630702257156372
            ]
          }
        },
        {
          "id": "08080 / frame 0",
          "title": "Case 06 · 08080",
          "subtitle": "train-json/table/08080.json",
          "image": "assets/pix3d/valid/06.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.985,
            "centerError": 0.0019,
            "depthRangeM": [
              4.498253345489502,
              4.498253345489502
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
      "observations": 252345,
      "review": 265,
      "filtered": 82,
      "description": "Synthetic indoor views with metric scene geometry, camera parameters, and instance annotations.",
      "statusDetail": "82 visible-mask/cuboid containment failures were filtered; the current training data has no hard failures.",
      "currentHard": 0,
      "filteredRate": 0.0003248463912339013,
      "validCases": [
        {
          "id": "room_7109 / frame 1",
          "title": "Case 01 · room_7109",
          "subtitle": "train-json/scene_00790/room_7109.json",
          "image": "assets/structured3d/valid/01.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.44,
            "centerError": 0.0542,
            "depthRangeM": [
              2.4684078693389893,
              2.4684078693389893
            ]
          }
        },
        {
          "id": "room_1413026372 / frame 2",
          "title": "Case 02 · room_1413026372",
          "subtitle": "train-json/scene_00355/room_1413026372.json",
          "image": "assets/structured3d/valid/02.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 2,
            "medianIoU": 0.771,
            "centerError": 0.0026,
            "depthRangeM": [
              2.9463376998901367,
              3.394118547439575
            ]
          }
        },
        {
          "id": "room_236 / frame 2",
          "title": "Case 03 · room_236",
          "subtitle": "train-json/scene_00100/room_236.json",
          "image": "assets/structured3d/valid/03.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 2,
            "medianIoU": 0.617,
            "centerError": 0.099,
            "depthRangeM": [
              2.3463594913482666,
              3.12369704246521
            ]
          }
        },
        {
          "id": "room_875421 / frame 0",
          "title": "Case 04 · room_875421",
          "subtitle": "train-json/scene_01079/room_875421.json",
          "image": "assets/structured3d/valid/04.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 2,
            "medianIoU": 0.631,
            "centerError": 0.0465,
            "depthRangeM": [
              2.014836072921753,
              4.073915481567383
            ]
          }
        },
        {
          "id": "room_401703 / frame 1",
          "title": "Case 05 · room_401703",
          "subtitle": "train-json/scene_02810/room_401703.json",
          "image": "assets/structured3d/valid/05.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 2,
            "medianIoU": 0.54,
            "centerError": 0.1456,
            "depthRangeM": [
              2.6264524459838867,
              3.292895555496216
            ]
          }
        },
        {
          "id": "room_796547 / frame 4",
          "title": "Case 06 · room_796547",
          "subtitle": "train-json/scene_02372/room_796547.json",
          "image": "assets/structured3d/valid/06.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.304,
            "centerError": 0.2806,
            "depthRangeM": [
              1.6194429397583008,
              1.6194429397583008
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
          "reason": "Passed the current dataset-specific hard checks",
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
          "reason": "Passed the current dataset-specific hard checks",
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
          "reason": "Passed the current dataset-specific hard checks",
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
          "reason": "Passed the current dataset-specific hard checks",
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
          "reason": "Passed the current dataset-specific hard checks",
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
          "reason": "Passed the current dataset-specific hard checks",
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
      "errorCases": [],
      "emptyMessage": "No hard errors were confirmed in the current audit, so no fabricated error examples are shown."
    },
    {
      "id": "kubric",
      "name": "Kubric",
      "observations": 4910681,
      "review": 0,
      "filtered": 0,
      "description": "Synthetic video frames with exact camera, pose, metric geometry, and instance masks.",
      "statusDetail": "4,596 generic-rule candidates were verified as valid false positives; none were removed.",
      "currentHard": 0,
      "filteredRate": 0.0,
      "validCases": [
        {
          "id": "004_198 / frame 0020",
          "title": "Case 01 · 004_198",
          "subtitle": "train-json/movi_f/train/00272-of-01024/004_198.json",
          "image": "assets/kubric/valid/01.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 3,
            "medianIoU": 0.536,
            "centerError": 0.0464,
            "depthRangeM": [
              5.583044052124023,
              10.275022506713867
            ]
          }
        },
        {
          "id": "002_5010 / frame 0010",
          "title": "Case 02 · 002_5010",
          "subtitle": "train-json/movi_c/train/00271-of-01024/002_5010.json",
          "image": "assets/kubric/valid/02.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
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
          "title": "Case 03 · 006_8300",
          "subtitle": "train-json/movi_b/train/00899-of-01024/006_8300.json",
          "image": "assets/kubric/valid/03.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
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
          "title": "Case 04 · 008_9405",
          "subtitle": "train-json/movi_d/train/00065-of-01024/008_9405.json",
          "image": "assets/kubric/valid/04.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
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
          "title": "Case 05 · 003_8215",
          "subtitle": "train-json/movi_b/train/00454-of-01024/003_8215.json",
          "image": "assets/kubric/valid/05.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
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
          "id": "008_9607 / frame 0000",
          "title": "Case 06 · 008_9607",
          "subtitle": "train-json/movi_d/train/00530-of-01024/008_9607.json",
          "image": "assets/kubric/valid/06.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 6,
            "medianIoU": 0.618,
            "centerError": 0.0081,
            "depthRangeM": [
              6.185780048370361,
              10.066465377807617
            ]
          }
        }
      ],
      "errorCases": [],
      "emptyMessage": "The current audit has zero confirmed errors. All 4,596 candidates flagged by the old rule passed instance-mask and exact-projection verification and are valid data."
    },
    {
      "id": "uco3d",
      "name": "uCO3D",
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
          "reason": "Passed the current dataset-specific hard checks",
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
          "id": "91-4659-48115 / frame 0026",
          "title": "Case 02 · 91-4659-48115",
          "subtitle": "91-4659-48115",
          "image": "assets/uco3d/valid/02.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.46,
            "centerError": 0.0964,
            "depthRangeM": [
              6.909976959228516,
              6.909976959228516
            ]
          }
        },
        {
          "id": "1-48714-88940 / frame 0048",
          "title": "Case 03 · 1-48714-88940",
          "subtitle": "1-48714-88940",
          "image": "assets/uco3d/valid/03.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
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
          "title": "Case 04 · 9-68540-80544",
          "subtitle": "9-68540-80544",
          "image": "assets/uco3d/valid/04.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
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
          "title": "Case 05 · 580-63758-36784",
          "subtitle": "580-63758-36784",
          "image": "assets/uco3d/valid/05.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
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
          "title": "Case 06 · 31340-33907-52632",
          "subtitle": "31340-33907-52632",
          "image": "assets/uco3d/valid/06.webp",
          "tag": "accepted",
          "reason": "Passed the current dataset-specific hard checks",
          "metrics": {
            "objects": 1,
            "medianIoU": 0.834,
            "centerError": 0.0109,
            "depthRangeM": [
              9.489777565002441,
              9.489777565002441
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
