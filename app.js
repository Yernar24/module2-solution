(function() {
    'use strict';
  
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var toBuy = this;
  
      toBuy.items = ShoppingListCheckOffService.getToBuyItems();
  
      toBuy.buyItem = function(itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
      };
    }
  
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var bought = this;
  
      bought.items = ShoppingListCheckOffService.getBoughtItems();
    }
  
    function ShoppingListCheckOffService() {
      var service = this;
  
      // Initial list of items to buy
      var toBuyItems = [
        { name: "cookies", quantity: 10 },
        { name: "sodas", quantity: 5 },
        { name: "chips", quantity: 3 },
        { name: "chocolates", quantity: 7 },
        { name: "bread", quantity: 2 }
      ];
      var boughtItems = [];
  
      service.buyItem = function(itemIndex) {
        var item = toBuyItems.splice(itemIndex, 1)[0];
        boughtItems.push(item);
      };
  
      service.getToBuyItems = function() {
        return toBuyItems;
      };
  
      service.getBoughtItems = function() {
        return boughtItems;
      };
    }
  })();
  