// Main JS module
// objectFitImages polyfill
import objectFitImages from "object-fit-images";
import Controls from "./modules/Controls";
import Timer from "./modules/Timer";
import Forms from "./modules/Forms";

$(function () {
  objectFitImages();
  Controls.init();
  Timer.init();
  Forms.init();
});
