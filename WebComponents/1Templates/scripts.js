(function () {
    var template = document.querySelector('#myTemplate');
    var clone = document.importNode(template.content, true);
    document.getElementById('shell').appendChild(clone);
}());