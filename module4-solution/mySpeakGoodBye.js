(function goodbyeSpeaker (window) {
    var goodbyeSpeaker = {};
    var speakWord = "Good Bye";
    goodbyeSpeaker.speak = function (names) {
        console.log(speakWord + " " + names);
    }
    window.goodbyeSpeaker = goodbyeSpeaker;
})(window);
