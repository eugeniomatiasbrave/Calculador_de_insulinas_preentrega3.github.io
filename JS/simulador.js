
//OBJETO

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
  }
}

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



 const unidadesDispensa=(unidades,Dias)=>unidades*Dias;  
 const cajasDispensa=(unidadesDispensa,unidadesCaja)=>unidadesDispensa/unidadesCaja;  // funcion flecha

let unidades=prompt('INGRESAR LAS UNIDADES DIA DE INSULINA USADAS POR EL PACIENTE'); // Entrada 1 de formulario
    if(unidades>6 && unidades<200){

      let opcionInsulina=prompt('INGRESAR Nº DE OPCION DE INSULINAS:\n- Nº1 : Para Insulinas en presentaciones de '
      +insulina1001.potencia+' ui/ml.\n- Nº2 : Para Insulina Toujeo '+insulina1005.potencia+' ui/ml.\n- Nº3 : Para Insulina Humalog '
      +insulina1008.potencia+' ui/ml.\n- Nº4 : Para Insulina Tresiba '+insulina1010.potencia+' ui/ml)');  // Entrada 2 de formulario

      let dispensaDias=prompt('INGRESAR TIPO DE DISPENSA, 30 O 90 DIAS'); // Entrada 3 de formulario
       switch(dispensaDias){
         case'30':
         case'90':
         break;
         default: alert('ERROR: Opcion incorrecta')}

       switch(opcionInsulina){
         case'1':  // casos----//invocacion de la funcion---, uso de metodo para redondear y metodo para enteros.
           let cajas100=cajasDispensa(unidadesDispensa(unidades,dispensaDias),insulina1001.unidadesCaja)
           alert('Corresponden '+cajas100.toFixed(2)+' cajas. A dispensar '+Math.ceil(cajas100)+' cajas de insulinas.');break;
         case'2':
           let cajas300=cajasDispensa(unidadesDispensa(unidades,dispensaDias),insulina1005.unidadesCaja) 
           alert('Corresponden '+cajas300.toFixed(2)+' cajas. A dispensar '+Math.ceil(cajas300)+' cajas de insulinas.');break;  
         case'3':
           let cajas200H=cajasDispensa(unidadesDispensa(unidades,dispensaDias),insulina1008.unidadesCaja)
           alert('Corresponden '+cajas200H.toFixed(2)+' cajas. A dispensar '+Math.ceil(cajas200H)+' cajas de insulinas.');break;
         case'4':
           let cajas200T=cajasDispensa(unidadesDispensa(unidades,dispensaDias),insulina1010.unidadesCaja)
           alert('Corresponden '+cajas200T.toFixed(2)+' cajas. A dispensar '+Math.ceil(cajas200T)+' cajas de insulinas.');break; 
         default:alert('ERROR: Opcion incorrecta');break;}} 
      
    else{alert('NO DISPENSAR: La dosis esta fuera de rango. Revisar el empadronamiento del paciente')};



// ARRAY 2 de OBJETOS + FOREACH + DOM
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

let contenedoraltas = document.getElementById("contenedoraltas");  // DOM de altas
let div = document.createElement("div");
div.innerHTML= `
 <form class="container-fluid text-center pt-lg-3 mt-2 w-50" id=""> <!-------Formulario altas------------->
  <h2 class="mb-2">ALTA DE AFILIADOS</h2>  
  <div class="p-1">
    <h5>FORMULARIO DE ALTAS</h5>
    <label for="inputPassword2" class="visually-hidden ">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Ingresar credencial">
  </div>
  <div class="p-1">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Ingresar DNI">   
  </div>
    <div class="p-1">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Ingresar Nombre y Apellido">
  </div>
  <div class="p-1">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Ingresar Obra Social">
  </div>
  <button class="btn btn-primary btn-block mb-1 mt-2 w-100 " id="bo" type="reset" value="Reset">Reset</button> 
  <button class="btn btn-primary btn-block  w-100" id="bo" type="submit">Guardar</button>  
 </form> `;
contenedoraltas.append(div);


const AltaAfiliados=[
  {credencial:'1111',dni:'27778988',nombreyapellido:'Brave Eugenio Matias',obrasocial:'Galeno'},
  {credencial:'1112',dni:'31555666',nombreyapellido:'Martinez Juan',obrasocial:'Union Personal'},
  {credencial:'1113',dni:'21888111',nombreyapellido:'Susana Rua',obrasocial:'Ospedyc'},
  ];

let AltasLista= 'AFILIADOS DADOS DE ALTA: \n'
AltaAfiliados.push({
    credencial: prompt('ALTA DE AFILIADOS:\n Ingresar credencial del paciente'),
    dni:prompt('Ingresar DNI del paciente'),
    nombreyapellido: prompt('Ingresar Nombre y Apellido del paciente'),
    obrasocial:prompt('Ingresar Obra Social del paciente')
});

for ( const Altas of AltaAfiliados){  
  AltasLista += '- Credencial: '+ Altas.credencial + ' Dni: ' + Altas.dni + ' Nombre y Apellido: '+ Altas.nombreyapellido + ' Obra Social: ' + Altas.obrasocial + '\n'
}
alert(AltasLista)


// REGISTRO DE AFILIADOS
  
let contenedorRegistro = document.getElementById("contenedorRegistro"); //DOM de registro
let reg = document.createElement("div");
reg.innerHTML= `
 <form class="container-fluid text-center pt-lg-2 w-50" id=""> <!-------Formulario calculador------------->
    <div>
    <h5>Realizar la busqueda del paciente deseado</h5>
    </div>
    <div>
     <label for="inputPassword2" class="visually-hidden">Password</label>
     <input type="password" class="form-control" id="inputPassword2" placeholder="Ingresar Credencial">
    </div>
    <div class="mt-3">
      <button type="submit" class="btn btn-primary w-100" id="bo" >BUSCAR</button>
    </div>
    </form>`;
  contenedorRegistro.append(reg);



let credencial= prompt('BUSQUEDA DE AFILIADOS: \nIngrese credencial del Afiliado a buscar\n')
let BuscarAfiliado= AltaAfiliados.find(Altas=> Altas.credencial === credencial);
let mensaje= `DATOS DEL AFILIADO: 
  - Credencial: ${BuscarAfiliado.credencial}
  - Dni: ${BuscarAfiliado.dni}
  - Nombre y Apellido: ${BuscarAfiliado.nombreyapellido}
  - Obra Social: ${BuscarAfiliado.obrasocial}`;

alert(mensaje);


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