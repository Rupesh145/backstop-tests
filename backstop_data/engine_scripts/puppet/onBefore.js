module.exports = async (page, scenario, vp) => {
  // Navigate to login page
  await page.goto(scenario.url, { waitUntil: 'networkidle2' });

  // Make sure username field is present and focus it
  await page.waitForSelector('[data-login-input="username"]', { visible: true });
  await page.click('[data-login-input="username"]');
  await page.type('[data-login-input="username"]', '1000@anda');

  // Password field
  await page.waitForSelector('[data-login-input="password"]', { visible: true });
  await page.click('[data-login-input="password"]');
  await page.type('[data-login-input="password"]', 'password');

  // Ensure button is visible and interactable
  await page.waitForSelector('button[data-signin-button="sign-in"]', { visible: true });

  // Click the sign-in button and wait for navigation
  await Promise.all([
    page.click('button[data-signin-button="sign-in"]'),
    page.waitForNavigation({ waitUntil: 'networkidle2' })
  ]);

  console.log('✅ Logged in and ready for screenshot.');
};

