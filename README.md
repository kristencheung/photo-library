This is a [Next.js](https://nextjs.org/) side project inspired by the app [Cosmos](https://cosmos.so/). Using the app, one can sign in with Twitter, create a photo, or otherwise, an Element, and delete the Element if they'd like.

## Pre-requisites

This app was built on [Supabase](https://supabase.com/) and requires a free-tier version. After creating a Supabase project, fill in the env template credentials to run the app smoothly.

### Auth

Within the Supabase dashboard, head to Authentication -> Providers and ensure Twitter is enabled. You will also need to set up a Twitter OAuth app in which you can follow the Supabase documention to set that up: [docs](https://supabase.com/docs/guides/auth/social-login/auth-twitter?queryGroups=language&language=js)

Via Authentication -> URL configuration, make sure that the site URL is configured.

### Migrations

In the CLI, install Supabase's CLI

```
brew install supabase/tap/supabase
```

Run `supabase link` to link this project to your Supabase project. Enter in the database password.

Run `pnpm run generate` && `pnpm run migrate` to apply migrations. To push the migrations up to the Supabase database, run `supabase db push`.

## Getting started

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. To develop locally, check out [Supabase docs to develop locally](https://supabase.com/docs/guides/cli/local-development) or point your app with the database url to the Supabase database URL. Ensure the Twitter OAuth App and Supabase URL configuration site URLs are set to the development URL if you are using the Supabase project database URL.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
