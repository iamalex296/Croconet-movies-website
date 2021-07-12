import React from "react";

import Template from "../Templates/Template";
import LoginRegistrationInput from "../Input/LoginRegistrationInput";
import Button from "../Button/Button";

const RegistrationLayout = () => {
  return (
    <Template>
      <h2>ახალი მომხმარებლის რეგისტრაცია</h2>
      <p style={{ color: "gray" }}>
        მოგესალმებით, ძვირფასო მომხმარებელო! მადლობელი ვართ რომ გადაწყვიტეთ
        ჩვენს საიტზე დარეგისტრირება. თუ რაიმე ვერ გაიგეთ რეგისტრაციასთან
        დაკავშირებით შეგვატყობინეთ საიტის ადმინისტრაციას კონტაქტის საშუალებით.
      </p>

      <form style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ marginBottom: "10px" }}>სახელი</label>
        <div style={{ display: "flex" }}>
          <LoginRegistrationInput type="text" name="name" />
          <Button type="button">შეამოწმე სახელი</Button>
        </div>
      </form>
    </Template>
  );
};

export default RegistrationLayout;
