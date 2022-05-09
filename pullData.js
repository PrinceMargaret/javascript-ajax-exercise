

let pullData = () => {
    let id = document.getElementById("basic-url").value;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://jsonplaceholder.typicode.com/users/${id}`);
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            let alertmsg = document.getElementById("alertMessage");
            alertmsg.innerHTML = `<div class="alert alert-success alert-dismissible w-50">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong>Successfully Feched!</strong> See the data in Console.
          </div>`;



        } else {
            console.log('Request failed. Returned status of ' + xhr.status);
        }
    }
    xhr.send();

}

