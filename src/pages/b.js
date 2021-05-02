import { header } from "../components/header";
import { footer } from "../components/footer";
import { createComponent } from "../components/createComponent";

export default () => {
  createComponent("Hello", "page", "B");
  header.log();
  footer.log();
};
