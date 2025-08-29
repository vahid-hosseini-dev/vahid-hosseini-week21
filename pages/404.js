import Link from "next/link";
import Image from "next/image";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        width={400}
        height={400}
        className="mt-12"
        src="/img/404.png"
        alt="404"
      />
      <Link
        href="/auth/register"
        className="font-yekan bg-[rgba(85,163,240,1)] text-white rounded-[12px] p-3"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
};

export default PageNotFound;
