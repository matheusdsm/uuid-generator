document.addEventListener("DOMContentLoaded", function () {
  previousKeyHTML = document.getElementById("previous-keyID");

  previousKeyLocalStorage = localStorage.getItem("previous-key");

  previousKeyHTML.innerHTML = previousKeyLocalStorage || "empty";

  window.generate_UUID = function generate_UUID(quantity) {
    quantity = quantity || 1;

    result = [];

    function generate_block(tostring, lengthTotal_) {
      var strPos = tostring || 16;
      var lengthStart = 2;
      var devLength = lengthTotal_ || 8;
      var lengthTotal = devLength + lengthStart;
      return Math.random().toString(strPos).substring(lengthStart, lengthTotal);
    }

    for (var x = 0; x < quantity; x++) {
      var blockOne = generate_block(14, 8);

      var blockTwo = generate_block(14, 4);

      var blockThree = generate_block(12, 4);

      var blockFour = generate_block(14, 4);

      var blockFive = generate_block(16, 12);

      result[x] =
        blockOne +
        "-" +
        blockTwo +
        "-" +
        blockThree +
        "-" +
        blockFour +
        "-" +
        blockFive;
    }

    if (result.length > 1) {
      return result;
    } else {
      return result[0];
    }
  };

  var keyID = document.getElementById("keyID");

  keyID.innerHTML = "" + generate_UUID(1) + "";

  window.localStorage.setItem("previous-key", keyID.innerHTML);

  function copyKey(e) {
    e.preventDefault();
    var copyText = document.getElementById("keyID");
    navigator.clipboard.writeText(copyText.innerHTML);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied :)";

    setTimeout(function () {}, 600);
  }

  function mouseOut(e) {
    e.preventDefault();
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";

    tooltip.style.opacity = "0";

    setTimeout(function () {
      tooltip.style.opacity = "1";
    }, 600);
  }

  var mainKey = document.getElementById("mainKey");

  var tooltip = document.getElementById("myTooltip");

  tooltip.addEventListener("click", copyKey);

  mainKey.addEventListener("click", copyKey);

  keyID.addEventListener("mouseout", mouseOut);
});
