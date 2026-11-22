@echo off
title Vertex Global Tech - Local Web Server
echo ======================================================================
echo  Vertex Global Tech - Ahmedabad Web Design Service Landing Page
echo ======================================================================
echo  Starting local web server on port 8080...
echo  Landing page URL: http://localhost:8080/web-design-services-ahmedabad/
echo ======================================================================
start http://localhost:8080/web-design-services-ahmedabad/
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1" -Port 8080
pause
