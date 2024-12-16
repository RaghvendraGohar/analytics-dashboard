'use client';
import './global.css';

import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  router.push("/dashboard/summary");
  return null;
}
