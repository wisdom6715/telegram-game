var bonusCoin = document.querySelectorAll(".coin");

function coinEffect() {
    for (var i = bonusCoin.length - 1; i >= 0; i--) {
        bonusCoin[i].addEventListener("click", function() {
            var currentCoin = this; // Get the clicked coin element
            if (currentCoin.style.visibility === "visible") {
                currentCoin.style.visibility = "hidden";
                console.log(currentCoin);
            } else {
                currentCoin.style.visibility = "hidden";
            }
        });
    }
}

coinEffect();

