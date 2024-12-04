import { FC } from "react";

const Page: FC = () => (
  <main className="main min-h-[calc(100vh-var(--footer)-var(--navbar)-var(--xxl))] justify-center items-center">
    <p>
      No result for <span className="text-blue">"Teddy Bear"</span>
    </p>
  </main>
);

export default Page;
