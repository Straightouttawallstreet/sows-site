
# Straight Outta Wall Street – Website (No‑Coder Step‑By‑Step)

This folder is a ready-to-deploy website using **Next.js** (a website framework). You don't have to code.

## A) Create your accounts (one time)

1) **Create a GitHub account** (github.com) — free.
2) **Create a Vercel account** (vercel.com) — use your GitHub login (1‑click). Vercel will *host* the site.
3) (Optional, later) Create a **PostHog** account for analytics (posthog.com) or use Vercel Analytics.
4) (Optional) Create a **Microsoft Clarity** account for heatmaps/session replays (clarity.microsoft.com).

## B) Put this site into GitHub

1) Download the ZIP (the assistant provided it).
2) Unzip it on your computer.
3) Go to GitHub → **New Repository** → name it `sows-site` → keep it **Public** or **Private**.
4) On the repo page, click **Upload files** and drag the unzipped folder contents into GitHub → **Commit**.

## C) Deploy to the internet (Vercel)

1) Go to **Vercel → Add New → Project → Import from GitHub**.
2) Choose your `sows-site` repo. Accept defaults. Click **Deploy**.
3) In ~1 minute you’ll see a live preview URL like `https://sows-site.vercel.app`.

> That’s it — your site is live on a temporary URL.

## D) Connect your real domain (straightouttawallstreet.com)

1) In Vercel, open your project → **Settings → Domains → Add** and type `straightouttawallstreet.com`.
2) Vercel will show you DNS records to set (A records and/or a CNAME).
3) Where your domain is managed (Wix or your registrar), open **DNS settings** for `straightouttawallstreet.com`.
4) **ONLY** change the records Vercel asks for (A/CNAME). **Do NOT** change MX records (email).
5) Save. Within 5–30 minutes, your domain will point to Vercel.

## E) Contact form → your inbox (simple mode)

Right now, the form works but only logs on the server. To receive emails:

**Option 1 (Resend – easiest)**  
1) Create an account at **resend.com**.  
2) In Vercel → Project → **Settings → Environment Variables**, add:
   - `RESEND_API_KEY` = your key
   - `LEAD_TO_EMAIL` = your email (e.g., hello@straightouttawallstreet.com)
3) Replace the contents of `app/api/contact/route.ts` with the email-sending code I will provide in chat.
4) Click **Deploy** (or **Redeploy**) in Vercel. Test the form.

**Option 2 (Your own email/SMTP)**  
We can wire Nodemailer to Gmail/Outlook. Ask me and I’ll paste the exact file for you.

## F) Analytics (see who/what/where)

**Basic traffic (easy):**  
- Turn on **Vercel Analytics**: In Vercel → Project → Analytics → Enable.

**Deeper funnels & events:**  
- Create a **PostHog** account. In Vercel → Environment Variables, set:  
  - `NEXT_PUBLIC_POSTHOG_KEY` = your key  
  - `NEXT_PUBLIC_POSTHOG_HOST` = (leave blank or use the US host when provided)  
- Redeploy. You’ll see events like page views. I can add named events (CTA clicks, form submit).

**Heatmaps / session replay:**  
- In **Microsoft Clarity**, create a project and copy the script tag.  
- Ask me and I’ll paste where to put it (`app/layout.tsx`). This shows scroll heatmaps and anonymized replays.

**Company‑level visitor intel (B2B):**  
- Use **Clearbit Reveal** or **Leadfeeder**. They tell you which companies visited. (You cannot get individuals’ names without a form submit.)

## G) Edit your site text / pictures

- Click the **pencil icon** on `app/page.tsx` inside GitHub to edit the copy. Press **Commit**. Vercel redeploys automatically.
- To swap images, put files in the **/public** folder and update the `src` paths in `page.tsx`.

## H) Keep email working

- Do **not** touch DNS **MX** records. Only adjust A/CNAME for the website. If you use Google Workspace or another provider, leave those MX records alone.

## I) Rollback safety

- Every change creates a **preview** on Vercel. You can make a change, click the preview link, and only then press **Promote to Production**.

---

Need me to wire the email sender and analytics for you? Tell me which combo you want (Resend + Vercel Analytics + Clarity is a great default), and I’ll paste the exact code and where to click.
