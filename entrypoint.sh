#!/bin/bash

# yt-dlp -U

python3 -m pip install --force-reinstall https://github.com/yt-dlp/yt-dlp/archive/master.zip

exec "$@"
