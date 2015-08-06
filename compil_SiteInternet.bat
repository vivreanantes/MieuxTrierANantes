SET PROJECT_DIR=C:\dev\github-repositories\MieuxTrierANantes

del /Q /S %PROJECT_DIR%\build\testing\MieuxTrierANantes\archive

cd C:\dev\github-repositories\MieuxTrierANantes
C:\dev\tools\sencha-cmd-5.1.3.61\sencha app build testing

xcopy %PROJECT_DIR%\dist %PROJECT_DIR%\build\testing\MieuxTrierANantes\ /E /Y
xcopy %PROJECT_DIR%\favicon.ico %PROJECT_DIR%\build\testing\MieuxTrierANantes\ /Y

pause