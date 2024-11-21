let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    let inputValue = inputEl.value
    myLeads.push(inputValue)
    inputEl.value = ""

    // Clear previous list items to avoid duplication
    ulEl.innerHTML = ""

    // Render the updated list
    for (let i = 0; i < myLeads.length; i++) {
        ulEl.innerHTML += `<li>${myLeads[i]}</li>`
    }
})