<script>
    import style from '$assets/styles/main.css'

    // components
    import Header from '$components/Header.svelte'
    import Footer from '$components/Footer.svelte'

</script>

<Header />

<main class="container">
    <slot />
</main>

<Footer />

<style>
    main {
        min-height: calc(100vh - 88px);
    }
</style>
