#!/usr/bin/env bash
# Rebuild the live product demo from the app repo and copy it into
# public/demo/app/, which ships to scanfence.com/demo/app/ with the site.
#
# The demo is the real ScanFence app built with `npm run build:demo`: every
# Supabase call is answered in the browser from sample data, so the bundle
# holds no keys and cannot reach production. Commit the result.
#
#   scripts/update-app-demo.sh [path-to-app-repo]   (default ~/boltscanfence/scanfence)
set -euo pipefail

APP="${1:-$HOME/boltscanfence/scanfence}"
SITE="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$SITE/public/demo/app"

(cd "$APP" && npm run build:demo)

# Refuse to ship a bundle that contains a real Supabase client.
if grep -q "GoTrueClient" "$APP"/dist-demo/assets/*.js; then
  echo "dist-demo contains a Supabase client — not a demo build, aborting" >&2
  exit 1
fi

rm -rf "$OUT"
mkdir -p "$OUT"
cp -R "$APP"/dist-demo/. "$OUT"/
echo "Copied $(du -sh "$OUT" | cut -f1) into public/demo/app/"
