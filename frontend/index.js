handleShowTodo();

function handleSubmit(e) {
    e.preventDefault();

    let dataTitle = document.getElementById("newTodoTitle").value;
    let dataDescription = document.getElementById("newTodoDescription").value;
    fetch("http://localhost:8000/api/todo", {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({
            title: dataTitle,
            description: dataDescription
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        // Converting to JSON
        .then(response => response.json())
}

async function handleDelete(id) {
    // e.preventDefault();
    const response = await fetch("http://localhost:8000/api/todo/" + id, {
        method: 'delete'
    }); handleShowTodo();
    return await response.json();
}

function handleShowTodo() {
    // e.preventDefault();
    fetch("http://localhost:8000/api/todo")

        // Converting received data to JSON
        .then(response => response.json())
        .then(json => {

            // Create a variable to store HTML
            let li = `<tr><th>Title</th><th>Description</th><th>Delete Button</th></tr>`;

            // Loop through each data and add a table row
            json.forEach((data) => {
                li += `<tr>
                <td>${data.title} </td>
                <td>${data.description}</td>
                <td><button id=${data._id} onclick="handleDelete('${data._id}')">Delete</button>  </td>         
            </tr>`;
            });

            // Display result
            document.getElementById("TodoList").innerHTML = li;
        });
}


