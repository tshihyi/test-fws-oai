# 操作步驟
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
    "start": "codeceptjs run --steps"
  }

```

- 之後執行套件指令

```
 npm start
```

- 測試工具相關設定請參考：codecept.json

- 建立自己的barnch：

```
 git checkout yourbranchname
```

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