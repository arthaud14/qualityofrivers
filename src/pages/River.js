import React from "react";
import img1 from "../img/arviere.jpeg";

const River = () => {
  return (
    <div>
      <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        <a href="#" className="w-full block h-full">
          <img src={img1} alt="" className="max-h-40 w-full object-cover" />
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <p className="text-indigo-500 text-md font-medium"></p>
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
             L'arvière
            </p>
            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
              Située à l'Est du département de l'Ain, cette rivière s'écoule du
              Massif du Grand Colombier jusqu'au cours d'eau du Groin puis au
              Séran, affluant direct du Rhône. La source de l'Arvière se situe
              au pied du sommet de l'Hergues (alt. 1426m) sur la commune
              d'Arvière-en-Valromey, proche du col de la Biche a près de 1220 m
              d'altitude. Labellisée "site rivières sauvages" en 2019, l'Arvière
              est une rivière préservée qui a conservé sa biodiversité et offre
              de nombreux paysages emblématiques du département. Afin de
              préserver cet Espace Naturel sensible il est interdit de se
              baigner dans l'Arvière et de pique-niquer le long de ses berges
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default River;
