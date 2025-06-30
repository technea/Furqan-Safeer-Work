 const boxes=document.querySelectorAll(".box");
 const btn=document.querySelectorAll(".btn");

let turn= true;

const pattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];
boxes.forEach((box) =>
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn) { 
        box.textContent="0";
     
            
        } else {

        box.textContent="X";
            
        }
        turn = !turn; 

        box.disabled=true;




}));
const checkwinner=()=>
{
    for (const pattern of winpattern) {
  let pos1val=boxes[pattern[0]].innertext;
  let post2val=boxes[pattern[1]].innertext;
  let post3val=boxes[pattern[2]].innertext;

  
  if(pos1val !="" && post2val !="" && post3val !="")
   (pos1val===pos2val && pos2val===post3val)
    
    
    {
    console.log("winner",pos);
  }
}



  };


