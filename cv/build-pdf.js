// Regenerates cv/Joshua-Meeks-CV.pdf from cv/cv-source.html.
// Run from the repository root:  node cv/build-pdf.js
// Needs Playwright with Chromium (pre-installed in Claude Code cloud sessions).
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const src = path.resolve(__dirname, 'cv-source.html');
  const out = path.resolve(__dirname, 'Joshua-Meeks-CV.pdf');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + src);
  await page.pdf({
    path: out,
    format: 'Letter',
    preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate:
      '<div style="width:100%;font-size:8pt;color:#667;text-align:center;font-family:serif">' +
      'Joshua Meeks · CV · <span class="pageNumber"></span> of <span class="totalPages"></span></div>',
  });
  await browser.close();
  console.log('Wrote ' + out);
})();
