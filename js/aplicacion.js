const aplicacion = angular.module("universidadApp", []);

aplicacion.controller("productoCtrl", function () {
  this.productos = [
    { id: 1, nombre: "Salchipapa", precio: 503612 },
    { id: 2, nombre: "Choripapa", precio: 503612 },
  ];
  this.cantidad = this.productos.length;

  this.agregarProducto = function () {
    if (this.nombre.trim() !== "" && this.precio != null) {
      this.cantidad = this.productos.length + 1;
      this.productos.push({
        id: this.cantidad,
        nombre: this.nombre,
        precio: this.precio,
      });
      this.nombre = "";
      this.precio = null;
    }
  };
});
