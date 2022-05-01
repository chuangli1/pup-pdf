# pup-pdf
基于puppeteer的网页爬虫工具，可以将指定的网页内容转化为pdf文件或者html网页

### Install
```
git clone git@github.com:chuangli1/pup-pdf.git
```

### Use
```
import pp from './pup-pdf/index'
const callback = (page)=>{
    await pp.pdf.exportPdfSelector('https://www.baidu.com','p','./test.pdf');//将百度网页中所有的'p'提取为PDF
}
const test = aysnc ()=>{
    await pp.init(); //必须运行,初始化浏览器相关
    await pp.pup.openSite('http://data.biancheng.net/', callback); //打开一个网页，并在打开网页后执行callback函数
}
test().then(()=>{
    pp.closeBrowser(); //执行完成任务，关闭浏览器
})

```

### API
以下所有的API均为异步（备注除外）

#### pup命名空间
|  API            |       功能  |
|  ------------    | -----------    |
|init| 初始化，应在所有程序开始之前运行|
| openSite     |    打开一个网页，并可在打开网页后执行指定内容|
|  openBrowser | 打开浏览器 |
|closeBrowser| 关闭浏览器|

#### pdf命名空间
|  API            |       功能  |
|  ------------    | -----------    |
|exportPdfUrl| 打开一个网页并将其内容导出为PDF|
|exportPdfContent| 将自行组装的网页导出为PDF|
|exportPdfSelector| 将一个网页的指定DOM到处为PDF|
#### dom命名空间
|  API            |       功能  |
|  ------------    | -----------    |
|getDomSelector| 改造一个网页，将网页内容改造到只剩下seletor的内容|
#### file命名空间
|  API            |       功能  | 备注|
|  ------------    | -----------    | ----- |
|writeFile|读取文件| 同步函数|
|createDir|创建文件夹|同步函数|
|stringObject|将字符串数组转化为对象字符串，用于写入js文件|同步函数|




