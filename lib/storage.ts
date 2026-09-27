import fs from "fs";
import path from "path";
import { BookingFormData, ContactFormData } from "./validations/booking";

export interface StoredBooking extends BookingFormData {
  id: string;
  bookingRef: string;
  createdAt: string;
  status: "confirmed" | "pending" | "cancelled";
}

export interface StoredContact extends ContactFormData {
  id: string;
  createdAt: string;
  status: "new" | "contacted" | "resolved";
}

const DATA_DIR = path.join(process.cwd(), "data");
const BOOKINGS_FILE = path.join(DATA_DIR, "bookings.json");
const CONTACTS_FILE = path.join(DATA_DIR, "contacts.json");

// Ensure data directory and files exist
function ensureStorage() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(BOOKINGS_FILE)) {
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify([], null, 2), "utf-8");
  }
  if (!fs.existsSync(CONTACTS_FILE)) {
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify([], null, 2), "utf-8");
  }
}

// Generate unique branded Booking Reference (e.g. EWA-BK-74921)
function generateBookingRef(): string {
  const random = Math.floor(10000 + Math.random() * 90000);
  return `EWA-BK-${random}`;
}

export async function saveBooking(data: BookingFormData): Promise<StoredBooking> {
  ensureStorage();
  
  const raw = fs.readFileSync(BOOKINGS_FILE, "utf-8");
  const bookings: StoredBooking[] = JSON.parse(raw || "[]");

  const newBooking: StoredBooking = {
    ...data,
    id: `bk_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
    bookingRef: generateBookingRef(),
    createdAt: new Date().toISOString(),
    status: "confirmed",
  };

  bookings.unshift(newBooking);
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2), "utf-8");

  return newBooking;
}

export async function getBookings(): Promise<StoredBooking[]> {
  ensureStorage();
  try {
    const raw = fs.readFileSync(BOOKINGS_FILE, "utf-8");
    return JSON.parse(raw || "[]");
  } catch {
    return [];
  }
}

export async function saveContactLead(data: ContactFormData): Promise<StoredContact> {
  ensureStorage();

  const raw = fs.readFileSync(CONTACTS_FILE, "utf-8");
  const contacts: StoredContact[] = JSON.parse(raw || "[]");

  const newContact: StoredContact = {
    ...data,
    id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
    createdAt: new Date().toISOString(),
    status: "new",
  };

  contacts.unshift(newContact);
  fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2), "utf-8");

  return newContact;
}

export async function getContactLeads(): Promise<StoredContact[]> {
  ensureStorage();
  try {
    const raw = fs.readFileSync(CONTACTS_FILE, "utf-8");
    return JSON.parse(raw || "[]");
  } catch {
    return [];
  }
}
