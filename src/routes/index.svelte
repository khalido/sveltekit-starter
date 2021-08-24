<script>
	import { start_hydrating } from 'svelte/internal';

	let num = 2;
	let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
</script>

<h1 class="text-4xl py-3">My very first sveltekit app!</h1>
<p>Here we have a num: {num}, and its double: {num * 2}</p>
<p class="text-base">
	the article below is styled with tailwind's typography, and should have a grayish bg:
</p>

<article class="prose p-8 mt-3 bg-gray-100">
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</article>

<h2 class="text-xl">Trying out a loop in svelte</h2>

<label>Enter a number:</label>
<input class="m-1 p-2 bg-yellow-50 border" bind:value={num} />

<p>
	The input is bound to the previously declared variable num and thus it changes the stuff at the
	top and the loop below:
</p>

<h3 class="text-2xl p-1 bg-green-100">{num} Times Table</h3>
<ul class="p-2">
	{#each nums as n}
		<li>{num} x {n} = {num * n}</li>
	{/each}
</ul>
