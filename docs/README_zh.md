[英文](https://github.com/4444TENSEI/pocketbase-ui-i18n/blob/main/README.md) | 中文 | [日本語](https://github.com/4444TENSEI/pocketbase-ui-i18n/blob/main/docs/README_ja.md)

> ## 在线体验

地址：https://pb.uc1.icu

> 进入上方站点后，点击左下角按钮，在弹窗中设置你的后端地址即可
>
> 静态站点不会造成数据泄露等安全问题，这点可以在F12网络选项卡确认。

本仓库基于原仓库[pocketbase](https://github.com/pocketbase/pocketbase)的前端界面拓展了：

1. i18n
2. 在前端页面中能够动态切换后端地址

> ## 自部署（仅前端页面）

1. 申请 [Vercel](https://vercel.com/signup) 账号

2. 点击这个按钮👉[![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/4444TENSEI/pocketbase-ui-i18n)
3. 在`Private Repository Name`**输入框**，输入一个自定义名称
4. 在`Vercel Team`**下拉框**选择一个合适的位置
5. 点击`Create`按钮，等待部署完成

#### *可选Vercel配置*

- *在Vercel配置面板中的`/settings/environment-variables`页面，为环境变量`PB_BACKEND_URL`为你的后端地址，但即使你不配置它也可以随时手动在前端页面中修改*
- *自己在Vercel项目下的`settings/domains`页面添加一个你自己的域名*

> ## 开发环境

#### 安装依赖

```
pnpm install
```

#### 启动

```
pnpm dev
```

#### 打包构建

```
pnpm build
```
