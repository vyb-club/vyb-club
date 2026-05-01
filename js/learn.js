const filterButtons = document.querySelectorAll(".filter-button");
const termCards = document.querySelectorAll(".term-card");
const termSearch = document.getElementById("termSearch");
const emptyState = document.getElementById("emptyState");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const THEME_KEY = "financeCoachTheme";

let activeFilter = "all";

function setTheme(theme) {
  const resolvedTheme = theme === "dark" ? "dark" : "light";
  document.body.dataset.theme = resolvedTheme;
  localStorage.setItem(THEME_KEY, resolvedTheme);

  if (themeToggle) {
    const isDark = resolvedTheme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
  }
}

setTheme(localStorage.getItem(THEME_KEY) || document.body.dataset.theme || "light");

themeToggle?.addEventListener("click", () => {
  setTheme(document.body.dataset.theme === "dark" ? "light" : "dark");
});

function applyFilters() {
  const query = termSearch.value.trim().toLowerCase();
  let visibleCount = 0;

  termCards.forEach((card) => {
    const category = card.dataset.category;
    const title = card.dataset.title;
    const matchesFilter = activeFilter === "all" || category === activeFilter;
    const matchesSearch = !query || title.includes(query);
    const shouldShow = matchesFilter && matchesSearch;

    card.classList.toggle("hidden", !shouldShow);
    if (shouldShow) visibleCount += 1;
  });

  emptyState.classList.toggle("hidden", visibleCount > 0);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    applyFilters();
  });
});

termSearch.addEventListener("input", applyFilters);

termCards.forEach((card) => {
  const trigger = card.querySelector(".term-trigger");
  trigger.addEventListener("click", () => {
    const isOpen = card.classList.contains("open");
    card.classList.toggle("open", !isOpen);
    trigger.setAttribute("aria-expanded", String(!isOpen));
  });
});

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("open");
  });
});

const mapDetails = {
  "investment-options": {
    title: "Investment Options",
    description: "The big universe starts here: equity for growth, debt for stability, commodities for diversification, and REITs for real estate exposure.",
    path: "Investment Options"
  },
  equity: {
    title: "Equity",
    description: "Equity means owning a part of a business. You can invest directly by buying stocks, or indirectly through mutual funds.",
    path: "Investment Options -> Equity"
  },
  stocks: {
    title: "Stocks",
    description: "Stocks let you invest directly in companies or stock-market products. You choose the exposure yourself and accept the full ups and downs of that choice.",
    path: "Investment Options -> Equity -> Stocks"
  },
  "mutual-funds": {
    title: "Mutual Funds",
    description: "Mutual funds pool money from many investors. A professional fund manager invests that money across stocks based on the fund type.",
    path: "Investment Options -> Equity -> Mutual Funds"
  },
  "index-funds": {
    title: "Index Funds",
    description: "Follows a market index like Nifty 50. Just like a thermometer indicates temperature, indexes like Nifty 50 indicate market performance.",
    path: "Investment Options -> Equity -> Mutual Funds -> Index Funds",
    facts: {
      "Returns you can expect": "10-12%",
      "Ideal investment period": "5+ years",
      "Risk level": "Moderate to high"
    }
  },
  "largecap-funds": {
    title: "Largecap Funds",
    description: "Invests 80% in the top 1-100 companies in the market.",
    path: "Investment Options -> Equity -> Mutual Funds -> Largecap Funds",
    facts: {
      "Returns you can expect": "10-12%",
      "Ideal investment period": "3-5 years",
      "Risk level": "Moderately high"
    }
  },
  "midcap-funds": {
    title: "Midcap Funds",
    description: "Invests 65% in the top 101-250 companies in the market.",
    path: "Investment Options -> Equity -> Mutual Funds -> Midcap Funds",
    facts: {
      "Returns you can expect": "12-15%",
      "Ideal investment period": "5-7 years",
      "Risk level": "Moderately high to high"
    }
  },
  "smallcap-funds": {
    title: "Smallcap Funds",
    description: "Invests 65% in the top 251-500 companies in the market.",
    path: "Investment Options -> Equity -> Mutual Funds -> Smallcap Funds",
    facts: {
      "Returns you can expect": "14-18%",
      "Ideal investment period": "7-10 years",
      "Risk level": "Very high"
    }
  },
  "multicap-funds": {
    title: "Multicap Funds",
    description: "Invests 25% each in large, mid, and small cap funds. The remaining 25% is invested based on the fund manager's decision.",
    path: "Investment Options -> Equity -> Mutual Funds -> Multicap Funds",
    facts: {
      "Returns you can expect": "15-20%",
      "Ideal investment period": "5-7 years",
      "Risk level": "High to very high"
    }
  },
  "flexicap-funds": {
    title: "Flexicap Funds",
    description: "Invests in large, mid, and small cap funds based on the fund manager's decision.",
    path: "Investment Options -> Equity -> Mutual Funds -> Flexicap Funds",
    facts: {
      "Returns you can expect": "17-23%",
      "Ideal investment period": "5-7 years",
      "Risk level": "Very high"
    }
  },
  debt: {
    title: "Debt",
    description: "Debt products are closer to lending money. They usually aim for steadier returns and lower volatility than equity.",
    path: "Investment Options -> Debt"
  },
  "small-bank-fd": {
    title: "Small Bank FD",
    description: "A fixed deposit gives a known interest rate for a chosen time period. It is simple, but returns may be lower than growth assets.",
    path: "Investment Options -> Debt -> Small Bank FD"
  },
  ppf: {
    title: "PPF",
    description: "Public Provident Fund is a long-term savings option with government backing and a lock-in period.",
    path: "Investment Options -> Debt -> PPF"
  },
  "liquid-funds": {
    title: "Liquid Funds",
    description: "Invests in very short-term instruments.",
    path: "Investment Options -> Debt -> Liquid Funds",
    facts: {
      "Returns you can expect": "4-6%",
      "Ideal investment period": "Few days to 1 year",
      "Risk level": "Low"
    }
  },
  "corporate-debt-funds": {
    title: "Corporate Debt Funds",
    description: "Your money is lent to big companies or the government and earns interest.",
    path: "Investment Options -> Debt -> Corporate Debt Funds",
    facts: {
      "Returns you can expect": "6-8%",
      "Ideal investment period": "2-4 years",
      "Risk level": "Low to moderate"
    }
  },
  commodities: {
    title: "Commodities",
    description: "Commodities are raw materials like gold, silver, oil, and copper. They can diversify a portfolio because they move differently from stocks and bonds.",
    path: "Investment Options -> Commodities"
  },
  gold: {
    title: "Gold ETF",
    description: "Invests in gold digitally.",
    path: "Investment Options -> Commodities -> Gold ETF",
    facts: {
      "Returns you can expect": "7-10%",
      "Ideal investment period": "3-5 years",
      "Risk level": "Low to moderate"
    }
  },
  silver: {
    title: "Silver ETF",
    description: "Invests in silver digitally.",
    path: "Investment Options -> Commodities -> Silver ETF",
    facts: {
      "Returns you can expect": "8-12%",
      "Ideal investment period": "3-5 years",
      "Risk level": "High to very high"
    }
  },
  "oil-copper": {
    title: "Oil, Copper, etc.",
    description: "Industrial commodities are linked closely to economic activity, supply cycles, and global demand.",
    path: "Investment Options -> Commodities -> Oil, Copper, etc."
  },
  reits: {
    title: "REITs",
    description: "Invests in construction of offices and malls, then earns returns from real estate income.",
    path: "Investment Options -> REITs",
    facts: {
      "Returns you can expect": "8-12%",
      "Ideal investment period": "5+ years",
      "Risk level": "Moderate"
    }
  },
  "international-etfs": {
    title: "International ETFs",
    description: "Invests in international markets.",
    path: "Investment Options -> Equity -> Stocks -> International ETFs",
    facts: {
      "Returns you can expect": "10-14%",
      "Ideal investment period": "5-7 years",
      "Risk level": "Moderate to high"
    }
  },
  "reit-income": {
    title: "Rental Income",
    description: "REITs pass a portion of rental or property income to investors, depending on the structure and regulations.",
    path: "Investment Options -> REITs -> Rental Income"
  },
  "reit-units": {
    title: "Listed Units",
    description: "REIT units can be bought and sold on the exchange, giving real estate exposure with more liquidity than owning a property.",
    path: "Investment Options -> REITs -> Listed Units"
  }
};

const mapTitle = document.getElementById("mapTitle");
const mapDescription = document.getElementById("mapDescription");
const mapPath = document.getElementById("mapPath");
const mapFacts = document.getElementById("mapFacts");
const mapDetailList = document.getElementById("mapDetailList");
const mapBreadcrumbs = document.getElementById("mapBreadcrumbs");
const mapBack = document.getElementById("mapBack");

const mapChildren = {
  "investment-options": ["equity", "debt", "commodities", "reits"],
  equity: ["stocks", "mutual-funds"],
  stocks: ["international-etfs"],
  "mutual-funds": [
    "index-funds",
    "largecap-funds",
    "midcap-funds",
    "smallcap-funds",
    "multicap-funds",
    "flexicap-funds"
  ],
  debt: ["small-bank-fd", "ppf", "liquid-funds", "corporate-debt-funds"],
  commodities: ["gold", "silver", "oil-copper"],
  reits: ["reit-income", "reit-units"]
};

const mapParents = Object.entries(mapChildren).reduce((parents, [parentId, childIds]) => {
  childIds.forEach((childId) => {
    parents[childId] = parentId;
  });
  return parents;
}, {});

let currentMapNode = "investment-options";

function getMapPath(nodeId) {
  const path = [];
  let cursor = nodeId;

  while (cursor) {
    path.unshift(cursor);
    cursor = mapParents[cursor];
  }

  return path;
}

function selectMapNode(nodeId) {
  currentMapNode = nodeId;
  updateMapInspector(nodeId);
}

function updateMapInspector(nodeId) {
  const detail = mapDetails[nodeId] || mapDetails["investment-options"];
  const path = getMapPath(nodeId);

  mapTitle.textContent = detail.title;
  mapDescription.textContent = detail.description;
  mapPath.textContent = path.map((pathNode) => mapDetails[pathNode].title).join(" > ");
  mapBack.disabled = nodeId === "investment-options";
  renderMapBreadcrumbs(path);
  renderMapFacts(detail.facts);
  renderMapDetails(nodeId);
}

function renderMapBreadcrumbs(path) {
  mapBreadcrumbs.innerHTML = path
    .map((pathNode, index) => {
      const detail = mapDetails[pathNode];
      const current = index === path.length - 1 ? ' aria-current="page"' : "";
      return `<button class="crumb-button" type="button" data-crumb-node="${pathNode}"${current}>${detail.title}</button>`;
    })
    .join("");
}

function renderMapFacts(facts = {}) {
  const entries = Object.entries(facts);

  if (!entries.length) {
    mapFacts.innerHTML = "";
    return;
  }

  mapFacts.innerHTML = entries
    .map(
      ([label, value]) => `
        <div class="fact-item">
          <strong>${label}</strong>
          <span>${value}</span>
        </div>
      `
    )
    .join("");
}

function renderMapDetails(nodeId) {
  const childIds = mapChildren[nodeId] || [];

  if (!childIds.length) {
    mapDetailList.innerHTML = "";
    return;
  }

  mapDetailList.innerHTML = childIds
    .map((childId) => {
      const child = mapDetails[childId];
      const childFacts = child.facts || {};
      const factPreview = childFacts["Risk level"]
        ? `<span class="detail-risk">${childFacts["Risk level"]}</span>`
        : "";
      return `
        <button class="detail-button" type="button" data-detail-node="${childId}">
          <strong>${child.title}</strong>
          <span>${child.description}</span>
          ${factPreview}
        </button>
      `;
    })
    .join("");
}

mapDetailList.addEventListener("click", (event) => {
  const detailButton = event.target.closest("[data-detail-node]");
  if (!detailButton) return;

  selectMapNode(detailButton.dataset.detailNode);
});

mapBreadcrumbs.addEventListener("click", (event) => {
  const crumb = event.target.closest("[data-crumb-node]");
  if (!crumb) return;

  selectMapNode(crumb.dataset.crumbNode);
});

mapBack.addEventListener("click", () => {
  const parentNode = mapParents[currentMapNode] || "investment-options";
  selectMapNode(parentNode);
});

const quizData = [
  {
    question: "What does equity mainly represent?",
    options: ["Owning part of a business", "Lending money for fixed interest", "Buying insurance cover"],
    answer: 0,
    explanation: "Equity means ownership. Your value can rise or fall with the business."
  },
  {
    question: "Which option is the most direct way to invest in equity?",
    options: ["Stocks", "Corporate debt funds", "Liquid funds"],
    answer: 0,
    explanation: "Stocks are direct equity ownership; mutual funds are indirect."
  },
  {
    question: "What does an index fund usually do?",
    options: ["Follows a market index like Nifty 50", "Chooses only small companies", "Invests only in gold"],
    answer: 0,
    explanation: "Index funds copy an index instead of trying to pick winners."
  },
  {
    question: "Which fund type has the highest risk among these?",
    options: ["Liquid fund", "Smallcap fund", "Corporate debt fund"],
    answer: 1,
    explanation: "Smallcap funds invest in smaller companies, so price swings are usually sharper."
  },
  {
    question: "What makes flexicap funds different?",
    options: ["They can shift across large, mid, and small cap companies", "They invest only in the top 100 companies", "They mature in a few days"],
    answer: 0,
    explanation: "Flexicap funds give the manager flexibility across company sizes."
  },
  {
    question: "Which option is usually used for short-term parking of money?",
    options: ["Liquid funds", "Smallcap funds", "REITs"],
    answer: 0,
    explanation: "Liquid funds invest in very short-term instruments and are designed for shorter holding periods."
  },
  {
    question: "What does expense ratio mean?",
    options: ["Annual fee charged by a fund", "Total money managed by a fund", "How much prices move up and down"],
    answer: 0,
    explanation: "Expense ratio is the yearly cost deducted for managing and operating a fund."
  },
  {
    question: "What does volatility tell you?",
    options: ["How sharply an investment moves up and down", "How much money a fund manages", "The tax rate on a product"],
    answer: 0,
    explanation: "Volatility measures price movement. Higher volatility means a bumpier ride."
  },
  {
    question: "What do REITs mainly help you invest in?",
    options: ["Real estate like offices and malls", "Only government bonds", "Health insurance"],
    answer: 0,
    explanation: "REITs give real estate exposure without directly buying property."
  },
  {
    question: "Why might someone use international ETFs?",
    options: ["To invest in markets outside India", "To buy a fixed deposit", "To reduce expense ratio to zero"],
    answer: 0,
    explanation: "International ETFs provide exposure to foreign markets and can diversify a portfolio."
  }
];

function renderQuiz() {
  const quizCard = document.getElementById("quizCard");
  quizCard.innerHTML = quizData
    .map(
      (item, index) => `
        <section class="question-block" data-question-index="${index}">
          <h3>${index + 1}. ${item.question}</h3>
          <div class="option-list">
            ${item.options
              .map(
                (option, optionIndex) => `
                  <label class="option-item">
                    <input type="radio" name="question-${index}" value="${optionIndex}">
                    <span>${option}</span>
                  </label>
                `
              )
              .join("")}
          </div>
          <p class="answer-explanation" id="explanation-${index}"></p>
        </section>
      `
    )
    .join("");
}

function checkQuiz() {
  let score = 0;

  quizData.forEach((item, index) => {
    const options = document.querySelectorAll(`input[name="question-${index}"]`);
    options.forEach((option) => {
      const container = option.closest(".option-item");
      container.classList.remove("correct", "incorrect");

      if (Number(option.value) === item.answer) {
        container.classList.add("correct");
      }

      if (option.checked && Number(option.value) !== item.answer) {
        container.classList.add("incorrect");
      }
    });

    const selected = document.querySelector(`input[name="question-${index}"]:checked`);
    const explanation = document.getElementById(`explanation-${index}`);
    const correctAnswer = item.options[item.answer];

    if (selected && Number(selected.value) === item.answer) {
      score += 1;
      explanation.textContent = `Right: ${item.explanation}`;
      explanation.className = "answer-explanation correct";
    } else {
      explanation.textContent = selected
        ? `Wrong: The answer is " ${correctAnswer} ". ${item.explanation}`
        : `Not answered: The answer is " ${correctAnswer} ". ${item.explanation}`;
      explanation.className = "answer-explanation incorrect";
    }
  });

  const quizResult = document.getElementById("quizResult");
  quizResult.textContent = `You scored ${score} out of ${quizData.length}. ${
    score === quizData.length
      ? "Excellent clarity."
      : score >= 7
        ? "You are building a solid foundation."
        : "Review the glossary once more and try again."
  }`;
}

function resetQuiz() {
  renderQuiz();
  document.getElementById("quizResult").textContent = "";
}

document.getElementById("checkQuiz").addEventListener("click", checkQuiz);
document.getElementById("resetQuiz").addEventListener("click", resetQuiz);

renderQuiz();
applyFilters();
selectMapNode("investment-options");
