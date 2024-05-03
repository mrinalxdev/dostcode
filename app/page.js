"use client"
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const {user, isLoaded} = useUser();

  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }
    else {
      isLoaded && router.push('/courses')
    }
  }, [user]);
  return (
    <main>
      <UserButton afterSignOutUrl="/sign-in" />
    </main>
  );
}
