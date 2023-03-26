import { IHeroes } from "../../models";
import style from "./PersonInfo.module.scss";

interface PersonInfoProps {
  // person: any;
  person: any;
  onClose: () => void;
}

export function PersonInfo({ onClose, person }: PersonInfoProps) {
  return (
    <div>
      <div className={style.person__container}>
        <div className={style.person__container_image}>
          <img
            className={style.image}
            src={person.image}
            alt={person.name}
            title={person.name}
          ></img>
        </div>
        <div className={style.person__container_info}>
          <ul className={style.person__container_list}>
            <li className={style.person__list_name}>
              <span className="font-normal">Name: </span> {person.name}
            </li>
            <li>Status: {person.status}</li>
            <li>Species: {person.species}</li>
            <li>Type: {person.type}</li>
            <li>Origin: {person.origin.name}</li>
            <li>Episodes: {person.episode.length}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
