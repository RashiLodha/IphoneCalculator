class Calculates {

  //through this i am setting my elements entered by user inside class elements
  constructor(prev, cur) {
    this.prev = prev;
    this.cur = cur;
    this.clear();
    //reasons as soon as we want our calculator i.e reload everything should be cleared and set to their default values
  }

  clear() {
    this.prev = '';
    this.cur = '';
    this.oper = undefined;
    //That is no operation selected

  }
  appends(number) {
    if (number === '.' && this.cur.includes('.')) return;
    this.cur = this.cur.toString() + number.toString();
    console.log(this.cur);
  }

  whichOperation(operation) {
    if (this.cur === '') return;
    if (this.prev !== '') {
      this.computes();
    }
    this.oper = operation;
    this.prev = this.cur;
    console.log(prev);
    this.cur = '';
  }

  computes() {
    var computation = 0.0;
    //this converts the previous and the current strings into float for computation
    const p = parseFloat(this.prev);
    const c = parseFloat(this.cur);
    //isNan CHECKS IF ANY OF THE PREVIOUS OR CURRRENT VALUE IS NULL
    if (isNaN(p) || isNaN(c)) return;
    switch (this.oper) {
      case '+':
        computation = p + c;
        break;
      case '-':
        computation = p - c;
        break;
      case '*':
        computation = p * c;
        break;
      case '/':
        computation = p / c;
        break;
      case '%':
        computation = p % c;
        break;
      case '+/-':
        computation = p * -1;
        break;
      default:
        return;

    }
    this.cur=computation;
    this.oper=undefined;
    this.prev='';

  }

  updates() {
    document.querySelector(".current-operand").innerText = this.cur;
    // $0.innerText=this.cur;
    // $(".current-operand").innerHTML=this.cur;
    //this.current-operand.innerText=this.cur;
    document.querySelector(".previous-operand").innerText = this.prev;
  }
}


var allNumber = [];
allNumber = $(".number");
const allOperator = $(".operator");
const equals = $(".equals");
const clears = $(".all-clear");
const prev = $(".previous-operand").text();
const cur = $(".current-operand").text();
$("h1").text("Iphone Calculator");
alert("mATH IS LOVE");
console.log(allNumber);

const calc = new Calculates(prev, cur);
//here we have to use array beacuse allNumber variable has the typeOf an object and not an array which has to be converted
Array.from(allNumber).forEach(button => {
  button.addEventListener('click', () => {
    calc.appends(button.innerText);
    console.log(button.innerText);
    calc.updates();
  })
  //   element.addEventListener('click', ()=>{
  //   calc.appends(button.innerText);
  //   calc.updates();
});


Array.from(allOperator).forEach(button => {
  button.addEventListener('click', () => {
    calc.whichOperation(button.innerText);
    console.log(button.innerText);
    calc.updates();
  })
  //   element.addEventListener('click', ()=>{
  //   calc.appends(button.innerText);
  //   calc.updates();
});

Array.from(equals).forEach(button => {
  button.addEventListener('click', button => {
     calc.computes();
     calc.updates(); })
});

// Array.from(equals).addEventListener('click', button => {
//   calc.computes();
//   calc.updates();
// });



Array.from(clears).forEach(button => {
  button.addEventListener('click', button => {
    calc.clear();
     calc.updates(); })
});
