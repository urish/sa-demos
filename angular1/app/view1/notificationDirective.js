(function () {
    'use strict';
    angular.
        module("myApp.view1").
        directive("notification", notificationDirective);

    function notificationDirective() {
        function link(scope, element) {
            element[0].style.display = 'none';

            scope.$watch('notify', function(value) {
                if (value) {
                    element[0].style.display = 'block';
                    fade(element[0]);
                }
            });

            function fade(element) {
                var op = 1;  // initial opacity
                var timer = setInterval(function () {
                    if (op <= 0.1){
                        clearInterval(timer);
                        element.style.display = 'none';
                    }
                    element.style.opacity = op;
                    element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                    op -= op * 0.1;
                }, 100);
            }
        }

        return {
            restrict: 'E',
            templateUrl: 'view1/notificationTemplate.html',
            scope: {
                notify: '='
            },
            link: link
        };
    }
}());