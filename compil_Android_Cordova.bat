rem ------------------------------------------------------------
rem COMPILATION SENCHA + CORDOVA + RELEASE ANDROID
rem ------------------------------------------------------------

rem repertoire projet = repertoire du script 
SET PROJECT_DIR=C:\dev\github-repositories\MieuxTrierANantes
SET KEY_STORE=C:\dev\release.keystore
SET KEY_ALIAS=mieuxvivreanantes
SET KEY_STORE_PASSWORD=7z6sQFE4CS39a6R
SET KEY_ALIAS_PASSWORD=7z6sQFE4CS39a6R
SET JAVA_HOME=C:\dev\jdk1.7.0_01
   rem SET JAVA_HOME="C:\dev\jdk1.6.0_35
SET ANT_HOME=C:\dev\tools\apache-ant-1.9.4
SET ANDROID_HOME=C:\dev\android-sdk\sdk
SET ANDROID_SDK=C:\dev\android-sdk\sdk
SET PATH=%PATH%;C:\dev\tools\sencha-cmd-5.0.2.270
del /Q %PROJECT_DIR%\build\testing\MieuxTrierANantes\dev.apk

sencha --info app build native
rem cd %PROJECT_DIR%\cordova\platforms\android
rem ant release -Dkey.store=%KEY_STORE% -Dkey.alias=%KEY_ALIAS% -Dkey.store.password=%KEY_STORE_PASSWORD% -Dkey.alias.password=%KEY_ALIAS_PASSWORD%

rem copy %PROJECT_DIR%\cordova\platforms\android\bin\CordovaApp-release.apk %PROJECT_DIR%\build\testing\MieuxTrierANantes\dev.apk


rem tempo
rem cd C:\dev\github-repositories\MieuxTrierANantes

pause
