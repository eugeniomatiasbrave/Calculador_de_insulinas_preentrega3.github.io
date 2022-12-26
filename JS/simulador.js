
//OBJETOs y ARRAYS

class Insulina {
  constructor(vademecum) {
    this.id = vademecum.id;
    this.monodroga = vademecum.monodroga;
    this.accion = vademecum.accion;
    this.marca = vademecum.marca;
    this.presentacion = vademecum.presentacion;
    this.potencia = vademecum.potencia;
    this.unidadesCaja = vademecum.unidadesCaja;
    this.precio = vademecum.precio;
    this.cantidad=vademecum.laboratorio;
    this.img=vademecum.img
  }}

const insulina1001=new Insulina({id:1001,monodroga:"Insulina Humana",accion:"Hipoglucemiante",marca:"INSULINA INSULATARD FLEXPEN",presentacion:"HM 100UI/ml lap.prellx5x3ml",potencia:100,unidadesCaja:1500, precio:18000, laboratorio:"Raffu S.A"});
const insulina1002=new Insulina({id:1002,monodroga:"Insulina Aspartica",accion:"Hipoglucemiante",marca:"INSULINA NOVORAPID FLEXPEN",presentacion:"100UI/ml lap.prellx5x3ml",potencia:100,unidadesCaja:1500, precio:32000, laboratorio:"Marke S.A"});
const insulina1003=new Insulina({id:1003,monodroga:"Insulina Gluglisina",accion:"Hipoglucemiante",marca:"INSULINA APIDRA SOLOSTAR",presentacion:"100UI/ml lap.prellx5x3ml",potencia:100,unidadesCaja:1500, precio:38000, laboratorio:"Cassaro S.A"});
const insulina1004=new Insulina({id:1004,monodroga:"Insulina Glargina",accion:"Hipoglucemiante",marca:"INSULINA LANTUS SOLOSTAR",presentacion:"100UI/ml lap.prellx5x3ml",potencia:100,unidadesCaja:1500, precio:45000, laboratorio:"Casco S.A"});
const insulina1005=new Insulina({id:1005,monodroga:"Insulina Glargina",accion:"Hipoglucemiante",marca:"INSULINA TOUJEO",presentacion:"300UI/ml lap.prellx3x1.5ml",potencia:300,unidadesCaja:1350, precio:41000, laboratorio:"Raffi S.A"});
const insulina1006=new Insulina({id:1006,monodroga:"Insulina Detemir",accion:"Hipoglucemiante",marca:"INSULINA LEVEMIR FLEXPEN",presentacion:"100UI/ml lap.prellx5x3ml",potencia:100,unidadesCaja:1500, precio:39000, laboratorio:"Beriham S.A"});
const insulina1007=new Insulina({id:1007,monodroga:"Insulina Lispro",accion:"Hipoglucemiante",marca:"INSULINA HUMALOG KWIKPEN",presentacion:"100UI/ml lap.prellx5x3ml",potencia:100,unidadesCaja:1500, precio:41000, laboratorio:"Raffi S.A"});
const insulina1008=new Insulina({id:1008,monodroga:"Insulina Lispro",accion:"Hipoglucemiante",marca:"INSULINA HUMALOG KWIKPEN 200",presentacion:"200UI/ml lap.prellx5x3ml",potencia:200,unidadesCaja:3000, precio:46000, laboratorio:"Marke S.A"});
const insulina1009=new Insulina({id:1009,monodroga:"Insulina Degludec",accion:"Hipoglucemiante",marca:"INSULINA TRESIBA FLEXTOUCH",presentacion:"100UI/ml lap.prellx5x3ml",potencia:100,unidadesCaja:1500, precio:41000, laboratorio:"Cassaro S.A"});
const insulina1010=new Insulina({id:1010,monodroga:"Insulina Degludec",accion:"Hipoglucemiante",marca:"INSULINA TRESIBA FLEXTOUCH 200",presentacion:"200UI/ml lap.prellx3x3ml",potencia:200,unidadesCaja:1800, precio:52000, laboratorio:"Beriham S.A"});
const insulina1011=new Insulina({id:1011,monodroga:"Insulina.Lispro+ins.lispro protamina",accion:"Hipoglucemiante",marca:"INSULINA HUMALOG MIX 25 KWIKPEN",presentacion:"100UI/ml lap.prellx5x3ml",potencia:100,unidadesCaja:1500, precio:42000, laboratorio:"Raffi S.A"});
const insulina1012=new Insulina({id:1012,monodroga:"Insulina Humana",accion:"Hipoglucemiante",marca:"INSULINA INSULATARD PENFILL",presentacion:"HM 100UI/ml CARTUCHO x5x3ml",potencia:100,unidadesCaja:1500, precio:13000, laboratorio:"Beriham S.A"});

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

     //ASINCRONIA........
     setInterval

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
let formularioaltas = document.getElementById("formularioaltas");  //----------------------------------- DOM de altas + create

// CREATE FORMULARIO
let div = document.createElement("div");
div.innerHTML= `
<div class="card border-dark container text-center  mb-1 p-0" style="max-width: 44rem; background-color: rgb(80, 50, 145);">
<div class="card-header mt-1" id="color4"><h6>ALTA DE AFILIADOS</h6></div>
 <form class="container-fluid text-center pt-lg-3 mt-1 mb-3" id="">   
  <input type="number" class="form-control p-1 mt-1" id="inputcredencial" placeholder="Ingresar Credencial">
  <input type="number" class="form-control p-1 mt-1" id="inputdni" placeholder="Ingresar DNI"> 
  <input type="text" class="form-control p-1 mt-1" id="inputnombre" placeholder="Ingresar Nombre y Apellido">
        <select id="inputobrasocial" class="form-select p-1 mt-1"  aria-label="Default select example" required >
            <option selected>Seleccionar Obra Social:</option>
            <option value="UPCN">UPCN</option>
            <option value="OSPEDYC">OSPEDYC</option>
            <option value="OSMEDYCA">OSMEDYCA</option>
            <option value="GALENO">GALENO</option>
        </select> 
  <div class="d-flex my-1 gap-1">
    <button class="btn btn-primary btn-block w-100 mb-1 mt-2" id="bo" type="submit">GUARDAR</button> 
    <button class="btn btn-primary btn-block w-100  mt-2 mb-1" id="bo" type="reset" value="Reset">RESET</button> 
  </div> 
  <button type="button" id="bo" class="btn btn-primary px-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
     LISTA DE AFILIADOS
  </button>
<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">AFILIADOS DADOS DE ALTA</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> <!--de modal-header-->
      <div class="modal-body">
        <table class="table">
          <thead class="">
            <tr class="fs-6 lh-1">
              <th scope="col p-0">Credencial</th>
              <th scope="col p-0">Dni</th>
              <th scope="col p-0">Afiliado</th>
              <th scope="col p-0">Prestador</th>
            </tr>
          </thead>
           <tbody id="ModalAltas"></tbody>
        </table>
      </div> <!--de modal-body-->
      <div class="modal-footer">
        <button type="button" id="bo" class="btn btn-secondary px-3 " data-bs-dismiss="modal">SALIR</button>
      </div>
    </div> <!--de modal-content-->
  </div> <!--de modal-dialog-->
 </div> <!--de modal-fade-->
</form>
 </div>`;
formularioaltas.append(div);

const AltaAfiliados=[
  {credencial:'1112',dni:'31555666',nombreyapellido:'Martinez Juan',obrasocial:'UPSN'},
  {credencial:'1113',dni:'21888111',nombreyapellido:'Susana Rua',obrasocial:'OSPEDYC'},
  {credencial:'1114',dni:'22444555',nombreyapellido:'Leonel Messi',obrasocial:'GALENO'},
  {credencial:'1115',dni:'33222777',nombreyapellido:'Enso Fernandez',obrasocial:'OSPEDYC'},
  {credencial:'1116',dni:'12999333',nombreyapellido:'Julian Alvarez',obrasocial:'GALENO'},
  {credencial:'1117',dni:'45111000',nombreyapellido:'Lujan Dacruz',obrasocial:'GALENO'}]

// LLAMADA ALTAS DE AFILIADOS 
formularioaltas.addEventListener('submit', guardarAltas);//---------------------------------------------Evento Altas de afiliados
function guardarAltas (e){

  //inputs
  const altadni= document.getElementById('inputdni').value;
  const altacredencial= document.getElementById('inputcredencial').value;
  const altanombre= document.getElementById('inputnombre').value;
  const altaobrasocial= document.getElementById('inputobrasocial').value;

  //Metodo de array agregar afiliado en primer lugar de la lista
AltaAfiliados.unshift({
      credencial:altacredencial,
      dni: altadni,
      nombreyapellido: altanombre,
      obrasocial: altaobrasocial,
  });

  Swal.fire({        //ALERTA ALTA AFILIADO--------------------------------------------------------Uso de SwetAlert librerias
    text: 'AFILIADO DADO DE ALTA',
    title: AltaAfiliados[0].nombreyapellido,
    icon: 'success',
    confirmButtonText: 'VOLVER',
    confirmButtonColor:'rgb(235, 60, 150)',
  });   

  //LISTA ALTAS
  let AltasLista='';
  for ( const Altas of AltaAfiliados){  
    AltasLista += `<tr>
    <th scope="row">${Altas.credencial}</th>
    <td>${Altas.dni}</td>
    <td>${Altas.nombreyapellido}</td>
    <td>${Altas.obrasocial}</td></tr>`}

    document.getElementById("ModalAltas").innerHTML = AltasLista;
    
  e.preventDefault(); 
  
const AltaAfiliadosJSON=JSON.stringify(AltaAfiliados)   //-------------------------------------------------------Uso de localStorage
localStorage.setItem("AltaAfiliados", AltaAfiliadosJSON);
}

///////////BUSCADOR DE AFILIADOS////////////
let contenedorBusquedaAfi = document.getElementById("contenedorBusquedaAfi") //---------------------------------DOM de registro
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

  contenedorBusquedaAfi.addEventListener('submit', busquedaAfi); //----------------------------------evento buscar
  function busquedaAfi (e){
    const inputBusquedaAfi= document.getElementById('inputBusquedaAfi').value; //--------------------inputs
    let bu =AltaAfiliados.find(Altas=> Altas.credencial === inputBusquedaAfi); //--------------------Metodo buscar Afi. por credencial
       Swal.fire({  //resultado de busqueda Alert
           icon: 'success',
           title:'Afiliado: ' + bu.nombreyapellido, 
           html: '<b>Credencial:</b> ' + bu.credencial + '<br><b>DNI:</b> ' + bu.dni+'<br><b>Obra Social:</b> ' + bu.obrasocial,
           confirmButtonText: 'VOLVER',
           confirmButtonColor:'rgb(235, 60, 150)',});
    e.preventDefault();
    }



    /////////////// API ----del tiempo------//////////////////

  const temperaturaGrados= document.getElementById('temperatura-grados')
  const cielotexto= document.getElementById('cielo-texto')
  const ciudad= document.getElementById('ciudad')
 // let iconoTiempo= document.getElementById('icono-tiempo')
 
  const lat= -34.6
  const lon= -58.45

  const tiempoUrl= `http://api.openweathermap.org/data/2.5/weather?lat=${-34.6}&lon=${-58.45}&lang=es&appid=a1a89df45f2c69d5e98224a8cf667099&units=metric`

 const tiempoApi=()=>{

   fetch(tiempoUrl)
     .then( response => { return response.json()})
     .then( data=>{
     console.log(data)


    //let icono= data.weather[0].icon  /// ICONO DEL CIELO
   // let urlIcono= `http://openweathermap.org/img/wn/${icono}@2x.png`;
   // console.log(urlIcono)
   //iconoTiempo.innerText= urlIcono


    let grados= Math.round(data.main.temp)
    temperaturaGrados.textContent= `${grados} ºC , `   /// temperatura----

    let cielo= data.weather[0].description  /// estado del cielo----
    cielotexto.innerText= cielo

    let ciud= data.name       /// ubicacion------
    ciudad.innerText= `, ${ciud}, AR.`

    
   })
   .catch( error=>{
    console.log(error)
   })

  }

  tiempoApi();
  


   