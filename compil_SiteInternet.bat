SET PROJECT_DIR=C:\dev\github-repositories\MieuxTrierANantes

del /Q /S %PROJECT_DIR%\build\testing\MieuxTrierANantes\archive

cd C:\dev\github-repositories\MieuxTrierANantes
C:\dev\tools\sencha-cmd-5.0.2.270\sencha app build testing

xcopy %PROJECT_DIR%\dist %PROJECT_DIR%\build\testing\MieuxTrierANantes\ /E /Y