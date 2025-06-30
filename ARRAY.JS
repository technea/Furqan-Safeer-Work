// Declare globally so both functions can access and update it
let fruits = ["Apple", "Orange", "Mango", "Banana"];

function item() {
  document.getElementsByClassName("fruits")[0].innerHTML = "Fruits: " + fruits.join(", ");
  alert(fruits);
}

function add() {
  fruits.push("Strawberry");
  document.getElementsByClassName("updated")[0].innerHTML = "Updated Fruits: " + fruits.join(", ");
}
function remove2() {
    fruits.pop();
    document.getElementsByClassName("remove")[0].innerHTML = "Updated Fruits: " + fruits.join(", ");
  }
  



function numberasc()  //assending order
{
    let num=[1,2,3,4,5];
    num.sort((a,b)=>a-b);
    document.getElementsByClassName("sort")[0].innerHTML="Assending order: "+num.join(" ");
}

function numberdsc()  //assending order
{
    let num=[1,2,3,4,5];
    num.sort((a,b)=>b-a);
    document.getElementsByClassName("sort")[0].innerHTML="Desending order: "+num.join(" ");
}

function average()
    {
        let sum=0;
        let num=[1,2,3,4,5];
for(let i=0; i<num.length; i++)

    {
    sum+=num[i];
    let average=sum/num.length;
    document.getElementsByClassName("avg")[0].innerHTML="Average is: "+average;
    }
}
