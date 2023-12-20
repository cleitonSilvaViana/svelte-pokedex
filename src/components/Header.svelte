<script>
    import { page } from '$app/stores';
    const currentRoute = $page.url.pathname

    const routes = [
        {pathname: '/', label: 'home'},
        {pathname: '/pokemons', label: 'pokemons'}
    ]

</script>

<header>
		<nav class="container">
			{#each routes as route}
                <a class="{(currentRoute === route.pathname) ? 'active-route' : ''}" href="{route.pathname}">{route.label}</a>
            {/each}
		</nav>

</header>

<style>
    header {
        height: 48px;
    }

    nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 16px;
        height: 100%;
    }

    .active-route {
        color: var(--fire);
    }

    a {
        text-transform: capitalize;
        font-weight: 600;
        font-size: 1.6rem;
    }

    a:hover {
        color: var(--psychic);
    }

    a:active {
        color: var(--poison);
    }

</style>