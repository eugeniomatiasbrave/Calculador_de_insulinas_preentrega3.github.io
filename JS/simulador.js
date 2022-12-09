
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
  {id:1006,monodroga:"Insulina Detemir",accion:"Hipoglucemiante",marca:"INSULINA LEVEMIR FLEXPEN",presentacion:"100UI lap.prellx5x3ml",potencia:100,unidadesCaja:1500, precio:39000, laboratorio:"Beriham S.A", img:"https://locatelcolombia.vtexassets.com/arquivos/ids/203740/7703281005964-LEVEMIR-100UI-X-5DIS-PRODUCTO-REGULADO-.png?v=1755256599"},
  {id:1007,monodroga:"Insulina Lispro",accion:"Hipoglucemiante",marca:"INSULINA HUMALOG KWIKPEN",presentacion:"100UI lap.prellx5x3ml",potencia:100,unidadesCaja:1500, precio:41000, laboratorio:"Raffi S.A", img:"https://www.raffo.com.ar/app/uploads/2022/01/Humalog-KwikPen.jpg"},
  {id:1008,monodroga:"Insulina Lispro",accion:"Hipoglucemiante",marca:"INSULINA HUMALOG KWIKPEN 200",presentacion:"200UI lap.prellx5x3ml",potencia:200,unidadesCaja:3000, precio:46000, laboratorio:"Marke S.A", img:"https://cdn.shop-apotheke.com/images/D10/820/098/D10820098-p10.jpg"},
  {id:1009,monodroga:"Insulina Degludec",accion:"Hipoglucemiante",marca:"INSULINA TRESIBA FLEXTOUCH",presentacion:"100UI lap.prellx5x3ml",potencia:100,unidadesCaja:1500, precio:41000, laboratorio:"Cassaro S.A", img:"https://cendis.com.gt/wp-content/uploads/2022/08/034502.jpg"},
  {id:1010,monodroga:"Insulina Degludec",accion:"Hipoglucemiante",marca:"INSULINA TRESIBA FLEXTOUCH 200",presentacion:"200UI lap.prell x3x3ml",potencia:100,unidadesCaja:1800, precio:52000, laboratorio:"Beriham S.A", img:"https://cdn.shop-apotheke.com/images/D11/695/086/D11695086-p1.jpg"},
  {id:1011,monodroga:"Insulina.Lispro+ins.lispro protamina",accion:"Hipoglucemiante",marca:"INSULINA HUMALOG MIX 25 KWIKPEN",presentacion:"100UI lap.prellx5x3ml",potencia:100,unidadesCaja:1500, precio:42000, laboratorio:"Raffi S.A", img:"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/002055L.jpg"},
  {id:1012,monodroga:"Insulina Humana",accion:"Hipoglucemiante",marca:"INSULINA INSULATARD PENFILL",presentacion:"HM 100UI CARTUCHO x5x3ml",potencia:100,unidadesCaja:1500, precio:13000, laboratorio:"Beriham S.A", img:"https://cdn.shopify.com/s/files/1/0580/5257/5405/products/2652_1_f7942911-966c-44a7-a459-288eb3deafa0_800x.jpg?v=1629727346"},
  ];

const AltaAfiliados=[
  {credencial:'1111',dni:'27778988',nombreyapellido:'Brave Eugenio Matias',obrasocial:' GALENO'},
  {credencial:'1112',dni:'31555666',nombreyapellido:'Martinez Juan',obrasocial:'UPSN'},
  {credencial:'1113',dni:'21888111',nombreyapellido:'Susana Rua',obrasocial:'OSPEDYC'},
  {credencial:'1114',dni:'22444555',nombreyapellido:'Leonel Messi',obrasocial:'GALENO'},
  {credencial:'1115',dni:'33222777',nombreyapellido:'Enso Fernandez',obrasocial:'OSPEDYC'},
  {credencial:'1116',dni:'12999333',nombreyapellido:'Julian Alvarez',obrasocial:'GALENO'},
  {credencial:'1117',dni:'45111000',nombreyapellido:'Lujan Dacruz',obrasocial:'GALENO'},
  ];




 const calculador = document.getElementById('calculador').addEventListener('submit', calcularCajas); //llamada a calcular cajas
 function calcularCajas (e){
  //inputs
  const inputUnidades= document.getElementById('inputUnidades').value;
  const inputInsulinas= document.getElementById('inputInsulinas').value;
  const inputDispensa= document.getElementById('inputDispensa').value;
  //calculos 
  const unidadesDispensa = inputUnidades*inputDispensa;
  const cajasDispensa=unidadesDispensa/inputInsulinas;
  //resultado en Alert
  Swal.fire({ 
    icon: 'success',
    title:'Dispensar ' + Math.ceil(cajasDispensa)+ ' Cajas', 
    text: 'Calculo exacto '+ cajasDispensa.toFixed(2)+ ' cajas de insulinas.',
    backdrop: true,
    confirmButtonText: 'VOLVER',
    confirmButtonColor:'#038C73',
    });
  e.preventDefault();
  }

// ARRAY 2 de OBJETOS + FOREACH + DOM
let domMarcas = document.getElementById("domMarcas");
const listaMarca = ( ArrayInsulinas, domMarcas)=>{
  let acumulados = '';
   ArrayInsulinas.forEach(item => {
     acumulados += `
      <li>${item.marca}</li>`; });
    domMarcas.innerHTML= acumulados;}
    listaMarca(ArrayInsulinas,domMarcas);


let domVademecum = document.getElementById("domVademecum");
const vade = ( ArrayInsulinas, domVademecum)=>{
  let acumulado = '';
    ArrayInsulinas.forEach(item => {
      acumulado += `
       <div class="col-md-4">
        <div class="card mt-3" style="width: 20 rem;">
         <img  src="${item.img}"style="width: 15 rem alt="">
          <div class="card-body">
          <p class="card-text fst fw-semibold lh-sm"> ${item.marca}</p>
          <p class="card-text fst-italic lh-sm">Troquel: ${item.id}</p>
          <p class="card-text fst-italic lh-sm">Monodroga: ${item.monodroga}</p>
          <p class="card-text fst-italic lh-sm">Accion: ${item.accion}</p>
          <p class="card-text fst-italic lh-sm">Presentacion: ${item.presentacion}</p>
          <p class="card-text fst-italic lh-sm">Potencia: ${item.potencia}</p>
          <p class="card-text fst-italic lh-sm">Unidades en caja: ${item.unidadesCaja}</p>
          <p class="card-text fst-italic lh-sm">Cantidad: ${item.laboratorio}</p>
          <h6 class="card-title lh-sm">Precio: $ ${item.precio}</h6>
        </div>
       </div>
    </div> `;
    });
    domVademecum.innerHTML= acumulado;
    }
    vade(ArrayInsulinas,domVademecum)


//ALTA AFILIADOS

let formularioaltas = document.getElementById("formularioaltas");  // DOM de altas

// CREATE FORMULARIO

let div = document.createElement("div");
div.innerHTML= `
<div class="card border-dark bg-light container text-center  mb-1 p-0" style="max-width: 44rem;">
<div class="card-header ">ALTA DE AFILIADOS</div>
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
      </div>
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
      <tbody id="ModalAltas">
   </tbody>
</table>
</div>
      <div class="modal-footer">
        <button type="button" id="bo" class="btn btn-secondary px-3" data-bs-dismiss="modal">SALIR</button>
      </div>
    </div>
  </div>
 </div>
</form>
 </div>`;
formularioaltas.append(div);

// LLAMADA ALTAS DE AFILIADOS 
formularioaltas.addEventListener('submit', guardarAltas);
function guardarAltas (e){

  //inputs
  const altadni= document.getElementById('inputdni').value;
  const altacredencial= document.getElementById('inputcredencial').value;
  const altanombre= document.getElementById('inputnombre').value;
  const altaobrasocial= document.getElementById('inputobrasocial').value;

  //funcion y array
  AltaAfiliados.unshift({
      credencial:altacredencial,
      dni: altadni,
      nombreyapellido: altanombre,
      obrasocial: altaobrasocial,
  });

  //ALERTA ALTA AFILIADO 
  Swal.fire({
    text: 'AFILIADO DADO DE ALTA',
    title: AltaAfiliados[0].nombreyapellido,
    icon: 'success'
  });   

  e.preventDefault(); 
}


//LISTA ALTAS
let AltasLista='';
for ( const Altas of AltaAfiliados){  
  AltasLista += `<tr>
                   <th scope="row">${Altas.credencial}</th>
                   <td>${Altas.dni}</td>
                   <td>${Altas.nombreyapellido}</td>
                   <td>${Altas.obrasocial}</td>
                 </tr>`}
document.getElementById("ModalAltas").innerHTML = AltasLista;
//const AltaAfiliadosJSON=JSON.stringify(AltaAfiliados)
 // localStorage.setItem("AltaLista", AltaAfiliadosJSON)



// REGISTRO DE AFILIADOS
  
let contenedorBusquedaAfi = document.getElementById("contenedorBusquedaAfi") //DOM de registro
let reg = document.createElement("div");
reg.innerHTML= `
<div class="card border-dark container text-center mb-1 p-0" style="max-width: 44rem;">
<div class="card-header ">BUSQUEDA DE PACIENTES</div>
 <form class="container-fluid text-center py-lg-2" id=""> 
    <div class=" d-flex my-1">
     <input type="number" id="inputBusquedaAfi" class="form-control me-2 "  placeholder="Ingresar Nº de Credencial">
     <button type="submit" class="btn btn-primary" id="bo" >BUSCAR</button>
    </div>
    </form>
    <div class="p-2">
    <div id="resultadoBusqueda"></div>
    </div>
    </div>
    </div>`;
  contenedorBusquedaAfi.append(reg);

  ///////////BUSCADOR DE AFILIADOS////////////

  contenedorBusquedaAfi.addEventListener('submit', busquedaAfi); //evento buscar
  
  function busquedaAfi (e){
  
  const inputBusquedaAfi= document.getElementById('inputBusquedaAfi').value; //inputs
  //Metodo buscar Afi. por credencial
   let bu =AltaAfiliados.find(Altas=> Altas.credencial === inputBusquedaAfi);

   //resultado de busqueda
 
   Swal.fire({ 
    icon: 'success',
    title:'Afiliado: ' + bu.nombreyapellido, 
    html: '<b>Credencial:</b> ' + bu.credencial + '<br><b>DNI:</b> ' + bu.dni+'<br><b>Obra Social:</b> ' + bu.obrasocial,
    confirmButtonText: 'VOLVER',
    confirmButtonColor:'#038C73',});

   e.preventDefault();
   }

  


//-------------PARA MAS ADELANTE-------------
/// usar un map para editar los afiliados....
//-------------------------------------------



//ARRAY 1
/*
const marcas=[
'INSULINA INSULATARD FLEXPEN',
'INSULINA NOVORAPID FLEXPEN',
'INSULINA APIDRA SOLOSTAR',
'INSULINA LANTUS SOLOSTAR',
'INSULINA TOUJEO',
'INSULINA LEVEMIR FLEXPEN',
'INSULINA HUMALOG KWIKPEN',
'INSULINA HUMALOG KWIKPEN 200',
'INSULINA TRESIBA FLEXTOUCH',
'INSULINA TRESIBA FLEXTOUCH 200',
'INSULINA HUMALOG MIX 25 KWIKPEN',
'INSULINA INSULATARD PENFILL'];
*/