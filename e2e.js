const webdriver = require('selenium-webdriver');
const { Builder } = webdriver;

require("chromedriver");
const capabilities = webdriver.Capabilities.chrome();
capabilities.set('chromeOptions', {
  args: [
    '--headless',
    '--no-sandbox',
    '--disable-gpu',
    '--window-size=1980,1200'
  ],
});

(async () => {
  const driver = await new Builder().withCapabilities(capabilities).build();
  await driver.get('https://www.youtube.com/');

  driver.quit();
})();
