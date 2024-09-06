type TechnologySectionProps = {
  title: string;
  image: JSX.Element;
  citation: string;
};

const TechnologySection = ({
  title,
  image,
  citation,
}: TechnologySectionProps) => (
  <li>
    {title}
    <div className="pt-6 w-96">{image}</div>
    <p className="text-sm">{citation}</p>
  </li>
);

export default TechnologySection;
