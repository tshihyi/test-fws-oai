# 建置測試環境
1. 安裝node windows版： https://nodejs.org/en/
2. 安裝VS Code： https://code.visualstudio.com/
3. 安裝測試工具：https://codecept.io/quickstart/

# 測試工具與測試專案設定步驟
- 先到github複製repository路徑，如：https://github.com/tshihyi/test-fws-oai
- 開啟專案目錄，按右鍵選取「git bash here」，開啟指令視窗
- 首次安裝指令
 
```
git clone https://github.com/tshihyi/test-fws-oai 目錄名稱

npm ci

```

- 首次修改設定package.json

```
 "scripts": {
    "start": "codeceptjs run --steps",
    "report": "codeceptjs run --reporter mochawesome"
  }

```
- npm執行指令，僅執行測試程式，不產出報表：
```
npm start
```
- npm執行指令，執行測試程式並產出報表：
```
npm run report
```

- 之後執行套件指令

```
 npm start
```

- 測試工具相關設定請參考：codecept.json

# 簡易的git使用指令
1. 取得最新版本：
```
git pull
```
2. 新增修改後的檔案或全新檔案
```
git add .
```
3. 上傳檔案說明
```
git commit -m 'Upload init'
```
4. 上傳檔案
```
git push
```
5. 查看目前git所在版本與狀態
```
git status
```

# VS Code編輯器常用指令
1. 叫出console指令視窗
```
Ctrl + ~
```
2. 叫出markdown preview視窗
```
Ctrl + Shit + V
```
3. VS Code參考網址：https://code.visualstudio.com/docs/

# Code Review流程
1. 建立自己的barnch：

```
 git checkout -b yourbranchname
```
2. 撰寫各自的測試code
3. Commit test code
4. 新branch的第一次commit指令，push用法須帶參數。
```
git push -u origin HEAD
```
5. 建立pull request，於github上操作
6. 後續指令，請參考 **簡易的git使用指令**，步驗2~4。
7. 合併pull request, 於github上操作
8. 回到VS Code，把barnch切回master後，並更新專案。
```
git pull
```
9. 更新完畢後，回到第一步，取一個新的barch名稱，重複上述1~8動作。
