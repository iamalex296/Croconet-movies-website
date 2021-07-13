import React from "react";

import Template from "../Templates/Template";
import LoginRegistrationInput from "../Input/LoginRegistrationInput";
import Button from "../Button/Button";

import classes from "./RegistrationLayout.module.css";

const RegistrationLayout = () => {
  return (
    <Template>
      <h2>ახალი მომხმარებლის რეგისტრაცია</h2>
      <p style={{ color: "gray" }}>
        მოგესალმებით, ძვირფასო მომხმარებელო! მადლობელი ვართ რომ გადაწყვიტეთ
        ჩვენს საიტზე დარეგისტრირება. თუ რაიმე ვერ გაიგეთ რეგისტრაციასთან
        დაკავშირებით შეგვატყობინეთ საიტის ადმინისტრაციას კონტაქტის საშუალებით.
      </p>

      <form className={classes["registration-form"]}>
        <label className={classes["registration-label"]}>სახელი</label>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <LoginRegistrationInput
            style={{ minWidth: "80%" }}
            type="text"
            name="name"
          />
          <Button type="button">შეამოწმე სახელი</Button>
        </div>

        <div style={{ display: "flex", marginTop: "50px", width: "100%" }}>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              marginRight: "50px",
            }}
          >
            <label className={classes["registration-label"]}>პაროლი</label>
            <LoginRegistrationInput style={{ width: "97%" }} />
          </div>
          <div
            style={{ width: "50%", display: "flex", flexDirection: "column" }}
          >
            <label className={classes["registration-label"]}>
              გაიმეორე პაროლი
            </label>
            <LoginRegistrationInput style={{ width: "97%" }} />
          </div>
        </div>
        <label
          className={classes["registration-label"]}
          style={{ marginTop: "40px" }}
        >
          თქვენი ელ-ფოსტა
        </label>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <LoginRegistrationInput
            style={{ width: "47%", marginRight: "40px" }}
          />
          <Button type="submit">გაგრძელება</Button>
        </div>
      </form>
    </Template>
  );
};

export default RegistrationLayout;
