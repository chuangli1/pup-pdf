import { ElementHandle, Page } from 'puppeteer';
import { openSite } from './pup-base';
/**
 * 将整个页面保留的只剩下selector节点
 * @param page 页面
 * @param selector 保留的Dom节点
 */
export const getDomSelector = async (page:Page, selector:string)=>{
   console.log(await page.evaluate((selector)=>{
        const doms:any = document.querySelectorAll(selector);
        const body = document.createElement('body');
        for(let dom of doms){
            body.appendChild(dom)
        }
        document.body = body
    },selector))
}