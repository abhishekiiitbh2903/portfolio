// creating a responsive navbar component starts=====>>> 
const mobile_nav=document.querySelector(".mobile-navbar-btn");
const headerElem=document.querySelector(".header");
mobile_nav.addEventListener("click",()=>{
headerElem.classList.toggle("active");
});

// creating a responsive navbar component ends =====>>> 
// ================================portfolio section starts ============>>
//======================================================================>>
const p_btns=document.querySelector(".p-btns"); //taking reference of parent of buttons 
//taking reference of buttons one by one 
const p_btn1=document.querySelector(".p-btn1");
const p_btn2=document.querySelector(".p-btn2");
const p_btn3=document.querySelector(".p-btn3");
// took all references 
// Taking Reference of the parent container of all images ======>
const img_div = document.querySelectorAll(".img-overlay");

// Adding Event Listener on parent of buttons =====>
p_btns.addEventListener("click",(e)=>{
const p_btn_clicked=e.target; // we get to which button we have clicked 
// Removing btn active class from every buttons one by one 
p_btn1.classList.remove("p-btn-active");
p_btn2.classList.remove("p-btn-active");
p_btn3.classList.remove("p-btn-active");
// Removed================================>>
p_btn_clicked.classList.add("p-btn-active");
// finding which button number has been clicked 
const btn_num=p_btn_clicked.dataset.btnNum;
// ============================================>>>>>
// Taking All Filterd Contents ===============>>
const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
// Adding the class "portfolio-image-not-active" that will make the display none 
img_div.forEach((curElem) =>
curElem.classList.add("portfolio-image-not-active")
);
// Removing class that makes display none  from desired output so that it may become visible==========>>>
img_active.forEach((curElem) =>
curElem.classList.remove(`portfolio-image-not-active`)
);
});
// ================================portfolio section ends ============>>

// ================================Swiper Section Code Starts ============>>
const myJsmedia=(widthSize)=>{
    if(widthSize.matches){
        new Swiper(".swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
    else{
        new Swiper(".swiper", {
            slidesPerView: 2,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
}
const widthSize = window.matchMedia("(max-width: 780px)");
myJsmedia(widthSize);
widthSize.addEventListener("change",myJsmedia);
// ================================Swiper Section Code Ends ============>>

//============= scroll to Top to bottom Starts============>
const footerElem=document.querySelector(".section-footer");
const heroSection=document.querySelector(".section-hero");
const scrollElement=document.createElement("div");
scrollElement.classList.add("scrollTop-style");
scrollElement.innerHTML=`<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;
footerElem.after(scrollElement);
const scrollTop =()=>{
heroSection.scrollIntoView({behaviour:"smooth"});
}
scrollElement.addEventListener("click",scrollTop);
//============= scroll to Top to bottom ends ============>

//============= Animate Number Starts============>
const workSection=document.querySelector(".section-work-data");
const workObserver=new IntersectionObserver((entries,observer)=>{
//Array Destructuring
const[entry]=entries;
if(!entry.isIntersecting) return;
const counterNum=document.querySelectorAll(".counter-number");
const speed=20;
counterNum.forEach((curElem)=>{
const updateNumber=()=>{
    const targetNumber=parseInt(curElem.dataset.number);
    // console.log(targetNumber);
    const initialNum=parseInt(curElem.innerText);
    // console.log(initialNum);
    const incrementNumber=Math.trunc(targetNumber/speed);
    // console.log(incrementNumber);
    if(initialNum<targetNumber){
        curElem.innerText=`${initialNum+incrementNumber}+`; 
        setTimeout(updateNumber,100);
    }
}
updateNumber();
});
observer.unobserve(workSection);
},
{root:null,
threshold:0,
});
workObserver.observe(workSection);
//============= Animate Number Ends============>
//============= Sticky Navigation starts============>
const observer=new IntersectionObserver((entries,observer)=>{
const[entry]=entries;
// console.log(entry);
if(!entry.isIntersecting)document.body.classList.add("sticky");
else document.body.classList.remove("sticky");
},{root:null,threshold:0});
observer.observe(heroSection);
//============= Sticky Navigation ends============>
//=============Lazy Loading Images Starts================>
const imageRef=document.querySelector("img[data-src]");
const lazyImg=(entries)=>{
const [entry]=entries;
if(!entry.isIntersecting) return;
entry.target.src=imageRef.dataset.src;
};
const imageObserver=new IntersectionObserver(lazyImg,{root:null,threshold:0});
imageObserver.observe(imageRef)




//=============Lazy Loading Images Ends================>





