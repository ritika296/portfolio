export const projects = [
  {
    id: 'financial-analytics-platform',
    title: 'Financial Analytics Platform',
    subtitle: 'Company Performance & Health Scoring',
    featured: true,
    theme: 'finance',
    description:
      'An end-to-end financial analytics platform built during my time at Bluestock \u2014 combining ETL pipelines, a Django web application and Power BI dashboards to evaluate company performance.',
    problem:
      'Evaluating a company\u2019s financial health means pulling numbers from scattered financial statements and computing ratios by hand \u2014 slow, error-prone, and hard to compare across companies.',
    approach:
      'Built ETL pipelines in Python to clean, transform and load financial datasets into a centralized PostgreSQL database. Calculated core financial ratios (ROE, ROCE, EPS, debt-to-equity, profit margin, cash flow) and layered a Django web app on top with Company Search, a Stock Screener, Company Comparison and REST APIs, alongside Power BI dashboards for company and sector-level views.',
    analysis: [
      'Financial ratio analysis \u2014 ROE, ROCE, EPS, Debt-to-Equity, Profit Margin, Cash Flow',
      'Company Search, Stock Screener & Company Comparison tooling',
      'Sector-wise performance dashboards in Power BI',
      'ML-based company health scoring',
    ],
    tools: ['Python', 'PostgreSQL', 'Django', 'Django REST Framework', 'SQL', 'Power BI', 'Pandas', 'NumPy', 'Scikit-learn'],
    github: '',
    demo: '',
  },
  {
    id: 'pizza-sales-analytics',
    title: 'Pizza Sales Analytics',
    subtitle: 'SQL-Driven Restaurant Performance',
    theme: 'sql',
    description:
      'A SQL-driven analysis of pizza sales data to surface the patterns that matter for restaurant operations.',
    problem:
      'Restaurant management needed a clear read on what sells, when, and how to staff and stock accordingly.',
    approach:
      'Queried and analyzed sales data in SQL to identify top-selling pizzas, busiest hours and broader sales trends, turning the findings into insights for strategic restaurant management.',
    analysis: ['Top-selling products', 'Peak sales hours', 'Sales trend analysis'],
    tools: ['SQL'],
    github: '',
    demo: '',
  },
  {
    id: 'coffee-shop-sales-analyzer',
    title: 'Coffee Shop Sales Analyzer',
    subtitle: 'Excel-Driven Business Optimization',
    theme: 'excel',
    description:
      'An interactive Excel dashboard analyzing coffee shop sales to guide staffing, marketing and inventory decisions.',
    problem:
      'A coffee shop needed to understand its sales patterns \u2014 peak hours, top products \u2014 to plan staffing and inventory better.',
    approach:
      'Built an interactive Excel dashboard covering sales trends, peak hours and top products, translating the findings into recommendations for staffing, marketing and inventory optimization.',
    analysis: ['Sales trend identification', 'Peak hour analysis', 'Top product ranking'],
    tools: ['Excel'],
    github: '',
    demo: '',
  },
  {
    id: 'cricket-dream-team-analyzer',
    title: 'Cricket Dream Team Analyzer',
    subtitle: 'Data-Driven T20 Squad Selection',
    theme: 'sport',
    description:
      'An end-to-end analytics project that scrapes player data and selects the statistically strongest T20 squad.',
    problem: 'Picking a "Best 11" T20 squad from raw player statistics is a judgment call \u2014 this project made it a data-driven one.',
    approach:
      'Scraped player data, pre-processed it with Python, and built an interactive Power BI dashboard to analyze player performance and surface the best-performing eleven.',
    analysis: ['Data scraping', 'Python preprocessing', 'Player performance analysis', 'Best 11 selection'],
    tools: ['Python', 'Power BI', 'Web Scraping'],
    github: '',
    demo: '',
  },
  {
    id: 'netflix-content-analysis',
    title: 'Netflix Content Analysis',
    subtitle: 'Interactive Tableau Dashboard',
    theme: 'entertainment',
    description:
      "A Tableau dashboard analyzing Netflix's content library using a Kaggle dataset.",
    problem: "Understanding what dominates Netflix's catalog \u2014 by genre and by year \u2014 at a glance.",
    approach:
      'Built an interactive Tableau dashboard featuring genre-based lists, yearly content trends and top-genre visualizations.',
    analysis: ['Genre-based content breakdown', 'Yearly content trends', 'Top genre visualization'],
    tools: ['Tableau'],
    github: '',
    demo: '',
  },
];
