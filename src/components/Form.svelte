<script lang="ts">
    import type IUSers from "../interfaces/IUsers";
    import {createEventDispatcher} from "svelte";
    import {searchRepositories, searchUser} from "../requests";
    import initUser from "../utils/initUser";
    import Button from "./Button.svelte";

    let valueInput:string
    let responseStatus: null | number = null;

    const dispach = createEventDispatcher<{
        changingUser:IUSers|null
    }>
    ()
    async function toTheSubmit() {
        const responseUser = await searchUser(valueInput);
        const responseRepos = await searchRepositories(valueInput);

        if (responseUser.ok && responseRepos.ok) {

            const dataUser = await responseUser.json();
            const dataRepos = await responseRepos.json();

            dispach("changingUser",
            initUser(dataUser,dataRepos)
            )
            responseStatus = null;
        } else {
            responseStatus = responseUser.status
            dispach("changingUser",null)
        }
    }
</script>

<form on:submit|preventDefault={toTheSubmit}>

    <input
            type="text"
            class="input"
            bind:value={valueInput}
            class:error-input={responseStatus === 404}
    >

    {#if responseStatus === 404}
        <span class="error">Usuário não encontrado</span>
    {/if}

    <Button>
        Search
    </Button>
</form>

<style>

    .input {
        padding: 15px 25px;
        width: calc(100% - 8.75rem);
        font-size: 1rem;
        border-radius: 8px;
        border: 1px solid #2e80fa;
        box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
        outline: 0;
    }

    .input::placeholder {
        font-family: "Roboto";
        font-style: italic;
        font-weight: 300;
        font-size: 19.5px;
        line-height: 26px;
        color: #6e8cba;
    }

    .error {
        position: absolute;
        bottom: -25px;
        left: 0;
        font-style: italic;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        z-index: -1;
        color: #ff003e;
    }

    .error-input {
        border: 1px solid red;
    }

</style>