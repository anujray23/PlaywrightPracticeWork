import test from '../testFixtures/fixture'
import { expect } from '@playwright/test'
import fs from 'fs'
import { username, password, loginButton } from '../pageobjects/loginPage'
import {
	twitterLink,
	facebookLink,
	linkedInLink
} from '../pageobjects/productsPage'
const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

import {
	baseUrl,
	title,
	landingPageUrl,
	sauceLabsTitle,
	sauceLabsUrl,
	onesie,
	fleeceJacket,
	twitterTitle,
	twitterUrl,
	facebookTitle,
	facebookUrl,
	linkedInTitle,
	linkedInUrl
} from '../config'

test.describe.parallel(
	'@smoke: Login as a standard user to verify the products page and logout from the application',
	() => {
		test('Login to App as a standard user', async ({
			loginPage,
			productsPage
		}) => {
			await test.step(`Open the APP and check logo`, async () => {
				await loginPage.openApp()
				await loginPage.loginPageLogo()
				expect(await loginPage.getTitle()).toBe(title)
				expect(await loginPage.getUrl()).toContain(baseUrl)
			})

			await test.step(
				`Verify username and password fields are visible on login page`,
				async () => {
					await loginPage.usernameFieldVisible()
					await loginPage.passwordFieldVisible()
				}
			)

			await test.step(
				`Verify Login button is enabled and bot image is visible`,
				async () => {
					await loginPage.loginButtonIsEnabled()
				}
			)

			await test.step(
				`Verify Login and password credentials are visible at the bottom of login page`,
				async () => {
					await loginPage.loginCredentialsVisible()
					await loginPage.passwordCredentialsVisible()
				}
			)

			await test.step(`Login as a Standard user`, async () => {
				await loginPage.loginAsStandardUser()
			})

			await test.step(
				`Verify the products page shopping cart icon and product sort container visible `,
				async () => {
					await productsPage.shoppingCartLink()
					await productsPage.productSortContainerVisible()
				}
			)

			await test.step(
				`Verify the products page sidebar links visible and click on About link to check user is navigated to saucelabs page`,
				async () => {
					await productsPage.burgerButtonVisible()
					await productsPage.burgerButtonClick()
					await productsPage.allItemsSideBarLink()
					// await productsPage.aboutSideBarLink()
					await productsPage.logoutSideBarLink()
					await productsPage.resetSideBarLink()
					await productsPage.burgerCrossButtonVisible()
					await productsPage.burgerCrossButtonClick()
				}
			)

			await test.step(
				`Verify Inventory container and the inventory list is visible`,
				async () => {
					await productsPage.inventoryContainerVisible()
					await productsPage.backPackItem()
					await productsPage.boltTshirtItem()
					await productsPage.onesieItem()
					await productsPage.bikeLightItem()
					await productsPage.fleeceJacketItem()
					await productsPage.tshirtRedItem()
				}
			)

			await test.step(
				`Select the product sort container option as “Price (low to high) and verify the list sorted order`,
				async () => {
					await productsPage.selectLowToHighFromDropDown()
					const firstItem = await productsPage.getFirstItemFromInventory()
					expect(firstItem).toContain(onesie)
					const lastItem = await productsPage.getLastItemFromInventory()
					expect(lastItem).toContain(fleeceJacket)
				}
			)

			await test.step(
				`Verify the footer text+swag bot footer+social channel links are visible`,
				async () => {
					await productsPage.footerTextVisible()
					await productsPage.socialChannelLinksVisible()
				}
			)

			await test.step(
				`Standard user logout from the application and verify the login page`,
				async () => {
					await productsPage.burgerButtonVisible()
					await productsPage.burgerButtonClick()
					await productsPage.clickLogoutSideBarLink()
					await loginPage.loginPageLogo()
					await loginPage.usernameFieldVisible()
					await loginPage.passwordFieldVisible()
					await loginPage.loginButtonIsEnabled()
					await loginPage.loginCredentialsVisible()
					await loginPage.passwordCredentialsVisible()
					expect(await loginPage.getTitle()).toBe(title)
					expect(await loginPage.getUrl()).toContain(baseUrl)
				}
			)
		})

		test('Click on the "About" side nav bar link to check whether user is navigated to sauce labs page', async ({
			loginPage,
			productsPage
		}) => {
			await test.step(
				`Verify the products page shopping cart icon and product sort container visible `,
				async () => {
					await loginPage.openApp()
					await loginPage.loginAsStandardUser()
					// await productsPage.burgerButtonClick()
					// await productsPage.clickAboutSideBarLink()
					// expect(await productsPage.getTitle()).toBe(sauceLabsTitle)
					// expect(await productsPage.getUrl()).toContain(sauceLabsUrl)
				}
			)
		})
	}
)

test.describe.serial('Verify All Social Channel Links', () => {
	test('Click on Facebook link and check whether user is navigated to Facebook page', async ({
		browser
	}) => {
		const context = await browser.newContext()
		const page = await context.newPage()

		await page.goto(baseUrl)
		await page.fill(username, testData.standard_user)
		await page.fill(password, testData.password)
		await page.click(loginButton)

		const link = page.locator(facebookLink)
		const [newPage] = await Promise.all([
			context.waitForEvent('page'),
			await link.click()
		])
		await newPage.waitForLoadState('networkidle')
		expect(await newPage.title()).toContain(facebookTitle)
		expect(newPage.url()).toBe(facebookUrl)
	})

	test('Click on LinkedIn link and check whether user is navigated to LinkedIn page', async ({
		browser
	}) => {
		const context = await browser.newContext()
		const page = await context.newPage()

		await page.goto(baseUrl)
		await page.fill(username, testData.standard_user)
		await page.fill(password, testData.password)
		await page.click(loginButton)

		const link = page.locator(linkedInLink)
		const [newPage] = await Promise.all([
			context.waitForEvent('page'),
			await link.click()
		])
		await newPage.waitForLoadState('networkidle')
		expect(await newPage.title()).toContain(linkedInTitle)
		expect(newPage.url()).toContain(linkedInUrl)
	})

	test('Click on Twitter link and check whether user is navigated to twitter page', async ({
		browser
	}) => {
		const context = await browser.newContext()
		const page = await context.newPage()

		await page.goto(baseUrl)
		await page.fill(username, testData.standard_user)
		await page.fill(password, testData.password)
		await page.click(loginButton)

		const link = page.locator(twitterLink)
		const [newPage] = await Promise.all([
			context.waitForEvent('page'),
			await link.click()
		])
		await newPage.waitForLoadState('domcontentloaded')
		await newPage.waitForLoadState('networkidle')
		expect(newPage.url()).toBe(twitterUrl)
	})
})