This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 🍽️ TasteSphere

A dynamic and interactive web app built with **Next.js 15** that allows users to browse global recipes, see their ratings, and view categorized tags using the DummyJSON API.

---

## 💡 Project Idea

**TasteSphere** is a simple yet interactive platform for browsing food recipes. Users can view recipe details, explore recipes by category (tags), check top-rated and recent recipes, and even create new ones (protected route).

---

## 🛠️ Technologies Used

- **Next.js 15** (App Router & Parallel Routes)
- **Tailwind CSS** for UI styling
- **DummyJSON API** as the data source
- **React Rating Stars** for star-based reviews

---

🔐 Demo Login (for protected route)
To access the "Create Recipe" page at /recipes/create, you need to use the following credentials via query parameters:

fetch('https://dummyjson.com/auth/login', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({

    username: 'emilys',
    password: 'emilyspass',
    expiresInMins: 30, // optional, defaults to 60

}),
credentials: 'include' // Include cookies (e.g., accessToken) in the request
})
.then(res => res.json())
.then(console.log);
"# nextjs15-parallel-routes--auth-crud-recipes" 
"# nextjs15-parallel-routes--auth-crud-recipes" 
