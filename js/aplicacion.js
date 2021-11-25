const aplicacion = angular.module("universidadApp", []);

aplicacion.controller("postController", function ($http) {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  this.posts = [];
  $http.get(URL).then(resultado => {
    console.log(resultado)
    this.posts = resultado.data
  });
});
