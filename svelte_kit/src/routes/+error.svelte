<script>
    import { page } from "$app/stores";

    let message = $page?.error?.message;

    $: if ($page.status == 404) {
        message = "Page could not be found :(";
    }

    $: if ($page.status == 500) {
        message = "Something went wrong with your request :(";
    }
</script>

<div class="main">
    <div class="header">

    </div>
    <div class="body">
        <h1>{$page.status}</h1>
        <p>{message}</p> 
    </div>
</div>

<style>
    .main {
        display: flex;
        width: 100%;
        flex-direction: column;
    }   

    .header {
        width: 100%;
        height: 7%;
        border-bottom: 1px solid #000;
    }

    .body {
        display: flex;
        width: 100%;
        height: 83%;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-size: 20rem;
        color: rgb(218, 86, 86);
    }

    p {
        margin-bottom: 100px;
        font-size: 2rem;
    }
</style>
