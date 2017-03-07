var app = angular.module('app.controllers', [])
var productos = [
  {id:"1", nombre:"iphone 7 plus",precio:15000,categoria:"Celulares",descripcion:"el equipo esta totalmente nuevo en su caja", vendedor_id:"2", introImagen:"img/i71.png"},
  {id:"2", nombre:"Samsung galaxy s7",precio:10000,categoria:"Celulares",descripcion:"el equipo tiene su caja, tiene algunos sintomas de desgaste", vendedor_id:"1", introImagen:"img/s71.jpg"}
];

var partners = [
  {id:"1", nombre:"Pedro Perez", telefono:"8099801234"},
  {id:"2", nombre:"Juan Rodrigez", telefono:"8499801234"}
];

var imagenes = [
  {id:"1", url:"img/i71.png", product_id:"1"},
  {id:"2", url:"img/i72.jpg", product_id:"1"},
  {id:"3", url:"img/s71.jpg", product_id:"2"},
  {id:"4", url:"img/s72.jpg", product_id:"2"},
]

function getImagenes(id) {
  return imagenes.filter(function (imagen) {
    return imagen.product_id == id
  });

}

function getPartner(id) {
  return partners.filter(function (partner) {
    return partner.id == id;
  })[0];
}


function getProducto(id) {
  return productos.filter(function (producto) {
      return producto.id == id;
  })[0];
}

app.controller('categoriasCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {

  $scope.productos = productos;
  $scope.imagenes = imagenes;


}])

app.controller('inicioCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {

  $scope.productos = productos;


}])

app.controller('ventasCtrl', ['$scope', '$stateParams',

function ($scope, $stateParams) {

  $scope.productos = productos;


}])

app.controller('settingsCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

app.controller('loginCtrl', ['$scope', '$stateParams',

function ($scope, $stateParams) {


}])

app.controller('signupCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

app.controller('productoCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {

  $scope.id = $stateParams.id;

  $scope.producto = getProducto($scope.id)

  $scope.partner = getPartner($scope.producto.vendedor_id)

  $scope.imagenes = getImagenes($scope.id)


}])

app.controller('productoNuevoCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

app.controller('aboutCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

app.controller('perfilCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
