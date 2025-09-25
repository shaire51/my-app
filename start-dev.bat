@echo off
REM 加 PATH
set PATH=C:\Users\41414\Desktop\node-v22.19.0-win-x64;%PATH%

REM 切換到專案目錄
cd /d C:\Users\41414\Desktop\code\my-app

REM 啟動開發伺服器
npm run dev

REM 停在最後一行，避免視窗一閃而過
pause
