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
      dateRangeStart: "2024-10-01",
      dateRangeEnd: "2024-10-15",
      payRangeMin: 35,
      payRangeMax: 45,
      status: "Open",
    },
    {
      id: 2,
      officeId: 1,
      jobTitle: "Front Desk Receptionist",
      description:
        "Looking for a friendly receptionist to manage patient check-ins, appointments, and phone calls.",
      dateRangeStart: "2024-11-01",
      dateRangeEnd: "2024-11-30",
      payRangeMin: 18,
      payRangeMax: 25,
      status: "Open",
    },

    // Jobs for Evergreen Family Dentistry
    {
      id: 3,
      officeId: 2,
      jobTitle: "Dental Assistant",
      description:
        "Experienced dental assistant needed to support the dentist during procedures. Must be comfortable with sterilization protocols.",
      dateRangeStart: "2024-09-20",
      dateRangeEnd: "2024-09-30",
      payRangeMin: 25,
      payRangeMax: 35,
      status: "Open",
    },
    {
      id: 4,
      officeId: 2,
      jobTitle: "Office Manager",
      description:
        "Seeking an organized office manager to oversee daily operations, manage staff, and handle billing.",
      dateRangeStart: "2024-10-10",
      dateRangeEnd: "2024-10-20",
      payRangeMin: 45,
      payRangeMax: 60,
      status: "Open",
    },

    // Jobs for Pearl Dental Care
    {
      id: 5,
      officeId: 3,
      jobTitle: "Dental Hygienist",
      description:
        "Experienced dental hygienist needed for patient cleanings and preventive care. Must be licensed and have excellent communication skills.",
      dateRangeStart: "2024-11-05",
      dateRangeEnd: "2024-11-19",
      payRangeMin: 40,
      payRangeMax: 50,
      status: "Open",
    },
    {
      id: 6,
      officeId: 3,
      jobTitle: "Sterilization Technician",
      description:
        "Looking for a meticulous sterilization technician to ensure all instruments and equipment are properly cleaned and sterilized.",
      dateRangeStart: "2024-10-15",
      dateRangeEnd: "2024-10-25",
      payRangeMin: 20,
      payRangeMax: 28,
      status: "Open",
    },

    // Jobs for Sunrise Dental Group
    {
      id: 7,
      officeId: 4,
      jobTitle: "Dental Office Receptionist",
      description:
        "Friendly and organized receptionist needed to handle patient intake, appointments, and general office duties.",
      dateRangeStart: "2024-10-01",
      dateRangeEnd: "2024-10-14",
      payRangeMin: 19,
      payRangeMax: 26,
      status: "Open",
    },
    {
      id: 8,
      officeId: 4,
      jobTitle: "Dental Hygienist",
      description:
        "Dental hygienist needed to perform cleanings and assist with patient care. Must be licensed and have at least 2 years of experience.",
      dateRangeStart: "2024-11-10",
      dateRangeEnd: "2024-11-24",
      payRangeMin: 38,
      payRangeMax: 48,
      status: "Open",
    },

    // Jobs for Oceanview Dental Clinic
    {
      id: 9,
      officeId: 5,
      jobTitle: "Dental Assistant",
      description:
        "Experienced dental assistant needed for chairside support, patient care, and instrument sterilization.",
      dateRangeStart: "2024-09-15",
      dateRangeEnd: "2024-09-25",
      payRangeMin: 27,
      payRangeMax: 36,
      status: "Open",
    },
    {
      id: 10,
      officeId: 5,
      jobTitle: "Dental Office Manager",
      description:
        "Office manager needed to oversee day-to-day operations, manage staff schedules, and ensure smooth patient flow.",
      dateRangeStart: "2024-10-05",
      dateRangeEnd: "2024-10-19",
      payRangeMin: 50,
      payRangeMax: 65,
      status: "Open",
    },
  ]);
}
