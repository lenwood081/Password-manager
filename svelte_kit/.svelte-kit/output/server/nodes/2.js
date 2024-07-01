import * as server from '../entries/pages/main/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/main/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/main/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.CLRhwb3a.js","_app/immutable/chunks/scheduler.Cem9nN_3.js","_app/immutable/chunks/index.D9KU2s5Y.js","_app/immutable/chunks/stores.i6nrxytu.js","_app/immutable/chunks/entry.D6RB3yRJ.js"];
export const stylesheets = ["_app/immutable/assets/2.BPDaYTO1.css"];
export const fonts = [];
