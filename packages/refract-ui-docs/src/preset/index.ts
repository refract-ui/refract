function config(entry: any = []): any[] {
  return [...entry, require.resolve('./preview')];
}

function managerEntries(entry: any = []): any[] {
  return [...entry, require.resolve('./manager')];
}

export default {
  config,
  managerEntries
};
