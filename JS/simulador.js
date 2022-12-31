

const ArrayInsulinas=[
  {id:1001,monodroga:"Insulina Humana",accion:"Hipoglucemiante",marca:"INSULINA INSULATARD FLEXPEN",presentacion:"HM 100UI lap.prellx5x3ml",potencia:100,unidadesCaja:1500, precio:18000, laboratorio:"Raffi S.A", img:"https://cdn.shop-apotheke.com/images/D00/546/578/D00546578-p10.jpg"},
  {id:1002,monodroga:"Insulina Aspartica",accion:"Hipoglucemiante",marca:"INSULINA NOVORAPID FLEXPEN",presentacion:"100UI lap.prellx5x3ml",potencia:100,unidadesCaja:1500, precio:32000, laboratorio:"Marke S.A", img:"https://cajausa.com/wp-content/uploads/2021/02/novorapid-100-x-5-x-3.jpg"},
  {id:1003,monodroga:"Insulina Gluglisina",accion:"Hipoglucemiante",marca:"INSULINA APIDRA SOLOSTAR",presentacion:"100UI lap.prellx5x3ml",potencia:100,unidadesCaja:1500, precio:38000, laboratorio:"Cassaro S.A", img:"https://farmacenter.cdn1.dattamax.com/userfiles/images/productos/600/611481.jpg?v=1655749110"},
  {id:1004,monodroga:"Insulina Glargina",accion:"Hipoglucemiante",marca:"INSULINA LANTUS SOLOSTAR",presentacion:"100UI lap.prellx5x3ml",potencia:100,unidadesCaja:1500, precio:45000, laboratorio:"Casco S.A", img:"https://rehberilac.com/wp-content/uploads/2022/01/LANTUS-SOLOSTAR-100-U-ML-3-ML-.LIK-KARTUS-ICEREN-ENJ.-KALEMI.png"},
  {id:1005,monodroga:"Insulina Glargina",accion:"Hipoglucemiante",marca:"INSULINA TOUJEO",presentacion:"300U/ml lap.x3x1.5ml",potencia:300,unidadesCaja:1350, precio:41000, laboratorio:"Raffi S.A", img:"https://statics-diariomedico.uecdn.es/cms/styles/landscape_xl/azblob/2020-09/Toujeo_pluma_precargada.jpg.webp?itok=xAAfpjxN"},
  {id:1006,monodroga:"Insulina Detemir",accion:"Hipoglucemiante",marca:"INSULINA LEVEMIR FLEXPEN",presentacion:"100UI lap.prellx5x3ml",potencia:100,unidadesCaja:1500, precio:39000, laboratorio:"Beriham S.A", img:"http://midiabetes.cl/imag/noticias/2012/04/levemir.jpg"},
  {id:1007,monodroga:"Insulina Lispro",accion:"Hipoglucemiante",marca:"INSULINA HUMALOG KWIKPEN",presentacion:"100UI lap.prellx5x3ml",potencia:100,unidadesCaja:1500, precio:41000, laboratorio:"Raffi S.A", img:"https://s.cornershopapp.com/product-images/3410657.jpg?versionId=AtJKwXLVhpgFeWpv3Jwm0gVI3E.1BKqT"},
  {id:1008,monodroga:"Insulina Lispro",accion:"Hipoglucemiante",marca:"INSULINA HUMALOG KWIKPEN 200",presentacion:"200UI lap.prellx5x3ml",potencia:200,unidadesCaja:3000, precio:46000, laboratorio:"Marke S.A", img:"https://cdn.shop-apotheke.com/images/D10/820/098/D10820098-p10.jpg"},
  {id:1009,monodroga:"Insulina Degludec",accion:"Hipoglucemiante",marca:"INSULINA TRESIBA FLEXTOUCH",presentacion:"100UI lap.prellx5x3ml",potencia:100,unidadesCaja:1500, precio:41000, laboratorio:"Cassaro S.A", img:"https://cendis.com.gt/wp-content/uploads/2022/08/034502.jpg"},
  {id:1010,monodroga:"Insulina Degludec",accion:"Hipoglucemiante",marca:"INSULINA TRESIBA FLEXTOUCH 200",presentacion:"200UI lap.prell x3x3ml",potencia:100,unidadesCaja:1800, precio:52000, laboratorio:"Beriham S.A", img:"https://cdn.shop-apotheke.com/images/D11/695/086/D11695086-p1.jpg"},
  {id:1011,monodroga:"Insulina.Lispro+ins.lispro protamina",accion:"Hipoglucemiante",marca:"INSULINA HUMALOG MIX 25 KWIKPEN",presentacion:"100UI lap.prellx5x3ml",potencia:100,unidadesCaja:1500, precio:42000, laboratorio:"Raffi S.A", img:"https://www.fahorro.com/media/amasty/amoptmobile/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/7/5/7501082208764_png.webp"},
  {id:1012,monodroga:"Insulina Humana",accion:"Hipoglucemiante",marca:"INSULINA INSULATARD PENFILL",presentacion:"HM 100UI CARTUCHO x5x3ml",potencia:100,unidadesCaja:1500, precio:13000, laboratorio:"Beriham S.A", img:"https://cdn.shopify.com/s/files/1/0580/5257/5405/products/2652_1_f7942911-966c-44a7-a459-288eb3deafa0_800x.jpg?v=1629727346"},
  ];

  localStorage.setItem("ArrayInsulinas", JSON.stringify(ArrayInsulinas))   // ------------------------------------------LocalStorag
  const ArrayInsulinasEnLocalSorag=JSON.parse(localStorage.getItem(ArrayInsulinas))//-----------------------------------recupero de LocalSorage
  
 const calculador = document.getElementById('calculador').addEventListener('submit', calcularCajas); //-----------------Evento a calcular cajas
 function calcularCajas (e){
  //inputs
  const inputUnidades= document.getElementById('inputUnidades').value;
  const inputInsulinas= document.getElementById('inputInsulinas').value;
  const inputDispensa= document.getElementById('inputDispensa').value;
//calculos 
const unidadesDispensa = inputUnidades*inputDispensa;
const cajasDispensa=unidadesDispensa/inputInsulinas;


if (inputUnidades>6 && inputUnidades<200){
        Swal.fire({  //resultado en Alert
          icon: 'success',
          title:'Dispensar ' + Math.ceil(cajasDispensa)+ ' Cajas', 
          text: 'Calculo exacto '+ cajasDispensa.toFixed(2)+ ' cajas de insulinas.',
          backdrop: true,
          confirmButtonText: 'VOLVER',
          confirmButtonColor:'rgb(235, 60, 150)',
          }); 
      }else{
          Swal.fire({ 
            icon: 'question',
            title:'UI dia Fuera de Rango', 
            text: 'No dispensar, Consultar a Auditoria',
            backdrop: true,
            confirmButtonText: 'VOLVER',
            confirmButtonColor:'rgb(235, 60, 150)',
            })}
            
  e.preventDefault();
     }

     //ASINCRONIA........ setInterval para agregar...mas adelante

let domMarcas = document.getElementById("domMarcas"); // ---------------------------------------------ARRAY 2 de OBJETOS + FOREACH + DOM
const listaMarca = ( ArrayInsulinas, domMarcas)=>{
  let acumulados = '';
   ArrayInsulinas.forEach(item => {
     acumulados += `
      <li class="list-group-item" id="">${item.marca}</li>
      `; });
    domMarcas.innerHTML= acumulados;}
    listaMarca(ArrayInsulinas,domMarcas);

let domVademecum = document.getElementById("domVademecum");//---------------------------------------- DOM, + metodo
const vade = ( ArrayInsulinas, domVademecum)=>{
  let acumulado = '';
    ArrayInsulinas.forEach(item => {
      acumulado += `
       <div class="col-md-4 m-0 ">
        <div class="card mt-3 mx-2" style="">
         <img  src="${item.img}" class="card-img-top" >
          <div class="card-body">
          <p class="card-text fst fw-semibold lh-1"> ${item.marca}</p>
          <p class="card-text fst-italic lh-1">Troquel: ${item.id}</p>
          <p class="card-text fst-italic lh-1">Monodroga: ${item.monodroga}</p>
          <p class="card-text fst-italic lh-1">Accion: ${item.accion}</p>
          <p class="card-text fst-italic lh-1">Presentacion: ${item.presentacion}</p>
          <p class="card-text fst-italic lh-1">Potencia: ${item.potencia}</p>
          <p class="card-text fst-italic lh-1">Unidades en caja: ${item.unidadesCaja}</p>
          <p class="card-text fst-italic lh-1">Cantidad: ${item.laboratorio}</p>
          <h6 class="card-title lh-1">Precio: $ ${item.precio.toLocaleString('es',{minimumFractionDigits: 2, maximumFractionDigits: 2})}</h6>
        </div>
       </div>
    </div> `;
    });
    domVademecum.innerHTML= acumulado;
    }
    vade(ArrayInsulinas,domVademecum)


//ALTA AFILIADOS

const locSge = 'AltaAfiliados';  //---------------------------------------------------  JSON ALTAS---  ////
let AltaAfiliados= JSON.parse(localStorage.getItem(locSge)) || [];


const formularioaltas = document.getElementById('formularioaltas');  //----------------------------------- DOM de form altas 
const Altas = document.getElementById('Altas');  //----------------------------------- DOM de altas 
const botonAltas= document.getElementById('botonAltas');


class AltaAfiliado {
   static id= 1;
constructor ( id, credencial , dni , nombreyapellido , obrasocial){
    this.id=id;
    this.credencial=credencial;
    this.dni=dni;
    this.nombreyapellido=nombreyapellido;
    this.obrasocial=obrasocial;   
}}

const sumaId=()=>{
    let id=1;
    while(AltaAfiliados.some( AltaAfiliado => AltaAfiliado.id === id)){
       id++ }
       return id; }

const eventoGuardar = (e) => {   //----------------------------evento para dar de alta a los Afiliados
  e.preventDefault();


const credencial= document.getElementById('inputcredencial').value;
const dni= document.getElementById('inputdni').value;
const nombreyapellido= document.getElementById('inputnombre').value;
const obrasocial= document.getElementById('inputobrasocial').value;


const nuevaAlta= new AltaAfiliado ( sumaId(), credencial, dni, nombreyapellido, obrasocial);  // Guardo nuevo afi. en array y en storage
    AltaAfiliados.push(nuevaAlta); 
    localStorage.setItem(locSge, JSON.stringify(AltaAfiliados));
    
Swal.fire({        //ALERTA ALTA AFILIADO--------------------------------------------------------Uso de SwetAlert librerias
    icon: 'success',
    title: 'ALTA GUARDADA CON EXITO',
    html: `<p> <strong>Afiliado:</strong> ${nuevaAlta.nombreyapellido} </p> 
     <p><strong> Dni:</strong> ${nuevaAlta.dni} </p>`,
    confirmButtonText: 'VOLVER',
    confirmButtonColor:'rgb(235, 60, 150)',
    });   
    }

const mostrarAltas=()=> {  //-----mostrar altas con foreach
  let AltasLista='';
    AltaAfiliados.forEach ( AltaAfiliado => {
      AltasLista += `
      <div class="card my-2 ms-2" style="width: 43rem;">
          <table class="table-primary">
          <tr>
           <th scope="" >${AltaAfiliado.id}</th>
           <td>${AltaAfiliado.credencial}</td>
           <td>${AltaAfiliado.dni}</td>
           <td>${AltaAfiliado.nombreyapellido}</td>
           <td>${AltaAfiliado.obrasocial}</td>
          </tr> 
          </table>   
      </div>`    
      })  
      Altas.innerHTML = AltasLista;
      }
      localStorage.setItem(locSge, JSON.stringify(AltaAfiliados));


formularioaltas.addEventListener('submit', eventoGuardar);
botonAltas.addEventListener('click', mostrarAltas);

let contenedorBusquedaAfi = document.getElementById("contenedorBusquedaAfi") //BUSCADOR DE AFILIADOS/////----------DOM de registro
  let reg = document.createElement("div");
      reg.innerHTML=`
      <div class="card border-dark container text-center mb-1 p-0" style="max-width: 44rem; background-color:  rgb(80, 50, 145);">
       <div class="card-header" id="color4"><h6>BUSQUEDA DE PACIENTES</h6></div>
        <form class="container-fluid text-center py-lg-2" id=""  > 
         <div class=" d-flex my-1">
          <input type="number" id="inputBusquedaAfi" class="form-control me-2 "  placeholder="Ingresar Nº de Credencial">
          <button type="submit" class="btn btn-primary px-3" id="bo" >BUSCAR</button>
         </div>
        </form>
        <div class="p-2">
         <div id="resultadoBusqueda"></div>
        </div>
       </div>
      </div>`;
      contenedorBusquedaAfi.append(reg);

  contenedorBusquedaAfi.addEventListener('submit', busquedaAfi); //----------------------------------evento buscar Afiliado
    function busquedaAfi (e){
     const inputBusquedaAfi= document.getElementById('inputBusquedaAfi').value; 
      let bu =AltaAfiliados.find(Altas=> Altas.credencial === inputBusquedaAfi); //--------------------Metodo buscar Afi. por credencial
       Swal.fire({  //resultado de busqueda Alert
           icon: 'success',
           title:'Afiliado: ' + bu.nombreyapellido, 
           html: '<b>Credencial:</b> ' + bu.credencial + '<br><b>DNI:</b> ' + bu.dni+'<br><b>Obra Social:</b> ' + bu.obrasocial,
           confirmButtonText: 'VOLVER',
           confirmButtonColor:'rgb(235, 60, 150)',});
           e.preventDefault();
           }

  const temperaturaGrados= document.getElementById('temperatura-grados') // ----------------------------API FETCH----del tiempo
  const cielotexto= document.getElementById('cielo-texto')
  const ciudad= document.getElementById('ciudad')
  const iconoTiempo= document.getElementById('icono-tiempo')
  const lat= -34.6
  const lon= -58.45
  const tiempoUrl= `https://api.openweathermap.org/data/2.5/weather?lat=${-34.6}&lon=${-58.45}&lang=es&appid=a1a89df45f2c69d5e98224a8cf667099&units=metric`

  const tiempoApi=()=>{
   fetch(tiempoUrl)
     .then( response => { return response.json()})
     .then( data=>{
     console.log(data)

    let icono= data.weather[0].icon  /// ICONO DEL CIELO
     iconoTiempo.innerHTML= `<img src="https://openweathermap.org/img/wn/${icono}@2x.png" height="40" width="40">`;
    let grados= Math.floor(data.main.temp)
     temperaturaGrados.textContent= `${grados} ºC ,`   /// temperatura----
    let cielo= data.weather[0].description  /// estado del cielo----
     cielotexto.textContent= `${cielo}` 
    let ciud= data.name       /// ubicacion------
     ciudad.innerText= `, ${ciud}, AR.`
     })
   .catch( error=>{
    console.log(error)
    })}

  tiempoApi();
  


   