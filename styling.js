var laughter = "hahaha";
console.log(laughter);
(function () {
    var btn = document.getElementsByClassName("feedback-body__submit")[0];
    btn.onclick = function(e) {
        e.preventDefault()
        var laughter = "hahaha";
        console.log(laughter);
    }
 })()