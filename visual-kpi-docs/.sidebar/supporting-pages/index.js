const faqs = require('./faqs');
const faqsPdf = require('./faqs-pdf');

module.exports = [
  faqs,
  faqsPdf,
  {
    type: 'doc',
    id: 'supporting-pages/troubleshooting',
    label: 'Troubleshooting',
  },
  {
    type: 'doc',
    id: 'supporting-pages/training',
    label: 'Training',
  },
  {
    type: 'doc',
    id: 'supporting-pages/glossary',
    label: 'Glossary',
  }
];
