const bill = document.getElementById("bill");
const five = document.getElementById("five");
const ten = document.getElementById("ten");
const fifteen = document.getElementById("fifteen");
const twenty = document.getElementById("twenty");
const fifty = document.getElementById("fifty");
const custom = document.getElementById("custom");
const people = document.getElementById("people");
const tip = document.getElementById("tip");
const total = document.getElementById("total");
const reset = document.getElementById("reset");

function tipCalc(value){
    const percent = value/100;
    const billAmount = bill.value/ people.value;
    const tipPerPerson = billAmount * percent;
    const billAmountPerson = billAmount + tipPerPerson

    tip.textContent = tipPerPerson.toFixed(2)
    total.textContent = billAmountPerson.toFixed(2)

    console.log(tipPerPerson);
    return billAmountPerson
}

bill.addEventListener("change", function () {
  console.log("Bill:", bill.value);
});

custom.addEventListener("change", function () {
  tipCalc(custom.value)
});

people.addEventListener('change' ,function(){
    console.log('People:' , people.value);
})

// five.addEventListener("click", function(){tipCalc(5)});

ten.addEventListener("click", function(){tipCalc(10)});

fifteen.addEventListener("click", function(){tipCalc(15)});

twenty.addEventListener("click", function(){tipCalc(25)});

fifty.addEventListener("click", function(){tipCalc(50)});
// R function
// const billCalc = ()=> {

// }

// regular function
// function billCalc() {

// }
