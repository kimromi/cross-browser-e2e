const webdriver = require('selenium-webdriver');
const path = require('path');

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
} else if (process.env.BROWSER === 'ie') {
  // HACK: include IEDriver path by nuget
  const driverPath = path.join(
    __dirname,
    "../Selenium.WebDriver.IEDriver.3.150.0/driver/"
  );
  process.env.PATH = `${process.env.PATH};${driverPath};`;
  capabilities = webdriver.Capabilities.ie();
  capabilities.set("ignoreProtectedModeSettings", true);
  capabilities.set("ignoreZoomSetting", true);
}

module.exports = capabilities;
