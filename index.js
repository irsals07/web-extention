let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const saveTabBtn = document.getElementById("tab-btn");
const deleteAllBtn = document.getElementById("delete-btn");

// Retrieve saved leads from localStorage (if available)
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage; 
    renderLeads(); 
}

// Function to render leads in the list
function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li>
            <a target="_blank" href="${myLeads[i]}">
                ${myLeads[i]}
            </a>
        </li>`;
    }
    ulEl.innerHTML = listItems; 
}

// Save input 
inputBtn.addEventListener("click", function () {
    const inputValue = inputEl.value;
    if (inputValue) {
        myLeads.push(inputValue); 
        inputEl.value = ""; 
        localStorage.setItem("myLeads", JSON.stringify(myLeads)); 
        renderLeads(); 
    }
});

// Save the current tab
saveTabBtn.addEventListener("click", function () {
    // Use the browser's API to get the current tab's URL 
    const currentTab = "https://www.google.com"; //replace with true logic
    myLeads.push(currentTab);
    localStorage.setItem("myLeads", JSON.stringify(myLeads)); // Save to localStorage
    renderLeads(); 
});

// Delete all saved leads
deleteAllBtn.addEventListener("click", function () {
    myLeads = []; 
    localStorage.clear(); 
    renderLeads();
});