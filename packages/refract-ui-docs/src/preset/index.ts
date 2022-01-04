export function config(entry: any = []): any[] {
  return [...entry, require.resolve('./preview')];
}

export function managerEntries(entry: any = []): any[] {
  return [...entry, require.resolve('./manager')];
}
