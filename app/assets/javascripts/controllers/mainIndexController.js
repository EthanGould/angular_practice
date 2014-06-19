//create an idex controller
var IndexController = function($scope) {
  $scope.apes = [
    {species: "Gorilla", avg_height: 5, origin: "Africa", endangered: true},
    {species: "Orangutan", avg_height: 5, origin: "Asia", endangered: true},
    {species: "Chimpanzee", avg_height: 4, origin: "Africa", endangered: false},
    {species: "Bonobos", avg_height: 4, origin: "Africa", endangered: false}
  ];
};
