"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import "../styles/d38669c0a945547d.css";
import "../styles/style.css";
import "../styles/bootstrap.min.css";
import "../styles/3a6b4218bb14b3ef.css";
import Menu from "../../../components/Header/Menu/Menu";
import CollegeFinder from "../../../components/CollegeFinder";
import Footer from "../../../components/Footer/Footer";

export default function CollegeFinderPage() {
  return (
    <>
      <Menu />
      <div style={{ paddingTop: "120px" }}>
        <CollegeFinder />
      </div>

      <Footer />
    </>
  );
}
