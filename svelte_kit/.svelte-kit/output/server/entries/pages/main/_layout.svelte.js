import { c as create_ssr_component, v as validate_store, s as subscribe, e as escape, a as each, n as null_to_empty } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
const css = {
  code: "#sidenav.s-N2D-P3CFRHWa.s-N2D-P3CFRHWa{height:100%;width:200px;position:fixed;background-color:lightslategray}.link.s-N2D-P3CFRHWa.s-N2D-P3CFRHWa{padding:5px}.main.s-N2D-P3CFRHWa.s-N2D-P3CFRHWa{width:100%;min-height:100%;height:fit-content;margin-left:200px;padding:10px;background-color:darkslategray}a.s-N2D-P3CFRHWa.s-N2D-P3CFRHWa{color:whitesmoke}a.s-N2D-P3CFRHWa.s-N2D-P3CFRHWa:hover{color:darkslategray}.selec.s-N2D-P3CFRHWa.s-N2D-P3CFRHWa{background-color:darkslategrey}.selec.s-N2D-P3CFRHWa a.s-N2D-P3CFRHWa:hover{color:whitesmoke}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\r\\n    import { page } from '$app/stores';\\r\\n    \\r\\n    export let data;\\r\\n    let current_link = $page.url.pathname;\\r\\n<\/script>\\r\\n\\r\\n<!-- Have to reload whole page to update sidebar, vinefficient solution but works ig -->\\r\\n<div id=\\"sidenav\\" data-sveltekit-reload> \\r\\n    <h2 class={current_link===\\"/main\\" ? 'selec link' : 'link'}>\\r\\n        <a href=\\"/main\\">Main</a>\\r\\n    </h2>\\r\\n    {#each data.folders as { name }}\\r\\n        <h2 class={current_link===\`/main/\${name}\` ? 'selec link' : 'link'}>\\r\\n            <a href=\\"/main/{name}\\" >{name}</a>\\r\\n        </h2>\\r\\n    {/each}\\r\\n</div>\\r\\n\\r\\n<div class=\\"main\\">\\r\\n    <slot />\\r\\n</div>\\r\\n\\r\\n\\r\\n<style>\\r\\n    #sidenav {\\r\\n        height: 100%;\\r\\n        width: 200px;\\r\\n        position: fixed;\\r\\n        background-color: lightslategray;\\r\\n    }\\r\\n\\r\\n    .link {\\r\\n        padding: 5px;\\r\\n    }\\r\\n\\r\\n    .main {\\r\\n        width: 100%;\\r\\n        min-height: 100%;\\r\\n        height: fit-content;\\r\\n        margin-left: 200px;\\r\\n        padding: 10px;\\r\\n        background-color: darkslategray;\\r\\n    }\\r\\n\\r\\n    a {\\r\\n        color: whitesmoke;\\r\\n    }\\r\\n\\r\\n    a:hover {\\r\\n        color: darkslategray;\\r\\n    }\\r\\n\\r\\n    .selec {\\r\\n        background-color: darkslategrey;\\r\\n    }\\r\\n    \\r\\n    .selec a:hover {\\r\\n        color: whitesmoke;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAyBI,sCAAS,CACL,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,CACZ,QAAQ,CAAE,KAAK,CACf,gBAAgB,CAAE,cACtB,CAEA,mCAAM,CACF,OAAO,CAAE,GACb,CAEA,mCAAM,CACF,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,WAAW,CACnB,WAAW,CAAE,KAAK,CAClB,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,aACtB,CAEA,+BAAE,CACE,KAAK,CAAE,UACX,CAEA,+BAAC,MAAO,CACJ,KAAK,CAAE,aACX,CAEA,oCAAO,CACH,gBAAgB,CAAE,aACtB,CAEA,qBAAM,CAAC,gBAAC,MAAO,CACX,KAAK,CAAE,UACX"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let current_link = $page.url.pathname;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_page();
  return ` <div id="sidenav" data-sveltekit-reload class="s-N2D-P3CFRHWa"><h2 class="${escape(null_to_empty(current_link === "/main" ? "selec link" : "link"), true) + " s-N2D-P3CFRHWa"}"><a href="/main" class="s-N2D-P3CFRHWa" data-svelte-h="svelte-wyv3lz">Main</a></h2> ${each(data.folders, ({ name }) => {
    return `<h2 class="${escape(null_to_empty(current_link === `/main/${name}` ? "selec link" : "link"), true) + " s-N2D-P3CFRHWa"}"><a href="${"/main/" + escape(name, true)}" class="s-N2D-P3CFRHWa">${escape(name)}</a> </h2>`;
  })}</div> <div class="main s-N2D-P3CFRHWa">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Layout as default
};
