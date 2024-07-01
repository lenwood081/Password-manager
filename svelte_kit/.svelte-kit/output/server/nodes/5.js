

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/logout/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.BPfx1TZW.js","_app/immutable/chunks/scheduler.Cem9nN_3.js","_app/immutable/chunks/index.D9KU2s5Y.js"];
export const stylesheets = [];
export const fonts = [];
