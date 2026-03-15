/**
 * Class schedule by branch — sourced from https://www.orientalkarate.com/schedule/
 * Recognized by UAE Karate Federation and Ministry of Youth and Sports
 */

export interface ScheduleRow {
  days: string;
  timings: string;
}

export interface ClassBlock {
  type: "Adult Karate" | "Child Karate" | "Kobudo Class";
  rows: ScheduleRow[];
}

export interface BranchSchedule {
  branchId: string;
  branchName: string;
  classes: ClassBlock[];
}

export const branchSchedules: BranchSchedule[] = [
  {
    branchId: "khalidiya-ho",
    branchName: "Khalidiya Head Office",
    classes: [
      {
        type: "Adult Karate",
        rows: [{ days: "Monday & Thursday", timings: "7:50 PM – 8:50 PM" }],
      },
      {
        type: "Child Karate",
        rows: [
          { days: "Sunday", timings: "9:00–10:00 AM, 4:30–5:30 PM, 5:35–6:35 PM" },
          { days: "Monday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Tuesday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Wednesday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Thursday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Friday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
        ],
      },
      {
        type: "Kobudo Class",
        rows: [
          { days: "Sunday", timings: "9:00 AM – 10:00 AM" },
          { days: "Wednesday", timings: "6:40–7:40 PM" },
          { days: "Friday", timings: "6:40–7:40 PM" },
        ],
      },
    ],
  },
  {
    branchId: "mussaffa",
    branchName: "Mussaffa",
    classes: [
      {
        type: "Adult Karate",
        rows: [
          { days: "Mon & Thu", timings: "7:50 PM – 8:50 PM" },
          { days: "Tue & Fri", timings: "7:50 PM – 8:50 PM" },
        ],
      },
      {
        type: "Child Karate",
        rows: [
          { days: "Sunday", timings: "9:00–10:00 AM, 4:30–5:30 PM, 5:35–6:35 PM, 10:05–11:05 AM" },
          { days: "Monday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Tuesday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Wednesday", timings: "5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Thursday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Friday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Saturday", timings: "9:00–10:00 AM, 10:05–11:05 AM" },
        ],
      },
      {
        type: "Kobudo Class",
        rows: [
          { days: "Saturday", timings: "11:10 AM – 12:10 PM" },
          { days: "Sunday", timings: "11:10 AM – 12:10 PM, 6:40–7:40 PM" },
          { days: "Wednesday", timings: "4:30–5:30 PM, 7:45–8:45 PM" },
        ],
      },
    ],
  },
  {
    branchId: "electra",
    branchName: "Electra Salam Corner",
    classes: [
      {
        type: "Adult Karate",
        rows: [{ days: "Monday & Thursday", timings: "7:00–8:00 PM" }],
      },
      {
        type: "Child Karate",
        rows: [
          { days: "Sunday", timings: "9:00–10:00 AM, 4:30–5:30 PM, 5:45–6:45 PM, 10:15–11:15 AM" },
          { days: "Monday", timings: "4:30–5:30 PM, 5:45–6:45 PM" },
          { days: "Tuesday", timings: "4:30–5:30 PM, 5:45–6:45 PM, 7:00–8:00 PM" },
          { days: "Wednesday", timings: "4:30–5:30 PM, 5:45–6:45 PM" },
          { days: "Thursday", timings: "4:30–5:30 PM, 5:45–6:45 PM" },
          { days: "Friday", timings: "4:30–5:30 PM, 5:45–6:45 PM" },
          { days: "Saturday", timings: "9:00–10:00 AM, 4:30–5:30 PM, 5:45–6:45 PM, 10:15–11:15 AM" },
        ],
      },
      {
        type: "Kobudo Class",
        rows: [
          { days: "Sunday", timings: "11:30 AM – 12:30 PM" },
          { days: "Wednesday", timings: "7:00–8:00 PM" },
          { days: "Friday", timings: "7:00–8:00 PM" },
        ],
      },
    ],
  },
  {
    branchId: "al-reem",
    branchName: "Al Reem Island",
    classes: [
      {
        type: "Adult Karate",
        rows: [{ days: "Monday & Thursday", timings: "7:50–8:50 PM" }],
      },
      {
        type: "Child Karate",
        rows: [
          { days: "Sunday", timings: "9:00–10:00 AM, 4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM, 10:15–11:15 AM" },
          { days: "Monday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Tuesday, Wednesday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Thursday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Friday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Saturday", timings: "9:00–10:00 AM, 10:15–11:15 AM" },
        ],
      },
      {
        type: "Kobudo Class",
        rows: [
          { days: "Sunday & Wednesday", timings: "6:40–7:40 PM" },
          { days: "Saturday & Sunday", timings: "11:30 AM – 12:30 PM" },
        ],
      },
    ],
  },
  {
    branchId: "khalifa-street",
    branchName: "Khalifa Street",
    classes: [
      {
        type: "Adult Karate",
        rows: [{ days: "Mon & Thu", timings: "7:50–8:50 PM" }],
      },
      {
        type: "Child Karate",
        rows: [
          { days: "Sunday", timings: "9:00–10:00 AM, 4:30–5:30 PM, 5:35–6:35 PM, 10:15–11:15 AM" },
          { days: "Monday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Tuesday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Wednesday", timings: "4:30–5:30 PM, 5:35–6:35 PM" },
          { days: "Thursday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Friday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Saturday", timings: "9:00–10:00 AM, 4:30–5:30 PM, 5:35–6:35 PM, 10:15–11:15 AM" },
        ],
      },
      {
        type: "Kobudo Class",
        rows: [
          { days: "Sunday & Saturday", timings: "11:30 AM – 12:30 PM" },
          { days: "Tuesday", timings: "7:45–8:45 PM" },
          { days: "Wednesday", timings: "6:40–7:40 PM" },
        ],
      },
    ],
  },
  {
    branchId: "khalidiya",
    branchName: "Khalidiya",
    classes: [
      {
        type: "Adult Karate",
        rows: [{ days: "Mon & Thu", timings: "7:50–8:50 PM" }],
      },
      {
        type: "Child Karate",
        rows: [
          { days: "Sunday", timings: "9:00–10:00 AM, 10:05–11:05 AM, 4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Monday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Tuesday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Wednesday", timings: "4:30–5:30 PM, 5:35–6:35 PM" },
          { days: "Thursday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Friday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Saturday", timings: "9:00–10:00 AM, 10:05–11:05 AM, 4:30–5:30 PM" },
        ],
      },
      {
        type: "Kobudo Class",
        rows: [
          { days: "Sunday", timings: "11:15 AM – 12:15 PM" },
          { days: "Wednesday", timings: "6:40–7:40 PM" },
          { days: "Saturday", timings: "5:35–6:35 PM" },
        ],
      },
    ],
  },
  {
    branchId: "madina-zayed",
    branchName: "Madina Zayed",
    classes: [
      {
        type: "Adult Karate",
        rows: [
          { days: "Tuesday & Friday", timings: "7:00–8:00 PM" },
          { days: "Monday & Thursday", timings: "8:00–9:00 PM" },
        ],
      },
      {
        type: "Child Karate",
        rows: [
          { days: "Monday", timings: "4:30–5:30 PM, 5:45–6:45 PM, 7:00–8:00 PM" },
          { days: "Tuesday", timings: "4:30–5:30 PM, 5:45–6:45 PM" },
          { days: "Wednesday", timings: "4:30–5:30 PM, 5:45–6:45 PM" },
          { days: "Thursday", timings: "4:30–5:30 PM, 5:45–6:45 PM, 7:00–8:00 PM" },
          { days: "Friday", timings: "4:30–5:30 PM, 5:45–6:45 PM" },
          { days: "Saturday", timings: "9:00–10:00 AM, 4:30–5:30 PM, 5:45–6:45 PM, 10:15–11:15 AM" },
          { days: "Sunday", timings: "9:00–10:00 AM, 4:30–5:30 PM, 5:45–6:45 PM, 10:15–11:15 AM" },
        ],
      },
      {
        type: "Kobudo Class",
        rows: [
          { days: "Saturday & Sunday", timings: "11:30 AM – 12:30 PM" },
          { days: "Saturday", timings: "4:30–5:30 PM" },
          { days: "Sunday", timings: "5:45–6:45 PM, 7:00–8:00 PM" },
          { days: "Wednesday", timings: "7:00–8:00 PM" },
        ],
      },
    ],
  },
  {
    branchId: "airport-road",
    branchName: "Airport Road",
    classes: [
      {
        type: "Adult Karate",
        rows: [{ days: "Monday & Thursday", timings: "8:00–9:00 PM" }],
      },
      {
        type: "Child Karate",
        rows: [
          { days: "Monday & Thursday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Tuesday & Friday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM, 7:45–8:45 PM" },
          { days: "Wednesday", timings: "4:30–5:30 PM, 5:35–6:35 PM" },
          { days: "Saturday", timings: "9:00–10:00 AM, 4:30–5:30 PM, 5:35–6:35 PM, 10:15–11:15 AM" },
          { days: "Sunday", timings: "9:00–10:00 AM, 4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM, 10:15–11:15 AM" },
        ],
      },
      {
        type: "Kobudo Class",
        rows: [
          { days: "Saturday & Sunday", timings: "11:30 AM – 12:30 PM" },
          { days: "Wednesday", timings: "6:40–7:40 PM" },
          { days: "Sunday", timings: "7:45–8:45 PM" },
        ],
      },
    ],
  },
  {
    branchId: "mushrif",
    branchName: "Mushrif Mall",
    classes: [
      {
        type: "Adult Karate",
        rows: [
          { days: "Tuesday & Friday", timings: "7:45–8:45 PM" },
          { days: "Monday & Thursday", timings: "7:45–8:45 PM" },
          { days: "Saturday & Sunday", timings: "7:45–8:45 PM" },
        ],
      },
      {
        type: "Child Karate",
        rows: [
          { days: "Monday, Tuesday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Thursday & Friday", timings: "4:30–5:30 PM, 5:35–6:35 PM, 6:40–7:40 PM" },
          { days: "Wednesday", timings: "4:30–5:30 PM, 6:40–7:40 PM" },
          { days: "Saturday", timings: "9:00–10:00 AM, 10:15–11:15 AM, 4:30–5:30 PM, 5:35–6:35 PM" },
          { days: "Sunday", timings: "9:00–10:00 AM, 10:15–11:15 AM, 4:30–5:30 PM, 5:35–6:35 PM" },
        ],
      },
      {
        type: "Kobudo Class",
        rows: [
          { days: "Saturday & Sunday", timings: "11:30 AM – 12:30 PM" },
          { days: "Wednesday", timings: "5:35–6:35 PM, 7:45–8:45 PM" },
          { days: "Sunday", timings: "6:40–7:40 PM" },
        ],
      },
    ],
  },
];
