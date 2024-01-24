import Image from "next/image";
import lang_en from "./lang_en.png";
// import Card from ""
const width_image = 300;
const height_image = 200;
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="flex flex-row ">
        <div>
        Internal Image
        <Image
          src={lang_en}
     
          width={width_image}
          height={height_image}
          alt={"internal image"}
        />
        </div>
      </div>
      
    </main>
  );
}
