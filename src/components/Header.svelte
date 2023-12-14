<script>
    import { page } from '$app/stores';
    const currentRoute = $page.url.pathname

    const routes = [
        {pathname: '/', label: 'home'},
        {pathname: '/categories', label: 'categories'},
        {pathname: 'others', label: 'others'}
    ]

</script>

<header>
	<div class="container">
		<strong>pokevue</strong>
		<nav>
			{#each routes as route}
                <a class="{(currentRoute === route.pathname) ? 'active-route' : ''}" href="{route.pathname}">{route.label}</a>
            {/each}
		</nav>
	</div>
</header>

<style>
    header {
        height: 48px;
    }

    header , header > .container, nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    strong {
        color: #eee;
        font-size: 2.4rem;
        font-weight: 600;
        text-transform: capitalize;
    }
    
    nav {
        gap: 1.6rem;
    }

    a {
        color: #ccc;
        font-size: 1.6rem;
        padding: .8rem 1.6rem;
        border-radius: .4rem;
    }

    a:hover {
        color: #ddd;
    }

    a:active {
        color: #eee;
        outline: 3px solid rgba(128, 128, 128, 0.438);
    }

    .active-route {
        color: yellowgreen;
    }

</style>
