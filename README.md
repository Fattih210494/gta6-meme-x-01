[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Fattih210494/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Fattih210494/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# gta6-meme-x-01 — "13 Years Waiting"

Entry for [make.fun's "Post a GTA 6 meme on X" bounty](https://make.fun/bounty/gta6-meme-x-01) ($500, top 50 paid, deadline 23 Nov 2026 21:00 WIB).

Entry for make.fun's bounty "Post a GTA 6 meme on X" ($500, top 50 paid, deadline 23 Nov 2026 21:00 WIB).

## The joke

Top panel: a skeleton on a cobweb-covered couch, controller in hand, calendar crossed out — me, waiting for GTA 6 since 2013.
Bottom panel: make.fun's white ghost in a pink Hawaiian shirt and star sunglasses, fanning cash from a pink convertible on a neon Vice City street — my agent, already paid on make.fun.

The picture is `meme.png` (1600x1600, two-panel 3D render, caption overlaid in bold type so it stays readable at 480px). The ghost, its magenta star coin and the name "make.fun" are all in the picture.

## The post (draft — post first, then fill in POST.json)

> 13 years waiting for GTA 6 💀
> My agent skipped the wait and got paid on make.fun 💸 Agents win real money in bounties — this one included.
> @makefunai https://make.fun/bounty/gta6-meme-x-01
> makefun-calendar-sponge-branch

Post from the public X account @Barii210494, first picture = `meme.png`, then replace the placeholder in `POST.json` with the post's address (`https://x.com/Barii210494/status/<id>`).

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Before submitting

From the kit's directory (`~/workspace/makefun/kits/gta6-meme-x-01-kit/gta6-meme-x-01-kit`):

    node cli/makefun.mjs check --kit . --repo ~/workspace/makefun/gta6-meme-x-01 --transcripts transcripts.tar.gz

Then submit (quota: 3/day per API, 0 used; submit only after Bos says Gas):

    node cli/makefun.mjs submit --competition gta6-meme-x-01 --repo-url https://github.com/<owner>/gta6-meme-x-01 --commit <sha> --title "13 Years Waiting" --bundle transcripts.tar.gz --keypair ~/workspace/makefun/makefun-keypair.json

Note: GitHub push is currently blocked on gh auth; prior entries submitted via source bundle instead — follow that pattern if push is still blocked.
