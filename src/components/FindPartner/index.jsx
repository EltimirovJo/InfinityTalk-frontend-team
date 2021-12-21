import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Cards from "../Cards";

const FindPartner = () => {
  const token = useSelector((state) => state.auth.token);
  let redirect = useNavigate();
  return (
    <>
      {!token && redirect("/")}
      <div>
        Страница "найти собеседника"
        <Cards />
      </div>
    </>
  );
};

export default FindPartner;
