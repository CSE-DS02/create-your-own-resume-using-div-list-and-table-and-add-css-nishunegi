const searchBox = document.querySelector(".search-box");
const cards = document.querySelectorAll(".product-card");

searchBox.addEventListener("keyup", function(event) {

    if(event.key === "Enter") {

        const searchText = searchBox.value.toLowerCase();

        cards.forEach(function(card) {

            const productName =
                card.querySelector("h4").innerText.toLowerCase();

            if(productName.includes(searchText)) {
                card.style.border = "3px solid green";
            } else {
                card.style.border = "1px solid #ddd";
            }

        });
    }
});