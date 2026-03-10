# MASARX

MASARX is a logistics SaaS platform that combines a marketing website, signup and onboarding flows, customer operations dashboards, an internal admin console, and a modular backend foundation for orders, shipping, pricing, integrations, and tracking.

## Workspace Structure

- `apps/web`: marketing website, auth, onboarding, public tracking, and customer dashboard shell
- `apps/admin`: internal admin console shell
- `apps/api`: modular NestJS backend foundation
- `apps/worker`: worker/queue service shell for background jobs
- `packages/database`: Prisma schema for the core domain model
- `docs`: product, architecture, MVP, and platform planning documents

## Prerequisites

- Node.js 20+
- npm 10+
- PostgreSQL 15+

## Quick Start

1. Install dependencies
   `npm install`
2. Copy environment variables
   `copy .env.example .env`
3. Run the website
   `npm run dev:web`
4. Run the admin console
   `npm run dev:admin`
5. Run the API
   `npm run dev:api`

## Current Scope Implemented

- Strong multilingual marketing website structure with major pre-signup pages
- Interactive shipping calculator shell with internal quote logic
- Public tracking page
- Signup, sign-in, and onboarding flows
- Customer dashboard shell for orders, shipments, integrations, tracking, and reports
- Internal admin console shell
- Modular API skeleton with pricing, tracking, webhooks, orders, shipments, auth, and integrations modules
- Prisma schema covering the core SaaS logistics data model

## Notes

This repository was scaffolded in an environment where Node/npm were not available on the PATH, so the codebase was prepared but not executed locally in this session.

## Vercel Deployment

For Vercel, the root build is configured to deploy the customer-facing Next.js app in `apps/web`.

Recommended project setting:
- Root Directory: repository root is acceptable with the current `vercel.json`
- Preferred alternative for stricter isolation: set Vercel Root Directory to `apps/web`

If you later want a separate Vercel deployment for the internal admin app, create a second Vercel project pointed at `apps/admin`.