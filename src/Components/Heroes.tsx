import { useState, Dispatch } from "react";
import { IHeroes } from "../models";

interface HeroesProps {
  heroData: IHeroes;
  modalOpen: () => void;
  setPerson: Dispatch<React.SetStateAction<{}>>;
}

export function Heroes({ heroData, modalOpen, setPerson }: HeroesProps) {
  const [details, setDetails] = useState(false);

  const btnBgClassName = details
    ? "bg-[#FCF961] hover:bg-[#FCF969]"
    : "bg-[#00B0C8] hover:bg-[#00B0C1]";

  const btnClasses = [
    "px-4 py-1 border my-2 rounded drop-shadow-lg hover:drop-shadow-xl",
    btnBgClassName,
  ];

  return (
    <div className="flex flex-col justify-around w-40 border py-2 px-4 rounded  mb-2 text-center bg-white drop-shadow-md">
      <img
        className="my-2 rounded hover:cursor-pointer drop-shadow-xl"
        src={heroData.image}
        alt={heroData.name}
        title={heroData.name}
        onClick={() => {
          setPerson(heroData);
          modalOpen();
        }}
      />
      <h3 className="font-bold">{heroData.name}</h3>
      <button
        className={btnClasses.join(" ")}
        onClick={() => {
          setDetails((prev) => !prev);
        }}
      >
        {details ? "hide info" : "...show info"}
      </button>
      {details && (
        <div>
          <p>Gender: {heroData.gender}</p>
          <p>Status: {heroData.status !== "unknown" ? heroData.status : "-"}</p>
        </div>
      )}
    </div>
  );
}
