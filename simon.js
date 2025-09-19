let gs=[];
let us=[];
let btns=['red','green','blue','yellow'];
let level=0;
let started_or_not=false;
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started_or_not==false){
    started_or_not=true;
    gs=[];
    us=[];
 level=0;
  f();
    }});
  function f1(btn){
//btn.classList.add("sprk");
setTimeout(()=>{btn.classList.add("sprk");
},200);
setTimeout(()=>{btn.classList.remove("sprk");
},300);
  }
  
// function f2(){
    let d1=document.querySelectorAll(".d1");
    for(i of d1){

        i.addEventListener("click",function(){
        us.push(this.classList[1]); //or getattribute method by giving ids in html to each red,green..
        //console.log(us,gs);

        this.classList.add("sprk");
setTimeout(()=>{this.classList.remove("sprk");
},50);
if(us.length!=0  && us.length==gs.length){f3();}

// f3();
    });
}
    //f3();
//}
    function f3(){
        if(us.length!=0 ){
    if(us.length==gs.length && us.every((e,i)=>(e==gs[i]))){
        // console.log("syv");
        f();}
    else{ 
        document.querySelector('body').style.backgroundColor="black";
        setTimeout(()=>{
        document.querySelector('body').style.backgroundColor="white";

        },50)
        setTimeout(()=>{
        alert(`Game Over, Your Score: ${level}  Try Again!!`);h3.innerText=`Press any key to start the game`;started_or_not=false;},300);
    
    
    }
    }
 }
function f(){
    us=[]; //
    level++;
    h3.innerText=`Level ${level}`;
    let rnd=Math.floor(Math.random()*3);
    let btn=document.querySelector(`.${btns[rnd]}`);
    gs.push(btns[rnd]);
    f1(btn);//f2();

}