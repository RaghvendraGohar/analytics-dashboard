import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-zinc-900 text-white">
      <h1 className="text-lg font-bold">Analytics Dashboard</h1>
      <div className="space-x-4">
        <Link href="/dashboard/summary" className="hover:underline">
          Summary
        </Link>
        <Link href="/dashboard/history" className="hover:underline">
          History
        </Link>
      </div>
    </nav>
  );
}
