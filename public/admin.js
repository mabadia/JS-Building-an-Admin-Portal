
// Your Code Here
async function main() {

    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(renderBook)
}

function renderBook(book) {
    let root = document.querySelector('#root')
    let ul = document.createElement('ul')
    let li = document.createElement('li')
    li.textContent = book.title
    let quantityInput = document.createElement('input')
    quantityInput.value = book.quantity
    let saveButton = document.createElement('button')
    saveButton.textContent = 'Save'
    saveButton.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
        })
    })
    li.append(quantityInput, saveButton)
    ul.append(li)
    root.append(ul)
}
main();


// function function1() {
//     var ul = document.getElementById("list");
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode("Four"));
//     li.setAttribute("id", "element4"); // added line
//     ul.appendChild(li);
//     alert(li.id);
//   }
// let input = document.createElement('input')
// input.type = 'save'
// input.value = 'number'
// input.className = 'input'
// let button = document.createElement('button')
// button.type = 'button'
// button.value = 'submit'
// button.className = 'btn'
// button.innerHTML = 'Save'
// let container = document.querySelector('#root')
// container.appendChild(input)
// container.appendChild(button)




// {
//         methood: "PATCH",
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({
//             "id": 3,
//             "tittle": "Legends of Arathrae",
//         }),
//     }
