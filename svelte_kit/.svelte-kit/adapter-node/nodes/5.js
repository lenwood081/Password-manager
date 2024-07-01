import * as server from '../entries/pages/main/_slug_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/main/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/main/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.CePiVCDE.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CT5qheHF.js"];
export const stylesheets = [];
export const fonts = [];
