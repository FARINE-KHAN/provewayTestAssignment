document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".cards");
    const totalAmountElement = document.getElementById("totalAmount");
    const img = document.getElementById("img")
  
    cards.forEach((card) => {
      const radio = card.querySelector('input[type="radio"]');
      const items = card.querySelector(".card-items");
      const mainDiv = card;
      const discountPrice = card.querySelector(".discount-price");
  
      radio.addEventListener("change", function () {
        if (this.checked) {
          document.querySelectorAll(".card-items").forEach((otherItems) => {
            if (otherItems !== items) {
              otherItems.style.display = "none";
              otherItems.closest(".cards").classList.remove("checked");
            }
          });
  
          items.style.display = "flex";
          img.style.left = "21rem"
          mainDiv.classList.add("checked");
  
          const price = parseFloat(discountPrice.textContent.replace("$", ""));
          totalAmountElement.textContent = price.toFixed(2);
        } else {
          items.style.display = "none";
          mainDiv.classList.remove("checked");
        }
      });
    });
  });
  