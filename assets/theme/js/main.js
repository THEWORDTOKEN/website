var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
            if (!items[i].classList.contains("in-view")) {
                items[i].classList.add("in-view");
            }
        } else if (items[i].classList.contains("in-view")) {
            items[i].classList.remove("in-view");
        }
    }
}


function copyText() {
    // Copy the text inside the text field
    navigator.clipboard.writeText("https://pancakeswap.finance/swap?chain=bsc&inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&outputCurrency=0xf00cD9366A13e725AB6764EE6FC8Bd21dA22786e");

    // Alert the copied text
    alert("Swap Link copied, Paste in DApps to purchase $TWD");
}
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
