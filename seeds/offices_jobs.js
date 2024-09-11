/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function seed(knex) {
  await knex("jobs").del();
  await knex("jobs").insert([
    // Jobs for Bright Smiles Dental Clinic
    {
      id: 1,
      officeId: 1,
      jobTitle: "Dental Hygienist",
      description:
        "Seeking a skilled dental hygienist for routine cleanings and patient care. Must have a valid hygienist license.",
      dateRange: { start: "2024-10-01", end: "2024-10-15" },
      payRange: { min: 35, max: 45 },
      status: "Open",
    },
    {
      id: 2,
      officeId: 1,
      jobTitle: "Front Desk Receptionist",
      description:
        "Looking for a friendly receptionist to manage patient check-ins, appointments, and phone calls.",
      dateRange: { start: "2024-11-01", end: "2024-11-30" },
      payRange: { min: 18, max: 25 },
      status: "Open",
    },

    // Jobs for Evergreen Family Dentistry
    {
      id: 3,
      officeId: 2,
      jobTitle: "Dental Assistant",
      description:
        "Experienced dental assistant needed to support the dentist during procedures. Must be comfortable with sterilization protocols.",
      dateRange: { start: "2024-09-20", end: "2024-09-30" },
      payRange: { min: 25, max: 35 },
      status: "Open",
    },
    {
      id: 4,
      officeId: 2,
      jobTitle: "Office Manager",
      description:
        "Seeking an organized office manager to oversee daily operations, manage staff, and handle billing.",
      dateRange: { start: "2024-10-10", end: "2024-10-20" },
      payRange: { min: 45, max: 60 },
      status: "Open",
    },

    // Jobs for Pearl Dental Care
    {
      id: 5,
      officeId: 3,
      jobTitle: "Dental Hygienist",
      description:
        "Experienced dental hygienist needed for patient cleanings and preventive care. Must be licensed and have excellent communication skills.",
      dateRange: { start: "2024-11-05", end: "2024-11-19" },
      payRange: { min: 40, max: 50 },
      status: "Open",
    },
    {
      id: 6,
      officeId: 3,
      jobTitle: "Sterilization Technician",
      description:
        "Looking for a meticulous sterilization technician to ensure all instruments and equipment are properly cleaned and sterilized.",
      dateRange: { start: "2024-10-15", end: "2024-10-25" },
      payRange: { min: 20, max: 28 },
      status: "Open",
    },

    // Jobs for Sunrise Dental Group
    {
      id: 7,
      officeId: 4,
      jobTitle: "Dental Office Receptionist",
      description:
        "Friendly and organized receptionist needed to handle patient intake, appointments, and general office duties.",
      dateRange: { start: "2024-10-01", end: "2024-10-14" },
      payRange: { min: 19, max: 26 },
      status: "Open",
    },
    {
      id: 8,
      officeId: 4,
      jobTitle: "Dental Hygienist",
      description:
        "Dental hygienist needed to perform cleanings and assist with patient care. Must be licensed and have at least 2 years of experience.",
      dateRange: { start: "2024-11-10", end: "2024-11-24" },
      payRange: { min: 38, max: 48 },
      status: "Open",
    },

    // Jobs for Oceanview Dental Clinic
    {
      id: 9,
      officeId: 5,
      jobTitle: "Dental Assistant",
      description:
        "Experienced dental assistant needed for chairside support, patient care, and instrument sterilization.",
      dateRange: { start: "2024-09-15", end: "2024-09-25" },
      payRange: { min: 27, max: 36 },
      status: "Open",
    },
    {
      id: 10,
      officeId: 5,
      jobTitle: "Dental Office Manager",
      description:
        "Office manager needed to oversee day-to-day operations, manage staff schedules, and ensure smooth patient flow.",
      dateRange: { start: "2024-10-05", end: "2024-10-19" },
      payRange: { min: 50, max: 65 },
      status: "Open",
    },
  ]);
}
