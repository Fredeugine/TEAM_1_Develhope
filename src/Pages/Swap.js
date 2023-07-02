import React, { useState } from "react";
import InfoCard from "../Components/InfoCard";
import GraphCard from "../Components/GraphCard";
import PriceChangeListCard from "../Components/PriceChangeListCard";
import HeaderOptions from "../Components/HeaderOptions";

export default function Swap() {
  const [leftCard, setLeftCard] = useState(null);

  const handleLeftCardSelection = (selectedCard) => {
    setLeftCard(selectedCard);
  };

  return (
    <div>
        <HeaderOptions />
      <InfoCard onLeftCardSelection={handleLeftCardSelection} />

      <div>
        {leftCard === "graph" && <GraphCard />}
        {leftCard === "priceChangeList" && <PriceChangeListCard />}
      </div>
    </div>
  );
}
