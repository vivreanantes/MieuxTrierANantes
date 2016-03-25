SET PROJECT_DIR=C:\dev\github-repositories\MieuxTrierANantes

del /Q /S %PROJECT_DIR%\build\testing\MieuxTrierANantes\dist

xcopy %PROJECT_DIR%\dist %PROJECT_DIR%\build\testing\MieuxTrierANantes\ /E /Y

xcopy %PROJECT_DIR%\dist\scripts_php\reemploi.php %PROJECT_DIR%\build\testing\MieuxTrierANantes\ /Y
xcopy %PROJECT_DIR%\dist\scripts_php\send_mail_form.php %PROJECT_DIR%\build\testing\MieuxTrierANantes\ /Y

pause