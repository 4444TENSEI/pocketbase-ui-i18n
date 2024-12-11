<!-- AaaSetUrlCookieDialog.svelte -->
<script>
    import { setCookie, getCookie } from "@/utils/cookie";
    export let show = false;
    export let onToggle = () => {};
    let backendUrl = getCookie("backendUrl") || "";
    function toggleModal() {
        onToggle();
    }
    function saveUrl() {
        setCookie("backendUrl", backendUrl);
        toggleModal();
    }
</script>

{#if show}
    <div class="modal">
        <input type="text" placeholder="Enter URL" bind:value={backendUrl} />
        <button on:click={saveUrl}>Save</button>
    </div>
{/if}
