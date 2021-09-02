<script>
	let num = 2;
	let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
</script>

<h1 class="text-4xl py-6 bg-green-100">My very first sveltekit app!</h1>

<p class="text-base">
	the article below is styled with tailwind's typography, and should have a grayish bg:
</p>

<article class="prose p-4 mt-2 bg-gray-50">
	<h2>Welcome to SvelteKit</h2>
	<p>
		The world's shortest but padded article styled with typography. If everything worked than this
		should have a light grey background.
	</p>
	<p class="text-purple-500 font-bold">
		This app is using tailwindcss for styling, something which I've never used before but hot damn
		it makes it easy to turn text purple.
	</p>
	<p>
		Here we have a num: <code>{num}</code>, and its double: <code>{num * 2}</code>, computed on the
		fly using svelte.
	</p>
</article>

<h2 class="text-xl pt-4">Trying out a loop in svelte</h2>

<label for="num">Enter a number:</label>
<input name="num" class="m-1 p-2 bg-yellow-50 border" bind:value={num} />

<p>
	The form input is bound to the previously declared variable num and thus it changes the stuff at
	the top and the loop below:
</p>

<div class="max-w-max mx-auto p-1">
	<h3 class="text-3xl p-1 mt-4 bg-green-100">{num} Times Table</h3>
	<ul class="p-2 text-xl">
		{#each nums as n}
			<li class="odd:bg-blue-50 even:bg-yellow-50 py-2 px-14">
				{num.toLocaleString()} x {n} =
				<span class="text-red-900 font-bold">{(num * n).toLocaleString()}</span>
			</li>
		{/each}
	</ul>
</div>

<p class="pt-2">The Times Table as a Table</p>

<table class="table-fixed p-2 border border-green-100">
	<thead class="bg-blue-100 font-bold">
		<tr>
			<th class="w-1/4">Num</th>
			<th class="w-1/4">Times</th>
			<th class="w-1/2">M</th>
		</tr>
	</thead>
	{#each nums as n}
		<tr class="odd:bg-red-50 even:bg-yellow-50">
			<td class="pr-2">{num.toLocaleString()}</td>
			<td>{n}</td>
			<td>{(num * n).toLocaleString()}</td>
		</tr>
	{/each}
</table>

<div class="bg-green-50 text-xl p-4 mt-12">if footers could talk this would be one</div>
