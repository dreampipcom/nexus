// constants.ts TS-Doc?
import type { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import InstagramProvider from "next-auth/providers/instagram";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER as string,
      from: process.env.EMAIL_FROM as string,
      // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    }),
    InstagramProvider({
    clientId: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
    }),
    // ...add more providers here
  ],
  // callbacks: {
  //   signIn: async function signIn({ user, account, profile, email, credentials }) {
  //     return
  //   }
  // },
  pages: {
    // signIn: "/signin",
    signOut: "/",
    // error: '/api/rm/v0/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/api/rm/v0/auth/verify-request', // (used for check email message)
    // newUser: '/' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};
