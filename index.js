import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from 
"https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://firstapp-b2805-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementInDB = ref(database, "Endorsement")


const textAreaEl = document.getElementById("textarea-el")
const btnEl = document.getElementById("btn-el")
const commentsEl = document.getElementById("comments")




  
btnEl.addEventListener("click", function() {
    let inputValue = textAreaEl.value
    push(endorsementInDB, inputValue)
    clearTextAreaEl()
    


})





function clearTextAreaEl() {
    textAreaEl.value = ""
}


function clearComments() {
    commentsEl.innerHTML = ""

}

onValue(endorsementInDB, function(snapshot) {
    

    let itemsArray = Object.entries(snapshot.val())

    clearComments()

    for (let i = 0; i < itemsArray.length; i++) {
        let currentComment = itemsArray[i]
        let currentCommentID = currentComment[0]
        let currentCommentValue = currentComment[1]
        renderComments(currentComment)
    }

})

function renderComments(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("p")
    
    
    newEl.textContent = itemValue
    
    commentsEl.append(newEl)
        
        
        
    }
    
    










