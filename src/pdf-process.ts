import { getDomSelector } from './dom';
import { Page } from "puppeteer";
import { openSite,openBrowser,closeBrowser,openNewPage } from "./pup-base";
/**
 * 将指定网页保存到指定位置
 * @param browser? 浏览器对象
 * @param url 要打印的网址
 * @param path 保存的位置
 */
export const exportPdfUrl =async (url:string,path:string)=>{
    const cl = async (page:Page)=>{
        await page.pdf({
            path:path
        });
        page.close()
    }
    await openSite(url,cl);
}
/**
 * 
 * @param content 想要转化成pdf的文字内容
 * @param path 保存的路径
 */
export const exportPdfContent = async (content:string,path:string)=>{
    const page:Page = await openNewPage();
    await page.setContent(content);
    await page.emulateMediaType('screen')
    await page.screenshot({path: 'screenshot.png'});
    await page.pdf({
        path:path
    });
    page.close()
}
export const exportPdfSelector = async (url:string, selector:string, path:string)=>{
    const cl = async (page:Page)=>{
        getDomSelector(page,selector)
        await page.pdf({
            path:path
        });
        await page.screenshot({path:'test.png'})
        page.close()
    }
    await openSite(url,cl);

}