
<script>
    import { enhance } from '$app/forms';

    export let form;

    let checking = false;
</script>

<form method="POST" action="?/login" use:enhance={() => {
    checking = true;

        return async ({ update }) => {
            await update();
            checking = false;
        };
    }}>
    {#if checking}
        <p class="error">Validating...</p>
    {:else if form?.message} 
        <p class="error">{form?.message}</p>
    {/if}
    <label >Email: <input name="email" type="email" value={form?.email ?? ''}></label>
    <label >Password: <input name="password" type="password"></label>
    <button type="submit">Login</button>
</form>
<nav>
    <a href="/auth/register">No account? Signup here for free</a>
</nav>



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
        margin-left: 10px;
        text-indent: 2px;
        font-size: large;
        border-radius: 5px;
        width: 75%;
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

