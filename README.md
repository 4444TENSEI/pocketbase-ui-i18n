English | [中文](https://github.com/4444TENSEI/pocketbase-ui-i18n//blob/main/docs/README_zh.md) | [日本語](https://github.com/4444TENSEI/pocketbase-ui-i18n//blob/main/docs/README_ja.md)

> ## Online experience

Address: https://pb.uc1.icu

>  After entering the site above, click the button in the lower left corner and set your backend address in the pop-up window.
>
>  static site will not cause security issues such as data leakage. This can be confirmed in the F12 Network tab.

This warehouse is expanded based on the front-end interface of the original warehouse [pocketbase](https://github.com/pocketbase/pocketbase):

1. i18n
2.  can dynamically switch the backend address in the front-end page

> ## Self-deployment (front-end page only)

1.  apply for [Vercel](https://vercel.com/signup) account

2. Click this button👉[![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/4444TENSEI/pocketbase-ui-i18n)
3. In the `Private Repository Name`**input box**, enter a custom name
4. Select a suitable location in the `Vercel Team`** drop-down box**
5. Click the `Create` button and wait for the deployment to complete

#### *Optional Vercel configuration*

- *In the `/settings/environment-variables` page in the Vercel configuration panel, set the environment variable `PB_BACKEND_URL` to your backend address, but even if you do not configure it, you can manually modify it at any time in the frontend page*
- *Add your own domain name on the `settings/domains` page under the Vercel project*

> ## Development Environment

####  installation dependencies

```
pnpm install
```

#### Start

```
pnpm dev
```

####  package build

```
pnpm build
```
