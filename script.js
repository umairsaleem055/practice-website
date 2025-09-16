const navi= document.getElementById('navbar');

function onScroll() {


if(window.scrollY > 50)
{
    navi.classList.add('shrink');
}
else{

    navi.classList.remove('shrink');
}
}

window.addEventListener('scroll', onScroll);
onScroll(); // run once on load



// const first = document.querySelectorAll(".contanar h2");

//     const observerr = new IntersectionObserver((entries) => {

//         entries.forEach(entry => {
//             if(entry.isIntersecting)
//             {
//                   entry.target.classList.add("wel");

//             }
//             else{
//                       entry.target.classList.remove("wel");

//             }
//     });    

//     });

//     first.forEach(lol => observerr.observe(lol));








const L = document.querySelectorAll(".intro-box");

const see = new IntersectionObserver((entries) => {

    entries.forEach(entry=> {
        if(entry.isIntersecting)
        {
            entry.target.classList.add("come");

        }
        else{
            entry.target.classList.remove("come");
        }
   
    });
});

L.forEach(Ab => see.observe(Ab));






const  m  = document.querySelectorAll(".img-box");

const saa = new IntersectionObserver((entries) => {

    entries.forEach(entry=> {
        if(entry.isIntersecting)
        {
            entry.target.classList.add("come");

        }
        else{
            entry.target.classList.remove("come");
        }
   
    });
});

m.forEach(Ab => saa.observe(Ab));


// document.addEventListener("DOMContentLoaded", () => {   it tells to first load the stucture etc but we dont need it because we allready wrote the script line in bottom of html so it loads other things first already

const barg= document.querySelectorAll(".progress");

const B = new IntersectionObserver( entries => {

    entries.forEach(entry => {

        const bar = entry.target;
    if(entry.isIntersecting)
        {
            bar.style.width = bar.getAttribute("data-width");
        }
        else{
            bar.style.width= "0";
        }
});
}, { threshold: 0.5 });

barg.forEach(bar =>{
    B.observe(bar);
});

// });