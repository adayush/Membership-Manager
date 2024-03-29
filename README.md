# Membership Manager

If you have a membership-based business, this project can help you better manage your members. This app has the following features:
- Role-based auth and pages
- Owners can manage staff and control their access to the app
- Owners and staff can manage members
- Search members by their name or receipt number
- View members whose membership is going to expire in the next week, or has expired in the previous week. This can be useful for calls related to membership renewal
- Easily add more branches (locations) of the business configure other metadata in the `config.js` file
- PWA app for ease of use

## Screenshots

![Demo 1](/screenshot-1.png)

![Demo 2](/screenshot-2.png)

## Usage

Firstly, customize the `config.js` file to suit your needs.

Secondly, populate the `env.local` file for local runs.

Lastly, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech stack

This project is built using:
1. Next.js 13
2. Postgres DB by Supabase
3. TailwindCSS

and is deployed on Vercel.