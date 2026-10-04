import type { GradeSemester } from '../../types';

export const mockGradeSemesters: GradeSemester[] = [
  {
    semester: 'Semester 1 (Autumn 2023-24)',
    sgpa: 8.10,
    credits: 20,
    status: 'Completed',
    courses: [
      { code: 'MTH101', title: 'Calculus & Linear Algebra', grade: 'A', gradePoints: 9, credits: 4 },
      { code: 'PHY101', title: 'Engineering Physics', grade: 'A', gradePoints: 9, credits: 4 },
      { code: 'CSE101', title: 'Programming in C++', grade: 'O', gradePoints: 10, credits: 4 },
      { code: 'EEE101', title: 'Basic Electrical Engineering', grade: 'B+', gradePoints: 7, credits: 3 },
      { code: 'ENG101', title: 'Technical English & Communication', grade: 'A', gradePoints: 9, credits: 3 },
      { code: 'CSE101L', title: 'C++ Programming Lab', grade: 'O', gradePoints: 10, credits: 2 },
    ],
  },
  {
    semester: 'Semester 2 (Spring 2023-24)',
    sgpa: 8.35,
    credits: 22,
    status: 'Completed',
    courses: [
      { code: 'MTH102', title: 'Differential Equations & Vector Calculus', grade: 'A', gradePoints: 9, credits: 4 },
      { code: 'CHM101', title: 'Engineering Chemistry', grade: 'B+', gradePoints: 7, credits: 3 },
      { code: 'CSE102', title: 'Object Oriented Programming in Java', grade: 'O', gradePoints: 10, credits: 4 },
      { code: 'ECE101', title: 'Digital Logic Design', grade: 'A', gradePoints: 9, credits: 4 },
      { code: 'CSE102L', title: 'Java Programming Lab', grade: 'O', gradePoints: 10, credits: 2 },
      { code: 'ECE101L', title: 'Digital Logic Design Lab', grade: 'A+', gradePoints: 9, credits: 2 },
      { code: 'HUM101', title: 'Universal Human Values', grade: 'O', gradePoints: 10, credits: 3 },
    ],
  },
  {
    semester: 'Semester 3 (Autumn 2024-25 - In Progress)',
    sgpa: 8.71,
    credits: 18,
    status: 'Projected Based on Internal Assessment',
    courses: [
      { code: 'CSE201', title: 'Data Structures & Algorithms', grade: 'O (Est)', gradePoints: 10, credits: 4 },
      { code: 'CSE202', title: 'Computer Networks', grade: 'B+ (Est)', gradePoints: 7, credits: 4 },
      { code: 'MTH201', title: 'Engineering Mathematics III', grade: 'A (Est)', gradePoints: 9, credits: 4 },
      { code: 'CSE204', title: 'Operating Systems', grade: 'B (Est)', gradePoints: 6, credits: 4 },
      { code: 'CSE205', title: 'Database Management Systems', grade: 'A+ (Est)', gradePoints: 9, credits: 3 },
      { code: 'CSE206', title: 'Computer Organization & Architecture', grade: 'O (Est)', gradePoints: 10, credits: 3 },
    ],
  },
];
