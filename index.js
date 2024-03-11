var $ = function (element) {
    return document.querySelector(element);
};
$("#meedo-home-text").addEventListener("onhover", function () {
    alert("ooooo");
});
$("#meedo-home-text").classList.add("add-red");
setTimeout(function () {
    $("#meedo-home-text").classList.add("add-opacity");
    $("#dribbble").style = "opacity: .6";
}, 22000);
