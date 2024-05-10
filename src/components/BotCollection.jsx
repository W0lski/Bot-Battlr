import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot, deleteBot }) {
  const botItems = bots.map(bot => (
    <BotCard
      key={bot.id}
      bot={bot}
      clickEvent={enlistBot}
      deleteBot={deleteBot}
    />
  ));

  return (
    <div className="ui four column grid">
      <div className="row">
        {botItems}
      </div>
    </div>
  );
}

export default BotCollection;