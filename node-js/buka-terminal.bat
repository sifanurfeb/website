@echo off
title Terminal Super: Node.js + Git

:: 1. Atur Path untuk Node.js Portable (folder tempat file .bat ini berada)
set NODE_DIR=%~dp0

:: 2. GANTI BARIS INI: Atur Path untuk Git Portable Anda
:: (Misalnya: F:\ProgramPortable\GitPortable)
set GIT_DIR=E:\Laptop Rumah\Belajarweb\PortableGit

:: 3. Menggabungkan semuanya ke dalam sistem (hanya sementara selama terminal buka)
:: Git biasanya butuh folder \cmd. Kadang butuh \bin juga.
set PATH=%NODE_DIR%;%GIT_DIR%\cmd;%GIT_DIR%\bin;%PATH%

echo ==========================================
echo Lingkungan Portable Berhasil Dimuat!
echo ==========================================

echo Siap digunakan! Ketik 'cd' ke folder proyek Anda.
cmd.exe
pause

