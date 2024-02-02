import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      <Card
        title="Card a"
        description={"Ocean"}
        imageUrl={
          "https://images.unsplash.com/photo-1703159424431-a02e4890a8a6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />

      <h1>Hello world</h1>

      <ul className="list-disc">
        <li>A</li>
      </ul>
      <Link href={"page"}>DD</Link>
      <Link href={"blog"}>Blog</Link>
      <Link href={"products"}>Product</Link>
    </main>
  );
}
