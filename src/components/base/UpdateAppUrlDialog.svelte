<script>
    import { _ } from "svelte-i18n";
    import { getCookie, setCookie } from "@/utils/Cookie";
    import { addSuccessToast } from "@/stores/toasts";
    import OverlayPanel from "@/components/base/OverlayPanel.svelte";

    let showPbEditDialog;
    let originPbUrl = getCookie("pbUrl") || "";

    // 修改输入框的新后端地址到cookie
    function saveAppUrl() {
        setCookie("pbUrl", newPbUrl);
    }

    export function show() {
        return showPbEditDialog.show();
    }

    export function hide() {
        return showPbEditDialog.hide();
    }

    // 保存函数，现在只是将newPbUrl保存到cookie
    function save() {
        saveAppUrl();
        addSuccessToast($_("后端地址已更新"));
        window.location.href = "/";
    }
</script>

<OverlayPanel bind:this={showPbEditDialog} btnClose={false} on:show on:hide>
    <svelte:fragment slot="header">
        <h4>后端服务地址设置</h4>
    </svelte:fragment>
    <div class="block txt-center">
        <input type="text" value={originPbUrl} placeholder={$_("common.popup.newPbUrlSetting.placeholder")} />
    </div>
    <svelte:fragment slot="footer">
        <button type="button" class="btn btn-transparent" on:click={() => showPbEditDialog.hide()}>
            <span class="txt">{$_("common.action.close")}</span>
        </button>
        <button type="button" class="btn btn-expanded" on:click={save}>
            <span class="txt">{$_("common.action.save")}</span>
        </button>
    </svelte:fragment>
</OverlayPanel>
