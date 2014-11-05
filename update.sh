#!/bin/bash

welcome() {
echo "_   _ ______ ______   ___   _____  _____"
echo "| | | || ___ \|  _  \ / _ \ |_   _||  ___|"
echo "| | | || |_/ /| | | |/ /_\ \  | |  | |__"
echo "| | | ||  __/ | | | ||  _  |  | |  |  __|"
echo "| |_| || |    | |/ / | | | |  | |  | |___"
echo " \___/ \_|    |___/  \_| |_/  \_/  \____/"
echo
}

welcome
git submodule foreach git pull origin master
