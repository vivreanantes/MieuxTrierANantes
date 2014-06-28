rmdir /S /Q C:\dev\WOO\build
del /Q C:\dev\build_MieuxTrierANantes\MieuxTrierANantes.apk
del /Q C:\dev\build_MieuxTrierANantes\MieuxTrierANantes_Final.apk
cd C:\dev\github-repositories\MieuxTrierANantes
C:\dev\tools\sencha-cmd-4.0.4.84\sencha --debug --plain app package build C:\dev\github-repositories\MieuxTrierANantes\packager_MieuxTrierANantes.json
cd C:\dev\jdk1.6.0_35\bin
jarsigner -sigalg SHA1withRSA -digestalg SHA1 -keystore C:\dev\release.keystore -storepass 7z6sQFE4CS39a6R -keypass 7z6sQFE4CS39a6R C:\dev\build_MieuxTrierANantes\MieuxTrierANantes.apk mieuxvivreanantes
cd C:\dev\android-sdk\sdk\tools
zipalign -v 4 C:\dev\build_MieuxTrierANantes\MieuxTrierANantes.apk C:\dev\build_MieuxTrierANantes\MieuxTrierANantes_Final.apk
copy C:\dev\build_MieuxTrierANantes\MieuxTrierANantes_Final.apk C:\dev\github-repositories\opendata\VivreANantes\build\VivreANantes\testing
pause