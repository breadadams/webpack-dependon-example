import { createComponent } from "./createComponent";

export const footer = {
  init: () => createComponent("Hello", "footer", "component"),
  log: () => console.log("hello from the footer"),
};
