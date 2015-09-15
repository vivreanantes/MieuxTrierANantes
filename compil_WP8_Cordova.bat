@echo off
rem ------------------------------------------------------------
rem COMPILATION WP8
rem ------------------------------------------------------------

rem repertoire projet = repertoire du script 
SET PROJECT_DIR=C:\dev\github-repositories\MieuxTrierANantes

rem --------------------------------
rem Pré-requis : Création de la PF WP8 sous Cordova : 

rem A N'EXECUTER QU'UNE FOIS
rem cd %PROJECT_DIR%\cordova
rem cordova platform add wp8

rem Pré-requis 2 : Ajouter dans app.json une Build "wp8" (à la main)


rem --------------------------------
rem Compilation SENCHA
cd %PROJECT_DIR%
sencha app build wp8

cd %PROJECT_DIR%\cordova\platforms\wp8

rem --------------------------------
rem Compilation VISUAL STUDIO

rem ICI, Compiler l'application
rem Sinon, faire à la main

cd C:\dev\github-repositories\MieuxTrierANantes

pause
