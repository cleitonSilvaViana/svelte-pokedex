<script>
    import style from '$assets/styles/main.css'

    // components
    import Header from '$components/Header.svelte'
</script>

<Header />
<main class="container">
    <slot />
</main>

<style>
    main {
        min-height: calc(100vh - 88px);
    }
</style>
