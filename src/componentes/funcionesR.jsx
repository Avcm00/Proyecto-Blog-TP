//Clase blogs
export class Blog {
    constructor(titulo, categoria, imagen, descripcion) {
      this.titulo = titulo;
      this.categoria = categoria;
      this.imagen = imagen;
      this.descripcion = descripcion;
      this.comentario = []
    }
  }
  //Clase Lista de Blogs
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
  //Reducir texto
  export const truncate = (description, trunc) => {
  

    const words = description.split(" ");
    if (words.length > trunc){
      return words.slice(0, trunc).join(" ") + "..." 
      
    }else{
      return description;

    } 
  };
  // Publicar Blog
