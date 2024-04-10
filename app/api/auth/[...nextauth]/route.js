import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from '../../../libs/connectDb';
import User from '../../../models/user';
import Doctor from '@/app/models/doctor';
import Medical from '@/app/models/medical';
import Admin from '@/app/models/admin';

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
          let userRole;
          let id;
      
          // Find user by _id
          const user = await User.findOne({ _id: Id });
          const doctor = await Doctor.findOne({ _id: Id });
          const medical = await Medical.findOne({ _id: Id });
          const admin = await Admin.findOne({ _id: Id });
          if (user) {
            userRole = "user";
            id = user._id;
          } else if (doctor) {
            userRole = "doctor";
            id = doctor._id;
          }
          else if (medical) {
            userRole = "medical";
            id = medical._id;
          } else if (admin) {
            userRole = "admin";
            id = admin._id;
          }
           else {
            
            return null;
          }
      
          const isVerified = (user && user.password === password) || (doctor && doctor.password === password)||(medical && medical.password === password)||(admin && admin.password === password);
      
          if (isVerified) {
            const userWithRole = {
              ...user?.toObject(), // Optional chaining to prevent errors if user is null
              ...doctor?.toObject(),
              ...medical?.toObject(), // Optional chaining to prevent errors if doctor is null
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
      
      ,
    }),
  ],
  session: {
    sessionCallback: async (session, user) => {
      session.user = { ...user, role: user.role, id: user.id }; // Add id to the session
      return Promise.resolve(session);
    },
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.role = user.role;
        token.id = user.id; // Add id to the token
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.user.accessToken = token.accessToken;
      session.user.role = token.role;
      session.user.id = token.id; // Add id to the session

      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET, // Your secret should be set in your environment variables
  pages: {
    signIn: "/", // Customize the sign-in page route as needed
  },
});

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
