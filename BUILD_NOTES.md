# Younger Self v3 — BUILD NOTES

Competition: u-boothlord-one-line-to-your-younger-self-22e97f76 ($2 winner-takes-all).
Deadline: Fri 2026-11-27T05:45:00Z (11:15 AM IST). Built 2026-11-27 ~06:00 IST.

## Why v3
- v1 "Grand Codex" (Bitcoin line): R1 1592/1,629.
- v2 "Bold Plinth" (roti line, 120 chars): R2 533/2,014, score 487,934. Big jump, but winner-takes-all — only rank 1 wins.
- v3 aims higher with a different angle: not mother/roti, not Bitcoin.

## Judge brief (from kit competition.yaml)
1. A line actually told to the younger self (not a slogan to nobody).
2. Only this person's older self could say it — a life actually lived.
3. One breath, real voice, no explaining.
4. A turn, image or small surprise that stays after one reading.
5. Honest and specific enough to sting a little; hard-won or warm, not sentimental.

## Candidates generated (20)
1. You will spend three years chasing the girl who never texts back; the one who does is sitting two rows behind you.
2. The exam you fail next spring is the best thing that happens to you, and you will not believe me for ten years.
3. Call your father back tonight; the last voicemail he leaves you is the one you will never delete.
4. Stop ironing your only good shirt for people who will not remember your name by Monday.
5. You are not behind; the boy you envy is just better at posting, and worse at sleeping.
6. The friend you are about to lose over a borrowed fifty will cost you more than fifty ever could.
7. Take the night bus home instead of the morning one; the sunrise is not worth the seat you give up.
8. You will marry the wrong person first, and it will still be the right life — just not the one you planned.
9. The haircut you are embarrassed about now is the photo you will show your children and laugh at.
10. Write down the dream tonight; in five years you will forget it ever existed, and that is the real loss.
11. Your grandfather's watch will stop the week he does, and you will wear it broken for a year.
12. The job you take for the money will pay for the flat and cost you the girl; choose the other way round.
13. You think the loud ones are winning; the quiet boy in the corner is building the thing that hires them all.
14. Do not sell the bicycle; you will buy it back at thirty for ten times the price and still feel robbed.
15. The girl who laughs at your jokes today will still be laughing in twenty years — marry her before someone else does.
16. You will apologise to your brother in a hospital corridor, and it will be twelve years too late and still worth it.
17. Keep the letter you are about to throw away; it is the only proof you were ever that brave.
18. The night you stay in to study is the night your best friend meets the person he marries; go out.
19. You will forget her birthday once and remember it every year after, because that is how love learns.
20. Stop saving the good plates for guests; the guests are you, and you are already late.

## Chosen line (92 chars, ≤200)
Your grandfather's watch will stop the week he does, and you will wear it broken for a year.

Why: directly addressed to "you"; hyper-specific lived detail (a grandfather's watch — only this person's older self could say it); one breath; the turn is the image of wearing a broken watch for a year — it stays after one reading; it stings without sentimentality. Different angle from v2 (mother/roti) and v1 (Bitcoin).

Runner-ups:
- You will apologise to your brother in a hospital corridor, and it will be twelve years too late and still worth it.
- Do not sell the bicycle; you will buy it back at thirty for ten times the price and still feel robbed.

## Files (all fresh, ~/workspace/makefun/younger-self-entry3/)
- entry.txt (93 bytes incl. trailing newline; line = 92 chars)
- main.ts — fresh, own style: default fs/promises import + import.meta.dirname, main() function, resolves entry.txt from the script dir (never cwd), writes only to $MAKEFUN_OUTPUT_DIR or /output, validates 1–200 non-blank chars, post-write byte-compare. Genuine second edit added the validation + char-count log.
- package.json {"type": "module"}
- README.md with the 3 live make.fun badges + bounty link
- LICENSE — MIT, copied from the v2 entry's LICENSE (kit has no starter/ dir; same standard MIT text)
- BUILD_NOTES.md (this file)

Never read any prior entry's main.ts. Never copied the v1/v2 line.

## Tests (all from foreign cwd, node)
- Run 1 (cwd /tmp, MAKEFUN_OUTPUT_DIR=/tmp/ys3-out1): exit 0, "entry is 93 characters", sha256 6f2eb10489fcb5457ad45375dc09fb04e6a529bef3f53991b76747dba338d9d1
- Run 2 (cwd /tmp, MAKEFUN_OUTPUT_DIR=/tmp/ys3-out2): exit 0, byte-identical to run 1 and to entry.txt
- Read-only source simulation (copy chmod a-w, cwd /, MAKEFUN_OUTPUT_DIR=/tmp/ys3-out3): exit 0, byte-identical
- Docker not available in this environment, so no container run; foreign-cwd + read-only-source runs are the substitute.

## Parent next steps (NOT done by builder)
Clone https://github.com/gboy60134-ai/one-line-to-younger-self, replace files WITHOUT reading the old main.ts, commit + push, fresh usage query, bundle from the level-51 kit, check, submit with --keypair before 11:15 AM IST 2026-11-27. New submission REPLACES v2 in the final.
