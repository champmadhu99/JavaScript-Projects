const emojisEl = document.querySelectorAll(".fa-regular")
const starEl = document.querySelectorAll(".fa-star")
const colorsArray = ["red","blue","green","yellow","pink"]


updateRating(0);

starEl.forEach((starEl,index)=>{
    starEl.addEventListener("click", () =>  {
       updateRating(index)

    });
});

function updateRating(index){
    starEl.forEach((starEl,idx) =>{

        if(idx<index + 1){
            starEl.classList.add("active");
        }
        else{
            starEl.classList.remove("active");
        }

    });

    emojisEl.forEach((emojiEl) => {
        emojiEl.style.transform = `translateX(-${index *50}px)`;
        emojiEl.style.color = colorsArray [index]

    });
}