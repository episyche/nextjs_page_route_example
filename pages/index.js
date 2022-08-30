import Link from "next/link";
import { useRouter } from "next/router";

export default function Example() {

  var router = useRouter();

  function handleClick(){
    router.push("/product")
  }


  return (
    <>
    <div className="my-8">
      <Link href="/">
        <a className="mx-16 my-16 text-xl font-bold text-green-600 cursor-pointer">Home</a>
      </Link>
      <Link href="/about">
        <a className="mx-16 my-16 text-xl font-bold text-green-600 cursor-pointer">about</a>
      </Link>
      <Link href="/product">
        <a className="mx-16 my-16 text-xl font-bold text-green-600 cursor-pointer">product</a>
      </Link>
      </div>
      <button className="border text-white font-bold p-1 bg-green-700 mx-12 rounded" onClick={handleClick}>
        place order
      </button>
    </>
  );
}
