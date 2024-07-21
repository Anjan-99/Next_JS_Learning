import Link from "next/link";
export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404: Not Found</h1>
      <Link href={"/"}>Go back home</Link>
    </div>
  );
}
