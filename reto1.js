let L=+prompt("Ingresar la cantidad de litros de leche :");
//Cantidad de litros que produce
let PG=+prompt("Ingresar el precio del galón :")
//Precio del galón
let TG=L/3.785;
//Cantidad de galones que produce
let GA=PG*TG;
//Ganancia por la entrega de leche
alert(`Su ganacia es -> S/${GA.toFixed(3)} `);
