
export class Blog {
    constructor(titulo, categoria, imagen, descripcion) {
      this.titulo = titulo;
      this.categoria = categoria;
      this.imagen = imagen;
      this.descripcion = descripcion;
    }
  }
  
  export class ListBlog {
    constructor() {
      this.lista = [];
    }
  
    agregar(blog) {
      this.lista.push(blog);
    }
  
    quitar(titulo) {
      this.lista = this.lista.filter(blog => blog.titulo !== titulo);
    }
  
    buscar(titulo) {
      return this.lista.filter(blog => blog.titulo === titulo);
    }
  }
  