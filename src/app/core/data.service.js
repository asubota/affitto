(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataService', Data);

  /* @ngInject */
  function Data($firebaseArray, API) {
    var storage = $firebaseArray(new Firebase(API));

    var factory = {
      get: get,
      add: add,
      save: save,
      remove: remove,
      getRecord: getRecord
    };

    return factory;

    ////////////////////////////////////////

    function getRecord(index) {
      return storage.$getRecord(index);
    }

    function add(item) {
      return storage.$add(item);
    }

    function remove(index) {
      return storage.$remove(index);
    }

    function save(item) {
      return storage.$save(item);
    }

    function get() {
      return storage.$loaded();
    }
  }

})();
