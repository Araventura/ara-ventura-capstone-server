/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function seed(knex) {
  await knex("jobs").del();
  await knex("jobs").insert([
    {
      id: 1,
      name: "Sarah Parker",
      payRate: 40,
      title: "Dental Hygienist",
      rateReviews: 5,
      skills:
        "Expert in teeth cleaning, patient education, and periodontal treatment.",
    },
    {
      id: 2,
      name: "James Anderson",
      payRate: 20,
      title: "Receptionist",
      rateReviews: 4,
      skills:
        "Excellent communication, patient scheduling, and handling phone inquiries.",
    },
    {
      id: 3,
      name: "Emily Johnson",
      payRate: 35,
      title: "Dental Assistant",
      rateReviews: 5,
      skills:
        "Proficient in chairside assistance, sterilization, and patient care.",
    },
    {
      id: 4,
      name: "Michael Brown",
      payRate: 55,
      title: "Office Manager",
      rateReviews: 4,
      skills:
        "Experienced in managing office operations, staff scheduling, and billing.",
    },
    {
      id: 5,
      name: "Laura Garcia",
      payRate: 50,
      title: "Dental Hygienist",
      rateReviews: 5,
      skills:
        "Skilled in periodontal therapy, dental radiography, and patient education.",
    },
    {
      id: 6,
      name: "Robert Martinez",
      payRate: 30,
      title: "Chairside Assistant",
      rateReviews: 3,
      skills:
        "Experienced in assisting with dental procedures, sterilizing instruments, and patient preparation.",
    },
    {
      id: 7,
      name: "Jessica Lee",
      payRate: 22,
      title: "Receptionist",
      rateReviews: 5,
      skills:
        "Strong organizational skills, patient communication, and appointment scheduling.",
    },
    {
      id: 8,
      name: "David Wilson",
      payRate: 28,
      title: "Sterilization Technician",
      rateReviews: 4,
      skills:
        "Proficient in sterilization techniques, equipment maintenance, and infection control.",
    },
    {
      id: 9,
      name: "Sophia Hernandez",
      payRate: 38,
      title: "Dental Assistant",
      rateReviews: 4,
      skills: "Skilled in chairside assistance, patient care, and radiography.",
    },
    {
      id: 10,
      name: "Daniel Kim",
      payRate: 60,
      title: "Office Manager",
      rateReviews: 5,
      skills:
        "Expert in managing dental office operations, financial management, and team leadership.",
    },
  ]);
}
