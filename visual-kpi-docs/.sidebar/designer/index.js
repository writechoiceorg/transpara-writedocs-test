module.exports = [
  {
    type: 'doc',
    id: 'visual-kpi-design/overview',
    // label: 'How to Use the Documentation',
    // className: '',
  },
  {
    type: 'category',
    label: "Installation and Setup",
    // className: '',
    link: {
      type: 'doc',
      id: 'visual-kpi-design/installation-and-setup/installation',
    },
    items: [
      'visual-kpi-design/installation-and-setup/installation',
      'visual-kpi-design/installation-and-setup/setup-and-connection',
      'visual-kpi-design/installation-and-setup/visual-kpi-designer-ui',
    ],
  },
  {
    type: 'category',
    label: "Authoring",
    // className: '',
    link: {
      type: 'doc',
      id: 'visual-kpi-design/authoring/authoring',
    },
    items: [
      'visual-kpi-design/authoring/default-settings',
      'visual-kpi-design/authoring/manage-objects',
    ],
  },
  {
    type: 'category',
    label: "Design",
    // className: '',
    link: {
      type: 'doc',
      id: 'visual-kpi-design/design/design',
    },
    items: [
      'visual-kpi-design/design/create-a-kpi',
      'visual-kpi-design/design/create-an-spc',
      'visual-kpi-design/design/create-a-chart',
      'visual-kpi-design/design/create-a-trend',
      'visual-kpi-design/design/create-a-table',
      'visual-kpi-design/design/create-a-group',
      'visual-kpi-design/design/create-navbar-links',
      'visual-kpi-design/design/target-and-limit-generator',
    ],
  },
  {
    type: 'doc',
    id: 'visual-kpi-design/best-practices',
    // label: 'How to Use the Documentation',
    // className: '',
  }
]