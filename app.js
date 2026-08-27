(() => {
  "use strict";

  const data = window.DATASET_QA;
  if (!data || !Array.isArray(data.datasets)) {
    document.body.innerHTML = "<p style='padding:2rem'>Missing cases-data.js</p>";
    return;
  }
  const assetVersion = data.assetVersion || data.generatedAt || "current";

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
      statusDetail: "clean-data 构建排除了 483,970 个失败帧标注；当前训练观测中不存在 hard error。",
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
    human_review: "需要人工确认",
  };

  const tagChinese = {
    accepted: "已接受",
    filtered: "已过滤",
    deleted: "已删除",
    excluded: "已排除",
    review: "待人工确认",
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
    overviewKicker: document.querySelector("#overview-kicker"),
    overviewTitle: document.querySelector("#overview-title"),
    tableNote: document.querySelector("#table-note"),
    thDataType: document.querySelector("#th-data-type"),
    thSamples: document.querySelector("#th-samples"),
    thVideos: document.querySelector("#th-videos"),
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
    title: document.querySelector("#dataset-title"),
    datasetStatus: document.querySelector("#dataset-status"),
    description: document.querySelector("#dataset-description"),
    facts: document.querySelector("#dataset-facts"),
    acceptedKicker: document.querySelector("#accepted-kicker"),
    validTitle: document.querySelector("#valid-title"),
    validCountLabel: document.querySelector("#valid-count-label"),
    validExplainer: document.querySelector("#valid-explainer"),
    validGrid: document.querySelector("#valid-grid"),
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
  let currentDatasetId = location.hash.replace(/^#/, "") || data.datasets[0].id;
  let currentLanguage = "en";
  try {
    if (localStorage.getItem("datasetQaLanguage") === "bilingual") currentLanguage = "bilingual";
  } catch (_error) {
    currentLanguage = "en";
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

  function formatNumber(value) {
    return numberFormatter.format(value == null ? 0 : value);
  }

  function formatRate(value) {
    if (!value) return "0%";
    const percentage = value * 100;
    if (percentage < 0.01) return `${percentage.toFixed(3)}%`;
    return `${percentage.toFixed(2)}%`;
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
    if (kind === "valid") return localizedReason(caseData.reason);
    const label = kind === "review" ? "Why ambiguous" : "Confirmed issue";
    const labelZh = kind === "review" ? "为何需要人工确认" : "已确认问题";
    const explanation = caseData.issue || caseData.reason;
    const explanationZh = caseData.issueZh || reasonChinese[caseData.reason];
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
      [elements.heroIntro, "No-review and human-review cases are rendered through the current training loaders. Filtered cases preserve pre-removal audit evidence. Every visualization uses the same color convention:", "无需人工确认和需要人工确认的样本均由当前训练 loader 生成；已过滤样本保留删除前的审计证据。所有可视化使用相同的颜色约定："],
      [elements.legend2d, "2D box", "2D 框"],
      [elements.legend3d, "projected 3D cuboid", "投影 3D 长方体"],
      [elements.auditLabel, "FULL RE-AUDIT", "全量复审"],
      [elements.auditStatus, "current hard = 0", "当前 hard = 0"],
      [elements.overviewKicker, "OVERVIEW", "总览"],
      [elements.overviewTitle, "Dataset statistics", "数据集统计"],
      [elements.tableNote, "“Images / Frames” counts unique training images for image datasets and training frames for video datasets. “Videos” is shown only for video data. Need Human Verify and Filtered errors are audit-case counts, not image counts.", "“图像 / 帧数”表示图像数据集的去重训练图像数，或视频数据集的训练帧数；“视频数”仅适用于视频数据。Need Human Verify 和已过滤错误是审查 case 数，不是图像数。"],
      [elements.thDataType, "Data type", "数据类型"],
      [elements.thSamples, "Images / Frames", "图像 / 帧数"],
      [elements.thVideos, "Videos", "视频数"],
      [elements.thReview, "Need Human Verify", "需要人工确认"],
      [elements.thFiltered, "Filtered errors", "已过滤错误"],
      [elements.thErrorRate, "Error rate", "错误占比"],
      [elements.thCurrentHard, "Current Hard", "当前 Hard"],
      [elements.thGallery, "Gallery (No-review / Review / Filtered)", "网站展示（无需复核 / 人工复核 / 已过滤）"],
      [elements.thStatus, "Status", "状态"],
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

  function renderStats() {
    elements.statsBody.innerHTML = data.datasets
      .map(
        (dataset) => `
          <tr data-dataset="${dataset.id}" tabindex="0" aria-label="View ${dataset.name}">
            <td>${dataset.name}</td>
            <td>${localized(dataset.dataType, dataset.dataType === "Video" ? "视频" : "单图像", true)}</td>
            <td class="numeric">${formatNumber(dataset.samples)}</td>
            <td class="numeric">${dataset.videos == null ? "—" : formatNumber(dataset.videos)}</td>
            <td class="numeric">${formatNumber(dataset.review)}</td>
            <td class="numeric">${formatNumber(dataset.filtered)}</td>
            <td class="numeric">${formatRate(dataset.filteredRate)}</td>
            <td class="numeric zero-value">${dataset.currentHard}</td>
            <td class="numeric">${dataset.validCases.length} / ${dataset.reviewCases.length} / ${dataset.errorCases.length}</td>
            <td><span class="table-status">${localized("audited", "已审查", true)}</span></td>
          </tr>`,
      )
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

  function cardTemplate(caseData, index, kind) {
    const chips = visibleMetrics(caseData.metrics)
      .map(
        ([key, value]) =>
          `<span class="metric-chip"><span>${labelForMetric(key)}</span><strong>${formatMetricValue(value)}</strong></span>`,
      )
      .join("");
    return `
      <article class="case-card">
        <button class="case-image-button" data-kind="${kind}" data-index="${index}" aria-label="Enlarge ${caseData.title}">
          <img src="${versionedAsset(caseData.image)}" alt="2D and projected 3D box comparison for ${caseData.title}" loading="lazy" />
        </button>
        <div class="case-copy">
          <div class="case-topline">
            <span class="case-tag">${localizedTag(caseData.tag)}</span>
            <span class="case-number">${String(index + 1).padStart(2, "0")}</span>
          </div>
          <h3 title="${caseData.title}">${caseData.title}</h3>
          <p class="case-subtitle" title="${caseData.subtitle}">${caseData.subtitle}</p>
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

  function renderFacts(dataset) {
    const isVideo = dataset.dataType === "Video";
    elements.facts.innerHTML = [
      [isVideo ? "frames" : "images", isVideo ? "帧数" : "图像数", formatNumber(dataset.samples)],
      ["needs review", "待人工确认", formatNumber(dataset.review)],
      ["filtered", "已过滤", formatNumber(dataset.filtered)],
      ["current hard", "当前 hard", dataset.currentHard],
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
    history.replaceState(null, "", `#${dataset.id}`);

    const chinese = datasetChinese[dataset.id] || {};
    const englishDescription = `${dataset.description} ${dataset.statusDetail}`;
    const chineseDescription = [chinese.description, chinese.statusDetail].filter(Boolean).join(" ");
    const defaultErrorExplainer = "These are archival audit visualizations retained before confirmed errors were filtered, excluded, or physically deleted. Cases needing human verification and false positives from older rules are not presented as errors.";
    const defaultErrorExplainerChinese = "这些是确认错误在被过滤、排除或物理删除前保留的审计可视化；需要人工确认的样本和旧规则 false positive 不会作为错误展示。";

    elements.title.textContent = dataset.name;
    elements.datasetStatus.innerHTML = localized("Audited · review separated", "已审查 · 复核样本已分离", true);
    elements.description.innerHTML = localized(englishDescription, chineseDescription);
    elements.validCount.textContent = dataset.validCases.length;
    elements.reviewCount.textContent = dataset.reviewCases.length;
    elements.errorCount.textContent = dataset.errorCases.length;
    renderFacts(dataset);
    renderCards(elements.validGrid, dataset.validCases, "valid");
    renderCards(elements.reviewGrid, dataset.reviewCases, "review");
    renderCards(elements.errorGrid, dataset.errorCases, "error");

    const hasReviewCases = dataset.reviewCases.length > 0;
    elements.reviewGrid.hidden = !hasReviewCases;
    elements.reviewEmpty.hidden = hasReviewCases;
    elements.reviewEmptyMessage.innerHTML = localized(
      "No cases in the current audit require human verification.",
      "当前审查中没有需要人工确认的样本。",
    );

    const hasErrors = dataset.errorCases.length > 0;
    elements.errorGrid.hidden = !hasErrors;
    elements.errorEmpty.hidden = hasErrors;
    elements.emptyMessage.innerHTML = localized(dataset.emptyMessage || "No confirmed error cases in the current audit.", chinese.emptyMessage || "当前审查没有确认错误样本。");
    elements.errorExplainer.innerHTML = dataset.emptyMessage
      ? localized(dataset.emptyMessage, chinese.emptyMessage)
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
    const caseData = dataset[`${kind}Cases`][index];
    if (!caseData) return;

    elements.lightboxImage.src = versionedAsset(caseData.image);
    elements.lightboxImage.alt = `2D and projected 3D box comparison for ${caseData.title}`;
    elements.lightboxTag.innerHTML = localizedTag(caseData.tag);
    elements.lightboxTag.classList.toggle("error", kind === "error");
    elements.lightboxTag.classList.toggle("review", kind === "review");
    elements.lightboxTitle.textContent = caseData.title;
    elements.lightboxSubtitle.innerHTML = `${caseData.subtitle}<br>${diagnosticCopy(caseData, kind)}`;
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
    try {
      localStorage.setItem("datasetQaLanguage", currentLanguage);
    } catch (_error) {
      // The static site still works when storage is unavailable.
    }
    renderStaticLanguage();
    renderStats();
    selectDataset(currentDatasetId);
  }

  elements.languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });
  elements.closeLightbox.addEventListener("click", closeLightbox);
  elements.lightbox.addEventListener("click", (event) => {
    if (event.target === elements.lightbox) closeLightbox();
  });

  elements.auditDate.textContent = data.auditDate;
  renderTabs();
  setLanguage(currentLanguage);
})();
