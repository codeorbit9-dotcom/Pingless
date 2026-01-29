# Pingless 🚦  
**Protect your APIs. Control every request.**

Pingless is a lightweight **API firewall & proxy** that sits between your application and third-party APIs (Firebase, Auth, REST APIs, etc.) to prevent abuse, leaked keys, and unauthorized access — with full visibility and control from a clean dashboard.

---

## ✨ What Pingless Does

- Acts as a **secure proxy** for your APIs
- Blocks or allows traffic based on **IP, domain, URL, or endpoint**
- Protects **Firebase & Auth APIs** from misuse
- Provides **API key management** with usage tracking
- Enforces **free & paid plan limits**
- Shows real-time **analytics and insights**

Built for **indie devs, startups, and production apps** that want protection without complex setup.

---

## 🧠 How It Works

Client App ↓ Pingless (API Key + Rules + Limits) ↓ Actual API (Firebase / REST / Auth)

1. Create an API key in Pingless  
2. Route requests through Pingless  
3. Add IP / URL / domain rules  
4. Monitor traffic and block abuse instantly  

---

## 🔑 Core Features

### API Key Management
- Create, rotate, disable, and delete API keys
- Show full key only once (secure by design)
- Track usage per key

### Firewall Rules
- Allow / block IP addresses
- Allow / block domains
- Allow / block specific URLs or endpoints
- Whitelist-only mode

### Firebase & Auth Protection
- Prevent leaked Firebase API abuse
- Restrict requests to approved origins
- Stop unauthorized auth calls

### Analytics Dashboard
- Total vs blocked requests
- Usage over time
- Top IPs and endpoints
- Free / Pro limit tracking

### Plans & Limits
- Free tier for testing
- Pro tier for scale
- Hard server-side enforcement

---

## 🧱 Tech Stack

- **Frontend:** Next.js / React
- **Auth:** Firebase Authentication (Google + Email)
- **Edge / Proxy:** Cloudflare Workers
- **Database:** Cloudflare D1 / KV
- **Hosting:** Cloudflare Pages
- **Payments:** Stripe

Designed to run **almost free** at MVP scale.

---

## 🚀 Getting Started (Conceptual)

1. Sign up and log in using Firebase Auth  
2. Create your first API key  
3. Update your app to route requests through Pingless  
4. Add rules to control traffic  
5. Monitor usage from the dashboard  

---

## 🔐 Security Notes

- API keys are **hashed** before storage
- Firebase client keys are **public by design**
- No request bodies are stored
- Aggregated analytics only (safe & cost-efficient)

---

## 📄 Pages & UI

- Landing Page
- Login / Signup
- Dashboard
- API Keys
- Firewall Rules
- Analytics
- Billing
- Profile

All designed with a **clean, purple gradient SaaS UI**.

---

## 📦 Status

Pingless is currently in **active development (MVP stage)**.

- Core proxy & firewall: In progress
- Dashboard UI: In progress
- Billing & Pro plans: Planned

---

## 🤝 Contributing

Contributions, ideas, and feedback are welcome.  
This project is built with simplicity and developer experience in mind.

---

## 📜 License

MIT License (planned)

---

## 🌐 Links

- Website: https://pingless.in  
- Docs: Coming soon  

---

**Pingless — stop API abuse before it costs you.**
