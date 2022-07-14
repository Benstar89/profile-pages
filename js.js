const people = [
    {
        id:0,
        name : "Smith",
        job : "Web Developer",
        img : "images/image1.jfif",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quod totam ipsam voluptatem, autem reprehenderit. Excepturi ab placeat dolorum qui?",
    },
    {
        id:1,
        name : "Johnson",
        job : "UX Designer",
        img : "images/image2.jfif",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quod totam ipsam voluptatem, autem reprehenderit. Excepturi ab placeat dolorum qui?",
    },
    {
        id:2,
        name : "Williams",
        job : "Frontend Developer",
        img : "images/image3.jfif",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quod totam ipsam voluptatem, autem reprehenderit. Excepturi ab placeat dolorum qui?",
    },
]
const img = document.querySelector("img");
const name = document.querySelector(".name-family");
const job = document.querySelector(".carrier");
const text = document.querySelector(".about");
document.querySelector(".before").addEventListener("click" ,beforeBtn );
document.querySelector(".random").addEventListener("click" , randomBtn);

let randomItem = people[Math.floor(Math.random() * people.length)];

let current = 0;
document.querySelector(".next").addEventListener("click" ,nextBtn );
function nextBtn(){
    if(current < 2){
        current++;
    }
    showPerson(current);
}
function randomBtn(){
    current = randomItem.id;
    showPerson(current);
}
function beforeBtn(){
    if(current > 0){
        current--;
    }
    showPerson(current);
}
window.addEventListener("DOMContentLoaded" , () =>{
    showPerson(current);
})

function showPerson(preson){
    const item = people[current];
    img.src = item.img;
    name.innerText = item.name;
    job.innerText = item.job;
    text.innerText = item.text;
}