function filtrarCategoria(listablog, categoria) {
    return listablog.filter(element => element.categoria == categoria);
}

export default filtrarCategoria;
