import { redirect } from "next/navigation"

export default function Home() {
    const user_info = null;
    if (user_info === null) redirect('product?search=shoes');
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Account Page</h1>
        </main>
    );
    }