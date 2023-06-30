<script lang="ts">
	import Title from "./components/Title.svelte";


	let valueInput:string
	function toTheSubmit() {
		console.log(valueInput)
	}
</script>

<div class="app">
	<header>
	<Title/>

		<div class="search-user">
			<form on:submit|preventDefault={toTheSubmit}>
				<input type="text" class="input" bind:value={valueInput}>

				<div class="button-container">
					<button type="submit" class="button">Search</button>
				</div>
			</form>
		</div>
	</header>
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

	.button-container {
		position: absolute;
		width: 9.625rem;
		right: 0;
		top: 0;
		bottom: 0;
		display: flex;
	}

	.button {
		padding: 15px 24px;
		border-radius: 8px;
		border: none;
		background: #2e80fa;
		line-height: 26px;
		color: #fff;
		font-size: 22px;
		cursor: pointer;

		transition: background-color 0.2s;

		display: flex;
		align-items: center;
		gap: 13px;
	}

	.button:hover {
		background: #4590ff;
	}

</style>