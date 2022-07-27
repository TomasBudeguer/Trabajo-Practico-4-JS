class Libro {
    constructor(ISBN, titulo, autor, numPaginas){
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }
    mostrarLibro(){
        document.write(`<p>El libro "${this.titulo}" con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} paginas</p>`)
    }
}

let libro1 = new Libro('978-84-9759-220-8', 'Cien años de soledad', 'Gabriel García Márquez', 496)
let libro2 = new Libro('978-84-7888-720-0', 'El Principito', 'Antoine De Saint-exupéry', 120)

libro1.mostrarLibro()
libro2.mostrarLibro()
if(libro1.numPaginas > libro2.numPaginas){
    document.write(`<p>El libro ${libro1.titulo} tiene mas paginas</p>`)
}else{
    document.write(`<p>El libro ${libro2.titulo} tiene mas paginas</p>`)
}

