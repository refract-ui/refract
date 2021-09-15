function config(entry = []): [] {
  return [...entry, require.resolve('./preview')];
}

function managerEntries(entry = []): [] {
  return [...entry, require.resolve('./manager.tsx')];
}

module.exports = {
  config,
  managerEntries
};
