

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BPfx1TZW.js","_app/immutable/chunks/scheduler.Cem9nN_3.js","_app/immutable/chunks/index.D9KU2s5Y.js"];
export const stylesheets = [];
export const fonts = [];
