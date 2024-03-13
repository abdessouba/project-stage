import Image from "next/image";
import Post from "./components/post";
import Tag from "./components/tag";
import FilterBar from "./components/FilterBar";
import AnimationWrapper from "./AnimationWrapper";
export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products/1");
  const result = await res.json();
  return (
    <AnimationWrapper>
      <main className="w-[80%] m-auto">
        <FilterBar />
        <div className="flex items-start gap-14 justify-center">
          <section className="flex flex-col gap-5">
            <Post />
            <Post />
            <Post />
          </section>
          <div className="flex flex-col gap-5">
            <section className="w-[350px] min-h-[200px] bg-gray-200 py-4 px-6 rounded-lg">
              <h1 className="text-2xl font-semibold">Trends:</h1>
            </section>
            <section className="w-[350px] min-h-[200px] bg-gray-200 py-4 px-6 rounded-lg">
              <h1 className="text-2xl font-semibold mb-3">Tags:</h1>
              <ul className="flex gap-2 flex-wrap">
                <Tag tag="java" />
                <Tag tag="mysql" />
                <Tag tag="mongodb" />
                <Tag tag="mongodb" />
                <Tag tag="mongodb" />
              </ul>
            </section>
          </div>
        </div>
      </main>
    </AnimationWrapper>
  );
}
