import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User extends DefaultUser {
    oauthToken?: string;
  }

  interface Session extends DefaultSession {
    oauthToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    oauthToken?: string;
  }
}
