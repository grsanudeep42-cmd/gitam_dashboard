export interface Student {
  id: string;
  name: string;
  rollNumber: string;
  program: string;
  department: string;
  school: string;
  semester: number;
  section: string;
  campus: string;
  email: string;
  cgpa: number;
  sgpa: number;
  registeredCredits: number;
  maxCredits: number;
  academicStanding: string;
  avatarUrl: string;
  nfcCard: {
    cardNumber: string;
    status: 'Active' | 'Inactive';
    validUntil: string;
  };
}

export type CourseStatus = 'on-track' | 'needs-attention' | 'warning' | 'completed';

export interface Course {
  id: string;
  code: string;
  title: string;
  instructor: string;
  instructorTitle: string;
  credits: number;
  department: string;
  room: string;
  building: string;
  type: 'Core Theory' | 'Lab Practical' | 'Foundational' | 'Elective';
  attendancePercentage: number;
  attendedClasses: number;
  totalClasses: number;
  internalScore: number;
  maxInternalScore: number;
  status: CourseStatus;
  nextSession?: string;
  syllabusModulesCount: number;
  completedModulesCount: number;
  syllabusOverview: string[];
  description: string;
  assessmentBreakdown: {
    name: string;
    score: number;
    maxScore: number;
  }[];
}

export interface ScheduleItem {
  id: string;
  timeStart: string;
  timeEnd: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
  courseCode: string;
  courseTitle: string;
  room: string;
  building: string;
  instructor: string;
  type: 'Lecture' | 'Lab' | 'Tutorial';
  isNext?: boolean;
  startsInText?: string;
  notes?: string;
}

export interface AttendanceRecord {
  courseId: string;
  courseCode: string;
  courseTitle: string;
  attendancePercentage: number;
  attended: number;
  total: number;
  safeMisses: number;
  warningLevel: 'safe' | 'caution' | 'critical';
  statusNote: string;
  history: {
    date: string;
    status: 'Present' | 'Absent' | 'Medical';
    topic: string;
  }[];
}

export interface Assignment {
  id: string;
  title: string;
  courseCode: string;
  courseTitle: string;
  dueDate: string;
  dueTime: string;
  status: 'due_tomorrow' | 'due_soon' | 'draft_saved' | 'completed';
  statusLabel: string;
  submissionType: string;
  maxMarks: number;
  description: string;
  priority: 'high' | 'medium' | 'low';
  draftProgress?: number;
}

export interface Exam {
  id: string;
  title: string;
  courseCode: string;
  courseTitle: string;
  date: string;
  time: string;
  venue: string;
  duration: string;
  examType: 'Mid-Semester' | 'End-Semester' | 'Practical';
  hallTicketStatus: 'Available' | 'Pending' | 'Locked';
  hallTicketDate?: string;
  instructions: string[];
}

export interface NotificationItem {
  id: string;
  title: string;
  body: string;
  timestamp: string;
  category: 'official' | 'exam' | 'department' | 'campus';
  isRead: boolean;
  isPinned?: boolean;
  author: string;
  attachmentPdf?: string;
}

export interface GradeSemester {
  semester: string;
  sgpa: number;
  credits: number;
  status: string;
  courses: {
    code: string;
    title: string;
    grade: string;
    gradePoints: number;
    credits: number;
  }[];
}
