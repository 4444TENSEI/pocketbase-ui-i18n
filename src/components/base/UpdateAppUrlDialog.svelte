<script>
    import { _ } from "svelte-i18n";
    import { getCookie, setCookie } from "@/utils/Cookie";
    import { addSuccessToast } from "@/stores/toasts";
    import OverlayPanel from "@/components/base/OverlayPanel.svelte";

    let editAppUrlPanel;
    let pbUrl = getCookie("pbUrl") || "";

    // 保存输入框内容到cookie的函数
    function saveAppUrl() {
        setCookie("pbUrl", pbUrl);
        setCookie("pbUrl", pbUrl);
    }

    export function show() {
        return editAppUrlPanel.show();
    }

    export function hide() {
        return editAppUrlPanel.hide();
    }

    // 保存函数，现在只是将pbUrl保存到cookie
    function save() {
        saveAppUrl();
        addSuccessToast($_("成功修改为新的后端地址"));
        window.location.href = "/";
    }
</script>

<OverlayPanel bind:this={editAppUrlPanel}>
    <svelte:fragment slot="header">
        <h4>后端服务地址设置</h4>
    </svelte:fragment>
    <div class="block txt-center">
        <input type="text" bind:value={pbUrl} placeholder={$_("common.popup.pbUrlSetting.placeholder")} />
    </div>
    <svelte:fragment slot="footer">
        <button type="button" class="btn btn-transparent" on:click={() => editAppUrlPanel.hide()}>
            <span class="txt">{$_("common.action.close")}</span>
        </button>
        <button type="button" class="btn btn-expanded" on:click={save}>
            <span class="txt">{$_("common.action.save")}</span>
        </button>
    </svelte:fragment>
</OverlayPanel>
