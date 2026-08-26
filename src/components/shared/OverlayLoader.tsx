import { createPortal } from "react-dom";
import { RiLoaderLine } from "react-icons/ri";

const OverlayLoader = () => {
  return createPortal(
    <div className="fixed inset-0 z-[1000] bg-blue-800/20 backdrop-blur-sm flex items-center justify-center">
      <RiLoaderLine className="text-7xl text-green-400 animate-spin" />
    </div>,
    document.body
  );
};

export default OverlayLoader