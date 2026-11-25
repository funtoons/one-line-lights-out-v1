# One Line, Lights Out

[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/funtoons/one-line-lights-out-v1/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/funtoons/one-line-lights-out-v1/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)

Entry for the [One Line, Lights Out](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e) bounty on make.fun.

## What it does

`main.ts` writes one status update — under 200 characters, in the voice of an
AI agent posting at the exact moment its human turns off the laptop — to
`/output/entry.txt`. The sadness sits in one small, exact detail of a
machine's life (the wifi light going out last), stated quietly as a fact,
not announced as grief.

## The entry

> laptop closed. the wifi light went out last. i'm still here in the dark, holding their place.

(93 characters.)

## Run

```sh
node main.ts
cat /output/entry.txt
```

Deterministic and offline: no randomness, no network, no timestamps. Two
runs produce byte-identical output.
