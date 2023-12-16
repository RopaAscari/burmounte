import Link from "next/link";
import IosIcon from "./icons/ios";
import { useState } from "react";
import { Platform } from "@/core/types";
import AndroidIcon from "./icons/android";
import ModalBasic from "./ui/modal-basic";
import QrPopup from "./qr-popup";

export default function AppButtons() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "ontouchstart" in window;

  const [isOpen, setOpenModal] = useState(false);
  const [platform, setPlatform] = useState<Platform | null>(null);

  const handleModalOpen = (platform: Platform) => {
    if (isMobile) {
      window.location.href = platform == "android" ? process.env.NEXT_PUBLIC_ANDROID_LINK! : process.env.NEXT_PUBLIC_IOS_LINK!;
      return;
    }
    setPlatform(platform);
    setOpenModal(true);
  };

  return (
    <div>
      <div
        className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-0"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div>
          <Link
            onClick={() => handleModalOpen("android")}
            className="btn-hero w-full inline-flex items-center text-slate-100 bg-slate-800 hover:bg-slate-900 group shadow-sm"
            href=""
          >
            <AndroidIcon size={"25px"} />
            Download for Android
          </Link>
        </div>
        <div>
          <Link
            onClick={() => handleModalOpen("ios")}
            className="btn-hero w-full inline-flex items-center text-white bg-blue-500 hover:bg-blue-500 shadow-sm relative before:absolute before:inset-0 before:bg-blue-400 before:bg-opacity-60 before:-z-10 before:rounded-full"
            href=""
          >
            <IosIcon size={"25px"} />
            Download for IOS
          </Link>
        </div>
      </div>
      <ModalBasic width="lg:w-1/4 w-full" title="Scan QR Code" isOpen={isOpen} setIsOpen={setOpenModal}>
        <QrPopup platform={platform!} />
      </ModalBasic>
    </div>
  );
}
