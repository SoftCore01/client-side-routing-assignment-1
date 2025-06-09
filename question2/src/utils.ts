import { createContext, useContext } from "react";

export type Course = {
  id: number;
  name: string;
  details: string;
};

export type Student = {
  id: number;
  name: string;
  grade: string;
  courses: Course[];
};

export const StudentsListContext = createContext<Student[]>([]);

export function useStudentsListContext() {
  const context = useContext(StudentsListContext);
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}