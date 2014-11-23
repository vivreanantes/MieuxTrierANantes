rem rmdir /S /Q C:\dev\github-repositories\MieuxTrierANantes\build
rem del /Q C:\dev\build_MieuxTrierANantes\MieuxTrierANantes.apk
rem del /Q C:\dev\build_MieuxTrierANantes\MieuxTrierANantes_Final.apk
rem cd C:\dev\github-repositories\MieuxTrierANantes
rem C:\dev\tools\sencha-cmd-4.0.4.84\sencha --plain app package build C:\dev\github-repositories\MieuxTrierANantes\packager_MieuxTrierANantes.json
rem cd C:\dev\jdk1.6.0_35\bin
rem jarsigner -sigalg SHA1withRSA -digestalg SHA1 -keystore C:\dev\release.keystore -storepass 7z6sQFE4CS39a6R -keypass 7z6sQFE4CS39a6R C:\dev\build_MieuxTrierANantes\MieuxTrierANantes.apk mieuxvivreanantes
rem cd C:\dev\android-sdk\sdk\tools
rem zipalign -v 4 C:\dev\build_MieuxTrierANantes\MieuxTrierANantes.apk C:\dev\build_MieuxTrierANantes\MieuxTrierANantes_Final.apk
rem copy C:\dev\build_MieuxTrierANantes\MieuxTrierANantes_Final.apk C:\dev\github-repositories\opendata\VivreANantes\build\VivreANantes\testing

cd C:\dev\github-repositories\MieuxTrierANantes
sencha --info app build native
rem Ordinateur\Archos 50 Platinum\Carte SD
rem copy C:\dev\github-repositories\MieuxTrierANantes\cordova\platforms\android\ant-build\CordovaApp-debug.apk C:\dev\github-repositories\opendata\VivreANantes\build\VivreANantes\testing
pause
