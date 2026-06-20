# 🚀 Post'r: Your AI Social Media Team

**Post'r** is an intelligent, high-fidelity social publishing companion designed to help creators, developers, and professionals amplify their voice. Write your idea once, and Post'r instantly tailors your message for every platform's unique tone, format, and character limit—then publishes it simultaneously.

By leveraging blazing-fast AI inference, Post'r eliminates the manual overhead of content distribution, ensuring your work reaches the widest possible audience with minimal effort.

---

## 🌟 The Vision

Publishing an update usually means writing five different drafts for five different networks. Post'r automates this entirely:

1. **One Idea:** Provide a brief description of your project, a link, or even just some rough notes.
2. **AI Tailoring:** Our integrated AI automatically crafts platform-specific, highly engaging posts—complete with the right tone, hashtags, and formatting.
3. **Instant Distribution:** With a single click, distribute your content to LinkedIn, Twitter, GitHub, and other connected platforms via secure OAuth integrations.

## ✨ Features

- **🧠 Intelligent Content Tailoring:** Automatically rewrites your project description to fit the unique style of different platforms (professional for LinkedIn, concise for X, engaging for Instagram).
- **🎨 AI Image Generation:** Describe a visual and our AI instantly generates a stunning image to attach to your posts—without leaving the app.
- **🌍 Multi-Platform Distribution:** Securely connect and publish to LinkedIn, X (Twitter), Facebook, GitHub, and more.
- **⚡ Groq-Powered Speed:** Built on Groq's ultra-fast LLM inference, getting your tailored posts generated in under 2 seconds.
- **🔐 Secure OAuth Integration:** Safely authenticate your social accounts using NextAuth. Your credentials never touch our servers.
- **📱 Responsive & Premium UI:** A dynamic, glassmorphism-inspired dark mode interface that works flawlessly across desktop and mobile.

## 🛠️ Technology Stack

Post'r is engineered with modern web technologies to ensure scalability, security, and a beautiful user experience:

- **Frontend:** Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion
- **Authentication:** NextAuth.js v4 (OAuth 2.0 with LinkedIn, GitHub, Facebook, etc.)
- **Database:** PostgreSQL (hosted on Supabase) + Prisma ORM
- **AI / LLMs:** Groq SDK for fast inference
- **Deployment:** Optimized for Vercel

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- A PostgreSQL database (e.g., Supabase)
- API Keys for Groq, NextAuth, and your desired Social Providers (LinkedIn, GitHub).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SadathAliRahman/post-r.git
   cd postbot
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and add your keys:
   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/postgres"

   # Authentication
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-super-secret-key"

   # OAuth Providers (Examples)
   LINKEDIN_CLIENT_ID="your_linkedin_client_id"
   LINKEDIN_CLIENT_SECRET="your_linkedin_client_secret"
   GITHUB_CLIENT_ID="your_github_id"
   GITHUB_CLIENT_SECRET="your_github_secret"

   # AI Providers
   GROQ_API_KEY="your_groq_api_key"
   ```

4. **Initialize the Database:**
   Push the Prisma schema to your database.
   ```bash
   npx prisma db push
   ```

5. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🤝 Contributing

Contributions, issues, and feature requests are always welcome! Feel free to fork the repository and submit a Pull Request to help improve the project.

## 📝 License

This project is licensed under the MIT License. Built with ❤️ by Sadath Ali.
