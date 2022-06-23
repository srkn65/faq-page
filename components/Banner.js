import Image from "next/image";
export default function Banner() {
  return (
    <div className="mb-32 mt-12 max-w-3xl mx-auto bg-zinc-50 p-16 rounded-xl">
      <div className="flex flex-wrap justify-between">
        <div className="content">
          <Image
            width={140}
            height={72}
            src="/people.png"
            alt=" Faq Template People"
          />
          <h5 className="font-semibold mb-2 mt-3">
            Can’t find what you are looking for?
          </h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className="banner-button flex items-end justify-end">
          <button className="text-white bg-indigo-500 px-6 py-3 rounded-xl hover:text-indigo-500 hover:bg-indigo-100 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
