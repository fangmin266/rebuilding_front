import React from "react";
import { StudioHeader } from "../../components/Header";
import { AsideHead } from "./AsideHead";

const IntroPlan = () => {
  return (
    <>
      <StudioHeader />
      <div className="flex h-full">
        <AsideHead />
      </div>
    </>
  );
};

export default IntroPlan;
