import QRCodeImage from './../assets/images/image-qr-code.png';

export const QrCode = () => {
  return (
    <div className="flex flex-col w-80 justify-center bg-white space-y-6 rounded-[1.25rem] px-4 pt-4 pb-10">
      <img
        src={QRCodeImage}
        alt="Qr-code"
        className="h-72 w-72 rounded-[0.625rem]"
      />
      <div className="text-center flex flex-col space-y-4">
        <p className="text-[1.375rem] font-bold text-[#1F314F]">
          Improve your front-end skills by building projects
        </p>
        <p className="text-[#7D889E] text-[0.9375rem]">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  );
};
