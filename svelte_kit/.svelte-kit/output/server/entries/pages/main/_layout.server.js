import { p as pages } from "../../../chunks/catagory.js";
function load() {
  return {
    folders: pages.map((page) => ({
      name: page.name
    }))
  };
}
export {
  load
};
