function borrar() {
    document.getElementById('myform').reset();
    document.getElementById('total-operacion').innerHTML = 'Total a pagar: $';
    document.getElementById('total-operacion').style.color = 'black';
    document.getElementById('total-operacion').style.backgroundColor = 'rbg(43,48,53)';
  }
  
  function calcular() {
    let nro1 = 0;
    let nro2 = 0;
    let total = 0;
  
    let operando = '';
  
    nro1 = document.getElementById('input-number1').value;
    nro2 = document.getElementById('input-number2').value;
  
    operando = document.getElementById('selectOper').value;
  
  
    console.log("El número 1 es: " + nro1);
    console.log("El número 2 es: " + nro2);
    console.log("El operando es: " + operando);
   
    if(operando == 'mul') {
    total = ((parseInt(nro1) * (200*0.2)) + (parseInt(nro2) * 0));
    }
    if(operando == 'mul2') {
      total = ((parseInt(nro1) * (200*0.5)) + (parseInt(nro2) * 0));
    }
    if(operando == 'mul3') {
      total = ((parseInt(nro1) * (200*0.85)) + (parseInt(nro2) * 0));
    }

  let act = document.getElementById('total-operacion');
  act.innerHTML = 'Total a pagar: $ ' + total
  act.style.color = 'black';

  console.log("El total es: " + total);

}