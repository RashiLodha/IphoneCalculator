class Calculates{

  //through this i am setting my elements entered by user inside class elements
  constructor(prev,cur){
    this.prev=prev;
    this.cur=cur;
    this.clear();
    //reasons as soon as we want our calculator i.e reload everything should be cleared and set to their default values
  }

  clear(){
    this.prev='';
    this.cur='';
    this.oper=undefined;
    //That is no operation selected

  }
  appends(number){

  }

  whichOperation(operation){

  }

  computes(){

  }

  updates(){

  }
}


var allNumber=[];
allNumber=$(".number");
const allOperator=$(".operator");
const equals=$(".equals");
const clears=$(".all-clear");
const prev=$(".previous-operand").text();
const cur=$(".current-operand").text();
$("h1").text("Iphone Calculator");
alert("mATH IS LOVE");
console.log(allNumber);

const calc=new Calculates(prev,cur);
 Object.values()(allNumber).forEach(function(element){
   console.log(element);
//   element.addEventListener('click', ()=>{
//   calc.appends(button.innerText);
//   calc.updates();
});
