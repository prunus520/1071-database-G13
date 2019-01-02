# 1071-database-G13
# [寫 code & 上傳 github 注意事項](https://github.com/toumei/1071-database-G13/wiki/Advance-preparation)
* **有任何參考資料請放上來，這樣比較好協助了解程式碼和報告**
* **安裝擴充插件，以便於後續編程**
* **express用ES5語法，react用ES6語法，少用var(型態可變，值可變)改用let(型態不可變，值可變)、const(型態不可變，值不可變)**
---
### 日程：
* 2019年12月22日 (六) 第一次分組討論 (暫定)
* 2019年01月05日 (六) 繳交報告
* 2019年01月07日 (一) 口頭報告
---
### 重要資訊：
* **更新資訊後面請補上更新日期，之後不定期清理不必要資訊**
* **有Git忽略文件(.gitignore)，就不用擔心上傳到 node_modules**
* **package.json** 內的 code 改成 **"scripts": {"start": "nodemon ./bin/www"}**，
  > 下 **npm start** 指令後，ctrl+s後會自動重啟服務器
---
### port setting
* server http-port：http://localhost:3000
* server https-port：https://localhost:8000
* client http-port：http://localhost:3001 
  > * "start": "set PORT=3001&&react-scripts start" => 設定 port
  > * {"proxy": "http://localhost:3001"} => 指向 server port：3001 
  > * 與伺服器取值傳值則不再需要 http://localhost:3001 可以省略
  > * http://localhost:3001/
---
### 更新資訊：
* EJS 模組化(pages、partials)
* 新增sql指令：describe: 'DESCRIBE table'，取得column_name
* 登入後會將token記錄在本地端 Local Storage
* 使用http攔截器，攔截請求，若header無token，則setHeader(Local Storage的token資料)
* [react練習/測試檔](https://github.com/toumei/107-01-database-4B/tree/master/example-create-react-app-express) - 12/10
* router 已全部配置完成 - 10/19
---

### WIKI：
* [簡介](https://github.com/toumei/1071-database-G13/wiki/Home)
* [VS code 快捷鍵 & 擴充插件](https://github.com/toumei/1071-database-G13/wiki/VS-code)
* [npm 擴充插件](https://github.com/toumei/1071-database-G13/wiki/npm-Extensions)
* [git指令](https://github.com/toumei/1071-database-G13/wiki/git-command)
* [SQL Table](https://github.com/toumei/1071-database-G13/wiki/SQL-Table)
* [參考資料](https://github.com/toumei/1071-database-G13/wiki/Reference)
---

### 已經做的部分：
* server
  * https server：https://localhost:port
  * 將 三層架構 調整為 Model–view–controller (MVC)
  * EJS 模組化(pages、partials)
  * Object Relational Mapping(ORM)框架：使用 sequelize orm 開發，不熟研究中
  * epilogue：可快速架構具有 RESTful 風的 CRUD API server
  * 登入系統(id, pwd)：使用passport(驗證帳密)、bcrypt(加密密碼)、JWT(回傳token)、express-jwt(管理router的驗證token)
![token機制](https://cdn-images-1.medium.com/max/1334/1*7T41R0dSLEzssIXPHpvimQ.png)

* client (express)
  * Axios攔截器
* client (react)
  * router 配置完成 (不包含之後新增)
  * server-client 資料加解密
  * CRUD 大致完成
  * MVC 配置大致完成

### 正在做的部分：
* sever
  * 帳戶權限系統：express-acl，還沒測試完全，[流程](https://segmentfault.com/a/1190000004627946)
    * 登入時判斷身份為 user、worker、admin、DB_admin，切換至不同的使用頁面。

* client (express)

* client (react)
  * db 分析
  * handleEditable更新columns的editable有時會有問題 (尚未找到問題，待解決)

### 尚未做的部分：
* server

* client (express)
  * malfunction
  * processing

* client (react)
  * malfunction (express->react)
  * processing (express->react)
---

### 預期做的部分：
* server
  * 在DB權限下，可用web操控後端table
  * 在admin權限下，可填寫報修單、維修單
  * 在user權限下，可填寫報修單
  * 在guest權限下，只能瀏覽index、login，不可進入此系統

* client (express)
  * 顯示那個用戶登入
  * 顯示更動的資料
  * 顯示哪個用戶填了報修單或維修單
  * 顯示CRUD的操作
 
* client (react)
  * https server (配合server)
  * ACL、RBAC (配合server)
  * 即時顯示新資訊 (學生填報修單通知工作人員，工作人員報修完畢通知學生)
  * 多國語言
  * 支援手機排版 (全部非部分)
  * bootstrap table 改成 remote 模式
  * edit 有選擇模式

### 前端可操作之Table：
* product (課本教材，以此為基礎修改，兼功能測試用)
* DB ctrl
* malfunction
* processing
* user
