document.addEventListener("DOMContentLoaded", function () {
  function generate_UUID(quantity) {
    quantity = quantity || 1;

    result = [];

    for (var x = 0; x < quantity; x++) {
      const blockOne = Math.random().toString(14).substring(2, 10);

      const blockTwo = Math.random().toString(14).substring(2, 6);

      const blockThree = Math.random().toString(12).substring(2, 6);

      const blockFour = Math.random().toString(14).substring(2, 6);

      const blockFive = Math.random().toString(16).substring(2, 14);

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
  }

  const keyID = document.getElementById("keyID");

  keyID.innerHTML = "" + generate_UUID(1) + "";

  function copyKey(e) {
    e.preventDefault();
    var copyText = document.getElementById("keyID");
    navigator.clipboard.writeText(copyText.innerHTML);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied :)";

    setTimeout(() => {}, 600);
  }

  function mouseOut(e) {
    e.preventDefault();
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";

    tooltip.style.opacity = "0";

    setTimeout(() => {
      tooltip.style.opacity = "1";
    }, 600);
  }

  const mainKey = document.getElementById("mainKey");

  const tooltip = document.getElementById("myTooltip");

  tooltip.addEventListener("click", copyKey);

  mainKey.addEventListener("click", copyKey);

  keyID.addEventListener("mouseout", mouseOut);
});
