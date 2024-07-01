<script>
    export let data;
</script>

<div class="main">
    <div class="header">
        <a id="enter" href="/main">Password Manager</a>
        <nav>
            <a href="/auth/login">Login</a>
            <a href="/auth/logout">Logout</a>
            <a href="/auth/register">Signup</a>
        </nav>
    </div>
    <div class="body">
        <div class="content">
            <div class="inner">
                <slot /> 
            </div>
        </div>
        
    </div>
    <div class="footer">
        <p>By {data.name}</p>
        <p>Email: {data.email}</p>
    </div>
</div>

<style>
    .main {
        display: flex;
        width: 100%;
        flex-direction: column;
    }   

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 7%;
        border-bottom: 1px solid #000;
    }

    .body {
        display: flex;
        width: 100%;
        height: 83%;
        justify-content: center;
        align-items: center;
    }

    .footer {
        display: flex;
        width: 100%;
        height: 10%;
        border-top: 1px solid #000;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .content {
        width: fit-content;
        height: fit-content;
        padding: 20px;
        border: 1px solid black;
        border-radius: 20px;
    }

    .inner {
        width: 600px;
        height: fit-content;
        background-color: whitesmoke;
        border-radius: 20px;
        padding: 20px;
    }

    a {
        color: black;
        font-size: large;
        padding: 5px 10px;
        border: 1px solid grey;
        border-radius: 10px;
    }

    a:hover {
        color: grey;
    }

    nav {
        margin-right: 200px; 
    }

    #enter {
        margin-left: 200px;
    }

</style>

