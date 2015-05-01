(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataService', Data);

  /* @ngInject */
  function Data() {
    var factory = {
      get: get
    };

    return factory;

    ////////////////////////////////////////

    function get() {
      var data = [
        {
          id: 1,
          month: 'january',
          year: 2014,
          values: [
            {amount: 4,   price: 5.4,   type: 'coldWater',   title: 'Cold Water'},
            {amount: 5,   price: 12,    type: 'hotWater',    title: 'Hot Water'},
            {amount: 150, price: 0.322, type: 'electricity', title: 'Electricity'}
          ]
        },
        {
          id: 2,
          month: 'february',
          year: 2014,
          values: [
            {amount: 5,   price: 5.4,   type: 'coldWater',   title: 'Cold Water'},
            {amount: 6,   price: 12,    type: 'hotWater',    title: 'Hot Water'},
            {amount: 167, price: 0.322, type: 'electricity', title: 'Electricity'}
          ]
        },
        {
          id: 3,
          month: 'march',
          year: 2014,
          values: [
            {amount: 3,   price: 5.7,   type: 'coldWater',   title: 'Cold Water'},
            {amount: 5,   price: 15,    type: 'hotWater',    title: 'Hot Water'},
            {amount: 122, price: 0.322, type: 'electricity', title: 'Electricity'}
          ]
        },
        {
          id: 4,
          month: 'april',
          year: 2014,
          values: [
            {amount: 5,   price: 5.7,   type: 'coldWater',   title: 'Cold Water'},
            {amount: 4,   price: 15,    type: 'hotWater',    title: 'Hot Water'},
            {amount: 98,  price: 0.322, type: 'electricity', title: 'Electricity'}
          ]
        },
        {
          id: 5,
          month: 'may',
          year: 2014,
          values: [
            {amount: 4,   price: 5.7,   type: 'coldWater',   title: 'Cold Water'},
            {amount: 7,   price: 16,    type: 'hotWater',    title: 'Hot Water'},
            {amount: 115, price: 0.322, type: 'electricity', title: 'Electricity'}
          ]
        }
      ];

      return data;
    }
  }

})();
