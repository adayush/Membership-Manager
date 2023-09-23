# Membership Manager

If you have a membership-based business, this project can help you better manage your members. This app has the following features:
- Owners can manage staff (view, add and update) and control their access to this app
- Owners and staff can manage members (view, add and update)
- They can also view members whose membership is going to expire in the next week, or has expired in the previous week. This can be useful for calls related to membership renewal
- You can easily add more branches (locations) of your business configure other metadata in the `config.js` file


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
1. Next.js
2. Postgres DB by Supabase
3. TailwindCSS

and is deployed on Vercel.