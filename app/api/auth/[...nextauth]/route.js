import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import supabase from "@/utils/supabase";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user }) {
      const data = await supabase
        .from("users")
        .select("role")
        .eq("email", user.email);

      if (data.error || data.data.length === 0) return false;
      else return true;
    },
    async session({ session }) {
      const { data, error } = await supabase
        .from("users")
        .select("name, role, branch, is_active")
        .eq("email", session.user.email);

      if (error || data.length === 0 || data[0].is_active === false) {
        return false;
      }
      session.user.name = data[0].name;
      session.user.role = data[0].role;
      if (data[0].role !== "admin") {
        session.user.branch = data[0].branch;
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
