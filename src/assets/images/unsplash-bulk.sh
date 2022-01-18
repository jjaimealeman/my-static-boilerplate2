#!/bin/bash

# GET THE FIRST PAGE, DEFAULTS TO 30 ENTRIES
# curl https://picsum.photos/v2/list -H "Accept: application/json" | jq '.' > unsplash.json

# GET THE FIRST PAGE, LIMITED TO 100 ENTRIES
# curl "https://picsum.photos/v2/list?page=1&limit=100" -H "Accept: application/json" | jq '.' > unsplash-pg1.json

curl "https://picsum.photos/v2/list?page=1&limit=1" -H "Accept: application/json" | jq '[map(.) | .[] | {PhotoID: .id, Photographer: .author, PhotoURL: .url, PhotoDownload: .download_url}]' > unsplash-pg1-authors.json

# file=`jq '.[] | .PhotoDownload' unsplash-pg1-authors.json | tr -d '"'`
  file="`jq -r '.[] | .PhotoDownload +".jpg"' unsplash-pg1-authors.json`"
hash=$(cat /proc/sys/kernel/random/uuid | sed 's/[-]//g' | head -c 5;echo)
# ext=".jpg"
# echo $file$hash$ext
echo $file
# wget $file
# mv $file $file$hash

# COMMAND TO REMOVE EXTENSION
# sed 's/\.[^.]*$//'


# CREATE TEMP FILE
trap 'rm -f "$TMPFILE"' EXIT

TMPFILE=$(mktemp -t mytemp.XXXXXXX) || exit 1
echo "Our temp file is $TMPFILE"
