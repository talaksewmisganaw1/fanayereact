import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ZoomModal = ({isOpen, setIsOpen, imgSrc, imgAlt}) => {


  return (
    <div className="p-6 flex justify-center items-center">
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={15}
        wheel={{ step: 0.1 }} // mouse wheel zoom speed
        doubleClick={{ disabled: true }} // optional
      >
        <TransformComponent>
          <img
            src={imgSrc}
            alt={imgAlt}
            className="max-w-full max-h-full object-contain rounded-lg"
            loading="lazy"
          />
        </TransformComponent>
      </TransformWrapper>

      {isOpen && (
        <button
          onClick={() => {
            setIsOpen(false)
            }
          }
          className="fixed top-4 right-4 z-10000 bg-white text-black px-3 py-1 rounded-full shadow"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default ZoomModal;
