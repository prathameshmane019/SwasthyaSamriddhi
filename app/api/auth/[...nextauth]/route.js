import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from '../../../libs/connectDb';
import User from '../../../models/user';
import Doctor from '@/app/models/doctor';
import Medical from '@/app/models/medical';
import Admin from '@/app/models/admin';
import bcrypt from 'bcrypt';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        try {
          await connectMongoDB();
          
          const Id = credentials.userId;
          const password = credentials.password;
          let userRole;
          let id;
          let userModel;
          
          // Find user by _id
          const user = await User.findOne({ _id: Id });
          const doctor = await Doctor.findOne({ _id: Id });
          const medical = await Medical.findOne({ _id: Id });
          const admin = await Admin.findOne({ _id: Id });
          
          if (user) {
            userRole = "user";
            id = user._id;
            userModel = user;
          } else if (doctor) {
            userRole = "doctor";
            id = doctor._id;
            userModel = doctor;
          } else if (medical) {
            userRole = "medical";
            id = medical._id;
            userModel = medical;
          } else if (admin) {
            userRole = "admin";
            id = admin._id;
            userModel = admin;
          } else {
            return null;
          }
          
          // Verify password
          const isVerified = await bcrypt.compare(password, userModel.password);
          
          if (isVerified) {
            const userWithRole = {
              ...userModel.toObject(),
              role: userRole,
              id: id
            };
            return Promise.resolve(userWithRole);
          } else {
            return null; // Return null if credentials are invalid
          }
        } catch (error) {
          console.error('Error during authorization:', error);
          return null;
        }
      }
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      session.user.id = token.id;
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };