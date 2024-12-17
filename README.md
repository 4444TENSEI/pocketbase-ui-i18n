中文 | [English](https://github.com/4444TENSEI/kaze-mail-koa/blob/main/docs/README_en.md) | [日本語](https://github.com/4444TENSEI/kaze-mail-koa/blob/main/docs/README_ja.md)

> ## 接口参数

- 方法：`GET` / `POST`
- 路由：`/push`

| 是否必要 | 参数  | 说明             |
| -------- | :---- | ---------------- |
| 必填     | to    | 收件人邮箱       |
| 可选     | msg   | 邮件正文         |
| 可选     | title | 邮件标题         |
| 可选     | name  | 自定义发件人昵称 |

> ## 部署

进入项目根目录下安装依赖

```
pnpm i
```

启动服务

```
pnpm start
```
