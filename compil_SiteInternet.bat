SET PROJECT_DIR=C:\dev\github-repositories\MieuxTrierANantes

cd C:\dev\github-repositories\MieuxTrierANantes
C:\dev\tools\sencha-cmd-5.0.2.270\sencha app build testing

xcopy %PROJECT_DIR%\dist %PROJECT_DIR%\build\testing\MieuxTrierANantes\dist\ /E /Y