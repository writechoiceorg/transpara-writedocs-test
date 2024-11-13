module.exports = [
  {
    type: 'doc',
    id: 'visual-kpi-designer/overview',
    // label: 'How to Use the Documentation',
    // className: '',
  },
  {
    type: 'category',
    label: "Installation and Setup",
    // className: '',
    link: {
      type: 'doc',
      id: 'visual-kpi-designer/installation-and-setup/overview',
    },
    items: [
      'visual-kpi-designer/installation-and-setup/installation',
      'visual-kpi-designer/installation-and-setup/connecting',
      'visual-kpi-designer/installation-and-setup/basic-setup',
    ],
  },
  {
    type: 'doc',
    id: 'visual-kpi-designer/ui-tour',
  },
  {
    type: 'category',
    label: "Settings",
    // className: '',
    link: {
      type: 'doc',
      id: 'visual-kpi-designer/settings/overview',
    },
    items: [
      'visual-kpi-designer/settings/profiles-dashboards',
      'visual-kpi-designer/settings/ranges-dates',
      'visual-kpi-designer/settings/contacts-alerts',
      'visual-kpi-designer/settings/features-config',
      'visual-kpi-designer/settings/advanced',
    ],
  },
  {
    type: 'category',
    label: "Authoring",
    // className: '',
    link: {
      type: 'doc',
      id: 'visual-kpi-designer/authoring/overview',
    },
    items: [

      {
        type: 'category',
        label: "Groups",
         //className: '',
        link: {
          type: 'doc',
          id: 'visual-kpi-designer/authoring/groups/groups',
        },
        items: [
          'visual-kpi-designer/authoring/groups/query-builder',
          'visual-kpi-designer/authoring/groups/group-maps',
        ],
      },

        {
          type: 'category',
          label: "KPIs",
           //className: '',
          link: {
            type: 'doc',
            id: 'visual-kpi-designer/authoring/kpis/kpis',
          },
          items: [
            'visual-kpi-designer/authoring/kpis/kpis-sources',
            'visual-kpi-designer/authoring/kpis/spc-kpis',
            'visual-kpi-designer/authoring/kpis/kpis-trends',
          ],
        },

        {
          type: 'category',
          label: "Charts",
           //className: '',
          link: {
            type: 'doc',
            id: 'visual-kpi-designer/authoring/charts/charts',
          },
          items: [
            'visual-kpi-designer/authoring/charts/bar-chart',
            'visual-kpi-designer/authoring/charts/gantt-chart',
            'visual-kpi-designer/authoring/charts/pareto-chart',
            'visual-kpi-designer/authoring/charts/pie-chart',
            'visual-kpi-designer/authoring/charts/xy-plots',
            'visual-kpi-designer/authoring/charts/box-plots',
            'visual-kpi-designer/authoring/charts/query-based-chart',
          ],
        },

        'visual-kpi-designer/authoring/tables',
        'visual-kpi-designer/authoring/trends',
        
    ],
  },
    {
    type: 'doc',
    id: 'visual-kpi-designer/best-practices',
    label: 'Best Practices',
    //className: '',
    },
    {
      type: 'doc',
      id: 'visual-kpi-designer/additional-features',
      label: 'Additional Features',
      //className: '',
      },
  // {
  //   type: 'category',
  //   label: "Reference Tables",
  //   // className: '',
  //   link: {
  //     type: 'doc',
  //     id: 'visual-kpi-designer/reference-tables',
  //   },
  //   items: [
  //     'visual-kpi-designer/reference-tables/website-reference',
  //     'visual-kpi-designer/reference-tables/profiles-dashboards-reference',
  //     'visual-kpi-designer/reference-tables/ranges-dates-reference',
  //     'visual-kpi-designer/reference-tables/contacts-alerts-reference',
  //     'visual-kpi-designer/reference-tables/features-configuration-reference',
  //     'visual-kpi-designer/reference-tables/advanced-reference',
  //     'visual-kpi-designer/reference-tables/groups-reference',
  //     'visual-kpi-designer/reference-tables/kpis-reference',
  //     'visual-kpi-designer/reference-tables/charts-reference',
  //     'visual-kpi-designer/reference-tables/tables-reference',
  //     'visual-kpi-designer/reference-tables/functions-reference',
  //   ],
  // },
]