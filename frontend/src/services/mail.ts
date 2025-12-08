import { CreateAccount, GetAllMails } from "@/lib/server/mail";

// TYPES
interface MailAccount {
  token: string;
  user: string;
  pass: string;
  mail: string;
}

// CONSTANTS
const STORAGE_KEYS = ["token", "user", "pass", "mail"] as const;

// HELPERS
function loadFromStorage(): Partial<MailAccount> {
  const data: Partial<MailAccount> = {};

  STORAGE_KEYS.forEach((key) => {
    const value = localStorage.getItem(key);
    if (value) data[key] = value;
  });

  return data;
}

function saveToStorage(data: MailAccount) {
  STORAGE_KEYS.forEach((key) => {
    localStorage.setItem(key, data[key]);
  });
}

function clearStorage() {
  STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
}

// FETCH / CREATE ACCOUNT
export async function getOrCreateMailAccount(): Promise<MailAccount> {
  const stored = loadFromStorage();

  // If all fields exist → return local account
  if (stored.token && stored.user && stored.pass && stored.mail) {
    return stored as MailAccount;
  }

  // Otherwise → create new account
  const newAcc = await CreateAccount();
  console.log("%c New mail account created:", "color: green; font-size: 20px;", newAcc);

  saveToStorage(newAcc);

  return newAcc;
}

export function resetMail() {
  clearStorage();
}

export async function getAllMails() {
  const token = localStorage.getItem("token") || "";
  const data = await GetAllMails(token);
  return data;
}

export type MailDataLoader = Awaited<ReturnType<typeof GetAllMails>>;
