import React from "react";

import classes from "./MoviesGenrePopup.module.css";

const MoviesGenrePopup = () => {
  return (
    <div className={classes["movies-popup-box"]}>
      <div>
        <ul>
          <li>ანიმაციური</li>
          <li>დრამა</li>
          <li>კომედია</li>
          <li>მისტიკა</li>
          <li>ფანტასტიკა</li>
          <li>სერიალი</li>
        </ul>
        <ul>
          <li>ბიოგრაფიული</li>
          <li>ეროტიული</li>
          <li>მელოდრამა</li>
          <li>მუსიკალური</li>
          <li>საომარი</li>
          <li>სპორტუული</li>
        </ul>
        <ul>
          <li>დეტექტივი</li>
          <li>ვესტერნი</li>
          <li>მიუზიკლი</li>
          <li>მძაფრ-სიუჟეტიანი</li>
          <li>საოჯახო</li>
          <li>თრილერი</li>
        </ul>
        <ul>
          <li>დოკუმენტური</li>
          <li>ისტორიული</li>
          <li>მოკლემეტრაჟიანი</li>
          <li>სათავგადასავლო</li>
          <li>საშინელება</li>
          <li>ზღაპრული</li>
        </ul>
      </div>
    </div>
  );
};

export default MoviesGenrePopup;
