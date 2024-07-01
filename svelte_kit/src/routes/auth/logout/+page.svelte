<script>
    export let data;
</script>

<h1>Logout</h1>
{#if data.logged}
    <p>Logging out will require you to sign back in next time you visit.</p>
    <form method="POST" action="?/logout">
        <button type="submit">Confirm</button>
    </form>
{:else}
    <p>There is currently no user logged in.</p>
{/if}

<style>
    button {
        margin-top: 10px;
        font-size: x-large;
        font-weight: bold;
        border-radius: 5px;
        padding: 5px;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    p {
        text-align: center;
        color: red;
        margin: 5px;
        font-size: x-large;
        margin-bottom: 50px;
    }

    h1 {
        text-align: center;
        margin-bottom: 50px;
    }
</style>