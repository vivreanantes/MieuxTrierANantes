SET PROJECT_DIR=C:\dev\github-repositories\MieuxTrierANantes

del /Q /S %PROJECT_DIR%\build\testing\MieuxTrierANantes\dist

xcopy %PROJECT_DIR%\dist %PROJECT_DIR%\build\testing\MieuxTrierANantes\ /E /Y

pause