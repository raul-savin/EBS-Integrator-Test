import { FC } from "react";

const Title: FC<{ title: string }> = ({ title }) => (
  <h1 className="text-xl uppercase tracking-wide text-black">{title}</h1>
);

export default Title;
