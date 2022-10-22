import { series } from './data.js';
var seriesBody = document.getElementById('series');
function agregarSeries(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        var tdElement = document.createElement("td");
        var buttonElement = document.createElement("button");
        buttonElement.type = "button";
        buttonElement.className = "btn btn-link";
        buttonElement.innerHTML = "".concat(serie.nombre);
        buttonElement.id = "btn" + serie.id;
        trElement.innerHTML = "<td> ".concat(serie.id, " </td>");
        tdElement.appendChild(buttonElement);
        trElement.appendChild(tdElement);
        trElement.innerHTML += "<td> ".concat(serie.canal, " </td> <td> ").concat(serie.temporadas, " </td>");
        seriesBody.appendChild(trElement);
        var botn = document.getElementById("btn" + serie.id);
        botn.onclick = function () { return desplegarInfo(serie); };
    });
}
function darPromedioTemporadas(series) {
    var totalTemporadas = 0;
    var cantidadSeries = series.length;
    var promedio;
    series.forEach(function (serie) { return totalTemporadas += serie.temporadas; });
    promedio = totalTemporadas / cantidadSeries;
    var trElement = document.createElement("p");
    trElement.innerHTML = "".concat("Promedio Temporadas:", " ").concat(promedio);
    seriesBody.appendChild(trElement);
}
function desplegarInfo(serie) {
    var colInfo = document.getElementById("info");
    var cdExistente = document.getElementById("cardId");
    if (cdExistente != null) {
        colInfo.removeChild(cdExistente);
    }
    var cdElement = document.createElement("div");
    var cdBody = document.createElement("div");
    cdElement.className = "card";
    cdElement.id = "cardId";
    cdElement.setAttribute("style", "width: 20rem;");
    cdBody.className = "card-body";
    cdElement.innerHTML = "<img src=".concat(serie.imagen, " class=\"card-img-top\">");
    cdBody.innerHTML = "<h5 class=\"card-title\"> ".concat(serie.nombre, " </h5>\n  <p class=\"card-text\"> ").concat(serie.descripcion, " </p>\n  <a href= ").concat(serie.linkExterno, " class=\"btn btn-primary\" target=\"_blank\"> M\u00E1s informaci\u00F3n </a>");
    cdElement.appendChild(cdBody);
    colInfo.appendChild(cdElement);
}
agregarSeries(series);
darPromedioTemporadas(series);
