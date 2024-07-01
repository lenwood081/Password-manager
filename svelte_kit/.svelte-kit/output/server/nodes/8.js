import * as server from '../entries/pages/register/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.js";
export const imports = ["_app/immutable/nodes/8.BPfx1TZW.js","_app/immutable/chunks/scheduler.Cem9nN_3.js","_app/immutable/chunks/index.D9KU2s5Y.js"];
export const stylesheets = [];
export const fonts = [];
