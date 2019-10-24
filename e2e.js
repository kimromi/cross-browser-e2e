const webdriver = require('selenium-webdriver');
const { Builder } = webdriver;
const capabilities = require('./createCapabilities');

(async () => {
  const driver = await new Builder().withCapabilities(capabilities).build();
  await driver.get('https://www.youtube.com/');

  driver.quit();
})();
