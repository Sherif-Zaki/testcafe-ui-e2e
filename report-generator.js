const report = require('multiple-cucumber-html-reporter');
const path = require('path');

const projectName = path.basename(__dirname);
const reportGenerationTime = new Date().toISOString();
report.generate({
  reportName: 'TestCafe Report for PriceHubble',
  jsonDir: 'cucumber-json-reports',
  reportPath: 'reports',
  openReportInBrowser: true,
  disableLog: true,
  displayDuration: true,
  durationInMS: true,
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: `${projectName}` },
      { label: 'Report Generation Time', value: `${reportGenerationTime}` },
    ],
  },
});
