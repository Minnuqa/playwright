const { test, expect } = require('@playwright/test');

test('Submit request a demo form', async ({ page }) => {
    await page.goto('https://www.stackadapt.com/display-advertising');
    await page.locator('#first_name').fill('Test');
    await page.locator('#last_name').fill('user');
    await page.locator('#email').fill('testuser@test.com');
    await page.locator('#phone').fill('2042342323');
    await page.locator('#company_name').fill('Stackadapt');
    await page.locator('#job_title').fill('Project creator');
    await page.locator('#company_type').selectOption('Brand');
    await page.locator('#company_size').selectOption('10 to 100');
    await page.locator('#country').selectOption('United States');
    await page.getByRole('combobox', { name: 'State' }).selectOption('Colorado');
    await page.locator('#budget').selectOption('Less than $100,000');
    await page.locator('#intention').selectOption('Run campaigns in StackAdapt');
    await page.locator('text = Submit').click();
})