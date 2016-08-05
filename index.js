//Made by Justin Matsnev
var elements = document.getElementsByTagName('*');
var arrayOfTrumpNames = ['Donald Trump', 'Donald J. Trump', 'Donald', 'Trump', 'donaldjtrump.com'];

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    if (node.nodeType === 3) {
      var htmlText = node.nodeValue;
        var replacedTrumpText = htmlText.replace(/Donald Trump|Donald J. Trump|Donald|Trump|donaldjtrump.com|realDonaldTrump|Trump's/gi, "🐈");
        var replacedHillaryText = htmlText.replace(/Hillary Diane Rodham Clinton|Hillary Rodham Clinton|Hillary Clinton|Hillary|Clinton|hillaryclinton|hillaryclinton.com/gi, "🌈");
        if (replacedHillaryText !== htmlText) {
          element.replaceChild(document.createTextNode(replacedHillaryText), node);
        }
        if (replacedTrumpText !== htmlText) {
          element.replaceChild(document.createTextNode(replacedTrumpText), node);
        }
    }

  }

}
