import TextHover from './TextHover'; // Use the correct import based on your file name

type TechnologySectionProps = {
  title: string;
  image: JSX.Element;
  citations: string | string[];
};

const TechnologySection = ({
  title,
  image,
  citations,
}: TechnologySectionProps) => (
  <li>
    <div className="flex justify-center items-center mx-auto w-[75%] h-full text-2xl font-bold">
      {title}
    </div>
    <div className="flex justify-center items-center mx-auto w-[50%] h-full">
      {image}
    </div>
    {/* Render citations - handle both single and multiple citations */}
    {Array.isArray(citations) ? (
      citations.map((citation, index) => (
        <TextHover key={index} index={index} text={citation} />
      ))
    ) : (
      <div className="flex justify-center items-center mx-auto w-[75%] text-sm">
        <span>{citations}</span>
      </div>
    )}
  </li>
);

export default TechnologySection;
