rem ------------------------------------------------------------
rem COMPILATION SENCHA + CORDOVA + RELEASE ANDROID
rem ------------------------------------------------------------

rem repertoire projet = repertoire du script 
SET PROJECT_DIR="C:\dev\github-repositories\MieuxTrierANantes"
SET KEY_STORE=C:\dev\release.keystore
SET KEY_ALIAS=mieuxvivreanantes
SET KEY_STORE_PASSWORD=7z6sQFE4CS39a6R
SET KEY_ALIAS_PASSWORD=7z6sQFE4CS39a6R

del /Q %PROJECT_DIR%\build\testing\MieuxTrierANantes\dev.apk

sencha --info app build native
cd %PROJECT_DIR%\cordova\platforms\android
ant release -Dkey.store=%KEY_STORE% -Dkey.alias=%KEY_ALIAS% -Dkey.store.password=%KEY_STORE_PASSWORD% -Dkey.alias.password=%KEY_ALIAS_PASSWORD%

copy %PROJECT_DIR%\cordova\platforms\android\bin\CordovaApp-release.apk %PROJECT_DIR%\build\testing\MieuxTrierANantes\dev.apk
pause
