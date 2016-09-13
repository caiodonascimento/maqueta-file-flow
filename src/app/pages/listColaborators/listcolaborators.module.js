/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.list-colaborators', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('list-colaborators', {
          url: '/list/colaborators',
          templateUrl: 'app/pages/listColaborators/listColaborators.html',
          title: 'Colaboradores',
          sidebarMeta: {
            icon: 'ion-person-stalker',
            order: 1,
          },
        });
  }

})();
