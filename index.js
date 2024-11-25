let myLeads = ["www.google.com", "www.example.com", "www.facebook.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const container = document.getElementById("container");




inputBtn.addEventListener("click", function () {
    let inputValue = inputEl.value; // Get the value from the input field
    if (inputValue) { 
        myLeads.push(inputValue); 
        inputEl.value = ""; 
        ulEl.innerHTML = "";

        // // Render the updated list of leads
        // for (let i = 0; i < myLeads.length; i++) {
        //     ulEl.innerHTML += "<li>" + "www." +myLeads[i] +".com"+ "</li>";
        // }
        function renderLeads(){
            let listItems = ""
            for(let i = 0; i<myLeads.length; i++){
                listItems += `<li><a target=_blank href= ${myLeads[i]} >
                ${myLeads[i]}
                </a></li>`
            }
            ulEl.innerHTML = listItems
        }


        renderLeads()
    }

});