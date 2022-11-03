import noScroll from "../global/noScroll";
const Controls = (function () {
  "use strict";
  const inputForm = $(".js-input");
  const language = $(".js-language");
  const linkToTarget = $(".js-scroll");
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
    scrollToTarget: function () {
      linkToTarget.click(function (e) {
        e.preventDefault();
        noScroll.off();
        const _this = $(this);
        const target = _this.attr("data-target");
        if ($(target).length) {
          $("html, body").animate(
            {
              scrollTop: $(target).offset().top,
            },
            800
          );
        } else {
          window.location.href = "./index.html" + target;
        }
      });
    },
    init: function () {
      Controls.labelFormActive();
      Controls.showActiveLocale();
      Controls.scrollToTarget();
    },
  };
})();

export default Controls;
