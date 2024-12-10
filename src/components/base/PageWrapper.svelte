<script>
    import { superuser } from "@/stores/superuser";

    export let center = false;

    let classes = "";
    export { classes as class }; // export reserved keyword
</script>

<div class="page-wrapper {classes}" class:center-content={center}>
    <main class="page-content">
        <slot />
    </main>

    <footer class="page-footer">
        <slot name="footer" />

        {#if $superuser?.id}
            <a href="https://pocketbase.io/docs/" target="_blank" rel="noopener noreferrer">
                <i class="ri-book-open-line txt-sm" />
                <span class="txt">Docs</span>
            </a>
            <span class="delimiter">|</span>
            <a href="https://github.com/pocketbase/pocketbase/releases" target="_blank" rel="noopener noreferrer" title="Releases">
                <span class="txt">PocketBase {import.meta.env.PB_VERSION}</span>
            </a>
        {/if}
    </footer>
</div>
