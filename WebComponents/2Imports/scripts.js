(function () {
    var importContent =
        document.querySelector('link[rel="import"]').import;
    var template = importContent.querySelector('#myTemplate');
    var clone = document.importNode(template.content, true);
    document.querySelector('#shell').appendChild(clone);
}());