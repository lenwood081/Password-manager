

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/main/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.GxSAGVtj.js","_app/immutable/chunks/scheduler.Cem9nN_3.js","_app/immutable/chunks/index.D9KU2s5Y.js"];
export const stylesheets = ["_app/immutable/assets/6.BcqOfxfD.css"];
export const fonts = [];
