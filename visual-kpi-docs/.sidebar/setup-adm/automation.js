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
    {
      type: 'category',
      label: "Reference",
      items: [
        {
          type: 'category',
          label: "AF Database Keywords",
          items: [
            'setup-and-administration/automation/reference/af-database-keywords/kpi-keywords',
            'setup-and-administration/automation/reference/af-database-keywords/trend-keywords',
            'setup-and-administration/automation/reference/af-database-keywords/table-keywords',
            'setup-and-administration/automation/reference/af-database-keywords/group-keywords',
            'setup-and-administration/automation/reference/af-database-keywords/value-keywords',
          ],
        },
        {
          type: 'category',
          label: "SQL Database Keywords",
          items: [
            'setup-and-administration/automation/reference/sql-database-keywords/kpi-keywords',
            'setup-and-administration/automation/reference/sql-database-keywords/table-keywords',
            'setup-and-administration/automation/reference/sql-database-keywords/group-keywords',
            'setup-and-administration/automation/reference/sql-database-keywords/charts-keywords',
          ],
        },
      ],
    },
  ],
};
