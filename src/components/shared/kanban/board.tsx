// @ts-nocheck

'use client'
import React, { useState } from "react";
import {Trash} from 'lucide-react'
import {Card, AddCard} from './kanban-card'

export const Board = ({allowAdd, dataSource}: {allowAdd:any, dataSource: any}) => {
  const [cards, setCards] = useState(dataSource);

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      <Column
        title="Para aplicar"
        column="backlog"
        headingColor="text-neutral-500"
        allowAdd={allowAdd}
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Em assignado"
        column="todo"
        headingColor="text-neutral-500"
        cards={cards}
        allowAdd={allowAdd}
        setCards={setCards}
      />
      <Column
        title="Em andamento"
        column="doing"
        headingColor="text-neutral-500"
        cards={cards}
        allowAdd={allowAdd}
        setCards={setCards}
      />
      <Column
        title="Completo"
        column="done"
        headingColor="text-neutral-500"
        cards={cards}
        allowAdd={allowAdd}
        setCards={setCards}
      />      
    </div>
  );
};

type KanbanColumn = {
  title :string, 
  headingColor :string, 
  cards :any, 
  column :any, 
  setCards :any, 
  allowAdd :any
}

const Column = ({ title, headingColor, cards, column, setCards, allowAdd} : KanbanColumn) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e:any, card:any) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e:any) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights(null);

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e:any) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els:any) => {
    const indicators = els || getIndicators();

    indicators.forEach((i:any) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e:any, indicators:any) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest:any, child:any) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    clearHighlights(null);
    setActive(false);
  };

  const filteredCards = cards.filter((c:any) => c.column === column);

  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((c) => {
          return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
        })}
        <DropIndicator beforeId={null} column={column} />
        {allowAdd ? <AddCard column={column} setCards={setCards} /> : <></>}
      </div>
    </div>
  );
};

const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
};

const BurnBarrel = ({ setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");

    setCards((pv) => pv.filter((c) => c.id !== cardId));

    setActive(false);
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
      }`}
    >
      {active ? <Trash className="animate-bounce" /> : <Trash />}
    </div>
  );
};

const DEFAULT_CARDS = [
  // BACKLOG
  { title: "Bla bla", id: "1", column: "backlog" },
  { title: "Bla bla 2", id: "2", column: "backlog" },
  { title: "Bla bla 3", id: "3", column: "backlog" },
  { title: "Lavar roupa", id: "4", column: "backlog" },
  // TODO
  {
    title: "Lixo",
    id: "5",
    column: "todo",
  },
  { title: "Aff", id: "6", column: "todo" },
  { title: "taok", id: "7", column: "todo" },

  // DOING
  {
    title: "N sei",
    id: "8",
    column: "doing",
  },
  { title: "Blz", id: "9", column: "doing" },
  // DONE
  {
    title: "12345678, ta na hora",
    id: "10",
    column: "done",
  },
];
