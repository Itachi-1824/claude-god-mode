#!/usr/bin/env bash
# Color-coded context usage status bar
# Green <40%, Yellow 40-59%, Red ≥60%
PCT=$(cat | python3 -c "
import sys, json
try:
    d = json.load(sys.stdin)
    used = d.get('context_used_tokens', 0)
    total = d.get('context_total_tokens', 1000000)
    pct = int(used / total * 100)
    print(pct)
except:
    print(0)
" 2>/dev/null || echo "0")

if [ "$PCT" -lt 40 ]; then
  COLOR="\033[32m"  # green
elif [ "$PCT" -lt 60 ]; then
  COLOR="\033[33m"  # yellow
else
  COLOR="\033[31m"  # red
fi

echo -e "${COLOR}ctx:${PCT}%\033[0m"
