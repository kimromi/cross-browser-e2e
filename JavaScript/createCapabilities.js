const webdriver = require('selenium-webdriver');

let capabilities;
if (process.env.BROWSER === 'chrome') {
  require("chromedriver");
  capabilities = webdriver.Capabilities.chrome();
  capabilities.set('chromeOptions', {
    args: [
      '--headless',
      '--no-sandbox',
      '--disable-gpu',
      '--window-size=1980,1200'
    ],
  });
} else if (process.env.BROWSER === 'safari') {
  capabilities = webdriver.Capabilities.safari();
}

module.exports = capabilities;
