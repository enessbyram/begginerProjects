const btn = document.getElementById("btn")
const question = document.getElementById("question")
const asnwer = document.getElementById("answer")

const jokes = [{
    question : "Why did the bullet end up losing his job?",
    asnwer : "He got fired."
}, {
    question : "How do you measure a snake?",
    asnwer : "In inches—they don’t have feet."
}, {
    question : "Where does a waitress with only one leg work?",
    asnwer : "IHOP."
}, {
    question : "What does a house wear?",
    asnwer : "Address!"
}, {
    question : "Why are toilets always so good at poker?",
    asnwer : "They always get a flush."
}, {
    question : "The first rule of the Alzheimer’s club is…",
    asnwer : "Wait, where are we again?"
}, {
    question : "I took the shell off of my racing snail, thinking it would make him faster.",
    asnwer : "But if anything, it made him more sluggish."
}, {
    question : "How does NASA organize a party?",
    asnwer : "They planet."
}, {
    question : "What do you get from a pampered cow?",
    asnwer : "Spoiled milk."
}, {
    question : "Why do ducks have feathers?",
    asnwer : "To cover their butt quacks!"
}]

function createJoke() {
    let random = Math.floor(Math.random() * jokes.length)
    question.innerText = jokes[random].question
    asnwer.innerText = jokes[random].asnwer
}

btn.addEventListener("click", createJoke)