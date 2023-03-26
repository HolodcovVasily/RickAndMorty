import { useState } from "react";
import { useEffect } from "react";

export const ToTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showTopBtn && (
        <button
          onClick={goToTop}
          className="p-[15px] bg-[#EC44B7] hover:bg-[#EE269D] transition ease-in-out delay-150 fixed bottom-[30px] right-[30px] rounded-[10px]"
        >
          to top
        </button>
      )}
    </>
  );
};
