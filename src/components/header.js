import { createComponent } from "./createComponent";

export const header = {
  init: () => createComponent("Hello", "header", "component"),
  log: () => console.log("hello from the header"),
};
