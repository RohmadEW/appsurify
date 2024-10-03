export interface IndividualTestingType {
  page: string;
  snapshot: number;
  tested: number;
  untested: number;
  coveragePercentage: number;
}

export const dataIndividualTesting: IndividualTestingType[] = [
  {
    page: "/home",
    snapshot: 10,
    tested: 0,
    untested: 10,
    coveragePercentage: 0,
  },
  {
    page: "/about",
    snapshot: 8,
    tested: 2,
    untested: 6,
    coveragePercentage: 20,
  },
  {
    page: "/contact",
    snapshot: 6,
    tested: 4,
    untested: 2,
    coveragePercentage: 40,
  },
  {
    page: "/blog",
    snapshot: 5,
    tested: 5,
    untested: 0,
    coveragePercentage: 50,
  },
  {
    page: "/pricing",
    snapshot: 5,
    tested: 5,
    untested: 0,
    coveragePercentage: 50,
  },
  {
    page: "/faq",
    snapshot: 5,
    tested: 5,
    untested: 0,
    coveragePercentage: 50,
  },
  {
    page: "/support",
    snapshot: 4,
    tested: 6,
    untested: 0,
    coveragePercentage: 60,
  },
  {
    page: "/dashboard",
    snapshot: 3,
    tested: 7,
    untested: 0,
    coveragePercentage: 70,
  },
  {
    page: "/login",
    snapshot: 2,
    tested: 8,
    untested: 0,
    coveragePercentage: 80,
  },
  {
    page: "/register",
    snapshot: 1,
    tested: 9,
    untested: 0,
    coveragePercentage: 90,
  },
  {
    page: "/forgot-password",
    snapshot: 0,
    tested: 10,
    untested: 0,
    coveragePercentage: 100,
  },
  {
    page: "/reset-password",
    snapshot: 0,
    tested: 10,
    untested: 0,
    coveragePercentage: 100,
  },
  {
    page: "/profile",
    snapshot: 0,
    tested: 10,
    untested: 0,
    coveragePercentage: 100,
  },
  {
    page: "/settings",
    snapshot: 0,
    tested: 10,
    untested: 0,
    coveragePercentage: 100,
  },
  {
    page: "/404",
    snapshot: 0,
    tested: 10,
    untested: 0,
    coveragePercentage: 100,
  },
  {
    page: "/500",
    snapshot: 0,
    tested: 10,
    untested: 0,
    coveragePercentage: 100,
  },
  {
    page: "/503",
    snapshot: 0,
    tested: 10,
    untested: 0,
    coveragePercentage: 100,
  },
  {
    page: "/terms",
    snapshot: 0,
    tested: 10,
    untested: 0,
    coveragePercentage: 100,
  },
  {
    page: "/privacy",
    snapshot: 0,
    tested: 10,
    untested: 0,
    coveragePercentage: 100,
  },
  {
    page: "/cookie",
    snapshot: 0,
    tested: 10,
    untested: 0,
    coveragePercentage: 100,
  },
  {
    page: "/contactform",
    snapshot: 0,
    tested: 10,
    untested: 0,
    coveragePercentage: 100,
  },
];
