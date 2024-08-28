import { TNewWordContext } from "@/models/base";
import { createContext } from "react";

export const NewWordContext = createContext<TNewWordContext | null>(null);
