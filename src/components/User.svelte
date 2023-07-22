<script lang="ts">
import TopBar from "./TopBar.svelte";
import type IUSers from "../interfaces/IUsers";

export let user: IUSers;

$: haveRepos = Boolean(user.recent_reposit.length)

</script>
<div class="card-user">
    <TopBar/>

    <div class="user">
        <div class="photo-container">
        <a href={user.perfil} target="_blank" rel="noopener">
            <div
             class="photo-user"
             style:background-image="url({user.pic_url})"/>
        </a>
        </div>

        <div class="detail-user">
            {#if user.name}
            <div class="info">
                Nome: <span>{user.name}</span>
            </div>
            {/if}
            <div class="info">
                Usuário: <span>{user.login}</span>
            </div>

            <div class="info">
                Seguidores: <span>{user.followers}</span>
            </div>

            <div class="info">
                Repositórios: <span>{user.public_repositorys}</span>
            </div>
        </div>

        {#if haveRepos}
        <div class="repositories">
            <h2 class="title">Repositórios recentes</h2>
            <ul>
                {#each user.recent_reposit as reposit}
                <li>
                    <a class="repositorie" href="{reposit.url}" target="_blank" rel="noopener">{reposit.name}</a>
                </li>
                {/each}
            </ul>
        </div>
        {/if}
    </div>
</div>

<style>

    .card-user {
        margin-right: auto;
        margin-left: auto;
        width: 60%;
        margin-top: 65px;
    }


    .photo-user {
        margin-right: 81px;
    }

    .photo-user {
        width: 12.75rem;
        height: 12.75rem;
        border: 4.56px solid #2e80fa;
        border-radius: 50%;
        background-size: cover;
    }

    .detail-user {
        margin-right: 55px;
    }

    .detail-user > .info {
        font-weight: 600;
        font-size: 20px;
        line-height: 31px;
        color: #395278;
    }

    .detail-user > .info > span {
        color: #6781a8;
        font-weight: normal;
    }

    .user {
        padding: 28px 0;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: -12px 37px 45px rgba(133, 127, 201, 0.18);
        border-radius: 0px 0px 13px 13px;
        display: flex;
        justify-content: center;
        height: auto;
    }

    .repositories > .title {
        font-size: 20px;
        line-height: 31px;
        font-weight: 600;
        color: #395278;
    }
    .repositorie {
        font-size: 20px;
        line-height: 31px;
        color: #6781a8;
        transition: color 0.2s;
    }
</style>