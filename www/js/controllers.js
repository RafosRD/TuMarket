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


  app.controller('signupCtrl', function($scope, $ionicPopup, $state) {
    $scope.master = {};

    // Triggered on a button click, or some other target
    $scope.ConfirmLogin = function(User) {
      if (User.Password1!=User.Password2) {
        var alertPopup = $ionicPopup.alert({
          title: 'Validacion de Registro',
          template: 'Las Contrasenas no coinciden. Verifique e intente nuevamente '
        });
      }
      else
      if (User.Name===undefined) {
        var alertPopup = $ionicPopup.alert({
          title: 'Validacion de Registro',
          template: 'Él nombre del usuario es incorrecto. Verifique e intente nuevamente'
        });
      }
      else
      if (User.Password1===undefined) {
        var alertPopup = $ionicPopup.alert({
          title: 'Validacion de Registro',
          template: 'Él contrasena es incorrecta. Verifique e intente nuevamente'
        });
      }
      else
      if (User.Email===undefined) {
        var alertPopup = $ionicPopup.alert({
          title: 'Validacion de Registro',
          template: 'Él Correo electronico del usuario es incorrecto. Verifique e intente nuevamente'
        });
      }
      else
      if (User.Phone===undefined) {
        var alertPopup = $ionicPopup.alert({
          title: 'Validacion de Registro',
          template: 'Él Telefono del usuario es incorrecto. Verifique e intente nuevamente'
        });
      }
      else {
        var alertPopup = $ionicPopup.alert({
          title: 'Validacion de Registro',
          template: 'Usuario ' + User.Name + ' fue creado satisfactoriamente'
        })
        window.location.href="#/page1/categorias";
      }
    }
  })


app.controller('productoCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {

  $scope.id = $stateParams.id;

  $scope.producto = getProducto($scope.id)

  $scope.partner = getPartner($scope.producto.vendedor_id)

  $scope.imagenes = getImagenes($scope.id)


}])
var idProducto = 2;
app.controller('productoNuevoCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {

  $scope.productoNuevo = {
    id: (idProducto= idProducto + 1).toString(),
    nombre: null,
    precio: null,
    categoria: null,
    descripcion:null,
    vendedor_id: "1",
    introImagen: "img/noimage.png"
  }

  $scope.crear = function () {

    productos.push($scope.productoNuevo)

  }




}])

app.controller('aboutCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

app.controller('perfilCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
