import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
//<form onSubmit={onSearchSubmit} >
export const Navigation = () => {
  const { num } = useContext(PokemonContext);
  console.log(num);

  return (
    <div>
      <header className="container">
        <Link to="/" className="logo">
          <img
            src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
            alt="Logo Pokedex"
          />
        </Link>

        <form>
          <div className="form-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon-search"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="search"
              name="valueSearch"
              id=""
              placeholder="Search Pokémon name"
            />
          </div>

          <button className="btn-search">Search</button>
        </form>
      </header>
      <Outlet />
    </div>
  );
};
