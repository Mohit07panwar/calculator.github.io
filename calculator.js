let screen= document.getElementById("screen");
let buttons= document.querySelectorAll("button");
let screenvalue= "";
for(let i of buttons)
{
    i.addEventListener("click",(e)=>
    {
        var buttontext= e.target.innerText;
              if(buttontext=="X")
         {
             buttontext="*";
             screenvalue+=buttontext;
             screen.value= screenvalue;
         }
        
         else if(buttontext=="C")
         {
             screenvalue="";
             screen.value=screenvalue;
         }
         else if(buttontext=="=")
         {
            screen.value=eval(screenvalue);
         }
         else{
            screenvalue+=buttontext;
            screen.value= screenvalue;
         }

    })
}