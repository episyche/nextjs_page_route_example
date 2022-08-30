import Link from "next/link";

export default function Product() {
  return (
    <>
      <div>
        <Link href="/">
          <a className="mx-4" >Home</a>
        </Link>
        <h1 className="mx-16 mt-16 text-xl font-bold text-green-600 cursor-pointer">
          Product List
        </h1>
        <div className="text-gray-600 mx-16 mt-4">
        <Link href="/product/1">
          <a className="mx-4">Product 1</a>
        </Link>
        <Link href="/product/2">
          <a className="mx-4">Product 2</a>
        </Link>
        <Link href="/product/3">
          <a className="mx-4">Product 3</a>
        </Link>
        <Link href="/product/4">
          <a className="mx-4">Product 4</a>
        </Link>
        </div>
      </div>
    </>
  );
}
