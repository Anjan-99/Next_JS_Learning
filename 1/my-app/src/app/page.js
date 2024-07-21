"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/account");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <Link href="/account">Go to Account</Link>
      <Link href="/account/membership">Go to Membership</Link>
      <Link href="/product">Go to Product</Link>
      <Link href="/product/123">Go to Product Details</Link>
      <Link href="/product/123/review">Go to Product Review</Link>
      <Link href="/cart">Go to Cart</Link>
      <button onClick={() => handleClick()}>Go to Account</button>
    </main>
  );
}
