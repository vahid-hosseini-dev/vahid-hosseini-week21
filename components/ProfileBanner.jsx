import Search from "./Search";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";

function ProfileBanner() {
  const router = useRouter();
  const logoutHandler = () => {
destroyCookie(null, "token", { path: "/" });
    router.push("/auth/login");
  };

  return (
    <div className=" flex items-center justify-between pr-10 mt-10 w-[1140px] h-[75px] border-1 bg-white border-[rgba(228,228,228,1)] rounded-[16px]">
      <Search />
      <button
        onClick={logoutHandler}
        className="btnClass mr-[500px] !text-[.9rem] !text-[rgba(244,63,94,1)] ! !w-[160px] !min-h-[42px]"
      >
        خروج از حساب کاربری
      </button>
      <div className=" flex items-center justify-between w-[145px] h-[52px] relative left-[18px]">
        <img className="relative left-3" src="/img/line.png" alt="line" />
        <img
          className="rounded-full size-[46px] border-[rgba(228,228,228,0.5)]"
          src="/img/Vahid.png"
        ></img>
        <div className="font-yekan">
          <p>وحید حسینی</p>
          <p className="text-sm">مدیر</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileBanner;
