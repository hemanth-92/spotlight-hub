import { NextAuthOptions } from "next-auth";

import GithubProvider from "next-auth/providers/github";
import { env } from "@/env";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      clientId: env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          username: profile.login, // Add this line to include the username
        };
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async signIn({ user, account, profile, email, credentials }) {
      user.oauthToken = account?.access_token;
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.oauthToken = user.oauthToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.oauthToken = token.oauthToken;
      return session;
    },
  },
};
