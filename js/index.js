// * Nabvar
const nav = document.querySelector(".navbar__main");
const navOpenBtn = document.querySelector(".navbar__open--icon");
const navCloseBtn = document.querySelector(".navbar__close--icon");

navOpenBtn.addEventListener('click', () => {
    nav.classList.add("open");
});

navCloseBtn.addEventListener('click', () => {
    nav.classList.remove("open");
});

// * Change Image
mainImage = document.querySelector(".main__imgbox img")
window.addEventListener("resize", () => {
    resize()
})
resize()
function resize() {
    if (window.innerWidth <= 576) {
        mainImage.setAttribute("src", "./image/home/main-image-sushi.png");
    } else {
        mainImage.setAttribute("src", "./image/home/main-image.png");
    }
}

// * Change Content
const reviewBox = document.querySelector(".review__main-info__body"); 
const reviewBoxImage = document.querySelector(".review__main-info__imgbox img"); 
const reviewBoxTitle = document.querySelector(".review__main-info__imgbox-text h3"); 
const reviewBoxPosition = document.querySelector(".review__main-info__imgbox-text span"); 
const reviewBoxDescription = document.querySelector(".review__main-info__description");
const reviewNextBtn = document.querySelector("#review__next")
const reviewPrevBtn = document.querySelector("#review__prev")
const data = [
    {
        src:"/image/review/review-user.png",
        title: "Williams Johon",
        position: "CEO & Co-Founder",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat. Duis aute irure dolor.",
    },
    {
        src:"/image/review/review-user-4.png",
        title: "Umidjon Karabaev",
        position: "Frontend Developer",
        description: "Welcome to the website. If you're here, you're likely looking to find random words. Random Word Generator is the perfect tool to help you do this. While this tool isn't a word creator, it is a word generator that will generate random words for a variety of activities or uses."
    },
    {
        src:"/image/review/review-user-5.jpg",
        title: "Azizbek",
        position: "Backend Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat. Duis aute irure dolor.",
    },
]
let count = 0
reviewNextBtn.addEventListener('click',()=>{
    count++;
    if(count>= data.length){
        count = 0
    }
    console.log(count);
    changeImage()
});
reviewPrevBtn.addEventListener('click',()=>{
    count--;
    if(count<0){
        count = data.length-1;
    }
    changeImage()
});


function changeImage(){
    reviewBox.classList.contains("effect") ? reviewBox.classList.remove("effect") : reviewBox.classList.add("effect");
    setTimeout(()=>{
        reviewBox.classList.remove("effect")
    },1000)
    let user = data[count];
    reviewBoxImage.setAttribute("src",user.src);
    reviewBoxTitle.textContent = user.title;
    reviewBoxPosition.textContent = user.position;
    reviewBoxDescription.textContent = user.description;
}
