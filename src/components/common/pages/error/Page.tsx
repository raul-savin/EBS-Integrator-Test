import { FC } from "react";

const Page: FC<{ text: string }> = ({ text }) => (
  <main className="main min-h-[calc(100vh-var(--footer)-var(--navbar)-var(--xxl))] justify-center items-center">
    <section>
      <header>
        <p className="text-black">{text}</p>
      </header>
    </section>
  </main>
);

export default Page;
