@echo off
for \L %%i in ($1, 1, $2) do curl -A "Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) CriOS/28.0.1500.12 Mobile/10B329 Safari/8536.25" -IL "$3/_/$i"
pause
