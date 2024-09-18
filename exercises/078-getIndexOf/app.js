// Write your function here
const getIndexOf = (buscado, string) => {
    return string.search(buscado)
}

/* 
Usa indexOf() si solo necesitas buscar un texto literal y no necesitas expresiones regulares.
Usa search() si necesitas aprovechar el poder de las expresiones regulares para realizar búsquedas más complejas.
*/