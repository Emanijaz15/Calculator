let ac=document.querySelector(".AC");
let seven=document.querySelector(".seven");
let four=document.querySelector(".four");
let one=document.querySelector(".one");
let zero=document.querySelector(".zero");
let del=document.querySelector(".DEL");
let eight=document.querySelector(".eight");
let five=document.querySelector(".five");
let two=document.querySelector(".two");
let per=document.querySelector(".Per");
let nine=document.querySelector(".nine");
let six=document.querySelector(".six");
let three=document.querySelector(".three");
let dot=document.querySelector(".dot");
let divide=document.querySelector(".divi");
let mul=document.querySelector(".mul");
let minus=document.querySelector(".minus");
let plus=document.querySelector(".plus");
let equal=document.querySelector(".equal");

let input=document.querySelector(".digits");


seven.addEventListener("click",()=>{
    input.innerText=input.innerText+seven.innerText;
});
ac.addEventListener("click",()=>{
    input.innerText="";
});
four.addEventListener("click",()=>{
    input.innerText=input.innerText+four.innerText;
});
one.addEventListener("click",()=>{
    input.innerText=input.innerText+one.innerText;
});
zero.addEventListener("click",()=>{
    input.innerText=input.innerText+zero.innerText;
});
del.addEventListener("click",()=>{
    input.innerText=input.innerText.slice(0, -1);
});
eight.addEventListener("click",()=>{
    input.innerText=input.innerText+eight.innerText;
});
five.addEventListener("click",()=>{
    input.innerText=input.innerText+five.innerText;
});
two.addEventListener("click",()=>{
    input.innerText=input.innerText+two.innerText;
});
per.addEventListener("click",()=>{
    input.innerText=input.innerText+per.innerText;
});
nine.addEventListener("click",()=>{
    input.innerText=input.innerText+nine.innerText;
});
six.addEventListener("click",()=>{
    input.innerText=input.innerText+six.innerText;
});
three.addEventListener("click",()=>{
    input.innerText=input.innerText+three.innerText;
});
dot.addEventListener("click",()=>{
    input.innerText=input.innerText+dot.innerText;
});
divide.addEventListener("click",()=>{
    input.innerText=input.innerText+divide.innerText;
});
mul.addEventListener("click",()=>{
    input.innerText=input.innerText+mul.innerText;
});
minus.addEventListener("click",()=>{
    input.innerText=input.innerText+minus.innerText;
});
plus.addEventListener("click",()=>{
    input.innerText=input.innerText+plus.innerText;
});
equal.addEventListener("click",()=>{
    input.innerText=eval(input.innerText);
});




