let myLeads = ["www.google.com", "www.example.com", "www.facebook.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const container = document.getElementById("container");

container.innerHTML = "<button onclick='buy()'>Buy</button>";

function buy() {
    container.innerHTML += "<p>Thank you for buying!</p>";
}

inputBtn.addEventListener("click", function () {
    let inputValue = inputEl.value; // Get the value from the input field
    if (inputValue) { 
        myLeads.push(inputValue); 
        inputEl.value = ""; 
        ulEl.innerHTML = "";

        // Render the updated list of leads
        for (let i = 0; i < myLeads.length; i++) {
            ulEl.innerHTML += `<li>${myLeads[i]}</li>`;
        }
    }
});