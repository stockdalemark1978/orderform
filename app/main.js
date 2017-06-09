function serviceController ($scope){

    $scope.total = 0;

    $scope.services = 
    [
   {
    name: "Web Development",
    price: 30,
    selected: false
   },
   {
    name: "Design",
    price: 40,
    selected: false   
   },
   {
    name: "Integration",
    price: 35,
    selected: false
   },
   {
    name: "Training",
    price: 20,
    selected: false
   },
   {
    name: "Oreos",
    price: 1000,
    selected: false
   }


];

$scope.addService = function (serviceName, priceVal) {
    if (serviceName != null && priceVal != null) {
    $scope.services.push({name: serviceName, price: priceVal, selected: true});
    //$scope.services.splice(0,0,{name: serviceName, price: priceVal, selected: true})
    $scope.total += priceVal;
    }
};

$scope.removeService = function (index) {
    if ($scope.services[index].selected == true) {
        $scope.total -= $scope.services[index].price;
    }
    $scope.services.splice(index,1);
};

$scope.serviceSelect = function (served) {

    if (served.selected == false) {
        $scope.total += served.price;
    } else {
        $scope.total -= served.price;
    }

    served.selected = !served.selected;    

};




}


angular.module('app', []).controller('serviceController', serviceController);

