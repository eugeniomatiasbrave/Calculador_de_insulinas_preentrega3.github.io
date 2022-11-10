

 const unidadesDispensa = (unidades, Dias)=> unidades * Dias;
 const cajasDispensa = ( unidadesDispensa , unidadesCaja) => unidadesDispensa / unidadesCaja;

 const unidadesCaja100= 1500;
 const unidadesCaja300= 1350;
 let presentacion100=100;
 let presentacion300=300;
 
 
 let entrada = prompt('INGRESAR PRESENTACION DE INSULINA \n - ' + presentacion100 +' ml \n - ' + presentacion300 +' ml\n Ingresar "ESC" para salir');

while(entrada != 'ESC'){

    let dispensaDias= prompt('Ingresar dias a Dispensar');
    let unidades= prompt('Ingresar unidades dia de insulina');
    
  switch (entrada) {

    case '100':
     let cajas100 = cajasDispensa ( unidadesDispensa(unidades, dispensaDias), unidadesCaja100)
     alert (cajas100)
     break;

    case '300':
     let cajas300 = cajasDispensa ( unidadesDispensa(unidades, dispensaDias), unidadesCaja300)
     alert (cajas300)
     break;

    default:
     alert('Error: Presentcion incorrecta')
     break;
     }
entrada = prompt('INGRESAR PRESENTACION DE INSULINA \n Opcion 1: ' + presentacion100 +' ml \n Opcion 2: ' + presentacion300 +' ml \n Ingresar ESC para salir');
}
