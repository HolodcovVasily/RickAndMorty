import React, { useContext, useEffect, useState } from "react";
import { Heroes } from "./Components/Heroes";
// import preloader from "./assets/images/loading.gif";
import { useCharacters } from "./hooks/characters";
import { Loader } from "./Components/Loader";
import { ErrorMessage } from "./Components/ErrorMessage";
import { Modal } from "./Components/Modals";
import { ModalContext } from "./context/ModalContext";
import { PersonInfo } from "./Components/PersonInfo/PersonInfo";
import { Header } from "./Components/Header";
import { MutatingDots } from "react-loader-spinner";
import { ToTopButton } from "./Components/ToTopButton";

function App() {
  const { heroes, loading, error } = useCharacters();
  // const [modal, setModal] = useState(true);
  const { modal, modalOpen, modalClose } = useContext(ModalContext);
  const [person, setPerson] = useState({});

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = modal ? "hidden" : "auto";
    }
  }, [modal]);

  return (
    <>
      <Header title={"Rick and Morty"} />
      <div className="container mx-auto max-w-2xl pt-5 h-screen">
        {loading && (
          <MutatingDots
            height="100"
            width="100"
            color="#69C8ECFF"
            secondaryColor="#FAFD7CFF"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{ justifyContent: "center" }}
            wrapperClass=""
            visible={true}
          />
        )}
        {error && <ErrorMessage error={error} />}

        <main className="flex justify-around flex-row flex-wrap gap-2.5">
          {heroes.map((hero) => {
            return (
              <Heroes
                key={hero.id}
                heroData={hero}
                modalOpen={modalOpen}
                setPerson={setPerson}
              />
            );
          })}
        </main>
        {modal && (
          <Modal title="Rick and Morty characters" onClose={modalClose}>
            <PersonInfo onClose={modalClose} person={person} />
          </Modal>
        )}
        <ToTopButton />
      </div>
    </>
  );
}

export default App;
