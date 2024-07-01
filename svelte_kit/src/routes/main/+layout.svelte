<script>
    import { page } from '$app/stores';
    import { toUpper } from '$lib/functions/assist';

    export let data;
    $: current_link = $page.url.pathname;

</script>

<!-- Have to reload whole page to update sidebar, vinefficient solution but works ig -->
<div id="sidenav" > 
    <h2 id="underline" class={current_link==="/main" ? 'selec link' : 'link'}>
        <a href="/main">Main</a>
    </h2>
    {#each data?.User?.folders as name}
        <h2 class={current_link===`/main/${name}` ? 'selec link' : 'link'}>
            <a href="/main/{name}" >{toUpper(name)}</a>
        </h2>
    {/each}
</div>

<div class="header">
    <h1>My Password Manager</h1>
    <nav>
        <a href="/auth/login">Login</a>
        <a href="/auth/logout">Logout</a>
        <a href="/auth/register">Signup</a>
    </nav>
</div>
<div class="main">
    <slot />
</div>

<style>
    #underline {
        border-bottom: 1px solid black;
        height: 50px;
        display: flex;
        align-items: center;
    }

    #sidenav {
        height: 100%;
        width: 200px;
        position: fixed;
        background-color: rgb(232, 228, 228);
    }

    .link {
        padding: 5px;
    }

    .main {
        width: 100%; 
        height: fit-content;
        background-color: white;
        margin-left: 200px;
        padding: 10px;
        margin-top: 50px;
    }

    .header {
        margin-left: 200px;
        position: fixed;
        width: 100%;
        height: 50px;
        background-color: rgba(232, 228, 228, 0.75);
        padding: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid black;
    }

    a {
        color: black;
    }

    a:hover {
        color: gray;
    }

    .selec {
        background-color: darkgrey;
        color: white;
    }
    
    .selec a:hover {
        color: rgb(232, 228, 228);
    }

    nav a {
        color: black;
        font-size: large;
        padding: 5px 10px;
        border: 1px solid grey;
        border-radius: 10px;
    }

    nav a:hover {
        color: grey;
    }

    nav {
        margin-right: 210px;
    }

    h1 {
        margin-left: 10px;
    }
</style>