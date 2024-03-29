import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from '../../../libs/connectDb';
import User from '../../../models/user'
import Doctor from '@/app/models/doctor';
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
          console.log(credentials);
          let userRole;
          let id;
          const user = await User.findOne({ userId: Id });
          const doctor = await Doctor.findOne({ doctorId: Id });
          if (user) {
            console.log(user);
            userRole="user";
            id= user.userId;
          }
          if(doctor){
            console.log(doctor);
            userRole ="doctor";
            id = doctor.doctorId;
          }
          const isVerified = (user.password == password) || (doctor.password == password);

          console.log(isVerified);
          console.log(user || doctor);

          if (!user && !doctor) {
            return null;
          }
          if (isVerified) {
            const userWithRole = {
              ...user.toObject(),
              role: userRole,
              Id :id
            };

            return Promise.resolve(userWithRole);

          } else {

          }
        } catch (error) {
          console.error('Error during authorization:', error);
          return null;
        }
      },
    }),
  ],
  session: {
    sessionCallback: async (session, user) => {
      session.user = { ...user, role: user.role ,id:user.Id};
      return Promise.resolve(session);
    },
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        token.role = user.role
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.user.accessToken = token.accessToken
      session.user.role = token.role
      session.user.id = token.id

      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET, // Your secret should be set in your environment variables
  pages: {
    signIn: "/", // Customize the sign-in page route as needed
  },
})

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
