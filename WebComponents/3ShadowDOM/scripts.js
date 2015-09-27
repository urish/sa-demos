(function () {
    var importContent =
        document.querySelector('link[rel="import"]').import;
    var template = importContent.querySelector('#myTemplate');
    var clone = document.importNode(template.content, true);

    var host = document.querySelector('#shell');
    var root = host.createShadowRoot();
    root.appendChild(clone);
}());