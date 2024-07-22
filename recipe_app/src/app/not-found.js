import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Not Found</h1>
      <Button asChild>
        <Link href="/">Home</Link>
      </Button>
    </main>
  );
}
