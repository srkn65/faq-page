import Icon from "./Icon";
export default function FaqCard({
  title,
  index,
  activeIndex,
  setActiveIndex,
  content,
}) {
  const handleSetIndex = (index) =>
    activeIndex !== index && setActiveIndex(index);

  return (
    <>
      <div
        className={
          "w-full rounded-2xl transition" +
          (activeIndex === index
            ? " bg-zinc-50"
            : " rounded-b-2xl border border-zinc-100")
        }
        id={"faq-card" + index}
      >
        <div
          onClick={() => handleSetIndex(index)}
          className={
            "flex w-full transition rounded-t-2xl justify-between items-center px-8 pt-8 cursor-pointer " +
            (activeIndex === index
              ? " text-indigo-500 pb-4"
              : "rounded-b-2xl pb-8")
          }
        >
          <div className="flex">
            <div className="font-semibold">{title}</div>
          </div>
          <div className="flex items-center justify-center">
            <Icon
              className="w-4 h-4"
              icon={activeIndex === index ? "FaMinusCircle" : "FaPlusCircle"}
            />
          </div>
        </div>

        {activeIndex === index && (
          <div className="w-full rounded rounded-b-md px-8 pb-8 text-md">
            <article
              className="prose prose-zinc"
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            ></article>
          </div>
        )}
      </div>
    </>
  );
}
