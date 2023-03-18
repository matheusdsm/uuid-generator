document.addEventListener("DOMContentLoaded", function () {
  previousKeyHTML = document.getElementById("previous-keyID");

  previousKeyLocalStorage = localStorage.getItem("previous-key");

  previousKeyHTML.innerHTML = previousKeyLocalStorage || "empty";

  window.generateUUID = function generateUUID(quantityInput) {
    generatorQuantity = quantityInput || 1;

    arrayResult = [];

    function generateBlock(positionToString, secondlengthTotal) {
      var stringPosition = positionToString || 16;
      var lengthStart = 2;
      var devLength = secondlengthTotal || 8;
      var lengthTotal = devLength + lengthStart;
      return Math.random()
        .toString(stringPosition)
        .substring(lengthStart, lengthTotal);
    }

    for (var x = 0; x < generatorQuantity; x++) {
      var blockOne = generateBlock(14, 8);

      var blockTwo = generateBlock(14, 4);

      var blockThree = generateBlock(12, 4);

      var blockFour = generateBlock(14, 4);

      var blockFive = generateBlock(16, 12);

      arrayResult[x] =
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

    if (arrayResult.length > 1) {
      return arrayResult;
    } else {
      return arrayResult[0];
    }
  };

  var keyID = document.getElementById("keyID");

  keyID.innerHTML = generateUUID(1);

  window.localStorage.setItem("previous-key", keyID.innerHTML);

  var buttonGenerator = document.getElementById("btn-gen-new");

  buttonGenerator.addEventListener("click", function (event) {
    event.preventDefault();
    previousKeyHTML.innerHTML = keyID.innerHTML;
    keyID.innerHTML = generateUUID(1);
    window.localStorage.setItem("previous-key", keyID.innerHTML);
  });

  function copyKey(event) {
    event.preventDefault();
    var copyText = document.getElementById("keyID");
    navigator.clipboard.writeText(copyText.innerHTML);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied :)";

    setTimeout(function () {}, 600);
  }

  function mouseOut(event) {
    event.preventDefault();
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
