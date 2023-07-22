import type IRepositorie from "./IRepositorie";

export default interface IUSers {
    login: string,
    pic_url: string,
    name:string,
    perfil:string,
    public_repositorys:number,
    followers:number,
    recent_reposit: IRepositorie[]
}