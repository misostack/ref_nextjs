# Internationalization for NextJS

```sh
npm install next-intl
```

```md
├── messages
│ ├── en.json
│ └── ...
├── next.config.ts
└── src
├── i18n
│ └── request.ts
└── app
├── layout.tsx
└── page.tsx
```

> messages/en.json

```json
{
  "HomePage": {
    "title": "Hello world!"
  }
}
```

## References

- [Setup Guide for App Router](https://next-intl.dev/docs/getting-started/app-router)
- [Next-Intl Example](https://github.com/amannn/next-intl/blob/main/examples/example-app-router/src/app/layout.tsx)
