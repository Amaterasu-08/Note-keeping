import { Note } from "../App";
import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";

type NoteLayoutProps = {
  notes: Note[];
};

export function NoteLayout({ notes }: NoteLayoutProps) {
  const { id } = useParams(); // will get the id straight from the url
  const note = notes.find((n) => n.id === id);

  if (note == null) return <Navigate to="/" replace />; // will take us back to home if the note doesnt exist

  return <Outlet context={note} />; // return what is inside the Route in the App.tsx
}

export function useNote() {
  return useOutletContext<Note>();
}
