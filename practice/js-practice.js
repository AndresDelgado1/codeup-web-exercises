fetch( 'https://dog.ceo/api/breeds/image/random')
    .then((response) => response.jason())
    .then((data) => console.log(data))
    .catch(error => console.log(error))


