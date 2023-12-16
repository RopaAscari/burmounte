import QRCode from "react-qr-code";
import IosIcon from "./icons/ios";
import { Platform } from "@/core/types";
import AndroidIcon from "./icons/android";

type Props = {
  platform: Platform;
};

export default function QrPopup({ platform }: Props) {
  const isAndroid = platform == "android";
  const url = isAndroid ? process.env.NEXT_PUBLIC_ANDROID_LINK : process.env.NEXT_PUBLIC_IOS_LINK;
  return (
    <div className="bg-white text-sm p-7 rounded-md flex flex-col justify-center items-center">
      <QRCode value={url!} style={{}} />
      <p className="mt-6 text-slate-700 text-sm text-center mb-6">
        Get our app now and enjoy a seamless experience! Simply scan the QR code with your device to download it from the Play Store. Thank you for choosing
        Burmounte, and we look forward to having you on board!
      </p>
      {isAndroid ? <AndroidIcon size={250} /> : <IosIcon size={250} />}
    </div>
  );
}
