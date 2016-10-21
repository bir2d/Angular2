export class Restaurante {
    
  private id: number;
  private nombre: string;
  private direccion: string;
  private descripcion: string;
  private imagen: string;
  private precio: string
  constructor(id: number = null, nombre: string = null, direccion: string = null, descripcion: string = null, imagen: string = null, precio: string = null) {
    if (id !== null) {
      this.id = id;
    }
    if (nombre !== null) {
      this.nombre = nombre;
    }
    if (direccion !== null) {
      this.direccion = direccion;
    }
    if (imagen !== null) {
      this.imagen = imagen;
    }
    if (descripcion !== null) {
      this.descripcion = descripcion;
    }
    if (precio !== null) {
      this.precio = precio;
    }
  }
  public getId(): number {
    return this.id
  }

  public setId(id: number) {
    this.id = id;
  }

  public setNombre(nombre: string) {
    this.nombre = nombre;
  }
  public getNombre(): string {
    return this.nombre;
  }
  public setDireccion(direccion: string) {
    this.direccion = direccion;
  }
  public getDireccion(): string {
    return this.direccion;
  }
  public setImagen(imagen: string) {
    this.imagen = imagen;
  }
  public getImagen(): string {
    return this.imagen;
  }

  public setDescripcion(descripcion: string) {
    this.descripcion = descripcion;
  }
  public getDescripcion(): string {
    return this.descripcion;
  }
  public setPrecio(precio: string) {
    this.precio = precio;
  }
  public getPrecio(): string {
    return this.precio;
  }
}