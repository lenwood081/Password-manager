<script>
    import Cube from '$lib/props/cube.svelte';
    import { toUpper } from '$lib/functions/assist';
    import { enhance } from '$app/forms';

    export let data;
    let createing = false;

    $: entries = data.indexedEntries;
    $: numEntries = entries.length;
</script>

<div class="header" >
    <h2>{toUpper(data.page)}</h2>
    <div id="line" ></div>
    <div id="col">
        <p>Number of Entries: {numEntries}</p>
    </div>
</div>

<div class="content">
    <!-- TODO: add transitions! -->
    {#each entries as entry}
        <Cube 
            _id="{entry._id}"
            password="{entry.password}"
            username="{entry.username}"
            title="{entry.title}"
            url="{entry.url}"
            updating="{entry.updating}"
        />
    {/each}
    <form id="insert" method="POST" action="?/add" use:enhance={() => {
        createing = true;

        return async ({ update }) => {
            await update({ reset: false });
            createing = false;
        };
    }}>
        {#if createing} 
            <div class="overlay">

            </div>
        {/if}
        <button type="submit">(+)</button>
    </form>
</div>  


<style>
    p {
        margin-right: 50px;
    }

    h2 {
        margin-bottom: 5px;
    }

    .header {
        width: 100%;
        height: fit-content;
        background-color: rgb(232, 228, 228);
        border-radius: 5px;
        padding: 10px;  
        margin-bottom: 10px;
    }

    .content {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        gap: 10px;
    }

    #line {
        width: 100%;
        height: 7px;
        background-color: darkgrey;
        border-radius: 5px;
    }

    #col {
        padding: 10px 0;
        display: flex;
    }


    #insert {
        width: 400px;
        height: fit-content;
        background-color: rgb(232, 228, 228);
        border-radius: 5px;
        height: 209px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        background-color: rgba(0,0,0,0.1); /*dim the background*/
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #insert button {
        width: 100%;
        height: 100%;
        border: 1px solid black;
        border-radius: 5px;
    }

    #insert button:hover {
        background-color: rgb(232, 228, 228);
    }
</style>