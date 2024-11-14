const installation = require('./installation');
const interfaces = require('./interfaces');
const automation = require('./automation');
const security = require('./security');

module.exports = [
  {
    type: 'doc',
    id: 'setup-and-administration/overview',
  },
  installation,
  interfaces,
  automation,
  security,
  /*{
    type: 'doc',
    id: 'setup-and-administration/best-practices',
  },*/
];
