

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/main/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.DCz369Kw.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CT5qheHF.js"];
export const stylesheets = [];
export const fonts = [];
