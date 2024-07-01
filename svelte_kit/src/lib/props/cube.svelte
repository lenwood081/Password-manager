<!-- Element that displays the password details -->

<script>
    import { enhance } from "$app/forms";
    import { slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    /* defualt properties for componet */
    export let _id;     // index of object in mongodb !not _id of user
    export let password;
    export let username;
    export let title;
    export let url;
    export let postPath = "update";
    export let deletePath = "delete";

    export let updating;    // indicates whether to block user input

    let visible = "password";
    function passwordVisible() {
        if (visible === "password") {
            visible = "text";
        } else {
            visible = "password";
        }
    }
</script>


<div class="cube" in:slide={{duration: 300, easing: quintOut, axis: 'y' }} out:slide={{duration: 300, easing: quintOut, axis: 'x' }}>
    {#if updating}
        <!-- disable form input and change color-->
        <div class="overlay">
            <p>Updating!...</p>
        </div>
    {/if}
    <form id="delete" method="POST" action="?/{deletePath}" use:enhance>
        <input  type="hidden" name="id" value="{_id}"/>
        <button type="submit">X</button>
    </form>
    <form method="POST" 
        action="?/{postPath}" 
        autocomplete="off" 
        spellcheck="false" 
        use:enhance={() => {
            updating = true;

            return async ({ update }) => {
                await update({ reset: false });
                updating = false;
            };
        }}>
        <div id="center"><input id="title" name="title" type="title" value="{title}" ></div>
        <label >Url: <input class="inp" name="url" type="text" value="{url}" ></label>
        <label >Username: <input class="inp" name="username" type="username" value="{username}"></label>
        <label >Password: 
            <input class="inp pass" name="password" type="{visible}" value="{password}">
            <button class="visible" type="button" on:click={passwordVisible}>O</button>
        </label>
        <input  type="hidden" name="id" value="{_id}"/>
        <div id="center"><button id="submit" type="submit">Update</button></div>
    </form>
</div>

<style>
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        background-color: rgba(0,0,0,0.8); /*dim the background*/
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #center {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    #title {
        background-color: inherit;
        height: 20px;
        box-sizing: border-box;
        padding: 15px 7px;
        border: 1px solid black;
        width: 300px;
        text-align: center;
        font-size: 1.3rem;
        font-weight: bold;
        margin-right: 30px;
        margin-bottom: 15px;
    }

    label {
        margin-bottom: 5px;
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        position: relative;
    }

    .visible {
        position: absolute;
        right: 7px;
        padding: 2px 5px;
        background-color: inherit;
        border: 0.5px solid black;
        border-radius: 2px;
        font-weight: 900;
    }
    
    .visible:hover {
        background-color: rgb(232, 228, 228);
    }

    .inp {
        height: 20px;
        box-sizing: border-box;
        padding: 15px 5px;
        border: 1px solid black;
        font-size: 1rem;
        width: 250px;
    }

    .cube {
        width: 400px;
        height: fit-content;
        background-color: rgb(232, 228, 228);
        border-radius: 5px;
        padding: 10px;
        font-size: 1.3rem;
        position: relative;
    }

    #submit {
        font-size: 1.3rem;
        font-weight: bold;
        padding:3px 20px;
        border: 1px solid black;
        background-color: white;
        margin-right: 3px;
    }

    #submit:hover {
        background-color: inherit;
    }

    #delete {
        position: absolute;
        right: 10px;
        top: 10px;
        align-items: center;
        justify-content: center;
    }

    #delete button {
        font-size: 1.5rem;
        padding: 1px 7px;
        text-align: center;
        border: 1px solid black;
    }

    #delete button:hover {
        background-color: red;
    }
</style>