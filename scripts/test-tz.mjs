#!/usr/bin/env node
// Runs the DateCalendar date math under several time zones. Node reads `TZ` at
// startup, so each zone needs its own process — a test cannot switch it.
//
// The four zones are the ones that broke the alternatives in #566: UTC+9 and
// UTC+14 put the UTC date a day behind, and UTC-8 / UTC-4 sit on the other side
// of it. Santiago also changes its clocks at midnight.
//
// Run as `pnpm test:tz`. Wired into CI's `test` job.

import { spawnSync } from 'node:child_process'

const ZONES = ['Asia/Tokyo', 'America/Los_Angeles', 'America/Santiago', 'Pacific/Kiritimati']
const TARGET = 'src/components/lv1/DateCalendar/date-math.test.ts'

for (const zone of ZONES) {
  console.log(`\n── TZ=${zone}`)
  const { status } = spawnSync('pnpm', ['exec', 'vitest', 'run', TARGET], {
    stdio: 'inherit',
    env: { ...process.env, TZ: zone },
  })
  if (status !== 0) process.exit(status ?? 1)
}
