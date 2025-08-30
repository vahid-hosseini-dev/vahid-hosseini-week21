import Link from "next/link";
// import { PiShoppingCartSimpleBold } from "react-icons/pi";

function Layout({ children }) {
  return (
    <>
      <header className="flex h-Auto items-center justify-center bg-[rgba(85,163,240,1)] text-white py-5 mb-10 rounded-lg">
        <Link href={"#"}>VHD Online Store</Link>
      </header>
      <main className="min-h-screen">{children}</main>
      <footer className="flex h-Auto items-center justify-center bg-[rgba(85,163,240,1)] text-white py-5 rounded-lg">
        <p>Developed by Vahid Hosseini (VHD)</p>
      </footer>
    </>
  );
}

export default Layout;
