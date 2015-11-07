(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataService', Data);

  /* @ngInject */
  function Data($firebaseArray, $firebaseObject, API, $window, $q) {
    var fireRef = new $window.Firebase(API);
    var storage = $firebaseArray(fireRef);

    var factory = {
      get: get,
      add: add,
      save: save,
      remove: remove,
      getRecord: getRecord,
      getLast: getLast
    };

    return factory;

    ////////////////////////////////////////

    function getRecord(index) {
      return storage.$loaded().then(function() {
        return storage.$getRecord(index);
      });
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

    function getLast() {
      var defer = $q.defer();

      function _parse(data) {
        return data.values.reduce(function(o, item) {
          o[item.type] = item.price;
          return o;
        }, {});
      }

      $firebaseArray(fireRef.limitToLast(1)).$loaded().then(function(item) {
        defer.resolve(_parse(item[0]));
      });

      return defer.promise;
    }
  }

})();
