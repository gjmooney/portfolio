interface DetailsProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: DetailsProps) => {
  return (
    <li className="mx-auto my-8 flex w-fit flex-col items-center justify-between first:mt-0 last:mb-0">
      <div>
        <h3 className="text-2xl font-bold capitalize ">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-[#6B69B0] underline"
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium capitalize text-primary/75">
          {time} | {address}
        </span>
        <p className="w-full font-medium">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="mt-32">
      <h2 className="mb-32 w-full text-center text-8xl font-bold">
        Experience
      </h2>

      <div className="relative mx-auto w-[75%]">
        <ul className="ml-4 flex w-full flex-col items-start justify-between">
          <Details
            position="Smarty Pants"
            company="QuantStack"
            address="Paris, FR"
            companyLink="https://www.quantstack.com"
            time="Sep 2022 - Sep 2023"
            work="Rocking shit and taking names"
          />
          <Details
            position="Smarty Pants"
            company="QuantStack"
            address="Paris, FR"
            companyLink="https://www.quantstack.com"
            time="Sep 2022 - Sep 2023"
            work="Rocking shit and taking names"
          />
          <Details
            position="Smarty Pants"
            company="QuantStack"
            address="Paris, FR"
            companyLink="https://www.quantstack.com"
            time="Sep 2022 - Sep 2023"
            work="Rocking shit and taking names"
          />
        </ul>
      </div>
    </div>
  );
};
export default Experience;
