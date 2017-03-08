angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController.categorias', {
    url: '/categorias',
    views: {
      'tab1': {
        templateUrl: 'templates/categorias.html',
        controller: 'categoriasCtrl'
      }
    }
  })

  .state('tabsController.inicio', {
    url: '/inicio',
    views: {
      'tab2': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('tabsController.ventas', {
    url: '/ventas',
    views: {
      'tab3': {
        templateUrl: 'templates/ventas.html',
        controller: 'ventasCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.producto'
      2) Using $state.go programatically:
        $state.go('tabsController.producto');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/producto
      /page1/tab2/producto
      /page1/tab3/producto
  */
  .state('tabsController.producto', {
    url: '/producto/:id',
    views: {
      'tab1': {
        templateUrl: 'templates/producto.html',
        controller: 'productoCtrl'
      },
      'tab2': {
        templateUrl: 'templates/producto.html',
        controller: 'productoCtrl'
      },
      'tab3': {
        templateUrl: 'templates/producto.html',
        controller: 'productoCtrl'
      }
    }
  })

  .state('tabsController.productoNuevo', {
    url: '/porductoNuevo',
    views: {
      'tab3': {
        templateUrl: 'templates/productoNuevo.html',
        controller: 'productoNuevoCtrl'
      }
    }
  })

  .state('about', {
    url: '/about',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

  .state('perfil', {
    url: '/perfil',
    templateUrl: 'templates/perfil.html',
    controller: 'perfilCtrl'
  })

$urlRouterProvider.otherwise('/page1/categorias')
});
