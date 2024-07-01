import * as server from '../entries/pages/main/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/main/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/main/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.BXGEFLGU.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CT5qheHF.js"];
export const stylesheets = ["_app/immutable/assets/2.CfNFpaMC.css"];
export const fonts = [];
