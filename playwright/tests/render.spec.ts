import { expect, test } from "@playwright/test";

test("the homepage successfully loads", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page.getByTestId("greeting")).toBeVisible();
});
