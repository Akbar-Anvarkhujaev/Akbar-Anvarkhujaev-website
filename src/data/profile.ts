// Homepage and resume content lives here. Projects live in src/content/projects/.
// Text fields support $math$ (LaTeX) and **bold**.

export const profile = {
  name: "Akbar Anvarkhujaev",
  location: "London · Los Angeles",
  intro:
    "Hi, I'm Akbar! I'm a Mathematics and Economics student at UCLA, currently spending a year abroad at the London School of Economics. I'm interested in the intersection of mathematics, economics and technology, particularly in using analytical thinking to solve real-world problems. I'm interested in the intersection of mathematics, economics and technology, and in the occasional idea that sounds slightly ridiculous until you start working on it. ",
  // Shown in this order; the first one is used for the "Email" link in the footer.
  emails: ["a.anvarkhujaev@lse.ac.uk", "akbruin06@g.ucla.edu"],
  linkedin: "https://www.linkedin.com/in/akbar-anvarkhujaev-1b61212ab",
  github: "https://github.com/Akbar-Anvarkhujaev",
  // Drop a PDF at public/cv.pdf and the "CV" button appears automatically.
  cvFile: "cv.pdf",
};

export const publication = {
  title:
    "Provably Accurate Shapley Value Estimation in High Dimensions via Sparse Leverage Sampling",
  authors: [
    "R. Parada",
    "A. Anvarkhujaev",
    "C. Martin",
    "W. Chang",
    "L. Tran-Thanh",
    "N. Phuong Tran",
  ],
  me: "A. Anvarkhujaev",
  venue: "NeurIPS 2026 · Main Track (Poster)",
  url: "https://openreview.net/forum?id=I4HOInnEud",
  // Short version shown on the homepage.
  summary:
    "Shapley values measure how much each input contributes to a model's prediction, but computing them exactly takes exponentially many evaluations. We introduce **Sparse-Leverage SHAP**, a sampling scheme for settings where only a few inputs matter, and prove it reaches relative-error accuracy with $\\widetilde{O}(s^2)$ evaluations, depending on the number of influential inputs $s$ rather than the total number $n$.",
  // Full abstract, shown when the reader expands it.
  abstract:
    "Computing Shapley values exactly requires exponentially many evaluations of a cooperative value function, making approximation essential in high-dimensional applications. Recent leverage-score-based methods yield provably accurate estimators with sample complexity scaling linearly in the number of players, but this can still be too costly when only a small subset of players is truly influential. We study Shapley value estimation under a sparse influence model, where the Shapley vector is supported on an unknown set of size $s \\ll n$. Using the regression characterization of Shapley values, we propose a sparse leverage sampling scheme and analyze it via sparse matrix concentration. Our main result shows that the resulting estimator achieves relative-error approximation with $\\widetilde{O}(s^2)$ value function evaluations, up to logarithmic and accuracy factors, thereby replacing the ambient-dimension dependence of prior guarantees with dependence on the intrinsic support size. Empirically, our method matches or improves over dense Leverage SHAP on sparse synthetic and real-data benchmarks, while exhibiting better numerical stability at small sample sizes.",
  keywords: ["Shapley values", "Explainable AI", "Randomized linear algebra", "Leverage-score sampling", "Sparse recovery"],
};

export type Entry = {
  org: string;
  role: string;
  place: string;
  dates: string;
  points?: string[];
};

export const experience: Entry[] = [
  {
    org: "Ipak Yuli Bank",
    role: "Risk Analyst Intern",
    place: "Tashkent, Uzbekistan",
    dates: "Jun 2026 – Sep 2026",
    points: [
      "Contributed to the bank's ICAAP (Internal Capital Adequacy Assessment Process) framework and integrated risk-management practice.",
      "Improved ICAAP reporting across key risk areas and worked with stakeholders to design new risk metrics.",
      "Developed risk-appetite metrics and helped redesign the risk-appetite framework to support management decision-making.",
    ],
  },
  {
    org: "UCLA Department of Mathematics",
    role: "Undergraduate Research Assistant",
    place: "Los Angeles, CA",
    dates: "Sep 2025 – Jun 2026",
    points: [
      "Co-authored a NeurIPS 2026 main-track paper on Shapley value estimation (see Research).",
      "Developed theoretical and computational approaches that reduce sampling requirements while preserving estimation accuracy.",
      "Applied randomized algorithms, leverage-score sampling and sparse recovery.",
    ],
  },
  {
    org: "European Bank for Reconstruction and Development (EBRD)",
    role: "Credit Analyst Intern",
    place: "Tashkent, Uzbekistan",
    dates: "Jun 2025 – Aug 2025",
    points: [
      "Analysed sustainability-linked loans against green-finance benchmarks.",
      "Built a DCF model to evaluate investment viability.",
      "Modelled cost and energy savings for investments in cold-storage facilities and sustainable cutlery production.",
    ],
  },
];

export const education: Entry[] = [
  {
    org: "London School of Economics and Political Science",
    role: "Study Abroad Year",
    place: "London, UK",
    dates: "Sep 2026 – Jun 2027",
  },
  {
    org: "University of California, Los Angeles",
    role: "B.S. Mathematics/Economics, Specialization in Computing · Minor in Data Science",
    place: "Los Angeles, CA",
    dates: "Sep 2024 – Jun 2028",
    points: ["GPA 3.8/4.0 · Dean's Honors List (3 quarters)"],
  },
  {
    org: "Oxford International College",
    role: "A-levels: Mathematics, Further Mathematics, Economics, Russian",
    place: "Oxford, UK",
    dates: "2022 – 2024",
    points: ["A*A*A*A · Extended Project Qualification: A"],
  },
];

export const awards = [
  { award: "Gold Award", competition: "Singapore and Asian Schools Math Olympiad (SASMO)", date: "May 2021" },
  { award: "Bronze Award", competition: "American Math Olympiad (AMO)", date: "May 2021" },
  { award: "Silver Award", competition: "Singapore and Asian Schools Math Olympiad (SASMO)", date: "May 2019" },
  { award: "Bronze Award", competition: "Hong Kong International Math Olympiad (HKIMO)", date: "May 2019" },
];

// Add relevant courses here (e.g. "Probability Theory"); the line stays hidden while empty.
export const coursework: string[] = [];

export const leadership: Entry[] = [
  {
    org: "International Finance Student Association",
    role: "Treasurer",
    place: "UCLA",
    dates: "Nov 2024 – Jul 2025",
    points: [
      "Led consulting engagements with BNP Paribas, MABA Corporate Services and Picasso Markets.",
      "Co-organised the 2025 Harvard Global Case Competition (200+ teams).",
    ],
  },
  {
    org: "Bruin Dine Sustainability Committee",
    role: "Vice President",
    place: "UCLA",
    dates: "Sep 2025 – Jun 2026",
    points: ["Built a model comparing the carbon footprint of animal-based and plant-based meals."],
  },
  {
    org: "CalTeach Program",
    role: "Volunteer Math Instructor",
    place: "Los Angeles, CA",
    dates: "Jan 2026 – Apr 2026",
  },
];

export const skills = [
  { group: "Programming", items: "Python (NumPy, pandas, SciPy, Matplotlib), R, C++, SQL, TypeScript / React" },
  { group: "Quantitative", items: "Optimisation, statistical modelling, randomized algorithms, backtesting, DCF and credit analysis" },
  { group: "Tools", items: "Git, LaTeX, Jupyter, Excel" },
  { group: "Languages", items: "English (fluent), Russian and Uzbek (bilingual)" },
];

export const interests =
  "Chess, competitive GeoGuessr (top 10 in Uzbekistan), Formula 1, football analytics and film.";
