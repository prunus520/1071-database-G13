# 1071-database-G13

### 重要資訊：
* 2019年12月10日 (一) 第一次進度報告
* 2019年01月05日 (六) 繳交報告
* 2019年01月07日 (一) 口頭報告
* **有任何參考資料請放上來，這樣比較好協助了解程式碼和報告**
* **安裝擴充插件，以便於後續編程**
* 請更新server/config/database.js
* **package.json** 內的 code 改成 **"scripts": {"start": "nodemon ./bin/www"}**，
  > 下 **npm start** 指令後，ctrl+s後會自動重啟服務器
* server http-port：http://localhost:3000
* server https-port：https://localhost:8000
* client http-port：http://localhost:3001
---

### 更新資訊：
* 修正controllers變更path而產生的錯誤
* EJS 模組化(pages、partials)
* 修正navbar的index path問題
* 新增head的fontawesome link
* 新增client端，並將Express改名為server
* 更新wiki 簡介
* client端 新增router
* 新增res_net_cmms資料庫連線
* 新增sql指令：describe: 'DESCRIBE table'，取得column_name
* 將list、add、edit改成通用模式
---

### WIKI：
* [簡介](https://github.com/toumei/1071-database-G13/wiki/Home)
* [VS code 快捷鍵 & 擴充插件](https://github.com/toumei/1071-database-G13/wiki/VS-code-Extensions)
* [git指令](https://github.com/toumei/1071-database-G13/wiki/git-command)
* [SQL Table](https://github.com/toumei/1071-database-G13/wiki/SQL-Table)
* [參考資料](https://github.com/toumei/1071-database-G13/wiki/Reference)
---

### 目前所做的部分：
* https server：https://localhost:port
* 將 三層架構 調整為 Model–view–controller (MVC)
* EJS 模組化(pages、partials)
* 登入系統(email, pwd)：使用passport(驗證帳密)、bcrypt(加密密碼)、JWT(回傳token)
![token機制](https://cdn-images-1.medium.com/max/1334/1*7T41R0dSLEzssIXPHpvimQ.png)

### 前端可操作之Table：
* product (課本教材，以此為基礎修改，兼功能測試用)
* user

### 正在做的部分：
* client端：Axios (具 promise 的js)，紀錄回傳token，若token失效則重新送login資訊
* API安全(攔截用戶API請求，驗證token是否有效)：passport-jwt、express-jwt
* 帳戶權限：ACL、RBAC
  * 登入時判斷身份為 一般使用者 、 工作人員 、 DB管理員，切換至不同的使用頁面。

### 預期做的部分：
* 在DB權限下，可用web操控後端table
* 在admin權限下，可填寫報修單、維修單
* 在user權限下，可填寫報修單
* 在guest權限下，只能瀏覽index、login，不可進入此系統
