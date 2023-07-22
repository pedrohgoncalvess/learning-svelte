function searchUser(nameUser:string) {
    return fetch(
        `https://api.github.com/users/${nameUser}`
    )
}


function searchRepositories(nameUser:string) {
    return fetch(
        `https://api.github.com/users/${nameUser}/repos?sort=created&per_page=5`
    )
}

export {searchUser, searchRepositories}