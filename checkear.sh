#!/bin/sh

sustantivos=$(cat <<EOF
XRemoteBot
Web
HTTP
RemoteBot
Python
Ruby
Javascript
EOF
)

siglas="(JSON|BSON|CBOR|MIT|UNLP)"

echo "Advertencias de mayúsculas y minúsculas"
for sustantivo in $sustantivos; do
    grep -i "$sustantivo" *.tex |\
        grep -v -E '^[[:space:]]*%' |\
        grep -v -i -E '\\[^[:space:]]*'"$sustantivo" |\
        grep -v -i -E 'label=[^[:space:]]*'"$sustantivo" |\
        grep -v "$sustantivo" | grep -i "$sustantivo"
done

echo "FIXMEs"
grep -i fixme *.tex
grep -i "fix.me" *.tex

echo "Secuencias de mayúsculas"
grep -v -P "$SIGLAS" *.tex | grep -E '[A-Z]{4,}'
