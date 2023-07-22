import type IUSers from "../interfaces/IUsers";
import type IRepositorie from "../interfaces/IRepositorie";

export default function initUser(dataUser:any, dataRepos:any): IUSers {

    const recent_repostories = dataRepos.map((repositorie) => {
        return {
            name: repositorie.name,
            url: repositorie.url
        } as IRepositorie;
    })

    return {
        pic_url: dataUser.avatar_url,
        login: dataUser.login,
        name: dataUser.name,
        perfil: dataUser.html_url,
        public_repositorys: dataUser.public_repos,
        followers: dataUser.followers,
        recent_reposit:recent_repostories
    }
}