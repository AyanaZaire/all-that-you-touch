document.addEventListener("DOMContentLoaded", () => {
    newQuoteHandler()
})

function newQuoteHandler() {
    let button = document.getElementById("quote-button")
    console.log(button);
    button.addEventListener("click", () => {
        console.log("button clicked!");
    })
}

function newQuote() {

}