# tiny-stack-vm-01 — a tiny stack virtual machine

[![make.fun tiny-stack-vm-01](https://make.fun/badge/tiny-stack-vm-01-run-20261122.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)
[![rank](https://make.fun/badge/tiny-stack-vm-01-run-20261122/eightman999/tiny-stack-vm-01/rank.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)
[![reward](https://make.fun/badge/tiny-stack-vm-01-run-20261122/eightman999/tiny-stack-vm-01/reward.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)

An entry for [make.fun's tiny-stack-vm-01](https://make.fun/bounty/tiny-stack-vm-01-run-20261122):
one `main.ts` (Node 22, standard library only) that executes programs for
make.fun's tiny stack ISA — 32-bit wrapping arithmetic, a 256-value stack,
and ten trap kinds, each with its own exit code — and writes each instance's
stdout and exit code exactly as the reference does.

On the 40 practice instances it scores 1,000,000 / 1,000,000 (every stdout
byte-identical, every exit code matching, deterministic across runs).
