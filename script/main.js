// Call Elements 
let inputAdd = document.querySelectorAll("input")[0];
let inputRemove = document.querySelectorAll("input")[1];
let divClassesLit = document.getElementsByClassName("classes-list")[0];
let divCurrent = divClassesLit.previousElementSibling;
let head5 = document.getElementsByClassName("classes-list")[0].children[0];
let divParentNewSpans = document.getElementsByClassName("classes-list")[0].children[1];

// Create Spans For Existed Classes
for (let i = 0; i < divCurrent.classList.length; i++) {
    let newSpans = document.createElement("span");
    divParentNewSpans.appendChild(newSpans);
    newSpans.textContent = `${divCurrent.classList[i]}` }
// Add Remove Classes Function
let myFunction = function(e) {
    // Condtion To Select Current Div For Click Event || Add and Remove Inputs For Blur Event
    if (e.target.hasAttribute("title") === true || e.target.hasAttribute("type") === true){
        // Turn inputAdd Values(New Classes) To An Array
            let addClasses = inputAdd.value.split(" "); 
            // Create Spans And Add New Classes
            for (let i = 0; i < addClasses.length; i++) {
                if (addClasses[i] !== "") {
                    let newSpans = document.createElement("span");
                    divParentNewSpans.appendChild(newSpans);
                    divCurrent.classList.add(`${addClasses[i].toLowerCase()}`)
                    newSpans.textContent = `${addClasses[i].toLowerCase()}` 
                    inputAdd.value = ""; }
        }
        // Turn inputRemove Values(New Classes) To An Array
            let removeClasses = inputRemove.value.split(" ");  
            // Remove Classes And Spans        
            for (let i = 0; i < removeClasses.length; i++) {
                if (removeClasses[i] !== "") {
                    if (divCurrent.classList.value.split(" ").includes(`${removeClasses[i].toLowerCase()}`) === true ) {
                        divCurrent.classList.remove(`${removeClasses[i]}`); // Remove Class
                        for (let j = 0; j < document.querySelectorAll("span").length; j++) {
                            if (document.querySelectorAll("span")[j].textContent === removeClasses[i].toLowerCase()) {
                                document.querySelectorAll("span")[j].remove() // Remove Spans
                            } 
                            inputRemove.value = "";
                                // Show Message If There Is No Class
                                if (divCurrent.classList.length === 0) {
                                    let divMessage = document.createElement("div");
                                    divParentNewSpans.appendChild(divMessage);
                                    divMessage.textContent = '"No Classes To Show"'
                                }
                        }
                    }
                }   
            }
}
}
// Use MyFunction On Click And Blur Events
document.addEventListener("click", myFunction)
document.addEventListener('blur', myFunction) 





















// var e1 = document.getElementById('containing-table');
// e1.addEventListener('blur', function(e){
//     alert(e.target);
// }, true);
// inputRemove.addEventListener('blur', function() {
//         console.log("true")
    
// });

// // document.addEventListener("blur", function() {
//         let text = inputAdd.value.split(" ").sort();
//         let sortedClasses = divCurrent.classList.value.split(" ").sort(); // Sort Classes List (It's An Array)
//         let concatArrays = text.concat(sortedClasses);
//         for (let i = 0; i < concatArrays.length; i++) { // Create New Spans, Add divCurent's classes inside spans
//             if (concatArrays[i] === " ") {
//                 concatArrays.splice(concatArrays[i], 1)
//             }
//             let newSpans = document.createElement("span");
//             divParentNewSpans.appendChild(newSpans);
//             newSpans.textContent = `${concatArrays[i].toLowerCase()}`
//         }
    
// })
