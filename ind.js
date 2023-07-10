const toggle = 2

const calcPrice = (index) => { 
    let price
if (toggle % 2 != 0) {
  switch(index){
    case 0: 
    price = 9;
    break;
    case 1:
    price =  12;
    break;
    case 2: 
    price = 15;
    break;
  }
}
else if (toggle % 2 == 0) {
  switch(index){
    case 0: 
    price = 90;
    break;
    case 1:
    price =  120;
    break;
    case 2: 
    price = 150;
    break;
  }
}
return price
}
console.log(calcPrice(2))