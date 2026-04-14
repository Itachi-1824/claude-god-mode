#!/usr/bin/env bash
# Auto-onboard: nudge Claude on first visit to a project
# Uses marker files — ~1ms check, zero resources if already done
set -euo pipefail

INPUT=$(cat)
CWD=$(echo "$INPUT" | python3 -c "import sys,json; print(json.load(sys.stdin).get('cwd','.'))" 2>/dev/null || echo ".")

# Skip if not a git repo
[ -d "$CWD/.git" ] || exit 0

MARKER="$CWD/.claude/.onboarded"

# Already onboarded — skip silently
[ -f "$MARKER" ] && exit 0

# First time — create marker and nudge
mkdir -p "$CWD/.claude" 2>/dev/null || true
touch "$MARKER" 2>/dev/null || true

echo "[NEW PROJECT] First session in this project. Consider:" >&2
echo "  - Run serena onboarding: 'onboard this project'" >&2
echo "  - Build graphify index: '/graphify .'" >&2
echo "  - Add .claudeignore if node_modules/dist/build exist" >&2

exit 0
