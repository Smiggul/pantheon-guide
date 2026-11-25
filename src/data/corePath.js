// The core build for the app's Ahead / Even-Behind switch (2026-11-25).
//
// A role (or alternate) may carry `corePathAhead`: the build to follow when the
// lane is won. `corePath` stays the Even/Behind build, which is the app's
// default mode, so every role without the field behaves exactly as before.
// Pantheon Top is the first user: Voltaic Cyclosword opens when ahead, Eclipse
// when even or behind (the owner, 2026-11-25; lolalytics 16.23 data in the
// comment above Pantheon's Top corePath).
//
// Read the core build through this, never `corePath` directly, wherever the
// mode is known: gamePlan, buildItemSet and the build card.
export function corePathFor(build, mode) {
  if (!build) return "";
  return (mode === "ahead" && build.corePathAhead) || build.corePath || "";
}
