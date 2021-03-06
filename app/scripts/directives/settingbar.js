'use strict';

/**
 * @ngdoc directive
 * @name angularbootApp.directive:settingBar
 * @description
 * # settingBar
 */
angular.module('angularbootApp')
  .directive('settingBar', function () {
    return {
      templateUrl: 'views/settingBar.html',
      scope: {
        setting:'=settingBar'
      },
      controller: function($scope) {
        $scope.updatePercentage= 
          function(setting, value) {
          var newVal = setting.value + value
          if (newVal < 0) {
            newVal = 0;
          }
          else if(newVal > 100) {
            newVal = 100
          }
          setting.value = newVal
        }
      }
    };
  });
