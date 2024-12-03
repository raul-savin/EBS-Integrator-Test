import { FC, useState, KeyboardEvent } from "react";
import { TnavEvent } from "@/types/client";

import Button from "./components/button/Button";
import Drawer from "./components/drawer/Drawer";

const Mobile: FC = () => {
  const [isOpen, setOpen] = useState(false);

  const onToggle = (e: TnavEvent): void => {
    if (
      e.type === "keydown" &&
      ((e as KeyboardEvent).key === "Tab" ||
        (e as KeyboardEvent).key === "Shift")
    )
      return;

    setOpen(!isOpen);
  };

  return (
    <>
      <Button onToggle={onToggle} isOpen={isOpen} />
      <Drawer onToggle={onToggle} isOpen={isOpen} />
    </>
  );
};

export default Mobile;
