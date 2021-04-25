import React, { useEffect } from "react";
import useStore from "../../../hooks/useStore";
import { SubTitleHero } from "../../atoms/text/Text";
import useTheme from "../../../hooks/useTheme";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function TypeWriter({ strings }) {
  const { isLoading } = useStore();
  const theme = useTheme();

  useEffect(() => {
    if (isLoading) {
      location.reload();
    }
  }, [isLoading]);

  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 500;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.remove = function () {
    this.toRotate = null;
    this.el = null;
    this.txt = "";
    this.loopNum = 0;
    this.period = 2000;
    this.isDeleting = false;
  };

  TxtRotate.prototype.edit = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };
  TxtRotate.prototype.tick = function () {
    if (this.toRotate) {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

      // eslint-disable-next-line @typescript-eslint/no-this-alias
      var that = this;
      var delta = 150;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    }
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = `.txt-rotate > .wrap { border-right: 3px solid #0563bb; animation: animated-cursor 600ms steps(29, end) infinite } 
                    @keyframes animated-cursor {
                      from {
                        border-right-color: rgb(5, 99, 187, 0.75);
                      }
                      to {
                        border-right-color: transparent;
                      }
                    }`;
    document.body.appendChild(css);
  };
  return (
    <div style={{ marginLeft: 8 }}>
      <SubTitleHero style={{ color: theme.palette.primary }}>
        <span
          className="txt-rotate"
          data-period="2000"
          data-rotate={JSON.stringify(strings)}
        ></span>
      </SubTitleHero>
    </div>
  );
}

export default TypeWriter;
