import type { Student } from '../../types';

export const mockStudent: Student = {
  id: '2023001482',
  name: 'Anudeep Varma',
  rollNumber: '2023001482',
  program: 'B.Tech Computer Science Engineering',
  department: 'Computer Science & Engineering',
  school: 'Gitam School of Technology',
  semester: 3,
  section: 'B',
  campus: 'Visakhapatnam Campus',
  email: 'anudeep.varma@gitam.in',
  cgpa: 8.42,
  sgpa: 8.71,
  registeredCredits: 18,
  maxCredits: 24,
  academicStanding: 'Regular • Good Standing',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
  nfcCard: {
    cardNumber: 'GTM-NFC-998241',
    status: 'Active',
    validUntil: 'June 2027',
  },
};
