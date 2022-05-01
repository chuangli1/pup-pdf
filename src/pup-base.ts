import { Page } from "puppeteer";
import { initPP } from ".";

const puppeteer = require('puppeteer');

/**
 * 打开浏览器
 * @returns 返回打开的浏览器
 */
export const openBrowser = async ()=>{
    return await puppeteer.launch();
}
/**
 * 关闭浏览器
 * @param browser 要关闭的浏览器
 */
export const closeBrowser = async (browser?:any)=>{
    await initPP.browser?.close()
    await browser?.close();
}
/**
 * 打开浏览器的一个新页面
 * @returns 返回一个新页面
 */
export const openNewPage = async ()=>{
    const browser = initPP.browser?initPP.browser: await openBrowser()
    return await browser.newPage();
}

/**
 * @description 打开指定的网址
 * @param browser 浏览器对象
 * @param url 要打开的网址
 * @param callback 打开网址后执行的行为,其参数为Page类型，和一个Browser，需要为一个async函数
 */
export const openSite = async (url:string,callback:any,data?:any) => {
    const browser = initPP.browser?initPP.browser: await openBrowser()
    const flag = initPP.browser?0: 1
    const page = await browser.newPage();
    const option = {
        waitUntil: 'networkidle0'
    }
    await page.goto(url,option);
    callback&&await callback(page,data);
    if(flag) closeBrowser(browser);
};