---
'@yasmro/schatten': patch
---

Pin `class-variance-authority` exact (`0.7.1`) as required by the v1.0.0 API
stability contract (api-stability.md § CVA output stability, #170). CVA output
strings are public API — a floating range would let a consumer's lockfile
resolve a different 0.7.x patch than the one Schatten tested, shifting the
emitted class chain without a Schatten release. No behavior change today:
0.7.1 is the only version the previous `^0.7.1` range could resolve.
