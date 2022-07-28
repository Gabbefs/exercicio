// Construtor function

// criar um  objeto postagem
//titulo, mensagem, autor, visualizações, comentarios[], estaAoVivo

function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizações = 0,
    this.comentarios = [],
    this.estaAoVivo = false
};

const postagem1 = new Postagem ('A', 'B', 'C');
    console.log(postagem1);
