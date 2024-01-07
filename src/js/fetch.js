
//GET
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

// DELETE (błąd)

fetch('https://jsonplaceholder.typicode.com/pos/1', {
    method: 'DELETE',
})
.then(response => {
    if(!response.ok) {
        throw new Error ('Dane nie mogły zostać usunięte');
    }
    return response.json()
})
.then(json => console.log(json))
.catch(error => {
    console.log('Błąd:', error.message);
})      


