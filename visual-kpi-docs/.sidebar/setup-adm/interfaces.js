module.exports = {
  type: 'category',
  label: "Interfaces",
  link: {
    type: 'doc',
    id: 'setup-and-administration/interfaces/interfaces',
  },
  items: [
    'setup-and-administration/interfaces/interfaces-core-concepts',
    'setup-and-administration/interfaces/configuration',
    'setup-and-administration/interfaces/available-interfaces',
    'setup-and-administration/interfaces/data-sources',
    {
      type: 'category',
      label: "Working with Interfaces",
      link: {
        type: 'doc',
        id: 'setup-and-administration/interfaces/working-with-interfaces/working-with-interfaces',
      },
      items: [
        'setup-and-administration/interfaces/working-with-interfaces/odbc',
        'setup-and-administration/interfaces/working-with-interfaces/json',
        'setup-and-administration/interfaces/working-with-interfaces/python',
        'setup-and-administration/interfaces/working-with-interfaces/t-store',
        'setup-and-administration/interfaces/working-with-interfaces/parameterizing',
      ],
    },
  ],
};
