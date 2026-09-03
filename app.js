(() => {
  "use strict";

  const data = window.DATASET_QA;
  if (!data || !Array.isArray(data.datasets)) {
    document.body.innerHTML = "<p style='padding:2rem'>Missing cases-data.js</p>";
    return;
  }
  const assetVersion = data.assetVersion || data.generatedAt || "current";

  const targetModeProfiles = {
    visible: {
      id: "visible",
      label: "Visible 2D",
      labelZh: "可见 2D 框",
      eyebrow: "BOX DRAWN FROM THE IMAGE",
      eyebrowZh: "独立图像目标",
      title: "Use visible 2D boxes for every dataset",
      titleZh: "所有数据集统一使用可见 2D 框",
      description:
        "The 2D box comes from the image, a mask, or a person. It can show when the 3D box misses the visible object. Occlusion means the two boxes do not need the same center or IoU.",
      descriptionZh:
        "2D 框来自图像、mask 或人工标注，可以发现没有覆盖可见物体的 3D 框；存在遮挡时，两个框不必具有相同中心或 IoU。",
      signalTitle: "Training signal",
      signalTitleZh: "训练信号",
      signalCopy: "The 2D head learns the visible object extent.",
      signalCopyZh: "2D head 学习物体当前可见的范围。",
      auditTitle: "Valid QA rule",
      auditTitleZh: "有效审查规则",
      auditCopy: "Use visible containment and projected precision; treat visible/amodal IoU as diagnostic only.",
      auditCopyZh: "使用可见区域包含率和投影 precision；visible/amodal IoU 只用于诊断。",
      riskTitle: "Main trade-off",
      riskTitleZh: "主要取舍",
      riskCopy: "Better image evidence, but some datasets have no visible 2D box and heavy occlusion creates more review cases.",
      riskCopyZh: "图像监督更直接，但部分数据集没有可见 2D 框，严重遮挡也会产生更多复核 case。",
      ruleTitle: "Visible 2D box filtering rules",
      ruleTitleZh: "可见 2D 框过滤规则",
      ruleSummary:
        "The 2D box is independent image evidence. Check whether the projected 3D box contains what is visible. Do not reject a case only because the two boxes have different centers or IoU.",
      ruleSummaryZh:
        "2D 框是独立图像证据。检查投影 3D 框是否包含可见物体；两个框的中心或 IoU 不同，不能单独作为删除理由。",
      ruleMetric: "visible containment = intersection / visible area",
      ruleMetricZh: "visible containment = 交集 / 可见区域",
      ruleHard: "containment < 0.50",
      ruleHardZh: "包含率 < 0.50",
      ruleReview: "0.50 ≤ containment < 0.90",
      ruleReviewZh: "0.50 ≤ 包含率 < 0.90",
      projectionStep:
        "Compare the independent visible box or mask with the projected cuboid using asymmetric containment. Symmetric IoU and center offset remain diagnostic only.",
      projectionStepZh:
        "用非对称 containment 比较独立 visible box 或 mask 与投影 3D 框；对称 IoU 和中心偏差只作诊断。",
      ruleDefinitions:
        "Decision metric: visible containment = area(visible ∩ projected) / area(visible). Visible/amodal IoU and center offset are diagnostic only. Independent geometry and dataset-specific exact checks remain active.",
      ruleDefinitionsZh:
        "判定指标：visible containment = area(visible ∩ projected) / area(visible)。Visible/amodal IoU 与中心偏差只作诊断；独立几何检查和数据集专用精确检查继续生效。",
    },
    projected: {
      id: "projected",
      label: "2D box from 3D",
      labelZh: "由 3D 框计算的 2D 框",
      eyebrow: "BOX CALCULATED FROM THE 3D BOX",
      eyebrowZh: "派生 AMODAL 目标",
      title: "Use a 2D box calculated from the 3D box for every dataset",
      titleZh: "所有数据集统一使用由 3D 框计算的 2D 框",
      description:
        "The 2D box is the outer rectangle of the same 3D box used for training. The two boxes always agree by design, so most mismatch warnings disappear. This does not prove that the 3D box fits the real object.",
      descriptionZh:
        "2D 框是同一个 3D 框投影后的外接矩形，因此两者天然一致，大部分不匹配告警会消失；但这不能证明 3D 框真的贴合物体。",
      signalTitle: "Training signal",
      signalTitleZh: "训练信号",
      signalCopy: "The 2D head learns the amodal footprint implied by the 3D cuboid.",
      signalCopyZh: "2D head 学习 3D 框所定义的 amodal 投影范围。",
      auditTitle: "Valid QA rule",
      auditTitleZh: "有效审查规则",
      auditCopy: "Check geometry, camera conversion, and stored-versus-recomputed projection—not visible-box IoU.",
      auditCopyZh: "检查几何、相机转换和存储投影与重算投影的一致性，而不是 visible-box IoU。",
      riskTitle: "Main trade-off",
      riskTitleZh: "主要取舍",
      riskCopy: "Easy to unify, but a wrong or oversized 3D box produces a matching wrong 2D box and can pass unnoticed.",
      riskCopyZh: "容易统一，但错误或过大的 3D 框会生成同样错误的 2D 框，可能无法被发现。",
      ruleTitle: "Projected-envelope filtering rules",
      ruleTitleZh: "Projected envelope 过滤规则",
      ruleSummary:
        "The 2D box comes from the same 3D box. Comparing it back to that 3D box cannot test object fit. Check the 3D geometry, camera conversion, and any separately stored projection instead.",
      ruleSummaryZh:
        "2D 框来自同一个 3D 框，不能再用两者比较来判断是否贴合物体；应检查 3D 几何、相机转换和单独存储的投影。",
      ruleMetric: "stored 2D box vs 2D box recomputed from 3D",
      ruleMetricZh: "存储 2D 框 vs 从 3D 重算的 2D 框",
      ruleHard: "invalid geometry or exact projection error > 1 px",
      ruleHardZh: "无效几何或精确投影误差 > 1 px",
      ruleReview: "IoU < 0.40 or center > 0.05 between two projected 2D boxes",
      ruleReviewZh: "两个投影 2D 框之间 IoU < 0.40 或中心偏差 > 0.05",
      projectionStep:
        "Recompute the 2D box from the 3D box with the current loader. Compare it only with a separately stored projected 2D box. If both come from the same 3D box, they agree by design.",
      projectionStepZh:
        "使用当前 loader 从 3D 框重算 2D 框，只与单独存储的投影 2D 框比较。如果两者来自同一个 3D 框，它们天然一致。",
      ruleDefinitions:
        "These checks apply only when a projected 2D box was stored separately. A 2D box newly calculated from the same 3D box cannot verify object fit. Geometry, camera, depth, scale, and other independent 3D checks still apply.",
      ruleDefinitionsZh:
        "这些检查只适用于单独存储的投影 2D 框。由同一个 3D 框新计算的 2D 框无法验证物体贴合度；几何、相机、深度、尺度和其他独立 3D 检查继续生效。",
    },
  };

  const targetModeDatasetStats = {
    wilddet3d: {
      visible: { source: "official visible box", sourceZh: "官方 visible box", coverage: 3712952, review: 65188, hard: 0 },
      projected: { source: "official projected box", sourceZh: "官方投影框", coverage: 3712952, review: 0, hard: 0 },
    },
    omni3d: {
      visible: { source: "mixed official / fallback", sourceZh: "官方 visible / 投影 fallback 混合", coverage: 2393788, review: 0, hard: 0, availability: "mixed" },
      projected: { source: "official projected box", sourceZh: "官方投影框", coverage: 2393788, review: 0, hard: 0 },
    },
    pix3d: {
      visible: { source: "official visible box", sourceZh: "官方 visible box", coverage: 9372, review: 530, hard: 0 },
      projected: { source: "derived from CAD + pose", sourceZh: "由 CAD + pose 派生", coverage: 9372, review: 0, hard: 0 },
    },
    structured3d: {
      visible: { source: "derived from instance mask", sourceZh: "由 instance mask 派生", coverage: 252345, review: 265, hard: 82 },
      projected: { source: "derived from 3D cuboid", sourceZh: "由 3D 框派生", coverage: 252345, review: 0, hard: 0 },
    },
    "3dfront": {
      visible: { source: "derived from semantic render", sourceZh: "由语义渲染派生", coverage: 24704, review: 386, hard: 0 },
      projected: { source: "derived from 3D cuboid", sourceZh: "由 3D 框派生", coverage: 24704, review: 0, hard: 0 },
    },
    kubric: {
      visible: { source: "official mask box", sourceZh: "官方 mask box", coverage: 4910681, review: 0, hard: 0 },
      projected: { source: "derived from exact cuboid", sourceZh: "由精确 3D 框派生", coverage: 4910681, review: 0, hard: 0 },
    },
    uco3d: {
      visible: { source: "official mask box", sourceZh: "官方 mask box", coverage: 32650233, review: 5580291, hard: 483970 },
      projected: { source: "derived from sequence cuboid", sourceZh: "由序列 3D 框派生", coverage: 32650233, review: 0, hard: 65400 },
    },
    ca1m: {
      visible: { source: "not available", sourceZh: "未提供", coverage: 0, review: null, hard: null, availability: "missing" },
      projected: { source: "official / recomputed projection", sourceZh: "官方 / 重算投影", coverage: 24935871, review: 0, hard: 31 },
    },
    hypersim: {
      visible: { source: "derived from instance render", sourceZh: "由实例渲染派生", coverage: 1740669, review: 0, hard: 34 },
      projected: { source: "derived from metric cuboid", sourceZh: "由 metric 3D 框派生", coverage: 1740669, review: 0, hard: 34 },
    },
    adt: {
      visible: { source: "official visible box", sourceZh: "官方 visible box", coverage: 7027584, review: 0, hard: 0 },
      projected: { source: "recomputed from 3D cuboid", sourceZh: "由 3D 框重算", coverage: 7027584, review: 0, hard: 0 },
    },
    hssd: {
      visible: { source: "derived from semantic render", sourceZh: "由语义渲染派生", coverage: 20475, review: 0, hard: 379 },
      projected: { source: "recomputed from 3D cuboid", sourceZh: "由 3D 框重算", coverage: 20475, review: 0, hard: 355 },
    },
    abo: {
      visible: { source: "derived from alpha / mask", sourceZh: "由 alpha / mask 派生", coverage: 47718, review: 2790, hard: 154 },
      projected: { source: "derived from normalized CAD", sourceZh: "由 normalized CAD 派生", coverage: 47718, review: 0, hard: 0 },
    },
    shapenet: {
      visible: { source: "derived from project render", sourceZh: "由项目渲染派生", coverage: 314832, review: 14, hard: 0 },
      projected: { source: "derived from normalized CAD", sourceZh: "由 normalized CAD 派生", coverage: 314832, review: 0, hard: 0 },
    },
    replica: {
      visible: { source: "derived from semantic render", sourceZh: "由语义渲染派生", coverage: 313, review: 29, hard: 5 },
      projected: { source: "derived from metric cuboid", sourceZh: "由 metric 3D 框派生", coverage: 313, review: 0, hard: 0 },
    },
    hoi4d: {
      visible: { source: "official mask box / projected fallback", sourceZh: "官方 mask 框 / 投影 fallback", coverage: 206263, review: 74469, hard: 7978, availability: "mixed" },
      projected: { source: "official / recomputed projection", sourceZh: "官方 / 重算投影", coverage: 206263, review: 0, hard: 0, known: 0, hideKnownErrors: true },
    },
    hope: {
      visible: { source: "not available", sourceZh: "未提供", coverage: 0, review: null, hard: null, availability: "missing" },
      projected: { source: "derived from metric CAD + pose", sourceZh: "由 metric CAD + 位姿派生", coverage: 13864, review: 0, hard: 0 },
    },
    objectron: {
      visible: { source: "not available", sourceZh: "未提供", coverage: 0, review: null, hard: null, availability: "missing" },
      projected: { source: "official projected keypoints", sourceZh: "官方投影顶点", coverage: 962458, review: 0, hard: 0 },
    },
    sceneversepp: {
      visible: { source: "not available", sourceZh: "未提供", coverage: 0, review: null, hard: null, availability: "missing" },
      projected: { source: "derived from metric 3D boxes", sourceZh: "由 metric 3D 框派生", coverage: 408969, review: 0, hard: 0 },
    },
    sunrgbd: {
      visible: { source: "official visible box", sourceZh: "官方可见框", coverage: 10605, review: 2129, hard: 436 },
      projected: { source: "recomputed from metric 3D boxes", sourceZh: "由 metric 3D 框重算", coverage: 10605, review: 0, hard: 0, known: 0, hideKnownErrors: true },
    },
    synscapes: {
      visible: { source: "official visible box", sourceZh: "官方可见框", coverage: 326756, review: 26346, hard: 2782 },
      projected: { source: "recomputed from metric 3D boxes", sourceZh: "由 metric 3D 框重算", coverage: 326756, review: 0, hard: 0, known: 0, hideKnownErrors: true },
    },
    atek: {
      visible: { source: "official visible box", sourceZh: "官方可见框", coverage: 1450396, review: 153569, hard: 1403 },
      projected: { source: "official / recomputed projection", sourceZh: "官方 / 重算投影", coverage: 1450396, review: 0, hard: 0, known: 0, hideKnownErrors: true },
    },
    scannetpp: {
      visible: { source: "derived from official annotated mesh", sourceZh: "由官方标注 mesh 派生", coverage: 4281562, review: 1, hard: 0 },
      projected: { source: "derived from official metric OBB", sourceZh: "由官方 metric OBB 投影", coverage: 4281562, review: 0, hard: 0 },
    },
  };

  const approxStorageBytes = {
    wilddet3d: 1474975957022,
    omni3d: 506325540256,
    pix3d: 4601509897,
    structured3d: 728417653488,
    "3dfront": 1974452303740,
    kubric: 6675445464421,
    uco3d: 21235968261748,
    ca1m: 1772241767522,
    hypersim: 61081211942,
    adt: 874754862963,
    hssd: 6383072099,
    abo: 59483977905,
    shapenet: 400907684165,
    replica: 44668375,
    hoi4d: 69950452236,
    hope: 374021620,
    objectron: 568422148834,
    sceneversepp: 8930671382,
    sunrgbd: 2302818997,
    synscapes: 182082533497,
    atek: 538426855640,
    scannetpp: 2486924822185,
  };


  function versionedAsset(path) {
    if (!path) return path;
    return `${path}${path.includes("?") ? "&" : "?"}v=${encodeURIComponent(assetVersion)}`;
  }

  const datasetChinese = {
    wilddet3d: {
      description: "自然场景真实图像，包含物体级 2D 框和米制 3D 长方体。",
      statusDetail: "已过滤 274 个确认的源标注错误；当前训练数据不存在 hard error。",
    },
    omni3d: {
      description: "将多个室内与室外米制 3D 检测数据源统一到同一种加载格式。",
      statusDetail: "已过滤 349 个无效或不一致的标注；当前训练数据不存在 hard error。",
    },
    pix3d: {
      description: "按照伪米制训练约定校准的单视图物体图像。",
      statusDetail: "三个无法可靠修复的椅子 case 已被物理删除，也是 Pix3D 仅有的确认错误。",
      emptyMessage: "Pix3D 只有 3 个确认错误，且均已被物理删除。",
    },
    structured3d: {
      description: "具有米制场景几何、相机参数和实例标注的合成室内视图。",
      statusDetail: "已过滤 82 个可见 mask 与 3D 框包含关系失败的 case；当前训练数据不存在 hard error。",
    },
    "3dfront": {
      description: "具有米制物体几何和已知相机参数的渲染室内场景。",
      statusDetail: "按照当前数据集专用审查规则，没有确认的 hard error。",
      emptyMessage: "当前审查没有确认的 hard error，因此不展示伪造的错误样本。",
    },
    kubric: {
      description: "具有精确相机、位姿、米制几何和实例 mask 的合成视频帧。",
      statusDetail: "旧通用规则命中的 4,596 个候选均已确认是有效的 false positive，没有数据被删除。",
      emptyMessage: "当前审查为 0 个确认错误。旧规则命中的 4,596 个候选已通过实例 mask 和精确投影复核，属于有效数据。",
    },
    uco3d: {
      description: "具有逐帧相机和重建 3D 框的以物体为中心的真实视频序列。",
      statusDetail: "clean-data 构建排除了 483,970 个失败帧标注；当前训练帧中不存在 hard error。",
    },
    ca1m: {
      description: "具有逐帧相机几何、深度和物体 3D 框的大规模米制第一视角视频。",
      statusDetail: "审查覆盖当前训练与验证 loader 范围。31 个确认失败的物体帧由默认 loader 清单排除；38,345 个边界图像帧保留并等待人工确认。",
    },
    hypersim: {
      description: "具有米制几何和精确相机参数的高真实感合成室内相机轨迹。",
      statusDetail: "审查覆盖当前训练与验证 loader 范围。34 个完全位于画面外的物体图像会被 loader 有效性过滤；所有 loader 可用图像均通过。",
    },
    adt: {
      description: "具有米制物体几何和官方逐帧相机标定的 Aria Digital Twin 序列。",
      statusDetail: "7,027,584 个物体帧全部通过当前 loader 对齐的几何与投影检查。",
      emptyMessage: "ADT 当前审查没有需要人工确认或已过滤的样本。",
    },
    hssd: {
      description: "具有米制物体几何、深度和已知相机的合成室内序列。",
      statusDetail: "379 个无效几何或投影 metadata 图像帧已被排除；这些图像帧均不满足当前训练 loader 的使用条件。",
    },
    abo: {
      description: "具有归一化物体几何和已知相机的多视角商品渲染图像。",
      statusDetail: "154 个自动 hard reject 和 2,790 个经人工确认的 review 图像均为错误；全部 2,944 个图像均不满足当前训练 loader 的使用条件。",
    },
    shapenet: {
      description: "具有归一化 ShapeNet 几何和已知相机的物体渲染视图。",
      statusDetail: "14 个自动 review 图像均经人工确认为错误并被排除；它们均不满足当前训练 loader 的使用条件。",
    },
    replica: {
      description: "HF v2 包含每个 Replica 场景的一张米制 RGB/depth 图像及相机坐标系 3D 框。",
      statusDetail: "当前 loader 可用的 313 个物体图像中，279 个通过、29 个需人工确认，另有 5 个尚未移除的 hard reject。",
    },
    hoi4d: {
      description: "具有米制物体位姿、3D 框、mask 和相机标定的第一视角 RGB-D 视频。",
      statusDetail: "使用可见 2D 框时，74,469 个物体帧需要复核，7,978 个被包含率规则拒绝；使用由 3D 框计算的 2D 框时，206,263 个物体帧均通过投影一致性检查。",
    },
    hope: {
      description: "HOPE Image 和 HOPE Video 使用 metric evaluation CAD、官方物体位姿、相机、RGB 和深度。",
      statusDetail: "13,864 个物体图像 / 帧全部通过当前投影框几何检查；该数据集没有单独的可见 2D 框。",
      emptyMessage: "HOPE Image 和 HOPE Video 全部通过投影框检查，没有待复核或被规则拒绝的样本。",
    },
    objectron: {
      description: "具有官方米制 3D 框、相机位姿和投影顶点的物体中心视频。",
      statusDetail: "962,458 个物体帧全部通过投影框几何检查；该数据集没有单独的可见 2D 框。",
      emptyMessage: "所有 Objectron 物体帧均通过投影框检查，没有待复核或被规则拒绝的样本。",
    },
    sceneversepp: {
      description: "具有米制重建几何、物体框和官方相机的室内场景视图。",
      statusDetail: "408,969 个物体帧全部通过投影框几何检查；该数据集没有单独的可见 2D 框。",
      emptyMessage: "所有 SceneVerse++ 物体帧均通过投影框检查，没有待复核或被规则拒绝的样本。",
    },
    sunrgbd: {
      description: "具有官方可见 2D 框、米制 3D 框和相机标定的室内 RGB-D 图像。",
      statusDetail: "使用可见 2D 框时，2,129 个物体需要复核，436 个被包含率规则拒绝；由 3D 框重算的投影在内部保持一致。",
    },
    synscapes: {
      description: "具有官方可见 2D 框和米制 3D 框的合成驾驶图像。",
      statusDetail: "使用可见 2D 框时，26,346 个物体需要复核，2,782 个被可见框规则拒绝；投影 2D 框与 3D 框在内部保持一致。",
    },
    atek: {
      description: "具有可见 2D 框、米制相机坐标系 3D 框、RGB、深度和相机标定的第一视角室内视频。",
      statusDetail: "审查的 1,450,396 个物体帧中，1,295,424 个通过，153,569 个需要人工确认，1,403 个被可见区域包含率规则拒绝；存储投影与重算投影的误差均不超过 1 像素。",
    },
    scannetpp: {
      description: "包含官方 metric 物体框和相机的室内 DSLR 图像、iPhone 视频与 360 RGB-D 全景。",
      statusDetail: "完整审查覆盖 906 个 DSLR 场景、968 个 iPhone 场景和 956 个全景场景。当前没有 hard error；一个 DSLR table 帧需要人工确认。",
      emptyMessage: "完整审查没有发现 ScanNet++ hard error 或已确认过滤的 case；唯一边界样本位于人工复核区域。",
    },
  };

  const reasonChinese = {
    "Passed the current dataset-specific hard checks": "通过当前数据集专用的 hard checks",
    iou_catastrophic: "IoU 严重不匹配",
    invalid_geometry: "几何无效",
    center_catastrophic: "中心偏差严重",
    joint_iou_center: "IoU 与中心偏差联合失败",
    axis_fit_error: "坐标轴拟合错误",
    projection_center_error: "投影中心错误",
    projection_iou: "投影 IoU 错误",
    visible_box_not_contained: "可见框未被 3D 投影框包含",
    projected_bbox_overcoverage: "3D 投影框覆盖范围过大",
    visible_bbox_not_contained: "可见框未被完整包含",
    "visible_bbox_not_contained+projected_bbox_overcoverage": "可见框未被包含且 3D 投影框覆盖过大",
    iou_review: "IoU 边界样本，需人工确认",
    center_review: "中心偏差边界样本，需人工确认",
    visible_containment_review: "可见区域包含率边界样本，需人工确认",
    visible_bbox_containment_review: "可见框包含率边界样本，需人工确认",
    projected_bbox_overcoverage_review: "3D 投影框覆盖偏大，需人工确认",
    shape_scale_plausibility_review: "形状 / 尺度合理性需人工确认",
    severe_truncation_review: "严重截断 / 遮挡，需人工确认",
    fully_outside_image: "物体完全位于画面外",
    projection_metadata_mismatch: "存储投影与依据发布几何重算的投影不一致",
    visible_mask_not_contained: "可见区域没有被 3D 投影框充分包含",
    visible_iou_catastrophic: "可见 2D 框与 3D 投影框的 IoU 严重异常",
    visible_iou_review: "可见 2D 框与 3D 投影框的 IoU 需要人工确认",
    visible_center_review: "可见框与投影框的中心偏差需要人工确认",
    visible_joint_iou_center: "可见框与投影框同时存在 IoU 和中心偏差问题",
    "Passed the current loader-aligned geometry and projection checks": "通过当前 loader 对齐的几何与投影检查",
    human_review: "需要人工确认",
  };

  const tagChinese = {
    accepted: "已接受",
    filtered: "已过滤",
    deleted: "已删除",
    excluded: "已排除",
    review: "待人工确认",
    "hard reject": "确认 hard reject",
    "2D box check passed": "2D 框检查通过",
  };

  const metricChinese = {
    objects: "物体数",
    medianIoU: "中位 IoU",
    centerError: "中心偏差 / 对角线",
    depthRangeM: "深度（米）",
    IoU: "IoU",
    axisFitError: "坐标轴拟合",
    projectionIoU: "投影 IoU",
    projectionCenterError: "投影中心偏差",
    maskContainment: "mask 包含率",
    visibleContainment: "可见框包含率",
    containment: "包含率",
    projectedPrecision: "投影框精度",
    envelopeErrorPx: "包络误差（像素）",
    clippedWidthPx: "裁剪后宽度（像素）",
    clippedHeightPx: "裁剪后高度（像素）",
  };

  const elements = {
    heroEyebrow: document.querySelector("#hero-eyebrow"),
    pageTitle: document.querySelector("#page-title"),
    heroIntro: document.querySelector("#hero-intro"),
    legend2d: document.querySelector("#legend-2d"),
    legend3d: document.querySelector("#legend-3d"),
    auditLabel: document.querySelector("#audit-label"),
    auditDate: document.querySelector("#audit-date"),
    auditStatus: document.querySelector("#audit-status"),
    ruleModeKicker: document.querySelector("#rule-mode-kicker"),
    ruleModeTitle: document.querySelector("#rule-mode-title"),
    ruleModeSummary: document.querySelector("#rule-mode-summary"),
    ruleMetricLabel: document.querySelector("#rule-metric-label"),
    ruleMetricValue: document.querySelector("#rule-metric-value"),
    ruleHardLabel: document.querySelector("#rule-hard-label"),
    ruleHardValue: document.querySelector("#rule-hard-value"),
    ruleReviewLabel: document.querySelector("#rule-review-label"),
    ruleReviewValue: document.querySelector("#rule-review-value"),
    ruleProjectionCopy: document.querySelector("#rule-projection-copy"),
    ruleProjectionCopyZh: document.querySelector("#rule-projection-copy-zh"),
    ruleDefinitions: document.querySelector("#rule-definitions"),
    ruleModeRows: document.querySelectorAll("[data-rule-mode]"),
    targetPolicyKicker: document.querySelector("#target-policy-kicker"),
    targetPolicyTitle: document.querySelector("#target-policy-title"),
    targetPolicyIntro: document.querySelector("#target-policy-intro"),
    targetModeButtons: document.querySelectorAll("[data-target-mode]"),
    targetModeEyebrow: document.querySelector("#target-mode-eyebrow"),
    targetModeTitle: document.querySelector("#target-mode-title"),
    targetModeDescription: document.querySelector("#target-mode-description"),
    targetCoverageValue: document.querySelector("#target-coverage-value"),
    targetCoverageLabel: document.querySelector("#target-coverage-label"),
    targetReviewValue: document.querySelector("#target-review-value"),
    targetReviewLabel: document.querySelector("#target-review-label"),
    targetHardValue: document.querySelector("#target-hard-value"),
    targetHardLabel: document.querySelector("#target-hard-label"),
    targetKnownValue: document.querySelector("#target-known-value"),
    targetKnownLabel: document.querySelector("#target-known-label"),
    targetSignalTitle: document.querySelector("#target-signal-title"),
    targetSignalCopy: document.querySelector("#target-signal-copy"),
    targetAuditTitle: document.querySelector("#target-audit-title"),
    targetAuditCopy: document.querySelector("#target-audit-copy"),
    targetRiskTitle: document.querySelector("#target-risk-title"),
    targetRiskCopy: document.querySelector("#target-risk-copy"),
    overviewKicker: document.querySelector("#overview-kicker"),
    overviewTitle: document.querySelector("#overview-title"),
    tableNote: document.querySelector("#table-note"),
    thDataType: document.querySelector("#th-data-type"),
    thSamples: document.querySelector("#th-samples"),
    thVideos: document.querySelector("#th-videos"),
    thStorage: document.querySelector("#th-storage"),
    thTargetSource: document.querySelector("#th-target-source"),
    thReview: document.querySelector("#th-review"),
    thFiltered: document.querySelector("#th-filtered"),
    thErrorRate: document.querySelector("#th-error-rate"),
    thCurrentHard: document.querySelector("#th-current-hard"),
    thGallery: document.querySelector("#th-gallery"),
    thStatus: document.querySelector("#th-status"),
    navSelectLabel: document.querySelector("#nav-select-label"),
    generatedAt: document.querySelector("#generated-at"),
    statsBody: document.querySelector("#stats-body"),
    tabs: document.querySelector("#dataset-tabs"),
    datasetCount: document.querySelector("#dataset-count"),
    sensorNav: document.querySelector("#sensor-nav"),
    sensorTabs: document.querySelector("#sensor-tabs"),
    sensorSelectLabel: document.querySelector("#sensor-select-label"),
    sensorCount: document.querySelector("#sensor-count"),
    title: document.querySelector("#dataset-title"),
    datasetStatus: document.querySelector("#dataset-status"),
    description: document.querySelector("#dataset-description"),
    facts: document.querySelector("#dataset-facts"),
    acceptedKicker: document.querySelector("#accepted-kicker"),
    validTitle: document.querySelector("#valid-title"),
    validCountLabel: document.querySelector("#valid-count-label"),
    validExplainer: document.querySelector("#valid-explainer"),
    validGrid: document.querySelector("#valid-grid"),
    validEmpty: document.querySelector("#valid-empty"),
    validEmptyTitle: document.querySelector("#valid-empty-title"),
    validEmptyMessage: document.querySelector("#valid-empty-message"),
    reviewKicker: document.querySelector("#review-kicker"),
    reviewTitle: document.querySelector("#review-title"),
    reviewCountLabel: document.querySelector("#review-count-label"),
    reviewExplainer: document.querySelector("#review-explainer"),
    reviewGrid: document.querySelector("#review-grid"),
    reviewCount: document.querySelector("#review-count"),
    reviewEmpty: document.querySelector("#review-empty"),
    reviewEmptyTitle: document.querySelector("#review-empty-title"),
    reviewEmptyMessage: document.querySelector("#review-empty-message"),
    errorKicker: document.querySelector("#error-kicker"),
    errorTitle: document.querySelector("#error-title"),
    errorCountLabel: document.querySelector("#error-count-label"),
    errorGrid: document.querySelector("#error-grid"),
    validCount: document.querySelector("#valid-count"),
    errorCount: document.querySelector("#error-count"),
    errorEmpty: document.querySelector("#error-empty"),
    emptyTitle: document.querySelector("#empty-title"),
    emptyMessage: document.querySelector("#empty-message"),
    errorExplainer: document.querySelector("#error-explainer"),
    footerLabel: document.querySelector("#footer-label"),
    languageButtons: document.querySelectorAll("[data-language]"),
    lightbox: document.querySelector("#lightbox"),
    lightboxImage: document.querySelector("#lightbox-image"),
    lightboxTag: document.querySelector("#lightbox-tag"),
    lightboxTitle: document.querySelector("#lightbox-title"),
    lightboxSubtitle: document.querySelector("#lightbox-subtitle"),
    lightboxMetrics: document.querySelector("#lightbox-metrics"),
    closeLightbox: document.querySelector("#close-lightbox"),
  };

  const numberFormatter = new Intl.NumberFormat("en-US");
  const initialHashParts = location.hash.replace(/^#/, "").split("/").filter(Boolean);
  let currentDatasetId = initialHashParts[0] || data.datasets[0].id;
  let currentSensorId = initialHashParts[1] || null;
  let currentLanguage = "en";
  let currentTargetMode = "visible";
  try {
    if (localStorage.getItem("datasetQaLanguage") === "bilingual") currentLanguage = "bilingual";
    if (localStorage.getItem("datasetQaTargetMode") === "projected") currentTargetMode = "projected";
  } catch (_error) {
    currentLanguage = "en";
    currentTargetMode = "visible";
  }
  if (!data.datasets.some((dataset) => dataset.id === currentDatasetId)) {
    currentDatasetId = data.datasets[0].id;
  }

  function isBilingual() {
    return currentLanguage === "bilingual";
  }

  function localized(english, chinese, inline = false) {
    if (!isBilingual() || !chinese) return english;
    const className = inline ? "i18n-inline" : "i18n-zh";
    const separator = inline ? " / " : "";
    return `${english}${separator}<span class="${className}">${chinese}</span>`;
  }

  function plainLanguage(value) {
    return String(value == null ? "" : value)
      .replace(/\bobject-frame observations\b/gi, "object cases")
      .replace(/\bobject observations\b/gi, "object cases")
      .replace(/\btraining observations\b/gi, "training images / video frames")
      .replace(/\baudited observations\b/gi, "audited images / video frames")
      .replace(/\bobservations\b/gi, "images / video frames")
      .replace(/\btarget object's\b/gi, "object's")
      .replace(/\s+·\s+target\b/gi, "")
      .replace(/\btarget object\b/gi, "object");
  }

  function plainChinese(value) {
    return String(value == null ? "" : value)
      .replace(/物体观测/g, "物体图像 / 帧")
      .replace(/观测/g, "图像 / 帧")
      .replace(/2D target/gi, "2D 框");
  }

  function formatNumber(value) {
    return numberFormatter.format(value == null ? 0 : value);
  }

  function formatRate(value) {
    if (!value) return "0%";
    const percentage = value * 100;
    if (percentage < 0.01) return `${percentage.toFixed(3)}%`;
    return `${percentage.toFixed(2)}%`;
  }

  function formatStorage(bytes) {
    if (bytes == null || !Number.isFinite(Number(bytes))) return "—";
    const value = Number(bytes);
    const units = ["B", "KB", "MB", "GB", "TB", "PB"];
    let unitIndex = 0;
    let scaled = value;
    while (scaled >= 1000 && unitIndex < units.length - 1) {
      scaled /= 1000;
      unitIndex += 1;
    }
    const digits = scaled >= 100 ? 0 : scaled >= 10 ? 1 : 2;
    return `≈${scaled.toFixed(digits)} ${units[unitIndex]}`;
  }

  function datasetViewForSensor(dataset, sensor) {
    return {
      ...dataset,
      ...sensor,
      id: dataset.id,
      parentDatasetId: dataset.id,
      datasetName: dataset.name,
      name: `${dataset.name} · ${sensor.name}`,
    };
  }

  function activeDatasetView(dataset) {
    const views = Array.isArray(dataset.sensorViews) ? dataset.sensorViews : [];
    if (!views.length) return dataset;
    const sensor = views.find((candidate) => candidate.id === currentSensorId) || views[0];
    currentSensorId = sensor.id;
    return datasetViewForSensor(dataset, sensor);
  }

  function knownErrorCount(dataset) {
    if (dataset.knownErrors != null) return Number(dataset.knownErrors);
    const profiles = targetModeDatasetStats[dataset.id];
    const modeStats = profiles && profiles[currentTargetMode];
    if (modeStats && modeStats.known != null) return Number(modeStats.known);
    return Number(dataset.filtered || 0) + Number(dataset.currentHard || 0);
  }

  function targetStats(dataset) {
    if (dataset.targetModeStats && dataset.targetModeStats[currentTargetMode]) {
      return dataset.targetModeStats[currentTargetMode];
    }
    const profiles = targetModeDatasetStats[dataset.id];
    if (!profiles) {
      return {
        source: "not classified",
        sourceZh: "尚未分类",
        coverage: 0,
        review: null,
        hard: null,
        availability: "missing",
      };
    }
    return profiles[currentTargetMode];
  }

  function targetModeTotals() {
    return data.datasets.reduce(
      (total, dataset) => {
        const stats = targetStats(dataset);
        total.observations += Number(dataset.observations || 0);
        total.coverage += Number(stats.coverage || 0);
        total.review += Number(stats.review || 0);
        total.hard += Number(stats.hard || 0);
        total.known += knownErrorCount(dataset);
        return total;
      },
      { observations: 0, coverage: 0, review: 0, hard: 0, known: 0 },
    );
  }

  function targetFlagRate(dataset, stats) {
    if (stats.availability === "missing" || !dataset.observations) return null;
    return (Number(stats.review || 0) + Number(stats.hard || 0)) / dataset.observations;
  }

  const threePanelDatasetIds = new Set([
    "hoi4d",
    "hope",
    "objectron",
    "sceneversepp",
    "sunrgbd",
    "synscapes",
    "atek",
    "scannetpp",
  ]);

  function targetModeAsset(path) {
    if (!path) return path;
    if (currentTargetMode === "projected") {
      return path.replace(/^assets\//, "assets_modes/projected/");
    }

    const datasetId = path.split("/")[1];
    if (threePanelDatasetIds.has(datasetId)) {
      return path.replace(/^assets\//, "assets_modes/visible/");
    }
    return path;
  }

  function projectedPassCase(caseData) {
    return {
      ...caseData,
      tag: "2D box check passed",
      reason:
        "The 2D box is calculated from this same 3D box, so they agree by design. The image still cannot prove that the 3D box is correct.",
      reasonZh:
        "当前 2D 框由同一个 3D 框直接投影得到，因此两者天然一致；但图像仍不能证明这个 3D 框本身正确。",
    };
  }

  function projectedKnownErrorCase(caseData) {
    return {
      ...caseData,
      issue:
        "This is a known 3D or source-label problem. Calculating the 2D box from this incorrect 3D box makes the pair agree, but it does not repair the 3D box.",
      issueZh:
        "这是已经确认的 3D 或源标注问题。从这个错误 3D 框计算 2D 框只会让两者一致，并不会修复错误的 3D 框。",
    };
  }

  function casesForTargetMode(dataset) {
    const stats = targetStats(dataset);
    if (currentTargetMode === "visible") {
      return {
        valid: stats.availability === "missing" ? [] : dataset.validCases,
        review: stats.availability === "missing" ? [] : dataset.reviewCases,
        error: dataset.errorCases,
      };
    }

    const promoted = dataset.reviewCases.slice(0, 3).map(projectedPassCase);
    const retained = dataset.validCases
      .slice(0, Math.max(0, 6 - promoted.length))
      .map(projectedPassCase);
    return {
      valid: [...retained, ...promoted].slice(0, 6),
      review: [],
      error: stats.hideKnownErrors
        ? []
        : dataset.errorCases.map(projectedKnownErrorCase),
    };
  }

  function tableCasesForTargetMode(dataset) {
    const views = Array.isArray(dataset.sensorViews) ? dataset.sensorViews : [];
    if (!views.length) return casesForTargetMode(dataset);
    return views.reduce(
      (combined, sensor) => {
        const cases = casesForTargetMode(datasetViewForSensor(dataset, sensor));
        combined.valid.push(...cases.valid);
        combined.review.push(...cases.review);
        combined.error.push(...cases.error);
        return combined;
      },
      { valid: [], review: [], error: [] },
    );
  }

  function targetStatus(dataset, stats) {
    if (stats.availability === "missing") {
      return {
        text: "no visible 2D box",
        textZh: "没有可见 2D 框",
        className: "missing",
      };
    }
    if (stats.availability === "mixed") {
      return {
        text: "mixed semantics",
        textZh: "语义混合",
        className: "warning",
      };
    }
    if (Number(stats.hard || 0) > 0) {
      return {
        text: "hard flags remain",
        textZh: "仍有 hard 告警",
        className: "warning",
      };
    }
    if (Number(stats.review || 0) > 0) {
      return {
        text: "human review needed",
        textZh: "需要人工复核",
        className: "warning",
      };
    }
    if (currentTargetMode === "projected" && knownErrorCount(dataset) > 0) {
      return {
        text: "self-consistent · 3D risk remains",
        textZh: "投影自洽 · 3D 风险仍在",
        className: "blind",
      };
    }
    return {
      text: "2D box ready",
      textZh: "2D 框可用",
      className: "ready",
    };
  }


  function labelForMetric(key) {
    const labels = {
      objects: "objects",
      medianIoU: "median IoU",
      centerError: "center / diag",
      depthRangeM: "depth (m)",
      IoU: "IoU",
      axisFitError: "axis fit",
      projectionIoU: "proj. IoU",
      projectionCenterError: "proj. center",
      maskContainment: "mask contain.",
      visibleContainment: "visible contain.",
      containment: "containment",
      projectedPrecision: "proj. precision",
      envelopeErrorPx: "envelope err. (px)",
      clippedWidthPx: "clipped width (px)",
      clippedHeightPx: "clipped height (px)",
    };
    const english = labels[key] || key.replace(/([A-Z])/g, " $1").toLowerCase();
    return localized(english, metricChinese[key], true);
  }

  function localizedReason(reason) {
    const parts = String(reason).split(", ");
    if (parts.length === 1) return localized(reason, reasonChinese[reason]);
    const chinese = parts.map((part) => reasonChinese[part] || part).join("，");
    return localized(reason, chinese);
  }

  function localizedTag(tag) {
    return localized(tag, tagChinese[tag], true);
  }

  function diagnosticCopy(caseData, kind) {
    if (kind === "valid") {
      return localized(plainLanguage(caseData.reason), plainChinese(caseData.reasonZh || reasonChinese[caseData.reason]));
    }
    const label = kind === "review" ? "Why ambiguous" : "Confirmed issue";
    const labelZh = kind === "review" ? "为何需要人工确认" : "已确认问题";
    const explanation = plainLanguage(caseData.issue || caseData.reason);
    const explanationZh = plainChinese(caseData.issueZh || reasonChinese[caseData.reason]);
    return `<strong>${localized(label, labelZh, true)}:</strong> ${localized(explanation, explanationZh)}`;
  }

  function formatMetricValue(value) {
    if (Array.isArray(value)) {
      return value.map((part) => Number(part).toFixed(2)).join("–");
    }
    if (typeof value === "number") return Number.isInteger(value) ? String(value) : String(value);
    return String(value);
  }

  function visibleMetrics(metrics = {}) {
    return Object.entries(metrics).filter(([, value]) => value !== null && value !== undefined && value !== "");
  }

  function renderStaticLanguage() {
    const staticCopy = [
      [elements.heroEyebrow, "SPATIALENCODER · DATA QUALITY", "SPATIALENCODER · 数据质量"],
      [elements.pageTitle, "Dataset QA Gallery", "数据集质量验证图库"],
      [elements.heroIntro, "No-review and human-review cases are rendered through the current training loaders. Filtered and current hard-reject cases preserve audit evidence. Every visualization uses the same color convention:", "无需人工确认和需要人工确认的样本均由当前训练 loader 生成；已过滤和当前 hard-reject 样本保留审计证据。所有可视化使用相同的颜色约定："],
      [elements.legend2d, "2D box", "2D 框"],
      [elements.legend3d, "projected 3D cuboid", "投影 3D 长方体"],
      [elements.auditLabel, "FULL RE-AUDIT", "全量复审"],
      [elements.auditStatus, `current hard = ${data.datasets.reduce((total, dataset) => total + (dataset.currentHard || 0), 0)}`, `当前 hard = ${data.datasets.reduce((total, dataset) => total + (dataset.currentHard || 0), 0)}`],
      [elements.ruleMetricLabel, "Decision metric", "判定指标"],
      [elements.ruleHardLabel, "Hard filter", "Hard 过滤"],
      [elements.ruleReviewLabel, "Human review", "人工复核"],
      [elements.targetPolicyKicker, "2D BOX CHOICE", "2D 框选择"],
      [elements.targetPolicyTitle, "Compare two ways to define the 2D box", "比较两种 2D 框定义"],
      [elements.targetPolicyIntro, "The button changes the rules, numbers, case groups, and images below. The numbers are calculated from the audits already completed. Confirmed 3D and data errors stay the same.", "按钮会切换下方规则、数字、case 分组和图片。这些数字根据已经完成的审查计算；已确认的 3D 和数据错误保持不变。"],
      [elements.targetCoverageLabel, "images / video frames with this 2D box", "具有这种 2D 框的图像 / 视频帧"],
      [elements.targetReviewLabel, "need human review", "需要人工复核"],
      [elements.targetHardLabel, "rejected by rule", "被规则拒绝"],
      [elements.targetKnownLabel, "known errors / rule rejects", "已知错误 / 规则拒绝"],
      [elements.overviewKicker, "OVERVIEW", "总览"],
      [elements.overviewTitle, "Dataset statistics", "数据集统计"],
      [elements.tableNote, "“Images / Frames” counts unique audited images or frames in the reported loader scope. CA-1M and HyperSim include train and validation; the other rows report their audited training scope. “Videos” is shown only for video data. “Approx. storage” is the current local dataset/package size, in decimal units, and excludes QA website files. Need Human Verify and Filtered errors are audit-case counts, not image counts.", "“图像 / 帧数”表示报告的 loader 范围内去重审查的图像或帧；CA-1M 与 HyperSim 包含训练集和验证集，其他数据集使用已审查的训练范围。“视频数”仅适用于视频数据。“大致存储空间”按当前本地数据目录或数据包计算，使用十进制单位，不包含本网站文件。Need Human Verify 和已过滤错误是审查 case 数，不是图像数。"],
      [elements.thDataType, "Data type", "数据类型"],
      [elements.thSamples, "Images / Frames", "图像 / 帧数"],
      [elements.thVideos, "Videos", "视频数"],
      [elements.thStorage, "Approx. storage", "大致存储空间"],
      [elements.thTargetSource, "2D box source", "2D 框来源"],
      [elements.thReview, "Need human review", "需要人工复核"],
      [elements.thFiltered, "Rejected by rule", "被规则拒绝"],
      [elements.thErrorRate, "Review / reject rate", "复核 / 拒绝占比"],
      [elements.thCurrentHard, "Known errors / rule rejects", "已知错误 / 规则拒绝"],
      [elements.thGallery, "Gallery (Pass / Review / Rejected)", "网站展示（通过 / 复核 / 已拒绝）"],
      [elements.thStatus, "Policy outcome", "策略结果"],
      [elements.navSelectLabel, "SELECT DATASET", "选择数据集"],
      [elements.acceptedKicker, "NO HUMAN REVIEW NEEDED", "无需人工确认"],
      [elements.validTitle, "Cases ready for use", "可直接使用的 case"],
      [elements.validCountLabel, "cases shown", "展示样本"],
      [elements.validExplainer, "Retained examples that pass the current dataset-specific checks without triggering an automatic or manual review concern.", "通过当前数据集专用检查，且未触发自动或人工复核疑点的保留样本。"],
      [elements.reviewKicker, "NEEDS HUMAN REVIEW", "需要人工确认"],
      [elements.reviewTitle, "Ambiguous cases for manual verification", "需要人工核验的边界样本"],
      [elements.reviewCountLabel, "cases shown", "展示样本"],
      [elements.reviewExplainer, "Borderline geometry, projection, scale, or visibility candidates are shown separately. They are not counted as confirmed errors unless a reviewer rejects them.", "单独展示几何、投影、尺度或可见性方面的边界样本；除非人工拒绝，否则不计为确认错误。"],
      [elements.reviewEmptyTitle, "No human-review cases", "没有待人工确认样本"],
      [elements.errorKicker, "FILTERED", "已过滤"],
      [elements.errorTitle, "Confirmed filtered cases", "已确认并过滤的 case"],
      [elements.errorCountLabel, "cases shown", "展示样本"],
      [elements.emptyTitle, "No confirmed error cases", "没有确认错误样本"],
      [elements.footerLabel, "SpatialEncoder dataset QA", "SpatialEncoder 数据集质量验证"],
    ];
    staticCopy.forEach(([element, english, chinese]) => {
      element.innerHTML = localized(english, chinese);
    });
    elements.datasetCount.innerHTML = localized(`${data.datasets.length} datasets`, `${data.datasets.length} 个数据集`, true);
    elements.generatedAt.innerHTML = localized(`generated ${data.generatedAt}`, `生成于 ${data.generatedAt}`, true);
    elements.languageButtons.forEach((button) => {
      const active = button.dataset.language === currentLanguage;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function renderTargetMode() {
    const profile = targetModeProfiles[currentTargetMode];
    const totals = targetModeTotals();
    document.documentElement.dataset.targetMode = currentTargetMode;
    elements.targetModeEyebrow.innerHTML = localized(profile.eyebrow, profile.eyebrowZh);
    elements.targetModeTitle.innerHTML = localized(profile.title, profile.titleZh);
    elements.targetModeDescription.innerHTML = localized(profile.description, profile.descriptionZh);
    elements.targetCoverageValue.textContent = `${formatNumber(totals.coverage)} / ${formatNumber(totals.observations)}`;
    elements.targetReviewValue.textContent = formatNumber(totals.review);
    elements.targetHardValue.textContent = formatNumber(totals.hard);
    elements.targetKnownValue.textContent = formatNumber(totals.known);
    elements.targetSignalTitle.innerHTML = localized(profile.signalTitle, profile.signalTitleZh);
    elements.targetSignalCopy.innerHTML = localized(profile.signalCopy, profile.signalCopyZh);
    elements.targetAuditTitle.innerHTML = localized(profile.auditTitle, profile.auditTitleZh);
    elements.targetAuditCopy.innerHTML = localized(profile.auditCopy, profile.auditCopyZh);
    elements.targetRiskTitle.innerHTML = localized(profile.riskTitle, profile.riskTitleZh);
    elements.targetRiskCopy.innerHTML = localized(profile.riskCopy, profile.riskCopyZh);
    elements.ruleModeKicker.innerHTML = localized("ACTIVE RULE SET", "当前规则集", true);
    elements.ruleModeTitle.innerHTML = localized(profile.ruleTitle, profile.ruleTitleZh);
    elements.ruleModeSummary.innerHTML = localized(profile.ruleSummary, profile.ruleSummaryZh);
    elements.ruleMetricValue.innerHTML = localized(profile.ruleMetric, profile.ruleMetricZh);
    elements.ruleHardValue.innerHTML = localized(profile.ruleHard, profile.ruleHardZh);
    elements.ruleReviewValue.innerHTML = localized(profile.ruleReview, profile.ruleReviewZh);
    elements.ruleProjectionCopy.textContent = profile.projectionStep;
    elements.ruleProjectionCopyZh.textContent = profile.projectionStepZh;
    elements.ruleDefinitions.innerHTML = localized(profile.ruleDefinitions, profile.ruleDefinitionsZh);
    elements.ruleModeRows.forEach((row) => {
      row.hidden = row.dataset.ruleMode !== currentTargetMode;
    });
    elements.targetModeButtons.forEach((button) => {
      const active = button.dataset.targetMode === currentTargetMode;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
      const projected = button.dataset.targetMode === "projected";
      button.innerHTML = projected
        ? `<span>${localized("2D box from 3D", "由 3D 框计算 2D 框", true)}</span><small>${localized("calculated from the 3D box", "由 3D 框计算", true)}</small>`
        : `<span>${localized("Visible 2D box", "可见 2D 框", true)}</span><small>${localized("drawn from the image", "来自图像", true)}</small>`;
    });
    elements.legend2d.innerHTML =
      currentTargetMode === "visible"
        ? localized("visible 2D box", "可见 2D 框", true)
        : localized("2D box calculated from 3D", "由 3D 框计算的 2D 框", true);

    const note =
      currentTargetMode === "visible"
        ? "Visible-box checks use one-way containment where possible. CA-1M has no separate visible 2D box in the current files, and Omni3D mixes visible boxes with boxes projected from 3D. Approx. storage is the current local dataset/package size in decimal units."
        : "These 2D boxes come from the same 3D boxes. Fewer warnings only mean fewer geometry or conversion failures; they do not prove that the 3D boxes fit the objects. Approx. storage is the current local dataset/package size in decimal units.";
    const noteZh =
      currentTargetMode === "visible"
        ? "可见 2D 框模式尽量使用单向包含率。当前 CA-1M 文件没有单独的可见 2D 框；Omni3D 混合了可见框和由 3D 计算的 2D 框。大致存储空间按当前本地数据目录或数据包计算，使用十进制单位。"
        : "这些 2D 框来自同一个 3D 框。更少的告警只表示几何或转换失败更少，不能说明 3D 框一定贴合物体。大致存储空间按当前本地数据目录或数据包计算，使用十进制单位。";
    elements.tableNote.innerHTML = localized(note, noteZh);
  }

  function renderStats() {
    elements.statsBody.innerHTML = data.datasets
      .map((dataset) => {
        const stats = targetStats(dataset);
        const status = targetStatus(dataset, stats);
        const cases = tableCasesForTargetMode(dataset);
        const flagRate = targetFlagRate(dataset, stats);
        return `
          <tr data-dataset="${dataset.id}" tabindex="0" aria-label="View ${dataset.name}">
            <td>${dataset.name}</td>
            <td class="numeric storage-value">${formatStorage(dataset.storageBytes ?? approxStorageBytes[dataset.id])}</td>
            <td>${localized(dataset.dataType, dataset.dataType === "Video" ? "视频" : dataset.dataType === "Image + Video" ? "图像 + 视频" : "单图像", true)}</td>
            <td class="numeric">${formatNumber(dataset.samples)}</td>
            <td class="numeric">${dataset.videos == null ? "—" : formatNumber(dataset.videos)}</td>
            <td class="target-source">${localized(stats.source, stats.sourceZh, true)}</td>
            <td class="numeric">${stats.review == null ? "—" : formatNumber(stats.review)}</td>
            <td class="numeric">${stats.hard == null ? "—" : formatNumber(stats.hard)}</td>
            <td class="numeric">${flagRate == null ? "—" : formatRate(flagRate)}</td>
            <td class="numeric">${formatNumber(knownErrorCount(dataset))}</td>
            <td class="numeric">${cases.valid.length} / ${cases.review.length} / ${cases.error.length}</td>
            <td><span class="table-status ${status.className}">${localized(status.text, status.textZh, true)}</span></td>
          </tr>`;
      })
      .join("");

    elements.statsBody.querySelectorAll("tr").forEach((row) => {
      const activate = () => selectDataset(row.dataset.dataset, true);
      row.addEventListener("click", activate);
      row.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          activate();
        }
      });
    });
  }

  function renderTabs() {
    elements.tabs.innerHTML = data.datasets
      .map(
        (dataset) => `
          <button
            class="dataset-tab"
            id="tab-${dataset.id}"
            role="tab"
            aria-controls="valid-grid"
            data-dataset="${dataset.id}"
          >${dataset.name}</button>`,
      )
      .join("");
    elements.tabs.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => selectDataset(button.dataset.dataset));
    });
  }

  function renderSensorTabs(dataset) {
    const views = Array.isArray(dataset.sensorViews) ? dataset.sensorViews : [];
    elements.sensorNav.hidden = views.length === 0;
    if (!views.length) {
      elements.sensorTabs.innerHTML = "";
      currentSensorId = null;
      return;
    }
    if (!views.some((view) => view.id === currentSensorId)) {
      currentSensorId = views[0].id;
    }
    elements.sensorSelectLabel.innerHTML = localized("SELECT SENSOR", "选择传感器");
    elements.sensorCount.innerHTML = localized(`${views.length} sources`, `${views.length} 类数据`, true);
    elements.sensorTabs.innerHTML = views
      .map(
        (view) => `<button class="sensor-tab${view.id === currentSensorId ? " active" : ""}"
          role="tab" aria-selected="${view.id === currentSensorId}"
          data-sensor="${view.id}">${view.name}</button>`,
      )
      .join("");
    elements.sensorTabs.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        currentSensorId = button.dataset.sensor;
        selectDataset(dataset.id);
      });
    });
  }

  function cardTemplate(caseData, index, kind) {
    const displayTitle = plainLanguage(caseData.title);
    const displaySubtitle = plainLanguage(caseData.subtitle);
    const chips = visibleMetrics(caseData.metrics)
      .map(
        ([key, value]) =>
          `<span class="metric-chip"><span>${labelForMetric(key)}</span><strong>${formatMetricValue(value)}</strong></span>`,
      )
      .join("");
    const visualLabel =
      currentTargetMode === "visible"
        ? localized("Visible 2D box + projected 3D cuboid", "可见 2D 框 + 投影 3D 框", true)
        : localized("Projected 2D envelope + projected 3D cuboid", "投影 2D 包络 + 投影 3D 框", true);
    const imageAlt =
      currentTargetMode === "visible"
        ? `Visible 2D box and projected 3D cuboid for ${displayTitle}`
        : `Projected 2D envelope and projected 3D cuboid for ${displayTitle}`;
    return `
      <article class="case-card">
        <button class="case-image-button" data-kind="${kind}" data-index="${index}" aria-label="Enlarge ${displayTitle}">
          <img src="${versionedAsset(targetModeAsset(caseData.image))}" alt="${imageAlt}" loading="lazy" />
          <span class="case-visual-label">${visualLabel}</span>
        </button>
        <div class="case-copy">
          <div class="case-topline">
            <span class="case-tag">${localizedTag(caseData.tag)}</span>
            <span class="case-number">${String(index + 1).padStart(2, "0")}</span>
          </div>
          <h3 title="${displayTitle}">${displayTitle}</h3>
          <p class="case-subtitle" title="${displaySubtitle}">${displaySubtitle}</p>
          <p class="case-reason">${diagnosticCopy(caseData, kind)}</p>
          <div class="metric-list">${chips}</div>
        </div>
      </article>`;
  }

  function renderCards(container, cases, kind) {
    container.innerHTML = cases.map((item, index) => cardTemplate(item, index, kind)).join("");
    container.querySelectorAll(".case-image-button").forEach((button) => {
      button.addEventListener("click", () => openLightbox(kind, Number(button.dataset.index)));
    });
  }

  function renderFacts(dataset, stats) {
    const isVideo = dataset.dataType === "Video";
    const isMixedMedia = dataset.dataType === "Image + Video";
    elements.facts.innerHTML = [
      [isMixedMedia ? "images / frames" : isVideo ? "frames" : "images", isMixedMedia ? "图像 / 帧数" : isVideo ? "帧数" : "图像数", formatNumber(dataset.samples)],
      ["2D box source", "2D 框来源", localized(stats.source, stats.sourceZh, true)],
      ["images / frames with box", "有 2D 框的图像 / 帧", `${formatNumber(stats.coverage)} / ${formatNumber(dataset.observations)}`],
      ["need human review", "需要人工复核", stats.review == null ? "—" : formatNumber(stats.review)],
      ["rejected by rule", "被规则拒绝", stats.hard == null ? "—" : formatNumber(stats.hard)],
      ["known errors / rule rejects", "已知错误 / 规则拒绝", formatNumber(knownErrorCount(dataset))],
    ]
      .map(
        ([english, chinese, value]) => `
          <div class="fact">
            <span>${localized(english, chinese)}</span>
            <strong>${value}</strong>
          </div>`,
      )
      .join("");
  }

  function selectDataset(datasetId, scrollToGallery = false) {
    const dataset = data.datasets.find((candidate) => candidate.id === datasetId);
    if (!dataset) return;
    currentDatasetId = dataset.id;
    renderSensorTabs(dataset);
    const datasetView = activeDatasetView(dataset);
    history.replaceState(
      null,
      "",
      `#${dataset.id}${datasetView.parentDatasetId ? `/${currentSensorId}` : ""}`,
    );

    const chinese = datasetChinese[dataset.id] || {};
    const stats = targetStats(datasetView);
    const status = targetStatus(datasetView, stats);
    const modeCases = casesForTargetMode(datasetView);
    const englishDescription = `${plainLanguage(datasetView.description)} 2D box used here: ${stats.source}. ${plainLanguage(datasetView.statusDetail)}`;
    const chineseDescription = [datasetView.descriptionZh || chinese.description, `这里使用的 2D 框：${stats.sourceZh}。`, datasetView.statusDetailZh || chinese.statusDetail].filter(Boolean).join(" ");
    const defaultErrorExplainer = "These are archival audit visualizations retained before confirmed errors were filtered, excluded, or physically deleted. Cases needing human verification and false positives from older rules are not presented as errors.";
    const defaultErrorExplainerChinese = "这些是确认错误在被过滤、排除或物理删除前保留的审计可视化；需要人工确认的样本和旧规则 false positive 不会作为错误展示。";
    elements.errorKicker.innerHTML = localized("FILTERED / REJECTED", "已过滤 / 已拒绝");
    elements.errorTitle.innerHTML = localized("Filtered or rule-rejected cases", "已过滤或被规则拒绝的 case");

    elements.title.textContent = datasetView.name;
    elements.datasetStatus.className = `status-pill ${status.className}`;
    elements.datasetStatus.innerHTML = localized(status.text, status.textZh, true);
    elements.description.innerHTML = localized(englishDescription, chineseDescription);
    elements.validCount.textContent = modeCases.valid.length;
    elements.reviewCount.textContent = modeCases.review.length;
    elements.errorCount.textContent = modeCases.error.length;
    renderFacts(datasetView, stats);
    renderCards(elements.validGrid, modeCases.valid, "valid");
    renderCards(elements.reviewGrid, modeCases.review, "review");
    renderCards(elements.errorGrid, modeCases.error, "error");

    elements.validExplainer.innerHTML =
      currentTargetMode === "visible"
        ? localized(
            "These examples have a visible 2D box from the image and pass the applicable containment and geometry checks.",
            "这些样本具有来自图像的可见 2D 框，并通过适用的包含率和几何检查。",
          )
        : localized(
            "The 2D box is calculated from the same 3D box shown here, so the pair agrees by design. Passing this check does not prove that the 3D box fits the object.",
            "2D 框由图中的同一个 3D 框计算，因此两者天然一致；通过这里的检查不代表 3D 框一定贴合物体。",
          );
    elements.reviewExplainer.innerHTML =
      currentTargetMode === "visible"
        ? localized(
            "These cases trigger a visible-containment or dataset-specific review signal. Symmetric visible/amodal IoU and center offset are diagnostic only.",
            "这些 case 触发 visible containment 或数据集专用复核信号；对称 visible/amodal IoU 与中心偏差只用于诊断。",
          )
        : localized(
            "A 2D box calculated from the 3D box cannot create a mismatch with that same 3D box. Only separate geometry or conversion warnings remain.",
            "由 3D 框计算的 2D 框不会与同一个 3D 框产生不匹配；只保留单独的几何或转换告警。",
          );

    const hasValidCases = modeCases.valid.length > 0;
    elements.validGrid.hidden = !hasValidCases;
    elements.validEmpty.hidden = hasValidCases;
    elements.validEmptyTitle.innerHTML = localized("No matching 2D box examples", "没有匹配的 2D 框样本");
    if (datasetView.galleryUnavailable && currentTargetMode === "projected") {
      elements.validEmptyMessage.innerHTML = localized(
        `${datasetView.name} statistics are included, but its visualization source folder is currently unavailable. No placeholder image is shown.`,
        `${datasetView.name} 的统计已加入，但可视化源目录当前不可用，因此不展示占位图片。`,
      );
    } else {
      elements.validEmptyMessage.innerHTML = localized(
        `${datasetView.name} has no separate visible 2D box in the current files. A visible-box-only setup needs a new box or mask source.`,
        `${datasetView.name} 当前文件没有单独的可见 2D 框。若只使用可见框，需要补充新的框或 mask 来源。`,
      );
    }

    const hasReviewCases = modeCases.review.length > 0;
    elements.reviewGrid.hidden = !hasReviewCases;
    elements.reviewEmpty.hidden = hasReviewCases;
    elements.reviewEmptyMessage.innerHTML = localized(
      currentTargetMode === "visible"
        ? "No review image is available for this dataset under the visible 2D box setup. The table reports the full count."
        : "No visible/amodal review lane exists because the 2D envelope is derived from the same 3D cuboid. Independent hard geometry checks still apply.",
      currentTargetMode === "visible"
        ? "该数据集在可见 2D 框设置下没有可展示的复核图；完整数量见上方表格。"
        : "由于 2D envelope 由同一个 3D 框派生，因此不存在 visible/amodal 复核通道；独立 hard 几何检查仍然生效。",
    );

    const hasErrors = modeCases.error.length > 0;
    elements.errorGrid.hidden = !hasErrors;
    elements.errorEmpty.hidden = hasErrors;
    elements.emptyMessage.innerHTML = localized(plainLanguage(datasetView.emptyMessage || "No confirmed error cases in the current audit."), datasetView.emptyMessageZh || chinese.emptyMessage || "当前审查没有确认错误样本。");
    elements.errorExplainer.innerHTML =
      currentTargetMode === "projected" && hasErrors
        ? localized(
            "These confirmed 3D or data errors remain errors. Calculating the 2D box from a bad 3D box can hide the mismatch, but it does not repair the 3D box.",
            "这些已确认的 3D 或数据错误仍然是错误。从错误 3D 框计算 2D 框会隐藏不匹配，但不会修复 3D 框。",
          )
        : datasetView.emptyMessage
          ? localized(plainLanguage(datasetView.emptyMessage), datasetView.emptyMessageZh || chinese.emptyMessage)
          : localized(defaultErrorExplainer, defaultErrorExplainerChinese);

    document.querySelectorAll(".dataset-tab").forEach((tab) => {
      const active = tab.dataset.dataset === dataset.id;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    elements.statsBody.querySelectorAll("tr").forEach((row) => {
      row.classList.toggle("active", row.dataset.dataset === dataset.id);
    });

    if (scrollToGallery) {
      document.querySelector(".dataset-nav").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function openLightbox(kind, index) {
    const dataset = data.datasets.find((candidate) => candidate.id === currentDatasetId);
    const caseData = casesForTargetMode(activeDatasetView(dataset))[kind][index];
    if (!caseData) return;

    elements.lightboxImage.src = versionedAsset(targetModeAsset(caseData.image));
    elements.lightboxImage.alt =
      currentTargetMode === "visible"
        ? `Visible 2D box and projected 3D cuboid for ${plainLanguage(caseData.title)}`
        : `Projected 2D envelope and projected 3D cuboid for ${plainLanguage(caseData.title)}`;
    elements.lightboxTag.innerHTML = localizedTag(caseData.tag);
    elements.lightboxTag.classList.toggle("error", kind === "error");
    elements.lightboxTag.classList.toggle("review", kind === "review");
    elements.lightboxTitle.textContent = plainLanguage(caseData.title);
    elements.lightboxSubtitle.innerHTML = `${plainLanguage(caseData.subtitle)}<br>${diagnosticCopy(caseData, kind)}`;
    elements.lightboxMetrics.innerHTML = visibleMetrics(caseData.metrics)
      .map(
        ([key, value]) => `
          <div>
            <dt>${labelForMetric(key)}</dt>
            <dd>${formatMetricValue(value)}</dd>
          </div>`,
      )
      .join("");
    elements.lightbox.showModal();
  }

  function closeLightbox() {
    elements.lightbox.close();
    elements.lightboxImage.removeAttribute("src");
  }

  function setLanguage(language) {
    currentLanguage = language === "bilingual" ? "bilingual" : "en";
    document.documentElement.dataset.language = currentLanguage;
    try {
      localStorage.setItem("datasetQaLanguage", currentLanguage);
    } catch (_error) {
      // The static site still works when storage is unavailable.
    }
    renderStaticLanguage();
    renderTargetMode();
    renderStats();
    selectDataset(currentDatasetId);
  }

  function setTargetMode(mode) {
    currentTargetMode = mode === "projected" ? "projected" : "visible";
    try {
      localStorage.setItem("datasetQaTargetMode", currentTargetMode);
    } catch (_error) {
      // The static site still works when storage is unavailable.
    }
    renderTargetMode();
    renderStats();
    selectDataset(currentDatasetId);
  }

  elements.languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });
  elements.targetModeButtons.forEach((button) => {
    button.addEventListener("click", () => setTargetMode(button.dataset.targetMode));
  });
  elements.closeLightbox.addEventListener("click", closeLightbox);
  elements.lightbox.addEventListener("click", (event) => {
    if (event.target === elements.lightbox) closeLightbox();
  });

  elements.auditDate.textContent = data.auditDate;
  renderTabs();
  setLanguage(currentLanguage);
})();
