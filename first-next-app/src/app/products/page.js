import Link from "next/link";
export default function Page() {
  return (
    <div className="About">
      <h1>Products</h1>
      <p>
        This is the Products page. Nothing to see, go <Link href="/">home</Link>
        .
      </p>
    </div>
  );
}
