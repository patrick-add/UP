const comentario = "Esse COVID é muito perigoso!";
const comentarioCaixaAlta = comentario.toUpperCase()

if (comentarioCaixaAlta.includes('COVID') || comentarioCaixaAlta.includes('PANDEMIA')) {
    console.log('Comentário bloqueado por conter palavras proibidas.')
} else {
    console.log('Comentário autorizado.')
}