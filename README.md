# 🚀 PostBot: AI-Powered Multi-Platform Publisher

**PostBot** is an intelligent automation tool designed to help creators, developers, and professionals instantly share their projects, portfolios, and updates across multiple platforms simultaneously. By leveraging the power of AI, PostBot dramatically cuts down the manual overhead of content distribution, ensuring your work reaches the widest possible audience with minimal effort.

---

## 🌟 Why PostBot?

Publishing a new project or update usually means writing separate posts tailored for LinkedIn, Twitter, Instagram, YouTube community tabs, and job portals like Naukri. PostBot automates this entirely:

1. **Input Once:** Provide a brief description of your project, a link, or even just some rough notes.
2. **AI Generation:** Our integrated AI (powered by Groq and Hugging Face) automatically crafts platform-specific, highly engaging posts—complete with the right tone, hashtags, and formatting.
3. **Publish Everywhere:** With a single click, distribute your content to LinkedIn, Twitter, and other connected platforms via secure OAuth integrations.

## ✨ Key Features

- **🤖 AI Content Tailoring:** Automatically rewrites your project description to fit the unique style and character limits of different platforms (e.g., professional for LinkedIn, concise for Twitter, engaging for Instagram).
- **🌍 Multi-Platform Support:** Connect and post to:
  - LinkedIn
  - Twitter / X
  - YouTube (Community / Shorts descriptions)
  - Instagram
  - Naukri / Job Portals
- **🔐 Secure OAuth Integration:** Safely authenticate your social accounts using NextAuth.js. Your credentials are securely managed and never exposed.
- **⚡ Blazing Fast Generation:** Utilizes Groq's ultra-fast LLM inference to generate your content variations in milliseconds.
- **📅 Smart Scheduling (Coming Soon):** Queue up your posts to go out at peak engagement times.

## 🛠️ Tech Stack

PostBot is built with modern web technologies to ensure scalability, security, and a seamless developer experience:

- **Framework:** [Next.js 14/15](https://nextjs.org/) (App Router)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/) (OAuth 2.0 with LinkedIn, Twitter, etc.)
- **Database:** [PostgreSQL](https://www.postgresql.org/) (hosted on Supabase) + [Prisma ORM](https://www.prisma.io/)
- **AI/LLMs:** [Groq API](https://groq.com/) for fast inference & Hugging Face.
- **Styling:** Tailwind CSS

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js (v18+)
- A PostgreSQL database (e.g., Supabase, local Docker)
- API Keys for Groq, NextAuth, and your desired Social Providers (LinkedIn, Twitter).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/postbot.git
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
   DATABASE_URL="postgresql://user:password@localhost:5432/postbot"

   # Authentication
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-super-secret-key"

   # OAuth Providers (Example: LinkedIn)
   LINKEDIN_CLIENT_ID="your_linkedin_client_id"
   LINKEDIN_CLIENT_SECRET="your_linkedin_client_secret"

   # AI Providers
   GROQ_API_KEY="your_groq_api_key"
   HF_API_KEYS="your_hugging_face_key"
   ```

4. **Initialize the Database:**
   Push the Prisma schema to your database.
   ```bash
   npx prisma db push
   # or
   npx prisma migrate dev
   ```

5. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
If you want to add support for a new platform API or improve the AI prompting, feel free to fork the repository and submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.
