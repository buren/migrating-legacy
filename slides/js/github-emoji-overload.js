function emojiOverload() {
  $.getJSON('https://api.github.com/emojis', function(emojis, textStatus) {
    var makeImg = function(src) {
      return '<img src="' + src + '" />';
    };
    for (var name in emojis) {
      $('body').prepend(makeImg(emojis[name]));
    }
  });
}
