(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.kanbanadv')
        .directive('comVyomVyomlibKanbanadvDesign', function () {
            return {
                restrict: 'E',
                template: '<h1>Kanbanadv</h1>',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();