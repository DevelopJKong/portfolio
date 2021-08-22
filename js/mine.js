
const btn = document.querySelector(".home__contact");
const contact = document.querySelector("#contact");
btn.addEventListener("click",function(){
    contact.scrollIntoView(true);
});

const homeContact = document.querySelector(".home__contact");
//const contact = document.querySelector("#contact");
homeContact.addEventListener("click",(e)=>{
    contact.scrollIntoView({behavior:'smooth'});
});