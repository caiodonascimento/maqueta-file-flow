/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.list-personal', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('list-personal', {
          url: '/list/personal',
          templateUrl: 'app/pages/personal/personal.html',
          controller: 'PersonalCtrl',
          title: 'Personal',
          sidebarMeta: {
            icon: 'ion-ios-people',
            order: 3,
          },
        });
  }

})();
