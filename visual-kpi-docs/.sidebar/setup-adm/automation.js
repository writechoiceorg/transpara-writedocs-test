module.exports = {
  type: 'category',
  label: "Automation",
  link: {
    type: 'doc',
    id: 'setup-and-administration/automation/automation',
  },
  items: [
    'setup-and-administration/automation/rcs',
    
    {
      type: 'category',
      label: "RCS Configuration",
      link: {
        type: 'doc',
        id: 'setup-and-administration/automation/configuration/rcs-configuration',
      },
      items: [
        'setup-and-administration/automation/configuration/rcs-with-af-databases',
        'setup-and-administration/automation/configuration/rcs-with-sql-databases',
      ],
    },
    'setup-and-administration/automation/configuration/rcs-sql-tutorial',
    // 'setup-and-administration/automation/rcs-and-visual-kpi-design',
    // 'setup-and-administration/automation/use-cases',
  ],
};
