<script>
    import { toUpper } from "$lib/functions/assist"
    import { invalidateAll } from '$app/navigation';
    import { enhance } from '$app/forms';
    import { slide } from 'svelte/transition';
    import { quintOut } from "svelte/easing";

    export let data;

    let createFolder = false;
    let creating = false;
</script>

<div class="container">
    <h2>Main</h2>
    <div id="line" ></div>
</div>
<div class="container">
    <h2 class="center">Folders</h2>
    <div id="line" ></div>
    <table>
        <tr>
            <th>Name</th>
            <th>Number of entries</th>
            <th>Something interesting</th>   
        </tr>
        {#each data?.Folders as folder}
            <tr transition:slide={{duration: 300, easing: quintOut, axis: 'y' }}>
                <td id="data">{toUpper(folder.folder)}</td>
                <td id="data">{folder.count}</td>
                <td id="data">:</td>
                {#if folder.folder !== 'all'} <!-- remove delete button for all -->
                    <td id="delete"><form id="deleteFolder" method="POST" action="?/deleteFolder" use:enhance={() => {
                        return async ({ update }) => {
                            await update();
                            invalidateAll();    // used to ensure that the layout.svelte component updates correctly 
                        };
                        }}>
                        <input type="hidden" name="folder" value="{folder.folder}">
                        <button type="submit">X</button>
                    </form></td>
                {/if}
            </tr>
        {/each}
    </table>
    <form id="create" method="POST" action="?/addFolder" autocomplete="off" spellcheck="false" use:enhance={() => {
        return async ({ update }) => {
            creating = true;
            
            await update();
            createFolder = false;
            creating = false;
            invalidateAll();    // used to ensure that the layout.svelte component updates correctly 
        };
        }}>
        <button id="createBtn" type="button" on:click={() => createFolder=true}>Create new folder</button>
        {#if createFolder}
            <!-- creates a popup -->
            <button class="backdrop" type="button" on:click={() => createFolder = false}></button>
            <div class="popup">
                <label>Folder name: <input type="text" name="folder"></label>
            </div>
        {/if}
    </form>
</div>

<style>
    .backdrop {
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        position: fixed;
        background-color: rgba(0, 0, 0, 0);
        z-index: 99;
        border: none;
    }

    .popup {
        width: 500px;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid black;
        background-color: darkgray;
        box-shadow:  0px 0px 20px 2px black;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
    }

    label {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input {
        margin-left: 10px;  
        font-size: 1.2rem;
        padding: 2px;
    }

    .container {
        width: 100%;
        height: fit-content;
        background-color: rgb(232, 228, 228);
        border-radius: 5px;
        padding: 10px;  
        margin-bottom: 10px;
    }

    #line {
        width: 100%;
        height: 7px;
        background-color: darkgrey;
        border-radius: 5px;
    }

    h2 {
        margin-bottom: 5px;
    }

    .center {
        text-align: center;
    }

    th {
        padding: 5px;
        text-align: left;
        border-bottom: 1px double black;
    }

    #data {
        padding: 5px;
        width: 33.333%;
        border-bottom: 1px double black;
    }

    table {
        width: 100%;
        font-weight: bold;
        font-size: 1.2rem;
        margin-top: 10px;
    }

    tr {
        position: relative;
    }

    #deleteFolder {
        position: absolute;
        top: 0;
        right: 2px;
    }

    button {
        padding: 5px;
    }

    #create {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
    }

    #createBtn {
        background-color: white;
        border: 1px solid black;
        border-radius: 10px;
        font-size: 1.2rem;
        font-weight: bold;
    }

    #createBtn:hover {
        background-color: rgb(232, 228, 228);
    }
</style>