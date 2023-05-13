import Link from "next/link";


export default function Home() {
 return(
    <main className="p-6 text-white text-center">
      <h1 className="font-bold">Server Actions</h1>
      <br /><br /><br />
      <Link href="/formPost">Simple Form Post</Link>
      <Link href="/formPostWithStatus">Simple Form Post With Status Hook</Link>
    </main>
 )
}