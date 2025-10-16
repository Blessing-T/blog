"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function SigninPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("text-red-500");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: form.email,
        password: form.password,
      }) as { error?: string } | undefined;

      if (result && result.error) {
        setMessage(` ${result.error}`);
        setMessageColor("text-red-500");
        return;
      }

      setMessage(" Signed in");
      setMessageColor("text-green-500");
      setForm({ email: "", password: "" });
      setTimeout(() => router.push("/dashboard"), 700);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setMessage(` ${err.message}`);
      } else {
        setMessage(" An unexpected error occurred");
      }
      setMessageColor("text-red-500");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#191B1F] text-black h-screen bg-[url('/banner.jpg')] bg-cover bg-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-80 mt-20"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-500"
        >
          Sign In
        </button>

    
        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <Link href="/signUp" className="text-blue-600 underline">
            Sign Up
          </Link>
        </p>

        
        {message && (
          <p className={`mt-3 text-sm text-center ${messageColor}`}>{message}</p>
        )}
      </form>
    </div>
  );
}
