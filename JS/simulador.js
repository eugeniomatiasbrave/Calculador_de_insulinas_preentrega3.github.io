

 const unidadesDispensa = (unidades, Dias)=> unidades * Dias;  
 const cajasDispensa = ( unidadesDispensa , unidadesCaja) => unidadesDispensa / unidadesCaja;  // funcion flecha

 const unidadesCajaTodas100= 1500;  // constantes-----
 const unidadesCajaToujeo300= 1350;
 const unidadesCajaHumalog200= 3000;
 const unidadesCajaTresiba200= 1800;
 let presentacion100=100;   // variables para concatenar
 let presentacion300= 300;
 let presentacionHumalog200= "200 H";
 let presentacionTresiba200= "200 T";
 
 
 let entrada = prompt('INGRESAR PRESENTACION: \n - ' + presentacion100 +' para todas las Insulinas de 100 ui/ml \n - ' + presentacion300 +' para Insulina Toujeo 300 ui/ml\n - ' + presentacionHumalog200 + ' para Insulina Humalog 200 ui/ml\n - ' + presentacionTresiba200 +' para Insulina Tresiba 200 ui/ml\n - Ingresar "ESC" para salir');   // variable de entrada con Concatenacion------------

while(entrada != 'ESC'){    // bucle-----

    let dispensaDias= prompt('Ingresar dias a Dispensar');  // entrada mediante prompt al bucle
    let unidades= prompt('Ingresar unidades dia de insulina');
    
  switch (entrada) {

    case '100':  // casos----//invocacion de la funcion---, uso de metodo para redondear y metodo para enteros.
     let cajas100 = cajasDispensa ( unidadesDispensa(unidades, dispensaDias), unidadesCajaTodas100)
     alert ('Corresponden '+ cajas100.toFixed(2) + ' cajas. A dispensar ' + Math.ceil (cajas100) + ' cajas de insulinas.')  
     break;

    case '300':
     let cajas300 = cajasDispensa ( unidadesDispensa(unidades, dispensaDias), unidadesCajaToujeo300) 
     alert ('Corresponden '+ cajas300.toFixed(2) + ' cajas. A dispensar ' + Math.ceil (cajas300) + ' cajas de insulinas.')
     break;  

     case '200 H':
     let cajas200H = cajasDispensa ( unidadesDispensa(unidades, dispensaDias), unidadesCajaHumalog200)
     alert ('Corresponden '+ cajas200H.toFixed(2)+ ' cajas. A dispensar ' + Math.ceil (cajas200H) + ' cajas de insulinas.')
     break;
     case '200 T':
     let cajas200T = cajasDispensa ( unidadesDispensa(unidades, dispensaDias), unidadesCajaTresiba200)
     alert ('Corresponden '+ cajas200T.toFixed(2) + ' cajas. A dispensar ' + Math.ceil (cajas200T) + ' cajas de insulinas.')
     break;

    default:
     alert('Error: Presentcion incorrecta')
     break;
     }

  entrada = prompt('INGRESAR: \n - ' + presentacion100 +' para todas las insulinas de 100 ui/ml \n - ' + presentacion300 +' para Insulina Toujeo 300 ui/ml\n - ' +    presentacionHumalog200 + ' para Insulina Humalog 200 ui/ml\n - ' + presentacionTresiba200 +' para Insulina Tresiba 200 ui/ml\n - Ingresar "ESC" para salir');
}
