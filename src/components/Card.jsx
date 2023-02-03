const Card = (props) => {
  const { href, imgAlt, imgSrc, title, text } = props;

  const commonAttInner = `px-4 py-6`;
  const commonAttOuter = `bg-black/20 border border-slate-300 overflow-hidden`;

  if (imgSrc) {
    return (
      <a href={href}>
        <div
          className={`flex flex-col lg:flex-row rounded-xl ${commonAttOuter}`}
        >
          <img
            src={imgSrc}
            alt={imgAlt}
            className="object-cover w-full h-96 lg:w-1/2 lg:h-auto"
          />
          <div className={`${commonAttInner} w-full lg:w1/2`}>
            <Content title={title} text={text} />
          </div>
        </div>
      </a>
    );
  } else {
    return (
      <a href={href}>
        <div className={`rounded-xl ${commonAttOuter} ${commonAttInner}`}>
          <Content title={title} text={text} />
        </div>
      </a>
    );
  }
};

const Content = (props) => {
  const { title, text } = props;
  return (
    <div>
      <h3 className="text-2xl text-slate-200 mb-4 md:text-3xl lg:text-4xl">
        {title}
      </h3>
      <p className="md:text-lg lg:text-xl">{text}</p>
    </div>
  );
};

export default Card;
