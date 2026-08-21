export const branches = [
  {
    id: 'data',
    label: 'Data',
    color: 'teal',
    nodes: [
      { name: 'Raw Data', uses: ['Source of truth', 'Structured & unstructured'] },
      { name: 'CSV / Excel', uses: ['Quick exploration', 'Ad-hoc reporting'] },
      { name: 'APIs', uses: ['Live data pulls', 'Third-party integration'] },
      { name: 'Databases', uses: ['Persistent storage', 'Query-ready structure'] },
    ],
  },
  {
    id: 'engineering',
    label: 'Engineering',
    color: 'indigo',
    nodes: [
      { name: 'Data Cleaning', uses: ['Handling nulls & duplicates', 'Standardizing formats'] },
      { name: 'ETL', uses: ['Extract, transform, load', 'Pipeline automation'] },
      { name: 'Data Modeling', uses: ['Star schema design', 'Query performance'] },
      {
        name: 'PostgreSQL',
        uses: ['Data Storage', 'ETL', 'SQL Analysis', 'Data Modeling'],
      },
      { name: 'SQL', uses: ['Aggregation & joins', 'Ad-hoc analysis'] },
    ],
  },
  {
    id: 'analytics',
    label: 'Analytics',
    color: 'amber',
    nodes: [
      {
        name: 'Python',
        uses: ['Data Cleaning', 'Analysis', 'Machine Learning', 'Automation'],
      },
      { name: 'Statistics', uses: ['Hypothesis testing', 'Trend validation'] },
      { name: 'Machine Learning', uses: ['Health/risk scoring', 'Predictive modeling'] },
      { name: 'Exploratory Analysis', uses: ['Pattern discovery', 'Feature understanding'] },
    ],
  },
  {
    id: 'visualization',
    label: 'Visualization',
    color: 'teal',
    nodes: [
      {
        name: 'Power BI',
        uses: ['Dashboards', 'KPI Tracking', 'Business Intelligence', 'Decision Support'],
      },
      { name: 'Tableau', uses: ['Interactive dashboards', 'Genre & trend visuals'] },
      { name: 'Excel', uses: ['Quick dashboards', 'Stakeholder-friendly views'] },
      { name: 'Data Storytelling', uses: ['Framing the narrative', 'Recommendation-ready visuals'] },
    ],
  },
  {
    id: 'business',
    label: 'Business',
    color: 'indigo',
    nodes: [
      { name: 'Insights', uses: ['What the data actually says'] },
      { name: 'Recommendations', uses: ['What to do next'] },
      { name: 'Decision Making', uses: ['Turning analysis into action'] },
      { name: 'Business Impact', uses: ['Where the value lands'] },
    ],
  },
];
