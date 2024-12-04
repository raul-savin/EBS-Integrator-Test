import { FC, useEffect, useState } from "react";

const BackToTop: FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <aside>
      {show && (
        <button
          aria-label="button"
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-0 right-0 z-10 mb-4 mr-4 rounded bg-blue p-2 font-bold text-white hover:bg-green md:mb-6 md:mr-6 lg:mb-8 lg:mr-8 xl:mb-10 xl:mr-10"
        >
          &uarr;
        </button>
      )}
    </aside>
  );
};

export default BackToTop;
