"use client";
import React, { useState } from "react";
import SearchSection from "./SearchSection";
import Templates from "./Templates";

const Dashboard = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <>
      <SearchSection
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Templates searchInput={searchInput} />
    </>
  );
};

export default Dashboard;
