export interface CoverageOverTimeType {
  name: string;
  untested: number;
  tested: number;
  coveragePercentage: number;
  timestamp: string;
}

export const dataCoverageOverTime: CoverageOverTimeType[] = [
  {
    name: "Test Run #1",
    untested: 10,
    tested: 0,
    coveragePercentage: 0,
    timestamp: "2021-09-01",
  },
  {
    name: "Test Run #2",
    untested: 8,
    tested: 2,
    coveragePercentage: 20,
    timestamp: "2021-09-02",
  },
  {
    name: "Test Run #3",
    untested: 6,
    tested: 4,
    coveragePercentage: 40,
    timestamp: "2021-09-03",
  },
  {
    name: "Test Run #4",
    untested: 5,
    tested: 5,
    coveragePercentage: 50,
    timestamp: "2021-09-04",
  },
  {
    name: "Test Run #5",
    untested: 5,
    tested: 5,
    coveragePercentage: 50,
    timestamp: "2021-09-05",
  },
  {
    name: "Test Run #6",
    untested: 5,
    tested: 5,
    coveragePercentage: 50,
    timestamp: "2021-09-06",
  },
  {
    name: "Test Run #7",
    untested: 4,
    tested: 6,
    coveragePercentage: 60,
    timestamp: "2021-09-07",
  },
  {
    name: "Test Run #8",
    untested: 3,
    tested: 7,
    coveragePercentage: 70,
    timestamp: "2021-09-08",
  },
  {
    name: "Test Run #9",
    untested: 2,
    tested: 8,
    coveragePercentage: 80,
    timestamp: "2021-09-09",
  },
  {
    name: "Test Run #10",
    untested: 0,
    tested: 10,
    coveragePercentage: 100,
    timestamp: "2021-09-10",
  },
];
