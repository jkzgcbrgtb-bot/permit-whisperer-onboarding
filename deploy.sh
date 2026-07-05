#!/bin/bash
# Stage everything, commit, and push. Triggers the GitHub Pages deploy on push.
set -e

cd "$(dirname "$0")"

if [ -z "$(git status --porcelain)" ]; then
  echo "Nothing to deploy — no changes since the last commit."
  exit 0
fi

message="${*:-Update site}"

git add -A
git commit -m "$message"
git push

echo "Pushed. Deploy will be live in ~30-60s: https://jkzgcbrgtb-bot.github.io/permit-whisperer-onboarding/"
