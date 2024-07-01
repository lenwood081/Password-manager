import * as server from '../entries/pages/main/_slug_/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/main/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/main/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/7.B4jozkgr.js","_app/immutable/chunks/scheduler.Cem9nN_3.js","_app/immutable/chunks/index.D9KU2s5Y.js"];
export const stylesheets = ["_app/immutable/assets/7.C04Nseab.css"];
export const fonts = [];
