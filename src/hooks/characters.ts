import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { IHeroes } from "../models";

export function useCharacters() {
  const [heroes, setHeroes] = useState<IHeroes[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);

  const scrollHandler = (e: any) => {
    let scrollHeight = e.target.documentElement.scrollHeight;
    let scrollTop = e.target.documentElement.scrollTop;
    let innerHeight = window.innerHeight;

    if (
      scrollHeight - (scrollTop + innerHeight) < 100 &&
      heroes.length < totalCount
    ) {
      setFetching(true);
    }
  };

  async function fetchHeroes() {
    try {
      setError("");
      setLoading(true);
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}`
      );
      let charactersCount = res.data.info.count;
      const characters = res.data.results;
      setCurrentPage((prev) => prev + 1);
      setHeroes([...heroes, ...characters]);
      setTotalCount(charactersCount);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setError(error.message);
    } finally {
      setLoading(false);
      setFetching(false);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler, true);
    return function () {
      document.removeEventListener("scroll", scrollHandler, true);
    };
  }, [totalCount]);

  useEffect(() => {
    if (fetching) {
      fetchHeroes();
    }
  }, [fetching]);

  return { heroes, loading, error };
}
