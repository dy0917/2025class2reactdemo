import Link from "next/link";


export default function Page() {
  return (
    <div className="About">
      <h1>Dash board</h1>
      <p>
        This is the Dash board. Nothing to see, go <Link href="/">home</Link>.
      </p>
    </div>
  );
}
