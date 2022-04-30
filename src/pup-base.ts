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
 * @description 打开指定的网址
 * @param browser 浏览器对象
 * @param url 要打开的网址
 * @param callback 打开网址后执行的行为,其参数为Page类型，和一个Browser，需要为一个async函数
 */
const openSite = async (url:string,callback:any) => {
    const browser = initPP.browser?initPP.browser: await openBrowser()
    const flag = initPP.browser?0: 1
    const page = await browser.newPage();
    await page.goto(url);
    callback&&await callback(page,browser);
    if(flag) closeBrowser(browser);
};

const setPage = (page:Page, content: string)=>{
    page.setContent(content)
}

const exportPdf = (page:Page, option: {})=>{

}
export {
    openSite

}
export default {
    openSite,
    openBrowser,
    closeBrowser
}