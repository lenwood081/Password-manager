import { e as error } from "../../../../chunks/index.js";
import { p as pages } from "../../../../chunks/catagory.js";
function load({ params }) {
  const page = pages.find((page2) => page2.name === params.slug);
  if (!page)
    throw error(404);
  return {
    page
  };
}
export {
  load
};
