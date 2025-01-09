!(function (e) {
    "use strict";
    function t() {
      e("#contactForm")
        .removeClass()
        .addClass("shake animated")
        .one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          function () {
            e(this).removeClass();
          }
        );
    }
    function a(t, a) {
      if (t) var n = "h4 text-left tada animated text-success";
      else n = "h4 text-left text-danger";
      e("#msgSubmit").removeClass().addClass(n).text(a);
    }
    e("#contactForm")
      .validator()
      .on("submit", function (n) {
        var s,
          i,
          o,
          m,
          r,
          flag = true;
        n.isDefaultPrevented()
          ? (t(), a(!1, "Did you fill in the form properly?"))
          : (flag = false);
        n.preventDefault();
        s = e("#name").val();
        i = e("#email").val();
        o = e("#msg_subject").val();
        m = e("#phone").val();
        r = e("#message").val();
        if (!flag) {
          sendEmail(s, i, o, m, r);
        }
      });
  })(jQuery);
  