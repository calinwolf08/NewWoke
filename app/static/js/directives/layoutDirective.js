/**
 * Created by Calin on 7/26/2016.
 */
function customLayout() {
    return {
        scope : {
            first : '@',    //first color for divs
            second: '@',    //alternate color for divs
        },
        restrict: 'A',
        link : function(scope, elem, attr) {
            elem.children().each(function (i, e) {
                $(e).addClass('container-fluid');
                /*$(e).css({
                    'border' : 'solid',
                    'border-color' :'#fff',
                    'border-width' : '25px',
                    'border-bottom-width' : '0px'
                });*/

                if (scope.first === undefined) {
                    scope.first = '#fff';
                }

                if (scope.second === undefined) {
                    scope.second = '#e6e6e6';
                }

                if (i % 2) { //every other div starting with second
                    $(e).css('background-color', scope.second);
                } else {
                    $(e).css('background-color', scope.first);
                }
            });
        }
    }
}