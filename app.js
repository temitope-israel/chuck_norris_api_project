document.querySelector('.get-jokes').addEventListener('click', getJokes)

function getJokes(e) {
    //const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.chucknorris.io/jokes/random/`, true);

    xhr.onload = function (e) {
        if(this.status === 200){
            const response = JSON.parse(this.responseText);

            let output = '';
            if(response){
                console.log("Print");
                output += `<li>${response.value}</li>`;
                // response.value.forEach(function(joke){
                    console.log('Here');

                //})
            }else{
                console.log('error');
                output += `<li>Something went wrong</li>`;
            }
            console.log(response);
            document.querySelector('.jokes').innerHTML = output;
            }           

}

    xhr.send()

    e.preventDefault();
}