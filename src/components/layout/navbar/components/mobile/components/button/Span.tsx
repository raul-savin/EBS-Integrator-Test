import { FC } from "react";

type Tprops = { elClass: string };

const Span: FC<Tprops> = ({ elClass }) => (
  <span className={`absolute h-[4px] bg-blue duration-[0.5s] ${elClass}`} />
);

export default Span;
