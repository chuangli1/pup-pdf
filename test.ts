import pp, {pup,pdf,file as fileP} from './index'
import { Page } from "puppeteer";
import sites from './name'
import * as path from 'path'
const callback = async (page:Page,browser:any)=>{
    const content:any = await  page.$$eval('#contents-detail>dl',(el:any)=>el.map((el:any)=>el.innerText));
    const fileString:string[] = [];
    let index = 0;
    content.forEach((c:string)=>{
        const re:any = ['0'];
        const ob = c.split('\n');
        let base = [153,157,169,175,181,23,200,48,53,65,76,206]
        for(let i=0; i<ob.length; i++){
            re.push((base[index]+i)+'');
        }
        index++;
        fileString.push(fileP.stringObject(ob,{key:'title',otherKey:[['url','http://data.biancheng.net/view/46.html','46',re]]}))
    })
    const s = 
`export default [
        ${fileString.join(',')}
]`
    fileP.writeFile('./name.ts',s);
    let name = 1
    for (let s of sites){
        console.log(s[0])
       for (let site of s){
            const pathR = `./pdf/${name}+`
            fileP.createDir(path.resolve(__dirname,pathR))
            await pdf.exportPdf(site.url,`${pathR}/${site.title}.pdf`);
       }
       name++;
    }
}
const index = async ()=>{
    await pp.init()
    await pup.openSite('http://data.biancheng.net/', callback);
}
index().then(()=>{
    pup.closeBrowser()
})

