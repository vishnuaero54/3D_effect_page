// movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
// items
const title = document.querySelector('.title');
const box = document.querySelector('.box img');
const description = document.querySelector('.info h3');
const prices = document.querySelector('.prices button');
const purchase = document.querySelector('.purchase');

// moving animation event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX)/25;
    let yAxis = (window.innerHeight / 2 -e.pageY)/25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
// animate in
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    // popin
    title.style.transform = "translateZ(150px)";
    box.style.transform = "translateZ(200px) rotateZ(-15deg)";
    description.style.transform = "translateZ(150px)";
    prices.style.transform = "translateZ(125px)";
    purchase.style.transform = "translateZ(100px)";
})


// animate out
container.addEventListener("mouseleave" , (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // popout
    title.style.transform = "translateZ(0px)";
    box.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    prices.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";

});