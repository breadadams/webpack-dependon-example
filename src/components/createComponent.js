import { join } from "lodash";

export const createComponent = (...strings) => {
  const element = document.createElement("div");

  element.innerHTML = join(strings, " ");

  document.body.appendChild(element);
};
