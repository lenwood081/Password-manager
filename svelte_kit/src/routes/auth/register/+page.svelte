<!--
    request username and password
    check the username is free
    Argon2 the password an store in database
    create initial folders: All, Applications, Websites
    redirect to login when done 
-->

<script>
    import { enhance } from '$app/forms';
    export let data;
    export let form;
</script>
{#if data?.user === null}
    <form method="POST" action="?/register" use:enhance>
        {#if form?.message} 
            <p class="error">{form?.message}</p>
        {/if}
        <label >Email: <input name="email" type="email" value={form?.email ?? ''}></label>
        <label >Password: <input name="password" type="password"></label>
        <button type="submit">Signup</button>
    </form>
    <nav>
        <a href="/auth/login">Existing account? Login here</a>
    </nav>
{:else}
    <p class="error">Cannot Signup again, already logged in.</p>
    <p class="error">Signout to register a new user</p>
{/if}

<style>
    form {
        display: flex;
        flex-direction: column;
    }
    
    .error {
        text-align: center;
        color: red;
        margin: 5px;
        font-size: x-large;
    }

    label {
        margin-bottom: 5px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width: 100%;
        font-size: x-large;
        font-weight: bold;
    }

    input {
        width: 75%;
        margin-left: 10px;
        text-indent: 2px;
        font-size: large;
        border-radius: 5px;
    }

    button {
        margin-top: 10px;
        font-size: x-large;
        font-weight: bold;
        border-radius: 5px;
        padding: 5px;
    }

    nav {
        margin-top: 10px;
        display: flex;
        justify-content: center;
    }

    a {
        color: black;
    }

    a:hover {
        color: gray;
    }
</style>

