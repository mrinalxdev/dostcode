import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-[5rem] font-bold">DostCode</h1>
        <p className="text-xl font-mono">
          This platform helps you to build resume ready projects
        </p>
        <p className="text-xl font-mono max-w-[699px]">
          Variety of projects are enlisted here. You can also go through the
          documentation of the languages and the tech stacks{" "}
        </p>
      </div>
      <div className="flex flex-row gap-8 font-bold mt-[1.3rem]">
        <button className="bg-blue-500 px-3 py-5 rounded-xl cursor-pointer">Documentation</button>
        <button className="border-blue-500 border px-3 py-5 rounded-xl cursor-pointer">Get Started</button>
      </div>
    </main>
  );
}
