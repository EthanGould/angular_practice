//create an idex controller
var IndexController = function($scope) {
  $scope.apes = [
    {species: "Gorilla", avg_height: 5, origin: "Africa", endangered: true, image: "images/gorilla.jpg"},
    {species: "Orangutan", avg_height: 5, origin: "Asia", endangered: true, image: "images/orangutan.jpg"},
    {species: "Chimpanzee", avg_height: 4, origin: "Africa", endangered: false, image: "images/chimpanzee.jpg"},
    {species: "Bonobos", avg_height: 4, origin: "Africa", endangered: false, image: "images/bonobo.jpg"}
  ];
};
