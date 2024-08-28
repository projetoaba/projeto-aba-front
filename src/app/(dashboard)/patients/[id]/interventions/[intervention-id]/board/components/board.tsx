'use client'
import {Board} from '@/components/shared/kanban/board';


const DEFAULT_CARDS = [
  // 
  { title: "Bla bla", id: "1", column: "backlog" },
  { title: "Bla bla 2", id: "2", column: "backlog" },
  { title: "Bla bla 3", id: "3", column: "backlog" },
  { title: "Lavar roupa", id: "4", column: "backlog" },
  // 
  {
    title: "Lixo",
    id: "5",
    column: "todo",
  },
  { title: "Aff", id: "6", column: "todo" },
  { title: "taok", id: "7", column: "todo" },

  // 
  {
    title: "N sei",
    id: "8",
    column: "doing",
  },
  { title: "Blz", id: "9", column: "doing" },
  // 
  {
    title: "12345678, ta na hora",
    id: "10",
    column: "done",
  },
];

export const ProgressKanban = () => {
  return (
    <Board allowAdd={false} dataSource={DEFAULT_CARDS}/>
  );
};
