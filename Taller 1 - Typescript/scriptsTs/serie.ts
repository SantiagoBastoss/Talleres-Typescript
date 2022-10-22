export class Serie{

    id: number;
    nombre: String;
    canal: String;
    temporadas: number;
    descripcion: String;
    imagen: String;
    linkExterno: String;
  
    constructor(id:number, nombre:String, canal:String, temporadas:number, descripcion:String, linkExterno:String, imagen:String,){
  
      this.id = id;
      this.nombre = nombre;
      this.canal = canal;
      this.temporadas = temporadas;
      this.descripcion = descripcion;
      this.imagen = imagen;
      this.linkExterno = linkExterno;
    }
  }