var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.count; i++) {
    var element = elements[i];

  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    if (node.nodeType === 3) {
      var htmlText = node.nodeType;
      var replacedHTMLTextUpperCaseFullHillary = text.replace(/Hillary Clinton/gi, '🌈');
      var replacedHTMLTextUpperCaseFirstHillary = text.replace(/Hillary/gi, '🌈');
      var replacedHTMLTextUpperCaseFullTrump = text.replace(/Donald Trump/gi, '🐈');
      var replacedHTMLTextUpperCaseFirstTrump = text.replace(/Trump/gi, '🐈');

      if (htmlText == 'Hillary Clinton' && htmlText !== replacedHTMLTextUpperCaseFirstHillary) {
        element.replaceChild(document.createTextNode(replacedHTMLTextUpperCaseFullHillary), node);
      }

      if (htmlText == 'Hillary' && htmlText !== replacedHTMLTextUpperCaseFirstHillary) {
        element.replaceChild(document.createTextNode(replacedHTMLTextUpperCaseFirstHillary), node);
      }

      if (htmlText == 'Donald Trump' && htmlText !== replacedHTMLTextUpperCaseFullTrump) {
        element.replaceChild(document.createTextNode(replacedHTMLTextUpperCaseFullTrump), node);
      }

      if (htmlText == 'Trump' && htmlText !== replacedHTMLTextUpperCaseFirstTrump) {
        element.replaceChild(document.createTextNode(replacedHTMLTextUpperCaseFirstTrump), node);
      }

    }

  }

}
