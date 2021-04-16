#!/bin/bash

youtube-dl -U

prisma migrate deploy

exec "$@"
