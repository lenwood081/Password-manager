import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: ".header.s-YiwlK29sbNPx{display:flex;width:100%;background-color:white;border-radius:5px;padding:10px}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"header\\">\\r\\n    <h2>Main</h2>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n    .header {\\r\\n        display: flex;\\r\\n        width: 100%;\\r\\n        background-color: white;\\r\\n        border-radius: 5px;\\r\\n        padding: 10px;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AASI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,KAAK,CACvB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,IACb"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="header s-YiwlK29sbNPx"><h2 data-svelte-h="svelte-1jtsue3">Main</h2> </div>`;
});
export {
  Page as default
};
