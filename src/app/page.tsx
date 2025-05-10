import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TODO",
};

export default function Home() {
  return (
    <div className="container mx-auto py-4">
      <div className="prose">
        <h1>hello world</h1>
      </div>
    </div>
  );
}
