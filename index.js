import { v4 as uuidv4 } from 'https://jspm.dev/uuid'
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
const fromInput = document.getElementById("from-input")
const toInput = document.getElementById("to-input")




document.addEventListener('click', function(e){
    if(e.target.dataset.like){

    }
})
  


btnEl.addEventListener('submit', function(e) {
    e.preventDefault()
    let inputValue = textAreaEl.value
    let fromInputValue = fromInput.value
    let toInputValue = toInput.value
    let uuid = uuidv4()
    
    push(endorsementInDB, {inputValue, fromInputValue, toInputValue, uuid})
    
    clearTextAreaEl()

})

function handleLoveIcon(snapshot){

    const itemID = snapshot.uuid
    return itemID

}

console.log(handleLoveIcon(endorsementInDB))

function clearTextAreaEl() {
    textAreaEl.value = ""
    fromInput.value = ""
    toInput.value = ""
}


function clearComments() {
    commentsEl.innerHTML = ""

}

onValue(endorsementInDB, function(snapshot) {
    
    const itemsArray = Object.values(snapshot.val())
    
    
    let newCommentHtml = ''
    clearComments()
    itemsArray.forEach(function(newComment){
        newCommentHtml += `<div class="comment-style">
        <h4>To ${newComment.toInputValue}</h4>
        <p>${newComment.inputValue}</p>  
        <h4>From ${newComment.fromInputValue}</h4>
        <i class="fa-solid fa-heart" data-like="${newComment.uuid}"></i>
        </div>
        `
    })
   
    return renderComments(newCommentHtml)


})



function renderComments(item) {
    commentsEl.innerHTML = item              
    }
    
    










