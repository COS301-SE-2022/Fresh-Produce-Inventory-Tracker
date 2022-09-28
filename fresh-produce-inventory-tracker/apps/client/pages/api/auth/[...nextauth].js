/* eslint-disable import/no-anonymous-default-export */
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';
import url from 'node:url';
import jwt from 'jsonwebtoken';

const loginUrl = `http://13.244.78.12:3333/api/authentication/signin`;

const providers = [
  CredentialsProvider({
    name: 'Credentials',
    authorize: async (credentials) => {
      try {
        const params = new url.URLSearchParams({
          email: credentials.email,
          password: credentials.password,
        });

        const user = await axios.post(loginUrl, params);

        if (user) {
          return { status: 'success', data: user.data };
        }
      } catch (e) {
        const errorMessage = e.response.data.message;
        throw new Error(errorMessage);
      }
    },
    secret: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET:process.env.NEXT_PUBLIC_SECRET,
  }),
];

const callbacks = {
  async jwt({ user, token, account }) {
    if (account && user) {
      token.user = jwt.verify(
        user.data.token,
        Buffer.from(process.env.JWT_SECRET).toString('base64')
      );
      return {
        ...token,
        accessToken: user.data.token,
      };
    }

    return token;
  },

  async session({ session, token }) {
    if (Date.now() >= token.user.exp * 1000) return null;
    session.accessToken = token.accessToken;
    session.user = token.user;
    return session;
  },
};

export const options = {
  providers,
  callbacks,
  pages: {
    signIn: '/login',
  },
};

export default (req, res) => NextAuth(req, res, options);
