import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from '../../../libs/connectDb';
import User from '../../../models/user'
export const authOptions = ({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        try {
          await connectMongoDB();
          const Id = credentials.userId;
          const password = credentials.password;
          const user = await User.findOne({ userId: Id });
          const isVerified = user.password == password;

          console.log(isVerified);
          console.log(user);

          if (!user) {
            return null;
          }
          if (!isVerified) {
            return null;

          } else {
            return user;
          }

        } catch (error) {
          console.error('Error during authorization:', error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  }
})
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
