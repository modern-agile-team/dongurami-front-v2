import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "이메일",
          type: "text",
          placeholder: "이메일 주소 입력 요망",
        },
        password: { label: "비밀번호", type: "password" },
      },

      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });
        const user = await res.json();
        console.log(user);

        if (user) {
          console.log(req);
          console.log("----");
          console.log("user ==>", user);
          return user;
        } else {
          console.log(req);
          return null;
        }
      },
    }),
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },

  // pages: {
  //   signIn: "/signin",
  // },
});
export default handler;
// export { handler as GET, handler as POST };
