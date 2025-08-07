# Twitter Clone App

A Twitter-like social media application built with Next.js, Clerk authentication, and Cloudinary for image uploads.

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **Authentication**: Clerk
- **Database**: PostgreSQL (Neon)
- **Image Storage**: Cloudinary
- **ORM**: Drizzle
- **API**: Hono

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/hit0sh1/twitter-clone-app.git
cd twitter-clone-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Variables

Copy `.env.example` to `.env` and `.env.local`:

```bash
cp .env.example .env
cp .env.example .env.local
```

Fill in the following environment variables:

- `DATABASE_URL`: PostgreSQL connection string from Neon
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: From Clerk Dashboard → API Keys
- `CLERK_SECRET_KEY`: From Clerk Dashboard → API Keys
- `WEBHOOK_SECRET`: For Clerk webhooks
- `CLOUDINARY_CLOUD_NAME`: From Cloudinary Dashboard
- `CLOUDINARY_API_KEY`: From Cloudinary Dashboard
- `CLOUDINARY_API_SECRET`: From Cloudinary Dashboard

### 4. Run database migrations

```bash
npm run db:push
```

### 5. Start development server

```bash
npm run dev
```

## Deployment on Vercel

### 1. Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hit0sh1/twitter-clone-app)

### 2. Configure Environment Variables in Vercel

After deploying, go to your Vercel project settings and add all environment variables:

1. Go to your project dashboard on Vercel
2. Navigate to "Settings" → "Environment Variables"
3. Add each variable from your `.env` file:
   - `DATABASE_URL`
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `WEBHOOK_SECRET`
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`

### 3. Redeploy

After adding environment variables, trigger a new deployment:
- Go to "Deployments" tab
- Click on the three dots menu on the latest deployment
- Select "Redeploy"

## Features

- User authentication with Clerk
- Create posts with text and images
- View all posts in a timeline
- Responsive design
- Image uploads to Cloudinary
- Real-time updates

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
├── domain/          # Domain types
├── lib/             # Utilities and clients
├── server/          # API routes and database
└── middleware.ts    # Clerk middleware
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Push database schema
- `npm run db:studio` - Open Drizzle Studio

## License

MIT