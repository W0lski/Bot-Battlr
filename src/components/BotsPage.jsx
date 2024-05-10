import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import SortBar from "./SortBar";
import CheckboxFilter from "./CheckboxFilter";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [sortby, setSortBy] = useState('default');
  const [filterClasses, setFilterClasses] = useState({
    all: true,
    Assault: false,
    Defender: false,
    Support: false,
    Medic: false,
    Witch: false,
    Captain: false
  });

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch('http://localhost:3000/bots')
      .then((resp) => resp.json())
      .then((data) => {
        setBots(data);
      });
  }

  function enlistBot(bot) {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: true } : b)));
    setYourBotArmy([...yourBotArmy, bot]);
  }

  function removeBot(bot) {
    setYourBotArmy(yourBotArmy.filter((b) => b.id !== bot.id));
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: false } : b)));
  }

  function deleteBot(bot) {
    setBots(bots.filter((b) => b.id !== bot.id));
  }

  function handleSortChange(selected) {
    setSortBy(selected);
  }

  function handleCheckBoxChange(e) {
    const { name, checked } = e.target;
    setFilterClasses(prevState => ({
      ...prevState,
      all: false,
      [name]: checked
    }));
  }

  function filteredBots() {
    return bots.filter(bot => {
      if (filterClasses.all) {
        return true;
      }
      return filterClasses[bot.bot_class];
    });
  }

  function sortedBots(bots) {
    switch (sortby) {
      case "health":
        return bots.slice().sort((a, b) => a.health - b.health);
      case "damage":
        return bots.slice().sort((a, b) => a.damage - b.damage);
      case "armor":
        return bots.slice().sort((a, b) => a.armor - b.armor);
      default:
        return bots;
    }
  }

  const filteredAndSortedBots = sortedBots(filteredBots());

  return (
    <div>
      <SortBar handleSortChange={handleSortChange} />
      <CheckboxFilter filterClasses={filterClasses} onCheckboxChange={handleCheckBoxChange} />
      <YourBotArmy bots={yourBotArmy} removeBot={removeBot} deleteBot={deleteBot} />
      <BotCollection bots={filteredAndSortedBots} enlistBot={enlistBot} deleteBot={deleteBot} />
    </div>
  );
}

export default BotsPage;