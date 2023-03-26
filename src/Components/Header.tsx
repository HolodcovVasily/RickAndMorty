import logoRM from "../assets/images/rick_morty.png";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="w-full text-[30px]">
      <div className="flex flex-col">
        <img className="w-2/4 my-0 mx-auto p-5" src={logoRM} alt={title}></img>
        <h1 className="font-bold mb-10 text-center uppercase">{title}</h1>
      </div>
    </header>
  );
}
