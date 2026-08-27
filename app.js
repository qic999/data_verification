(() => {
  "use strict";

  const data = window.DATASET_QA;
  if (!data || !Array.isArray(data.datasets)) {
    document.body.innerHTML = "<p style='padding:2rem'>Missing cases-data.js</p>";
    return;
  }

  const elements = {
    auditDate: document.querySelector("#audit-date"),
    generatedAt: document.querySelector("#generated-at"),
    statsBody: document.querySelector("#stats-body"),
    tabs: document.querySelector("#dataset-tabs"),
    datasetCount: document.querySelector("#dataset-count"),
    title: document.querySelector("#dataset-title"),
    description: document.querySelector("#dataset-description"),
    facts: document.querySelector("#dataset-facts"),
    validGrid: document.querySelector("#valid-grid"),
    errorGrid: document.querySelector("#error-grid"),
    validCount: document.querySelector("#valid-count"),
    errorCount: document.querySelector("#error-count"),
    errorEmpty: document.querySelector("#error-empty"),
    emptyMessage: document.querySelector("#empty-message"),
    errorExplainer: document.querySelector("#error-explainer"),
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
  if (!data.datasets.some((dataset) => dataset.id === currentDatasetId)) {
    currentDatasetId = data.datasets[0].id;
  }

  function formatNumber(value) {
    return numberFormatter.format(value ?? 0);
  }

  function formatRate(value) {
    if (!value) return "0%";
    const percentage = value * 100;
    if (percentage < 0.01) return `${percentage.toFixed(3)}%`;
    if (percentage < 0.1) return `${percentage.toFixed(2)}%`;
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
    return labels[key] || key.replace(/([A-Z])/g, " $1").toLowerCase();
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

  function renderStats() {
    elements.statsBody.innerHTML = data.datasets
      .map(
        (dataset) => `
          <tr data-dataset="${dataset.id}" tabindex="0" aria-label="查看 ${dataset.name}">
            <td>${dataset.name}</td>
            <td class="numeric">${formatNumber(dataset.observations)}</td>
            <td class="numeric">${formatNumber(dataset.review)}</td>
            <td class="numeric">${formatNumber(dataset.filtered)}</td>
            <td class="numeric">${formatRate(dataset.filteredRate)}</td>
            <td class="numeric zero-value">${dataset.currentHard}</td>
            <td class="numeric">${dataset.validCases.length} / ${dataset.errorCases.length}</td>
            <td><span class="table-status">clean</span></td>
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
    const metrics = visibleMetrics(caseData.metrics);
    const chips = metrics
      .map(
        ([key, value]) =>
          `<span class="metric-chip"><span>${labelForMetric(key)}</span><strong>${formatMetricValue(value)}</strong></span>`,
      )
      .join("");
    return `
      <article class="case-card">
        <button class="case-image-button" data-kind="${kind}" data-index="${index}" aria-label="放大 ${caseData.title}">
          <img src="${caseData.image}" alt="${caseData.title} 的 2D / 3D box 投影对照" loading="lazy" />
        </button>
        <div class="case-copy">
          <div class="case-topline">
            <span class="case-tag">${caseData.tag}</span>
            <span class="case-number">${String(index + 1).padStart(2, "0")}</span>
          </div>
          <h3 title="${caseData.title}">${caseData.title}</h3>
          <p class="case-subtitle" title="${caseData.subtitle}">${caseData.subtitle}</p>
          <p class="case-reason">${caseData.reason}</p>
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
    elements.facts.innerHTML = [
      ["observations", formatNumber(dataset.observations)],
      ["filtered", formatNumber(dataset.filtered)],
      ["current hard", dataset.currentHard],
    ]
      .map(
        ([label, value]) => `
          <div class="fact">
            <span>${label}</span>
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

    elements.title.textContent = dataset.name;
    elements.description.textContent = `${dataset.description} ${dataset.statusDetail}`;
    elements.validCount.textContent = dataset.validCases.length;
    elements.errorCount.textContent = dataset.errorCases.length;
    renderFacts(dataset);
    renderCards(elements.validGrid, dataset.validCases, "valid");
    renderCards(elements.errorGrid, dataset.errorCases, "error");

    const hasErrors = dataset.errorCases.length > 0;
    elements.errorGrid.hidden = !hasErrors;
    elements.errorEmpty.hidden = hasErrors;
    elements.emptyMessage.textContent = dataset.emptyMessage || "当前没有确认错误样本。";
    elements.errorExplainer.textContent = dataset.emptyMessage ||
      "仅展示已经确认并过滤、排除或删除的错误，不把 review-only 或旧规则 false positive 伪装成错误。";

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

    elements.lightboxImage.src = caseData.image;
    elements.lightboxImage.alt = `${caseData.title} 的 2D / 3D box 投影对照`;
    elements.lightboxTag.textContent = caseData.tag;
    elements.lightboxTag.classList.toggle("error", kind === "error");
    elements.lightboxTitle.textContent = caseData.title;
    elements.lightboxSubtitle.textContent = `${caseData.subtitle} · ${caseData.reason}`;
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

  elements.closeLightbox.addEventListener("click", closeLightbox);
  elements.lightbox.addEventListener("click", (event) => {
    if (event.target === elements.lightbox) closeLightbox();
  });

  elements.auditDate.textContent = data.auditDate;
  elements.generatedAt.textContent = `generated ${data.generatedAt}`;
  elements.datasetCount.textContent = `${data.datasets.length} datasets`;
  renderStats();
  renderTabs();
  selectDataset(currentDatasetId);
})();
