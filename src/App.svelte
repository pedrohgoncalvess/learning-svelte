<script lang="ts">
	import Title from "./components/Title.svelte";
	import type IUSers from "./interfaces/IUsers";
	import User from "./components/User.svelte";
	import Form from "./components/Form.svelte";
	export let user: IUSers = null;

	function defineUser(event: CustomEvent<IUSers|null>) {
		user = event.detail
	}

</script>

<div class="app">
	<header>
	<Title/>

		<div class="search-user">

			<Form on:changingUser={defineUser}/>

		</div>
	</header>

{#if user}
	<User user={user}/>
{/if}
</div>

<style>
	.app {
		max-height: 100vh;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.search-user {
		position: relative;
		width: 70%;
	}
</style>