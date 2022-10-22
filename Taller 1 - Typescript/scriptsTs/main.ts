import {Serie} from 'serie.js';
import {series} from './data.js';

const seriesBody: HTMLElement = document.getElementById('series')!;

function agregarSeries(series: Serie[]): void {

  series.forEach(serie => {

    let trElement = document.createElement("tr");
    let tdElement = document.createElement("td");

    let buttonElement = document.createElement("button");
    buttonElement.type = "button";
    buttonElement.className = "btn btn-link";
    buttonElement.innerHTML = `${serie.nombre}`;
    buttonElement.id = "btn" + serie.id;

    trElement.innerHTML = `<td> ${serie.id} </td>`;
    tdElement.appendChild(buttonElement);
    trElement.appendChild(tdElement);
    trElement.innerHTML += `<td> ${serie.canal} </td> <td> ${serie.temporadas} </td>`;
    
    seriesBody.appendChild(trElement);

    let botn: HTMLElement = document.getElementById("btn"+serie.id)!;
    botn.onclick = () => desplegarInfo(serie);
  });
} 


function darPromedioTemporadas(series: Serie[]): void {

  let totalTemporadas: number = 0;
  let cantidadSeries: number = series.length;
  let promedio: number;

  series.forEach( (serie) => totalTemporadas += serie.temporadas);

  promedio = totalTemporadas/cantidadSeries;

  let trElement = document.createElement("p");
  trElement.innerHTML = `${"Promedio Temporadas:"} ${promedio}`;

  seriesBody.appendChild(trElement);
}


function desplegarInfo(serie: Serie): void {

  let colInfo: HTMLElement = document.getElementById("info")!;
  let cdExistente = document.getElementById("cardId");

  if (cdExistente != null){
    colInfo.removeChild(cdExistente);
  }
  
  let cdElement: HTMLElement = document.createElement("div");
  let cdBody: HTMLElement = document.createElement("div");

  cdElement.className = "card";
  cdElement.id = "cardId"
  cdElement.setAttribute("style", "width: 20rem;");

  cdBody.className = "card-body";
  
  cdElement.innerHTML = `<img src=${serie.imagen} class="card-img-top">`;

  cdBody.innerHTML = `<h5 class="card-title"> ${serie.nombre} </h5>
  <p class="card-text"> ${serie.descripcion} </p>
  <a href= ${serie.linkExterno} class="btn btn-primary" target="_blank"> Más información </a>`;

  cdElement.appendChild(cdBody);
  colInfo.appendChild(cdElement);
}

agregarSeries(series);
darPromedioTemporadas(series);
