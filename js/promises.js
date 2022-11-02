const baseurl = 'https://api.github.com/users/';



const getLastCommit = username => {
    fetch(`${baseurl}${username}/events/public`, {headers: {'Authorization': 'token' + githubKey}})
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            console.log(response[0].created_at);
            return response[0].created_at
        });
}
getLastCommit("AndresDelgado1")