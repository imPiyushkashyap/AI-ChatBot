// atoms/chatAtoms.ts
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Message } from "ai";

// Define the atom with the correct Message type
export const chatHistory = atomWithStorage<Message[]>("chatHistory", []);