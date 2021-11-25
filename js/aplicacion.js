const aplicacion = angular.module("universidadApp", []);

aplicacion.controller("postController", function ($http) {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  this.post = {};

  this.posts = [];
  $http.get(URL).then((resultado) => {
    this.posts = resultado.data;
    this.cantidad = this.posts.length;
  });

  this.addPost = function () {
    $http
      .post(URL, {
        title: this.post.title,
        body: this.post.body,
        userId: 1,
      })
      .then((resultado) => {
        console.log(this.post)
        this.posts.push(resultado.data);
        this.post = {};
      })
      .catch((error) => console.log(error));
  };
});
