const ul = document.querySelector("#My-ul")
const button = document.querySelector("#add-btn");
const input= document.querySelector("#press")

const addProduct = () => {

    const li = document.createElement("li");
    li.innerText="Tennis"
    li.innerText = input;
    ul.appendChild(li);

    button.addEventListener("click", addProduct)

};
