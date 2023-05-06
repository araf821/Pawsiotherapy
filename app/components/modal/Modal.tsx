"use client";

import { useCallback, useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import Button from "../Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  buttonLabel: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  buttonLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  const handleSubmit = useCallback(() => {
    onSubmit();
  }, [onSubmit]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-800/70">
      <div className="w-full max-w-[700px] md:w-4/6 lg:w-3/6">
        <div
          className={`translate h-full duration-300
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
        `}
        >
          <div className="p flex h-full w-full flex-col border-0 bg-slate-200 shadow-lg sm:rounded-lg">
            {/* Header */}
            <div className="relative flex items-center justify-center border-b-[1px] border-slate-400 bg-zinc-800 p-4 text-white sm:rounded-t-md">
              <button
                className="absolute left-5 border-0 p-1 opacity-70 transition duration-500 hover:rotate-180"
                onClick={handleClose}
              >
                <IoIosClose size={30} />
              </button>
              <p className="text-lg font-semibold tracking-wider">{title}</p>
            </div>

            {/* Body Content */}
            <div className="relative flex-auto p-6">{body}</div>

            {/* Footer Content */}
            <div className="flex flex-col gap-2 p-6">
              <div className="flex w-full flex-row items-center gap-4">
                <Button label={buttonLabel} onClick={handleSubmit} />
              </div>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
