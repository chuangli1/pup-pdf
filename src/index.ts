import * as pup from './pup-base'
import * as pdf from './pdf-process'
import * as file from './file-process'
export const initPP:any = {
    browser: null
}
const init = async ()=>{
    const browser = await pup.openBrowser();
    initPP.browser = browser;
}
export default {
    init,
    pup,
    pdf,
    file
}