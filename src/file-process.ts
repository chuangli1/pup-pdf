
const fs = require('fs');
/**
 * 同步将内容写入文件
 * @param path 
 * @param content 
 */
export const writeFile = (path:string,content:string)=>{
    fs.writeFileSync(path,content);
}
export const readFile = (path:string)=>{

}
/**
 * 同步创建目录
 * @param path 
 */
export const createDir = (path:string)=>{
    fs.mkdirSync(path,{recursive:true})
    try{
        fs.accessSync(path)
    }
    catch{
        fs.mkdirSync(path)
    }
}
export interface OptionStringObject{
    key: string,
    otherKey: Array<any>
}

/**
 * 将字符串数组转化为对象数组字符串，用于写入文件
 * @param s 字符串数组，可以将其转化为对象数组
 * @param option 转化的格式，可以给字符串加key,或者附加其他key,value,re1,re[], 后两个re为将value中的re1值替换为re[i]
 * @returns 一个字符串
 */
export const stringObject = (s:string[],option:OptionStringObject):string=>{
    let content:any = [];
    let index = 0;
    s.forEach(value=>{
        if(option.otherKey.length===0){
            content.push( 
    `{
        ${option.key}:'${value}'
    }`)
        }
        else{
            let temp = [];
            for(let v of option.otherKey){
                temp.push(`${v[0]}:'${v[1].replace(v[2],v[3][index])}'`);
                index++;
            }

            content.push(
    `{
        ${option.key}:'${value}',
        ${temp.join(',')}
    }`)
        }
    })
    return`
[
    ${content.join(',')}
]`;
}
export default {
    writeFile,
    readFile,
    stringObject,
    createDir
}