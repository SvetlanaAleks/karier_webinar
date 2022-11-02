const Controls = (function () {
  "use strict";
  const inputForm = $(".js-input");
  const language = $(".js-language");
  return {
    labelFormActive: function () {
      inputForm.keyup(function () {
        const _this = $(this);
        if (_this.val()) {
          _this.addClass("active");
        } else {
          _this.removeClass("active");
        }
      });
    },
    showActiveLocale: function () {
      const activeLang = $(`.js-language[data-lang=${locale}]`);
      language.removeClass("active");
      activeLang.addClass("active");
    },
    init: function () {
      Controls.labelFormActive();
      Controls.showActiveLocale();
    },
  };
})();

export default Controls;
