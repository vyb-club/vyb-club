const colors = {
  Equity: "#2563eb",
  Debt: "#326da8",
  Gold: "#c3902f",
  REITs: "#b75c6b",
  International: "#38bdf8"
};

const themeToggle = document.getElementById("themeToggle");
const THEME_KEY = "financeCoachTheme";

function setTheme(theme) {
  const resolvedTheme = theme === "light" ? "light" : "dark";
  document.body.dataset.theme = resolvedTheme;
  localStorage.setItem(THEME_KEY, resolvedTheme);

  if (themeToggle) {
    const isDark = resolvedTheme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
  }
}

setTheme(localStorage.getItem(THEME_KEY) || document.body.dataset.theme || "dark");

themeToggle?.addEventListener("click", () => {
  setTheme(document.body.dataset.theme === "dark" ? "light" : "dark");
});

const insuranceRecommendations = {
  health: [
    {
      title: "Care Ultimate Care (Direct)",
      href: "https://www.policybazaar.com/insurance-companies/religare-health-insurance/ultimate-care/",
      bestFor: "Health cover as much as affordable, with at least Rs 10L-15L base cover.",
      riders: ["Premium Payback", "Claim Shield"]
    },
    {
      title: "HDFC Ergo Optima Secure",
      href: "https://www.policybazaar.com/insurance-companies/hdfc-ergo-health-insurance/optima-secure-plan/",
      bestFor: "Health cover as much as affordable, with at least Rs 10L-15L base cover.",
      riders: ["Unlimited Restore"]
    }
  ],
  term: [
    {
      title: "TATA AIA Sampoorna Raksha Promise",
      href: "https://www.policybazaar.com/term-insurance/tata-aia-sampoorna-raksha-promise/",
      bestFor: "Term cover of 15x-20x annual income.",
      riders: ["Life Stage Benefit Option", "Accident Total and Permanent Disability Benefit (Max Cover Value)"]
    },
    {
      title: "HDFC Life Click 2 Protect Supreme Plus",
      href: "https://www.policybazaar.com/term-insurance/hdfc-click-2-protect-life/",
      bestFor: "Term cover of 15x-20x annual income.",
      riders: ["Waiver of premium on critical illness", "Accidental Disability (Max Cover Value)"]
    }
  ]
};

const fundRecommendations = {
  equity: [
    ["Index funds", [
      { label: "Motilal Oswal BSE Enhanced Value Index Fund", href: "https://groww.in/mutual-funds/motilal-oswal-bse-enhanced-value-index-fund-direct-growth" },
      { label: "Axis Nifty 50 Index Fund", href: "https://groww.in/mutual-funds/axis-nifty-50-index-fund-direct-growth" }
    ], "Use Direct-Growth category only."],
    ["Large cap funds", [
      { label: "Nippon India Large Cap Fund", href: "https://groww.in/mutual-funds/nippon-india-large-cap-fund-direct-growth" },
      { label: "Invesco India Business Leaders Fund", href: "https://groww.in/mutual-funds/invesco-india-business-leaders-fund-direct-growth" }
    ], "Use Direct-Growth category only."],
    ["Mid cap funds", [
      { label: "WhiteOak Capital Mid Cap Fund", href: "https://groww.in/mutual-funds/whiteoak-capital-mid-cap-fund-direct-growth" },
      { label: "Invesco India Mid Cap Fund", href: "https://groww.in/mutual-funds/invesco-india-mid-cap-fund-direct-growth" }
    ], "Use Direct-Growth category only."],
    ["Small cap funds", [
      { label: "Bandhan Small Cap Fund", href: "https://groww.in/mutual-funds/bandhan-small-cap-fund-direct-growth" },
      { label: "ITI Small Cap Fund", href: "https://groww.in/mutual-funds/iti-small-cap-fund-direct-growth" }
    ], "Use Direct-Growth category only."],
    ["Flexi cap funds", [
      { label: "Bank of India Flexi Cap Fund", href: "https://groww.in/mutual-funds/bank-of-india-flexi-cap-fund-direct-growth" },
      { label: "Parag Parikh Long Term Value Fund", href: "https://groww.in/mutual-funds/parag-parikh-long-term-value-fund-direct-growth" }
    ], "Use Direct-Growth category only."]
  ],
  debt: [
    ["Debt", [
      { label: "Edelweiss Liquid Fund", href: "https://groww.in/mutual-funds/edelweiss-liquid-fund-direct-growth" },
      { label: "Franklin India IBA Direct Growth", href: "https://groww.in/mutual-funds/franklin-india-iba-direct-growth" }
    ], "Use Direct-Growth category only."]
  ],
  commodities: [
    ["Gold and silver", [
      { label: "SBI Gold ETF", href: "https://groww.in/etfs/sbi-mutual-fund-sbi-gold-exchange-traded-scheme-growth-option" },
      { label: "Axis Silver ETF", href: "https://groww.in/etfs/axis-silver-etf" },
      { label: "Motilal Oswal Gold and Silver Passive FOF", href: "https://groww.in/mutual-funds/motilal-oswal-gold-and-silver-passive-fof-direct-growth" }
    ], "Use ETF route for ETFs and Direct-Growth category for FOF."]
  ],
  international: [
    ["International ETFs", [
      { label: "Motilal Oswal NASDAQ-100 ETF", href: "https://groww.in/etfs/motilal-oswal-mutual-fundmotilal-oswal-most-shares-nasdaq-etf" },
      { label: "Mirae Asset S&P 500 Top 50 ETF", href: "https://groww.in/etfs/mirae-asset-sp-top-etf-masptop" }
    ], "Use ETF route and review liquidity, concentration, and tracking difference."]
  ],
  reits: [
    ["REITs", [
      { label: "Embassy Office Parks REIT", href: "https://groww.in/stocks/embassy-office-parks-reit" },
      { label: "Mindspace Business Parks REIT", href: "https://groww.in/stocks/mindspace-business-parks-ltd" }
    ], "Review occupancy, distributions, and sponsor quality."]
  ]
};

const learningCards = [
  {
    key: "equity",
    label: "Asset Class",
    title: "Equity",
    bullets: [
      "Returns: often 10-14% long term.",
      "Horizon: best for 5+ years.",
      "Advantage: strongest growth potential.",
      "Disadvantage: can fall hard in bad years."
    ],
    details: [
      "Equity means owning businesses through stocks or equity mutual funds.",
      "It builds wealth over long periods, not in smooth straight lines.",
      "Use less equity if short-term market falls make you panic."
    ]
  },
  {
    key: "debt",
    label: "Asset Class",
    title: "Debt",
    bullets: [
      "Returns: often 5-8% over time.",
      "Horizon: good for near or medium goals.",
      "Advantage: adds stability.",
      "Disadvantage: lower growth than equity."
    ],
    details: [
      "Debt funds lend money to governments or companies.",
      "This is the safety bucket that protects your plan from big swings.",
      "Use debt for emergency money and goals that are not far away."
    ]
  },
  {
    key: "gold",
    label: "Asset Class",
    title: "Gold",
    bullets: [
      "Returns: uneven, but useful in stress.",
      "Horizon: long-term diversifier.",
      "Advantage: balances equity risk.",
      "Disadvantage: usually slower than equity."
    ],
    details: [
      "Gold is a hedge against uncertainty and inflation shocks.",
      "Gold ETFs and passive gold funds are cleaner than jewelry for investing.",
      "Keep gold as a small allocation, not the main engine."
    ]
  },
  {
    key: "reits",
    label: "Asset Class",
    title: "REITs",
    bullets: [
      "Returns: income plus moderate growth.",
      "Horizon: medium to long term.",
      "Advantage: real-estate exposure without buying property.",
      "Disadvantage: still moves with markets."
    ],
    details: [
      "REITs are listed trusts that own rent-producing real estate.",
      "They can pay distributions while also moving with the market.",
      "Occupancy and sponsor quality matter a lot."
    ]
  },
  {
    key: "insurance",
    label: "Protection",
    title: "Health vs Term Insurance",
    bullets: [
      "Return: no investment return, pure protection.",
      "Horizon: keep while family risk exists.",
      "Advantage: protects savings and dependents.",
      "Disadvantage: feels costly until a claim is needed."
    ],
    details: [
      "Health insurance protects your money from major medical bills.",
      "Term insurance protects your family's income if the earner dies.",
      "Protection should usually come before aggressive investing."
    ]
  },
  {
    key: "riders",
    label: "Protection",
    title: "Riders and Add-ons",
    bullets: [
      "Return: no return, extra protection only.",
      "Horizon: useful while the risk exists.",
      "Advantage: covers specific gaps.",
      "Disadvantage: too many can raise cost fast."
    ],
    details: [
      "Riders are optional extras attached to an insurance policy.",
      "Examples include critical illness, disability, restoration, or waiver of premium.",
      "Choose riders only when they solve a real coverage gap."
    ]
  },
  {
    key: "index",
    label: "Fund Type",
    title: "Index Funds",
    bullets: [
      "Returns: roughly market return.",
      "Horizon: best for 5+ years.",
      "Advantage: simple and low cost.",
      "Disadvantage: never meaningfully beats the index."
    ],
    details: [
      "Index funds copy a market benchmark instead of stock picking.",
      "They reduce manager-selection risk and are easy to understand.",
      "For many beginners, they are the cleanest starting point."
    ]
  },
  {
    key: "marketcaps",
    label: "Fund Type",
    title: "Large, Mid, and Small Cap Funds",
    bullets: [
      "Returns: smaller caps can outperform over cycles.",
      "Horizon: best for long holding periods.",
      "Advantage: higher growth potential.",
      "Disadvantage: volatility rises from large to small cap."
    ],
    details: [
      "These labels tell you the size of companies the fund usually buys.",
      "Large cap is steadier, mid cap is faster, small cap is the wildest.",
      "Use mid and small cap in controlled amounts if you are new."
    ]
  },
  {
    key: "flexi",
    label: "Fund Type",
    title: "Flexi Cap Funds",
    bullets: [
      "Returns: can be strong over full cycles.",
      "Horizon: best for 5+ years.",
      "Advantage: one fund can cover many market caps.",
      "Disadvantage: depends more on manager skill."
    ],
    details: [
      "Flexi cap funds can shift across large, mid, and small companies.",
      "They are useful when you want one diversified active fund.",
      "Check cost, style, and long-term consistency before choosing one."
    ]
  },
  {
    key: "returns",
    label: "Expectations",
    title: "What Returns Should You Expect?",
    bullets: [
      "Equity: often 10-14% long term.",
      "Debt: often 5-8% long term.",
      "Advantage: ranges help set better expectations.",
      "Disadvantage: no asset class gives guaranteed returns."
    ],
    details: [
      "Each asset class behaves differently over time.",
      "Good planning uses realistic ranges instead of promises.",
      "Time horizon and discipline matter more than chasing a magic number."
    ]
  }
];

const form = document.getElementById("coachForm");
const toStep2 = document.getElementById("toStep2");
const backToStep1 = document.getElementById("backToStep1");
const stepOne = document.querySelector('[data-step="1"]');
const stepTwo = document.querySelector('[data-step="2"]');
const riskScore = document.getElementById("riskScore");
const riskValue = document.getElementById("riskValue");
const riskLabel = document.getElementById("riskLabel");
const allocationHeadline = document.getElementById("allocationHeadline");
const allocationChart = document.getElementById("allocationChart");
const allocationLegend = document.getElementById("allocationLegend");
const equitySubAllocation = document.getElementById("equitySubAllocation");
const equitySubHeadline = document.getElementById("equitySubHeadline");
const equitySubLegend = document.getElementById("equitySubLegend");
const planAlerts = document.getElementById("planAlerts");
const consoleRisk = document.getElementById("consoleRisk");
const consoleSip = document.getElementById("consoleSip");
const consoleCover = document.getElementById("consoleCover");
const railStepTwo = document.getElementById("railStepTwo");
const learnGrid = document.getElementById("learnGrid");
const MIN_ASSET_AMOUNT = 500;
const equitySubColors = {
  "Index funds": "#7dd3fc",
  "Flexi cap funds": "#7dd3fc",
  "Mid cap funds": "#fbbf24",
  "Small cap funds": "#fb7185"
};

function formatCurrency(value) {
  return `Rs ${new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0
  }).format(Number(value) || 0)}`;
}

function formatConsoleCurrency(value) {
  return formatCurrency(value);
}

function getRiskLabel(score) {
  if (score <= 3) {
    return "Conservative investor: a 20% fall may feel uncomfortable, so stability matters most.";
  }

  if (score <= 6) {
    return "Balanced investor: can tolerate temporary declines without panic decisions.";
  }

  if (score <= 8) {
    return "Growth investor: can stay invested through a 30-40% equity drawdown.";
  }

  return "Aggressive investor: accepts deep 40-50% drawdowns for long-term growth potential.";
}

function calculateAllocation(profile) {
  const investment = Number(profile.investment);
  const score = Number(profile.riskScore);
  const safeAmount = Number(profile.safeAmount);
  const riskAmount = Number(profile.riskAmount);

  if (investment <= 0) {
    return { Equity: 0, Debt: 0, Gold: 0, REITs: 0, International: 0 };
  }

  const minimumDebt = Math.min(investment, roundToHundred(Math.max(investment * 0.1, MIN_ASSET_AMOUNT)));
  const riskBasedDebt = roundToHundred(investment * getRiskDebtFloor(score));
  const requestedSafe = Math.max(0, safeAmount || 0);
  const requestedRisk = Math.max(0, riskAmount || 0);
  const debtBudget = Math.min(investment, Math.max(minimumDebt, requestedSafe, riskBasedDebt));
  const riskBudget = Math.min(requestedRisk, Math.max(0, investment - debtBudget));
  const satelliteBudget = Math.max(0, investment - debtBudget - riskBudget);

  let allocation;

  if (investment < 4000) {
    allocation = compactSmallTicketAllocation(investment, debtBudget, riskBudget);
  } else if (investment <= 6000) {
    allocation = compactMediumTicketAllocation(investment, score, debtBudget, riskBudget, satelliteBudget);
  } else {
    allocation = expandAllocation(score, debtBudget, riskBudget, satelliteBudget);
  }

  allocation = enforceMinimumAssetAmount(allocation, investment);
  allocation = normalizeAmountAllocation(allocation, investment);

  return allocation;
}

function roundToHundred(value) {
  return Math.round(value / 100) * 100;
}

function getRiskDebtFloor(score) {
  if (score <= 2) return 0.5;
  if (score <= 3) return 0.4;
  if (score <= 6) return 0.2;
  return 0.1;
}

function compactSmallTicketAllocation(investment, debtBudget, riskBudget) {
  const debt = Math.min(investment, Math.max(MIN_ASSET_AMOUNT, debtBudget));
  return {
    Equity: Math.max(0, investment - debt, riskBudget),
    Debt: debt,
    Gold: 0,
    REITs: 0,
    International: 0
  };
}

function compactMediumTicketAllocation(investment, score, debtBudget, riskBudget, satelliteBudget) {
  const debt = debtBudget;
  let equity = riskBudget;
  let gold = 0;

  if (satelliteBudget >= MIN_ASSET_AMOUNT) {
    gold = satelliteBudget;
  } else {
    equity += satelliteBudget;
  }

  if (score >= 7 && riskBudget >= 3000 && gold < MIN_ASSET_AMOUNT && equity >= MIN_ASSET_AMOUNT * 2) {
    const transfer = MIN_ASSET_AMOUNT - gold;
    equity -= transfer;
    gold += transfer;
  }

  return { Equity: equity, Debt: debt, Gold: gold, REITs: 0, International: 0 };
}

function expandAllocation(score, debtBudget, riskBudget, satelliteBudget) {
  const riskAllocation = ensureMinimumGoldAllocation(
    distributeBudget(riskBudget, getRiskWeights(score), "Equity"),
    score,
    riskBudget
  );
  const satelliteAllocation = distributeBudget(satelliteBudget, getSatelliteWeights(score), "Gold");

  return {
    Equity: (riskAllocation.Equity || 0) + (satelliteAllocation.Equity || 0),
    Debt: debtBudget,
    Gold: (riskAllocation.Gold || 0) + (satelliteAllocation.Gold || 0),
    REITs: (riskAllocation.REITs || 0) + (satelliteAllocation.REITs || 0),
    International: (riskAllocation.International || 0) + (satelliteAllocation.International || 0)
  };
}

function getRiskWeights(score) {
  if (score <= 3) {
    return { Equity: 0.55, Gold: 0.25, International: 0.12, REITs: 0.08 };
  }

  if (score <= 6) {
    return { Equity: 0.65, Gold: 0.15, International: 0.12, REITs: 0.08 };
  }

  if (score <= 8) {
    return { Equity: 0.7, Gold: 0.12, International: 0.1, REITs: 0.08 };
  }

  return { Equity: 0.7, Gold: 0.1, International: 0.125, REITs: 0.075 };
}

function getSatelliteWeights(score) {
  if (score <= 3) {
    return { Gold: 0.55, International: 0.25, REITs: 0.2 };
  }

  if (score <= 6) {
    return { Gold: 0.45, International: 0.35, REITs: 0.2 };
  }

  if (score <= 8) {
    return { Gold: 0.35, International: 0.4, REITs: 0.25 };
  }

  return { Gold: 0.3, International: 0.45, REITs: 0.25 };
}

function distributeBudget(totalBudget, weights, driftTarget) {
  const allocation = {};
  let assigned = 0;

  Object.entries(weights).forEach(([asset, weight]) => {
    let amount = roundToHundred(totalBudget * weight);

    if (amount > 0 && amount < MIN_ASSET_AMOUNT) {
      amount = 0;
    }

    allocation[asset] = amount;
    assigned += amount;
  });

  if (totalBudget - assigned > 0) {
    allocation[driftTarget] = (allocation[driftTarget] || 0) + (totalBudget - assigned);
  }

  return allocation;
}

function ensureMinimumGoldAllocation(allocation, score, riskBudget) {
  if (score < 7 || riskBudget < 3000) {
    return allocation;
  }

  const goldAmount = allocation.Gold || 0;
  const equityAmount = allocation.Equity || 0;

  if (goldAmount >= MIN_ASSET_AMOUNT || equityAmount < MIN_ASSET_AMOUNT) {
    return allocation;
  }

  const topUp = MIN_ASSET_AMOUNT - goldAmount;
  const movableFromEquity = Math.max(0, equityAmount - MIN_ASSET_AMOUNT);
  const transfer = Math.min(topUp, movableFromEquity);

  if (transfer <= 0) {
    return allocation;
  }

  allocation.Equity -= transfer;
  allocation.Gold = goldAmount + transfer;

  return allocation;
}

function enforceMinimumAssetAmount(allocation, investment) {
  const cleaned = { ...allocation };

  Object.keys(cleaned).forEach((key) => {
    if (cleaned[key] > 0 && cleaned[key] < MIN_ASSET_AMOUNT) {
      cleaned.Equity += cleaned[key];
      cleaned[key] = 0;
    }
  });

  if (cleaned.Equity < MIN_ASSET_AMOUNT && investment >= MIN_ASSET_AMOUNT) {
    cleaned.Debt += cleaned.Equity;
    cleaned.Equity = 0;
  }

  return cleaned;
}

function normalizeAmountAllocation(allocation, investment) {
  const rounded = Object.fromEntries(
    Object.entries(allocation).map(([key, value]) => [key, Math.max(0, roundToHundred(value))])
  );
  const total = Object.values(rounded).reduce((sum, value) => sum + value, 0);
  const drift = investment - total;
  const driftTarget = rounded.Equity > 0 ? "Equity" : "Debt";
  rounded[driftTarget] += drift;

  return Object.fromEntries(Object.entries(rounded).filter(([, value]) => value > 0));
}

function renderAllocation(allocation, profile) {
  let start = 0;
  const investment = Number(profile.investment) || Object.values(allocation).reduce((sum, value) => sum + value, 0);
  const segments = Object.entries(allocation).map(([label, value]) => {
    const percentage = investment ? (value / investment) * 100 : 0;
    const segment = `${colors[label]} ${start}% ${start + percentage}%`;
    start += percentage;
    return segment;
  });

  allocationChart.style.background = `conic-gradient(${segments.join(", ")})`;
  allocationHeadline.textContent = `${formatConsoleCurrency(profile.investment)} monthly starter plan`;
  allocationChart.setAttribute(
    "aria-label",
    Object.entries(allocation).map(([label, value]) => `${label} ${formatCurrency(value)}`).join(", ")
  );

  allocationLegend.innerHTML = Object.entries(allocation).map(([label, value]) => `
    <div class="legend-row">
      <span class="legend-swatch" style="background:${colors[label]}"></span>
      <span>${label}</span>
      <strong>${formatCurrency(value)} - ${Math.round((value / investment) * 100)}%</strong>
    </div>
  `).join("");

  renderEquitySubAllocation(allocation, profile);
  renderPlanAlerts(profile, allocation);
}

function renderEquitySubAllocation(allocation, profile) {
  const equityAmount = allocation.Equity || 0;

  if (equityAmount < MIN_ASSET_AMOUNT) {
    equitySubAllocation.classList.add("hidden");
    equitySubLegend.innerHTML = "";
    return;
  }

  const subAllocation = calculateEquitySubAllocation(equityAmount, Number(profile.riskScore));
  const totalEquity = Object.values(subAllocation).reduce((sum, value) => sum + value, 0);

  equitySubAllocation.classList.remove("hidden");
  equitySubHeadline.textContent = `${formatCurrency(equityAmount)} across fund types`;
  equitySubLegend.innerHTML = Object.entries(subAllocation).map(([label, value]) => `
    <div class="sub-row">
      <span class="sub-swatch" style="background:${equitySubColors[label]}"></span>
      <span>${label}</span>
      <strong>${formatCurrency(value)} - ${Math.round((value / totalEquity) * 100)}%</strong>
    </div>
  `).join("");
}

function calculateEquitySubAllocation(equityAmount, score) {
  let weights;

  if (equityAmount < 3000) {
    return { "Index funds": equityAmount };
  }

  if (score <= 3) {
    weights = {
      "Index funds": 0.65,
      "Flexi cap funds": 0.35,
      "Mid cap funds": 0,
      "Small cap funds": 0
    };
  } else if (score <= 6) {
    weights = {
      "Index funds": 0.45,
      "Flexi cap funds": 0.3,
      "Mid cap funds": 0.2,
      "Small cap funds": 0.05
    };
  } else if (score <= 8) {
    weights = {
      "Index funds": 0.35,
      "Flexi cap funds": 0.25,
      "Mid cap funds": 0.25,
      "Small cap funds": 0.15
    };
  } else {
    weights = {
      "Index funds": 0.3,
      "Flexi cap funds": 0.2,
      "Mid cap funds": 0.25,
      "Small cap funds": 0.25
    };
  }

  const split = distributeBudget(equityAmount, weights, "Index funds");
  return sanitizeSubAllocation(split);
}

function sanitizeSubAllocation(allocation) {
  const cleaned = { ...allocation };

  Object.keys(cleaned).forEach((key) => {
    if (cleaned[key] > 0 && cleaned[key] < MIN_ASSET_AMOUNT) {
      cleaned["Index funds"] = (cleaned["Index funds"] || 0) + cleaned[key];
      cleaned[key] = 0;
    }
  });

  return Object.fromEntries(Object.entries(cleaned).filter(([, value]) => value > 0));
}

function renderPlanAlerts(profile, allocation) {
  const alerts = getPlanAlerts(profile, allocation);
  planAlerts.innerHTML = alerts.map((alert) => `
    <article class="plan-alert ${alert.type}">
      <strong>${alert.title}</strong>
      <p>${alert.message}</p>
      ${alert.cta ? `<a class="planner-link alert-link" href="${alert.cta.href}">${alert.cta.label}</a>` : ""}
    </article>
  `).join("");
}

function getPlanAlerts(profile) {
  const income = Number(profile.income) || 0;
  const investment = Number(profile.investment) || 0;
  const dependents = Number(profile.dependents) || 0;
  const investmentRate = income ? (investment / income) * 100 : 0;
  const alerts = [];

  if (!profile.healthInsurance || !profile.termInsurance) {
    alerts.push({
      type: "urgent",
      title: "Insurance comes first",
      message: "Take health insurance and term insurance as soon as possible, then start or increase investing.",
      cta: {
        label: "Find top insurances",
        href: "./app.html#insurance"
      }
    });
  }

  if (dependents >= 2) {
    alerts.push({
      type: "urgent",
      title: "Dependent protection rule",
      message: "With 2 or more dependents, health and term insurance are compulsory priorities. Keep saving or investing around 10-15% of income until protection is in place."
    });
  } else if (investmentRate > 25) {
    alerts.push({
      type: "caution",
      title: "High investment commitment",
      message: "Ideal saving or investing is usually 10-25% of income. Invest this much only if you can continue without redeeming early."
    });
  } else if (investmentRate > 0 && investmentRate < 10) {
    alerts.push({
      type: "info",
      title: "Low investment rate",
      message: "Try to build toward at least 10% of monthly income once insurance and emergency money are handled."
    });
  }

  // alerts.push({
  //   type: "info",
  //   title: "Debt safety floor",
  //   message: "Debt follows the amount kept safe, but very low risk scores can increase debt beyond the 10% floor. No active asset bucket is kept below Rs 500."
  // });

  return alerts;
}

function renderInsurance(profile) {
  const dependents = Number(profile.dependents) || 0;
  document.getElementById("healthStatus").textContent = profile.healthInsurance
    ? "Existing cover: review adequacy"
    : dependents >= 2
      ? "Compulsory priority"
      : "Priority: buy cover";
  document.getElementById("termStatus").textContent = profile.termInsurance
    ? "Existing cover: review sum assured"
    : dependents >= 2
      ? "Compulsory priority"
      : dependents > 0
        ? "Priority: buy cover"
      : "Optional unless obligations exist";

  document.getElementById("healthRows").innerHTML = insuranceRecommendations.health.map(rowTemplate).join("");
  document.getElementById("termRows").innerHTML = insuranceRecommendations.term.map(rowTemplate).join("");
}

function shouldRedirectToInsurance(profile) {
  const dependents = Number(profile.dependents) || 0;
  return dependents >= 2 && (!profile.healthInsurance || !profile.termInsurance);
}

function confirmHighInvestment(profile) {
  const income = Number(profile.income) || 0;
  const investment = Number(profile.investment) || 0;

  if (!income || investment / income <= 0.25) return true;

  return window.confirm(
    "You are planning to invest more than 25% of your monthly income. Are you sure you can continue this amount without redeeming investments early?"
  );
}

function validateStepOne() {
  const requiredFields = stepOne.querySelectorAll("input[required], select[required]");
  const valid = Array.from(requiredFields).every((field) => field.reportValidity());

  if (!valid) return false;

  const income = Number(document.getElementById("income").value);
  const investment = Number(document.getElementById("investment").value);

  if (investment > income) {
    document.getElementById("investment").setCustomValidity("Monthly investment cannot be more than monthly income.");
    document.getElementById("investment").reportValidity();
    document.getElementById("investment").setCustomValidity("");
    return false;
  }

  return true;
}

function validateStepTwo() {
  const investment = Number(document.getElementById("investment").value);
  const safeAmountField = document.getElementById("safeAmount");
  const riskAmountField = document.getElementById("riskAmount");
  const safeAmount = Number(safeAmountField.value);
  const riskAmount = Number(riskAmountField.value);

  if (!safeAmountField.reportValidity() || !riskAmountField.reportValidity()) {
    return false;
  }

  if (safeAmount + riskAmount > investment) {
    riskAmountField.setCustomValidity("Safe amount plus risk amount cannot be more than your monthly investment.");
    riskAmountField.reportValidity();
    riskAmountField.setCustomValidity("");
    return false;
  }

  return true;
}

function updateConsole(profile) {
  const healthReady = profile.healthInsurance ? 1 : 0;
  const termReady = profile.termInsurance ? 1 : 0;

  consoleRisk.textContent = `${profile.riskScore}/10`;
  consoleSip.textContent = formatConsoleCurrency(profile.investment);
  consoleCover.textContent = `${healthReady + termReady}/2 ready`;
}

function rowTemplate(row) {
  return `
    <tr>
      <td><strong><a class="fund-link" href="${row.href}" target="_blank" rel="noreferrer">${row.title}</a></strong></td>
      <td>${row.bestFor}</td>
      <td>${orderedList(row.riders)}</td>
    </tr>
  `;
}

function renderFunds(category = "equity") {
  document.getElementById("fundGrid").innerHTML = fundRecommendations[category].map(([title, description, note]) => `
    <article class="fund-card">
      <h3>${title}</h3>
      ${orderedList(description)}
      <strong>${note}</strong>
    </article>
  `).join("");
}

function orderedList(items) {
  const listItems = Array.isArray(items) ? items : [items];

  return `
    <ol class="numbered-list">
      ${listItems.map((item) => `
        <li>${typeof item === "object" && item.href
          ? `<a class="fund-link" href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`
          : item}
        </li>`).join("")}
    </ol>
  `;
}

function renderLearningCards() {
  learnGrid.innerHTML = learningCards.map((card, index) => `
    <article class="learn-card" data-learn-key="${card.key}">
      <div class="learn-card-inner">
        <div class="learn-face front">
          <div class="learn-scroll">
            <div class="learn-card-head">
              <span class="learn-card-badge">${String(index + 1).padStart(2, "0")}</span>
              <span class="learn-card-tag">${card.label}</span>
            </div>
            <h3>${card.title}</h3>
            <ul class="learn-bullets">
              ${card.bullets.map((bullet) => `<li><strong>${bullet}</strong></li>`).join("")}
            </ul>
          </div>
          <div class="learn-card-foot back-foot">
            <p>Flip to know more.</p>
            <button class="flip-trigger" type="button" data-flip-card>Flip for clarity</button>
          </div>
        </div>
        <div class="learn-face back">
          <div class="learn-scroll">
            <div class="learn-card-head">
              <span class="learn-card-badge">Why it matters</span>
              <span class="learn-card-tag">${card.label}</span>
            </div>
            <h3>${card.title}</h3>
            <ul class="learn-bullets">
              ${card.details.map((detail) => `<li><strong>${detail}</strong></li>`).join("")}
            </ul>
          </div>
          <div class="learn-card-foot back-foot">
            <p>Now you know the meaning behind the numbers.</p>
            <button class="flip-trigger" type="button" data-flip-card>Flip back</button>
          </div>
        </div>
      </div>
    </article>
  `).join("");
}

function getProfile() {
  return {
    age: document.getElementById("age").value,
    income: document.getElementById("income").value,
    dependents: document.getElementById("dependents").value,
    investment: document.getElementById("investment").value,
    healthInsurance: document.getElementById("healthInsurance").checked,
    termInsurance: document.getElementById("termInsurance").checked,
    safeAmount: document.getElementById("safeAmount").value,
    riskAmount: document.getElementById("riskAmount").value,
    riskScore: riskScore.value
  };
}

toStep2.addEventListener("click", () => {
  if (!validateStepOne()) return;

  stepOne.classList.add("hidden");
  stepTwo.classList.remove("hidden");
  stepTwo.classList.add("fade-in");
  railStepTwo.classList.add("active");
  updateConsole(getProfile());
});

backToStep1.addEventListener("click", () => {
  stepTwo.classList.add("hidden");
  stepOne.classList.remove("hidden");
  stepOne.classList.add("fade-in");
  railStepTwo.classList.remove("active");
});

riskScore.addEventListener("input", () => {
  riskValue.textContent = riskScore.value;
  riskLabel.textContent = getRiskLabel(Number(riskScore.value));
  updateConsole(getProfile());
});

["investment", "healthInsurance", "termInsurance"].forEach((id) => {
  document.getElementById(id).addEventListener("input", () => updateConsole(getProfile()));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const profile = getProfile();

  if (Number(profile.investment) > Number(profile.income)) {
    stepTwo.classList.add("hidden");
    stepOne.classList.remove("hidden");
    railStepTwo.classList.remove("active");
    validateStepOne();
    return;
  }

  if (!validateStepTwo()) return;

  if (!confirmHighInvestment(profile)) return;

  const allocation = calculateAllocation(profile);
  renderAllocation(allocation, profile);
  renderInsurance(profile);
  updateConsole(profile);

  if (shouldRedirectToInsurance(profile)) {
    document.getElementById("insurance").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  document.getElementById("allocationCard").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    renderFunds(tab.dataset.fund);
  });
});

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-flip-card]");
  if (!trigger) return;

  const card = trigger.closest(".learn-card");
  if (!card) return;

  card.classList.toggle("flipped");
});

renderAllocation({ Equity: 10500, Debt: 7000, Gold: 2500, REITs: 2000, International: 3000 }, getProfile());
renderInsurance(getProfile());
updateConsole(getProfile());
renderFunds();
renderLearningCards();
