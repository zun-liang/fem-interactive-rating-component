const submit = document.getElementById("submit");
const rating = document.querySelector(".rating");
const thankYou = document.querySelector(".thank-you");
const numbers = document.querySelectorAll(".btn-rating");
const result = document.getElementById("result");

submit.addEventListener("click", changePage);

function changePage() {
    if (result.innerHTML == '') {
        alert("Please rate us! Thanks!");
    } else {
        rating.style.display = "none";
        thankYou.classList.remove("hidden");
    }
    
}

numbers.forEach((num) => {
    num.addEventListener("click", () => {
        result.innerHTML = num.innerHTML;
    })
})