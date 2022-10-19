// alert('Tuko Site!!!!')


const form = document.querySelector('form')

console.log(form);

form.addEventListener('submit', (e) => {
    e.preventDefault()

    

    const input = document.querySelector('input').value

    console.log(input);

    const userName = input.split(' ').join('')

    // axios.get()

    console.log(userName);

    form.reset()


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '438cc17e36msh78447bf90d85a2ap14a1a1jsnab9c4e0738b5',
            'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
        }
    };
    
    fetch('https://edamam-recipe-search.p.rapidapi.com/search?q=' + userName, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    // fetch('https://api.github.com/users/' + userName).then((response) => {
    //     return response.json()
    // }).then((user) => {
    //     const img = document.querySelector('img')

    //     img.src = `${user.avatar_url}`

    //     const githubName = document.createElement('h1')

    //     githubName.innerText = `${user.name}`

    //     const displayArea = document.querySelector('.displayArea')

    //     displayArea.appendChild(githubName)
    // })
}
)