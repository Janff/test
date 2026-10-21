module.exports = {
  // Optional: customize the default prefix "[auto-pr] " only when your project needs a different one.
  // Optional: add custom commit types here. Built-in conventional types are allowed by default.
  types: ['release'],
  maxHeaderLength: 100,
  includeBranches: [
    'feature/*',
    'bugfix/*',
    'feat/*',
    'fix/*',
    'doc/*',
    'docs/*',
    'refactor/*',
    'perf/*',
    'test/*',
    'chore/*',
    'ci/*',
    'build/*',
  ],
};
