import { NextAuthOptions } from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
import LinkedInProvider from "next-auth/providers/linkedin";
import InstagramProvider from "next-auth/providers/instagram";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any, // Type cast to resolve auth.js vs next-auth mismatches
  providers: [
    {
      id: "linkedin",
      name: "LinkedIn",
      type: "oauth",
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
      issuer: "https://www.linkedin.com/oauth",
      jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
      client: { token_endpoint_auth_method: 'client_secret_post' },
      authorization: {
        url: "https://www.linkedin.com/oauth/v2/authorization",
        params: { scope: 'openid profile email w_member_social', response_type: 'code' },
      },
      token: "https://www.linkedin.com/oauth/v2/accessToken",
      userinfo: "https://api.linkedin.com/v2/userinfo",
      profile(profile) {
        const defaultImage = 'https://cdn-icons-png.flaticon.com/512/174/174857.png';
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture ?? defaultImage,
        };
      },
    },
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
      version: "2.0",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID as string,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    {
      id: "naukri",
      name: "Naukri",
      type: "oauth",
      clientId: process.env.NAUKRI_CLIENT_ID as string,
      clientSecret: process.env.NAUKRI_CLIENT_SECRET as string,
      authorization: {
        url: "https://www.naukri.com/oauth/authorize",
        params: { scope: 'read', response_type: 'code' },
      },
      token: "https://www.naukri.com/oauth/token",
      userinfo: "https://api.naukri.com/v1/userinfo",
      profile(profile) { return { id: profile.id, name: profile.name }; },
    },
    {
      id: "fiverr",
      name: "Fiverr",
      type: "oauth",
      clientId: process.env.FIVERR_CLIENT_ID as string,
      clientSecret: process.env.FIVERR_CLIENT_SECRET as string,
      authorization: {
        url: "https://www.fiverr.com/oauth/authorize",
        params: { scope: 'read', response_type: 'code' },
      },
      token: "https://www.fiverr.com/oauth/token",
      userinfo: "https://api.fiverr.com/v1/userinfo",
      profile(profile) { return { id: profile.id, name: profile.name }; },
    },
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "database",
  },
  callbacks: {
    async session({ session, user }) {
      if (session?.user && user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  logger: {
    error(code, metadata) {
      console.error(code, metadata);
      try {
        const fs = require('fs');
        const log = `${new Date().toISOString()} - ${code}\n${JSON.stringify(metadata, null, 2)}\n\n`;
        fs.appendFileSync('nextauth-error.log', log);
      } catch (e) {
        // ignore
      }
    },
  },
  debug: true,
};
