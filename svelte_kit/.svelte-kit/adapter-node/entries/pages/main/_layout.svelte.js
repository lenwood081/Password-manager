import { c as create_ssr_component, d as each, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: "#sidenav.svelte-l6s41b{height:100%;width:160px;position:fixed;background-color:lightgray}.link.svelte-l6s41b{margin:5px}.main.svelte-l6s41b{width:90%;height:100%;margin-left:160px;background-color:darkslategray}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\r\\n    export let data;\\r\\n<\/script>\\r\\n\\r\\n<div id=\\"sidenav\\">\\r\\n    <h2 class=\\"link\\"><a href=\\"/main\\">Main</a></h2>\\r\\n    {#each data.folders as { name }}\\r\\n        <h2 class=\\"link\\"><a href=\\"/main/{name}\\">{name}</a></h2>\\r\\n    {/each}\\r\\n</div>\\r\\n\\r\\n<div class=\\"main\\">\\r\\n    <slot />\\r\\n</div>\\r\\n\\r\\n\\r\\n<style>\\r\\n    #sidenav {\\r\\n        height: 100%;\\r\\n        width: 160px;\\r\\n        position: fixed;\\r\\n        background-color: lightgray;\\r\\n    }\\r\\n\\r\\n    .link {\\r\\n        margin: 5px;\\r\\n    }\\r\\n\\r\\n    .main {\\r\\n        width: 90%;\\r\\n        height: 100%;\\r\\n        margin-left: 160px;\\r\\n        background-color: darkslategray;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAiBI,sBAAS,CACL,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,CACZ,QAAQ,CAAE,KAAK,CACf,gBAAgB,CAAE,SACtB,CAEA,mBAAM,CACF,MAAM,CAAE,GACZ,CAEA,mBAAM,CACF,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,KAAK,CAClB,gBAAgB,CAAE,aACtB"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div id="sidenav" class="svelte-l6s41b"><h2 class="link svelte-l6s41b" data-svelte-h="svelte-hp2tqb"><a href="/main">Main</a></h2> ${each(data.folders, ({ name }) => {
    return `<h2 class="link svelte-l6s41b"><a href="${"/main/" + escape(name, true)}">${escape(name)}</a></h2>`;
  })}</div> <div class="main svelte-l6s41b">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Layout as default
};
