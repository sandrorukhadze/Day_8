function getUsersInfo() {
    const requestElement = new XMLHttpRequest();

        requestElement.addEventListener('load', function() {
            const infoText = this.responseText;
                const infoTextJson = JSON.parse(infoText);
                    console.log(infoTextJson);


    const ulElement = document.createElement('ul');
        infoTextJson.data.forEach(function(item) {
            console.log(item);
                const liElement = document.createElement('li')
                    liElement.textContent = `${item.first_name} ${item.last_name} ${item.email}` 
                        ulElement.appendChild(liElement);


        })


    document.getElementById('server-api').appendChild(ulElement);


        });

        requestElement.addEventListener('error', function() {
            let pElement = document.createElement('p');
                pElement.textContent = 'დაფიქსირდა ტექნიკური შეფერხება'
                    document.getElementById('server-api').appendChild(pElement);
        });


    requestElement.open('GET', 'https://reqres.in/api/users?page=2');
    requestElement.send();
    
}


getUsersInfo();