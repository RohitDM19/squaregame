let p;
let y= document.getElementById("1");
let x=document.getElementById("s1");
x.addEventListener("mouseenter",function(){
    x.style.backgroundColor="red";
     p= Math.floor(Math.random()*100);
    y.innerHTML=p;
})
x.addEventListener("mouseleave",function(){
    x.style.backgroundColor="white";
    y.innerHTML="HELLO";
})
let clr="red";
x.addEventListener("mouseenter",function(){
    if (clr=="red"){
        x.style.backgroundColor="red";
        clr="green";
    }
    else if(clr=="green"){
             x.style.backgroundColor="green"
             clr="blue";
    }
    else {
        x.style.backgroundColor="blue";
        clr="red";

    }

})
let r=document.getElementById("s3");
let clr2="red";
let a;
let b;
let c;
r.addEventListener("mouseenter",function(){
    a=Math.floor(Math.random()*256);
    b=Math.floor(Math.random()*256);
    c=Math.floor(Math.random()*256);
    r.style.backgroundColor=`rgb(${a},${b},${c})`;
})
r.addEventListener("mouseleave",function(){
    r.style.backgroundColor="white";
})
let m= document.getElementById("s2");
let u = document.getElementById("s4");
u.addEventListener("click",function(){
    a=Math.floor(Math.random()*256);
    b=Math.floor(Math.random()*256);
    c=Math.floor(Math.random()*256);
    r.style.backgroundColor=`rgb(${a},${b},${c})`;
    m.style.backgroundColor=`rgb(${c},${b},${a})`;
    x.style.backgroundColor=`rgb(${a},${c},${b})`;
})
u.addEventListener("mouseleave",function(){
    x.style.backgroundColor="white";
   r.style.backgroundColor="white";
   m.style.backgroundColor="white";
})
let d=document.getElementById("2");
m.addEventListener("click",function(){
    a=Math.floor(Math.random()*99);
    b=Math.floor(Math.random()*99);
    d.innerHTML=a+b;
})
m.addEventListener("mouseleave", function() {
    d.innerHTML = "HEY"; // Fixed innerHTML spelling
});