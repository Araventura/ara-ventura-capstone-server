/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function seed(knex) {
  await knex("offices").del();
  await knex("offices").insert([
    {
      id: 1,
      name: "Bright Smiles Dental Clinic",
      address: "1234 Maple Street, Springfield, IL 62704",
      practicingDoctor: "Dr. Susan Taylor",
      contactName: "John Doe",
      contactPosition: "Office Manager",
      phone: "(217) 555-1234",
      email: "johndoe@brightsmiles.com",
    },
    {
      id: 2,
      name: "Evergreen Family Dentistry",
      address: "5678 Oak Avenue, Seattle, WA 98101",
      practicingDoctor: "Dr. Emily Foster",
      contactName: "Jane Smith",
      contactPosition: "Receptionist",
      phone: "(206) 555-5678",
      email: "janesmith@evergreendentistry.com",
    },
    {
      id: 3,
      name: "Pearl Dental Care",
      address: "9012 Birch Road, Austin, TX 78701",
      practicingDoctor: "Dr. Michael Johnson",
      contactName: "Alice Cooper",
      contactPosition: "Office Manager",
      phone: "(512) 555-9012",
      email: "alicecooper@pearldental.com",
    },
    {
      id: 4,
      name: "Sunrise Dental Group",
      address: "3456 Pine Street, Miami, FL 33101",
      practicingDoctor: "Dr. Rachel Green",
      contactName: "Robert Brown",
      contactPosition: "Assistant Manager",
      phone: "(305) 555-3456",
      email: "robertbrown@sunrisedental.com",
    },
    {
      id: 5,
      name: "Oceanview Dental Clinic",
      address: "7890 Ocean Drive, Santa Monica, CA 90401",
      practicingDoctor: "Dr. Lisa Wong",
      contactName: "David Lee",
      contactPosition: "Front Desk Coordinator",
      phone: "(310) 555-7890",
      email: "davidlee@oceanviewdental.com",
    },
  ]);
}
