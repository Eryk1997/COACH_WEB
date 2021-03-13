const {describe, it, before, after} = require('mocha');
const expect = require('chai').expect;
const {Eyes} = require('eyes.selenium');
const path = require('path');
const express = require('express');
const webdriver = require('selenium-webdriver');
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
require('chromedriver');

const {By, until} = webdriver

describe('test logowania', function () {
  let driver;

  this.timeout(60000);

  before(async () => {
    driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build();
      await driver.get('http://localhost:3000');
      await delay(3000);
      driver.manage().window().maximize();
  });
 after(async () =>  driver.quit());
  
  it('Test Nie ma takiego konta lub złe hasło', async function () {
   await driver.findElement(By.linkText("Logowanie")).click();
   await delay(3000);

   await driver.findElement(By.id("email")).sendKeys("testEmail@test.pl");
   await delay(3000);

   await driver.findElement(By.id("password")).sendKeys("testPassword");
   await delay(3000);

   await driver.findElement(By.id("buttonLogin")).click();
   await delay(3000);

   const alerttext = await driver.switchTo().alert().getText();
   expect(alerttext).to.equal("Nie ma takiego konta lub złe hasło");

   await driver.switchTo().alert().accept();   
  });

  it('Test komunikatów błędów', async function () {
    await driver.findElement(By.linkText("Logowanie")).click();
    await delay(3000);

    await driver.findElement(By.id("buttonLogin")).click();
    await delay(3000);

    let texterror = await driver.findElement(By.id("errorEmail")).getText();
    expect(texterror).to.equal("Uzupełnij email użytkownika");

    texterror = await driver.findElement(By.id("errorPassword")).getText();
    expect(texterror).to.equal("Uzupełnij hasło");
   
   });
});