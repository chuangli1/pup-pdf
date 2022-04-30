import { Page } from "puppeteer";
import { openSite,openBrowser,closeBrowser } from "./pup-base";
/**
 * 将指定网页保存到指定位置
 * @param browser? 浏览器对象
 * @param url 要打印的网址
 * @param path 保存的位置
 */
export const exportPdf =async (url:string,path:string)=>{
    const cl = (page:Page)=>{
        page.pdf({
            path:path
        })
    }
    await openSite(url,cl);
}
export default {
    exportPdf
}