
// Dashboard Reports Data


// Dashboard Reports Data
export const reportsData = [
  { id: 1, heading: "Total Children", amount: "45" },
  { id: 2, heading: "Total Staff", amount: "12" },
  { id: 3, heading: "Total Parents", amount: "38" },
  { id: 4, heading: "Attendance Rate", amount: "92%" },
];

// Parent Data
export const parentsData = [
  {
    id: 1,
    name: "Emily Johnson",
    email: "emily.j@example.com",
    phone: "(555) 123-4567",
    children: ["Emma Johnson", "Liam Johnson"],
    status: "Active",
    memberSince: "2024-01-15"
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@example.com",
    phone: "(555) 234-5678",
    children: ["Sophie Chen"],
    status: "Active",
    memberSince: "2024-03-20"
  },
  {
    id: 3,
    name: "Sarah Williams",
    email: "sarah.w@example.com",
    phone: "(555) 345-6789",
    children: ["Noah Williams", "Olivia Williams"],
    status: "Active",
    memberSince: "2023-09-10"
  },
  {
    id: 4,
    name: "David Martinez",
    email: "d.martinez@example.com",
    phone: "(555) 456-7890",
    children: ["Ava Martinez"],
    status: "Pending",
    memberSince: "2025-12-01"
  },
  {
    id: 5,
    name: "Jessica Brown",
    email: "jessica.b@example.com",
    phone: "(555) 567-8901",
    children: ["Ethan Brown", "Mia Brown"],
    status: "Active",
    memberSince: "2024-05-15"
  },
];

// Staff Data
export const staffData = [
  {
    id: 1,
    name: "Amanda Rodriguez",
    role: "Lead Teacher",
    email: "amanda.r@solaracare.com",
    phone: "(555) 111-2222",
    schedule: "Mon-Fri, 8:00 AM - 4:00 PM",
    attendance: "98%",
    status: "Active"
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Assistant Teacher",
    email: "james.w@solaracare.com",
    phone: "(555) 222-3333",
    schedule: "Mon-Fri, 9:00 AM - 5:00 PM",
    attendance: "95%",
    status: "Active"
  },
  {
    id: 3,
    name: "Maria Garcia",
    role: "Teacher",
    email: "maria.g@solaracare.com",
    phone: "(555) 333-4444",
    schedule: "Mon-Fri, 8:00 AM - 4:00 PM",
    attendance: "100%",
    status: "Active"
  },
  {
    id: 4,
    name: "Robert Lee",
    role: "Activities Coordinator",
    email: "robert.l@solaracare.com",
    phone: "(555) 444-5555",
    schedule: "Tue-Sat, 10:00 AM - 6:00 PM",
    attendance: "92%",
    status: "Active"
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Nurse",
    email: "lisa.a@solaracare.com",
    phone: "(555) 555-6666",
    schedule: "Mon-Fri, 8:00 AM - 4:00 PM",
    attendance: "97%",
    status: "Active"
  },
];

// Children Data
export const childrenData = [
  {
    id: 1,
    name: "Emma Johnson",
    fullName: "Emma Smith Johnson",
    age: 4,
    dob: "March 12, 2022",
    parent: "Emily Johnson",
    parentContact: "(555) 123-4567",
    allergies: "Peanuts, Dust",
    medication: "EpiPen",
    medicalNotes: "EpiPen required",
    doctorName: "Dr.Laura",
    emergencyContact: "Sarah Johnson — +1 (555) 234-8790",
    enrollmentDate: "Oct 3, 2025",
    classroom: "Little Explorers",
    status: "Active",
    photo: "👧",
    guardians: [
      { relation: "Mother", name: "Sarah Johnson", phone: "+1 (555) 234-8790", email: "sarah.johnson@email.com" },
      { relation: "Father", name: "Michael Johnson", phone: "+1 (555) 765-3421", email: "michael.johnson@email.com" }
    ],
    documents: [
      { name: "Enrolment Agreement", type: "PDF", status: "E-signed", signedBy: "Sarah Johnson", date: "Aug 10, 2025" },
      { name: "Payment Confirmation", type: "Invoice", status: "Paid", signedBy: "Michael Smith", date: "Jul 22, 2025" },
      { name: "Course Completion Certificate", type: "PDF", status: "Issued", signedBy: "Emily Davis", date: "Dec 15, 2025" }
    ]
  },
  {
    id: 2,
    name: "Liam Johnson",
    fullName: "Liam Robert Johnson",
    age: 2,
    dob: "June 8, 2023",
    parent: "Emily Johnson",
    parentContact: "(555) 123-4567",
    allergies: "None",
    medication: "None",
    medicalNotes: "None",
    doctorName: "Dr.Smith",
    emergencyContact: "Emily Johnson — +1 (555) 123-4567",
    enrollmentDate: "Oct 3, 2025",
    classroom: "Tiny Tots",
    status: "Active",
    photo: "👦",
    guardians: [
      { relation: "Mother", name: "Emily Johnson", phone: "+1 (555) 123-4567", email: "emily.j@example.com" }
    ],
    documents: [
      { name: "Enrolment Agreement", type: "PDF", status: "E-signed", signedBy: "Emily Johnson", date: "Aug 15, 2025" }
    ]
  },
  {
    id: 3,
    name: "Sophie Chen",
    fullName: "Sophie May Chen",
    age: 5,
    dob: "January 20, 2020",
    parent: "Michael Chen",
    parentContact: "(555) 234-5678",
    allergies: "Dairy",
    medication: "Lactose enzyme",
    medicalNotes: "Lactose intolerant",
    doctorName: "Dr.Williams",
    emergencyContact: "Lisa Chen — +1 (555) 234-5678",
    enrollmentDate: "Oct 3, 2025",
    classroom: "Kindergarten Stars",
    status: "Active",
    photo: "👧",
    guardians: [
      { relation: "Father", name: "Michael Chen", phone: "+1 (555) 234-5678", email: "m.chen@example.com" },
      { relation: "Mother", name: "Lisa Chen", phone: "+1 (555) 234-5679", email: "lisa.chen@example.com" }
    ],
    documents: [
      { name: "Enrolment Agreement", type: "PDF", status: "E-signed", signedBy: "Michael Chen", date: "Jul 10, 2025" },
      { name: "Medical Records", type: "PDF", status: "Verified", signedBy: "Dr.Williams", date: "Jul 15, 2025" }
    ]
  },
  {
    id: 4,
    name: "Noah Williams",
    fullName: "Noah Alexander Williams",
    age: 3,
    dob: "September 5, 2022",
    parent: "Sarah Williams",
    parentContact: "(555) 345-6789",
    allergies: "None",
    medication: "Asthma inhaler",
    medicalNotes: "Asthma inhaler as needed",
    doctorName: "Dr.Martinez",
    emergencyContact: "David Williams — +1 (555) 345-6790",
    enrollmentDate: "Oct 3, 2025",
    classroom: "Little Explorers",
    status: "Active",
    photo: "👦",
    guardians: [
      { relation: "Mother", name: "Sarah Williams", phone: "+1 (555) 345-6789", email: "sarah.w@example.com" },
      { relation: "Father", name: "David Williams", phone: "+1 (555) 345-6790", email: "david.w@example.com" }
    ],
    documents: [
      { name: "Enrolment Agreement", type: "PDF", status: "E-signed", signedBy: "Sarah Williams", date: "Aug 20, 2025" },
      { name: "Asthma Action Plan", type: "PDF", status: "Approved", signedBy: "Dr.Martinez", date: "Aug 22, 2025" }
    ]
  },
  {
    id: 5,
    name: "Olivia Williams",
    fullName: "Olivia Grace Williams",
    age: 5,
    dob: "April 15, 2020",
    parent: "Sarah Williams",
    parentContact: "(555) 345-6789",
    allergies: "Shellfish",
    medication: "None",
    medicalNotes: "Avoid shellfish in meals",
    doctorName: "Dr.Martinez",
    emergencyContact: "Sarah Williams — +1 (555) 345-6789",
    enrollmentDate: "Oct 3, 2025",
    classroom: "Kindergarten Stars",
    status: "Active",
    photo: "👧",
    guardians: [
      { relation: "Mother", name: "Sarah Williams", phone: "+1 (555) 345-6789", email: "sarah.w@example.com" },
      { relation: "Father", name: "David Williams", phone: "+1 (555) 345-6790", email: "david.w@example.com" }
    ],
    documents: [
      { name: "Enrolment Agreement", type: "PDF", status: "E-signed", signedBy: "Sarah Williams", date: "Aug 18, 2025" },
      { name: "Allergy Information", type: "PDF", status: "Verified", signedBy: "Dr.Martinez", date: "Aug 19, 2025" }
    ]
  },
];

// Communication/Messages Data
export const messagesData = [
  {
    id: 1,
    name: "Oliver Johnson",
    photo: "👨",
    lastMessage: "So proud of him! 😊",
    time: "12m",
    online: true,
    messages: [
      { sender: "parent", text: "Good morning! How is Emma doing today?", time: "9:30 AM" },
      { sender: "admin", text: "Good morning! Emma is doing wonderful. She's really enjoying our art activities this morning.", time: "9:35 AM" },
      { sender: "parent", text: "That's beautiful! She loves painting at home too.", time: "9:40 AM" },
      { sender: "parent", text: "Thank you for the update! Emma loved the art project today.", time: "2:15 PM" }
    ]
  },
  {
    id: 2,
    name: "Isabella Davis",
    photo: "👩",
    lastMessage: "What a fantastic job! 🎉",
    time: "11m",
    online: false,
    messages: [
      { sender: "parent", text: "Hi! I wanted to check on Sophie's lunch preferences.", time: "10:00 AM" },
      { sender: "admin", text: "Sophie has been enjoying the dairy-free options we provide.", time: "10:05 AM" }
    ]
  },
  {
    id: 3,
    name: "Liam Wilson",
    photo: "👨",
    lastMessage: "He's really growing up! ❤️",
    time: "7m",
    online: true,
    messages: [
      { sender: "parent", text: "Good afternoon! How was Noah's day?", time: "3:00 PM" },
      { sender: "admin", text: "Noah had a great day! He participated well in all activities.", time: "3:10 PM" }
    ]
  },
  {
    id: 4,
    name: "Ethan Brown",
    photo: "👨",
    lastMessage: "Look at him go! 💪",
    time: "8m",
    online: false,
    messages: [
      { sender: "parent", text: "Is Liam feeling better today?", time: "8:30 AM" },
      { sender: "admin", text: "Yes, Liam is doing much better and playing with friends.", time: "8:45 AM" }
    ]
  },
  {
    id: 5,
    name: "Mia Garcia",
    photo: "👩",
    lastMessage: "Absolutely amazing! 😍",
    time: "5m",
    online: true,
    messages: [
      { sender: "parent", text: "Thank you for taking care of Olivia!", time: "4:00 PM" },
      { sender: "admin", text: "It's our pleasure! Olivia is a joy to have in class.", time: "4:15 PM" }
    ]
  },
  {
    id: 6,
    name: "Ava Martinez",
    photo: "👩",
    lastMessage: "She's such a little star! ⭐",
    time: "9m",
    online: false,
    messages: [
      { sender: "parent", text: "Can we schedule a parent-teacher meeting?", time: "11:00 AM" },
      { sender: "admin", text: "Of course! Let me check available times and get back to you.", time: "11:30 AM" }
    ]
  }
];

// Communication/Messages Data (Old structure - keeping for backward compatibility)
export const communicationsData = [
  {
    id: 1,
    type: "announcement",
    from: "Amanda Rodriguez",
    subject: "Holiday Party Next Week",
    message: "We're hosting a winter holiday party next Friday! Please RSVP by Wednesday.",
    date: "2025-12-15",
    recipients: "All Parents"
  },
  {
    id: 2,
    type: "message",
    from: "Emily Johnson",
    to: "Amanda Rodriguez",
    subject: "Emma's Medication",
    message: "Hi Amanda, Emma will need her allergy medication at lunch today. I've sent it in her bag.",
    date: "2025-12-18",
    status: "Read"
  },
  {
    id: 3,
    type: "announcement",
    from: "Robert Lee",
    subject: "New Art Program Starting",
    message: "We're excited to introduce our new weekly art program starting January 2026!",
    date: "2025-12-14",
    recipients: "All Parents"
  },
  {
    id: 4,
    type: "message",
    from: "Michael Chen",
    to: "James Wilson",
    subject: "Sophie's Pick-up Time",
    message: "I'll be picking up Sophie 30 minutes early today for a doctor's appointment.",
    date: "2025-12-19",
    status: "Read"
  },
];

// Billing & Payment Data
export const paymentsData = [
  {
    id: 1,
    parent: "Emily Johnson",
    amount: "$1,200",
    status: "Paid",
    date: "2025-12-01",
    dueDate: "2025-12-01",
    description: "Monthly Tuition - December"
  },
  {
    id: 2,
    parent: "Michael Chen",
    amount: "$800",
    status: "Paid",
    date: "2025-12-03",
    dueDate: "2025-12-01",
    description: "Monthly Tuition - December"
  },
  {
    id: 3,
    parent: "Sarah Williams",
    amount: "$1,200",
    status: "Pending",
    date: "",
    dueDate: "2025-12-01",
    description: "Monthly Tuition - December"
  },
  {
    id: 4,
    parent: "David Martinez",
    amount: "$800",
    status: "Overdue",
    date: "",
    dueDate: "2025-11-01",
    description: "Monthly Tuition - November"
  },
  {
    id: 5,
    parent: "Jessica Brown",
    amount: "$1,200",
    status: "Paid",
    date: "2025-12-02",
    dueDate: "2025-12-01",
    description: "Monthly Tuition - December"
  },
];

// Nutrition & Activity Logs Data
// Meal Logs
export const mealLogsData = [
  { id: 1, classroom: "Dragons", childName: "Noah", mealType: "Breakfast", loggedBy: "Sophia", date: "03 Oct 2025" },
  { id: 2, classroom: "Butterflies", childName: "Ava", mealType: "Lunch", loggedBy: "Edward", date: "01 Oct 2025" },
  { id: 3, classroom: "Hawks", childName: "Mason", mealType: "Dinner", loggedBy: "Olivia", date: "07 Oct 2025" },
  { id: 4, classroom: "Foxes", childName: "Isabella", mealType: "Snack", loggedBy: "Jacob", date: "05 Oct 2025" },
  { id: 5, classroom: "Iguanas", childName: "Ethan", mealType: "Breakfast", loggedBy: "Charlotte", date: "08 Oct 2025" },
  { id: 6, classroom: "Elephants", childName: "Liam", mealType: "Brunch", loggedBy: "Emma", date: "04 Oct 2025" },
  { id: 7, classroom: "Dolphins", childName: "Mia", mealType: "Dinner", loggedBy: "Oliver", date: "02 Oct 2025" },
  { id: 8, classroom: "Giraffes", childName: "James", mealType: "Lunch", loggedBy: "Ava", date: "06 Oct 2025" },
];

// Activity & Behavior Notes
export const activityNotesData = [
  { id: 1, activity: "Circle Time", childName: "Noah", noteSummary: "Showing Lack of interest", loggedBy: "Sophia", behaviour: "Grow" },
  { id: 2, activity: "Circle Time", childName: "Ava", noteSummary: "getting angry really fast", loggedBy: "Edward", behaviour: "Grow" },
  { id: 3, activity: "Circle Time", childName: "Mason", noteSummary: "Improved focus during story time", loggedBy: "Olivia", behaviour: "Glow" },
  { id: 4, activity: "Circle Time", childName: "Isabella", noteSummary: "not participating", loggedBy: "Jacob", behaviour: "Grow" },
  { id: 5, activity: "Circle Time", childName: "Ethan", noteSummary: "Demonstrated creativity during art project", loggedBy: "Charlotte", behaviour: "Glow" },
  { id: 6, activity: "Circle Time", childName: "Liam", noteSummary: "Showed confidence during show and tell", loggedBy: "Emma", behaviour: "Glow" },
  { id: 7, activity: "Circle Time", childName: "Mia", noteSummary: "Listened attentively during circle time", loggedBy: "Oliver", behaviour: "Glow" },
  { id: 8, activity: "Circle Time", childName: "James", noteSummary: "Engaged in imaginative play with blocks", loggedBy: "Ava", behaviour: "Glow" },
];

// Incident Reports
export const incidentReportsData = [
  { id: 1, childName: "Noah", reportedBy: "Sophia", description: "Fell while running", actionsTaken: "Ice Applied", date: "03 Oct 2025" },
  { id: 2, childName: "Liam", reportedBy: "Sophia", description: "Soared into the sky", actionsTaken: "Fire Ignited", date: "15 Nov 2025" },
  { id: 3, childName: "Emma", reportedBy: "Sophia", description: "Trotted through the forest", actionsTaken: "Magic Unleashed", date: "22 Dec 2025" },
  { id: 4, childName: "Sophia", reportedBy: "Sophia", description: "Danced in the moonlight", actionsTaken: "Glow Enhanced", date: "10 Apr 2026" },
  { id: 5, childName: "Isabella", reportedBy: "Sophia", description: "Stole treasures at night", actionsTaken: "Stealth Employed", date: "29 Mar 2026" },
  { id: 6, childName: "Olivia", reportedBy: "Sophia", description: "Wrestled with shadows", actionsTaken: "Wind Blown", date: "07 Jan 2026" },
  { id: 7, childName: "Ava", reportedBy: "Sophia", description: "Sang beneath the waves", actionsTaken: "Water Embraced", date: "14 Feb 2026" },
];

// Keep old structure for backward compatibility
export const nutritionActivityData = [
  {
    id: 1,
    childName: "Emma Johnson",
    date: "2025-12-19",
    breakfast: "Oatmeal with berries",
    lunch: "Chicken nuggets, carrots, apple slices",
    snack: "Crackers and cheese",
    activities: ["Story time", "Outdoor play", "Art class"],
    napTime: "1:00 PM - 2:30 PM",
    notes: "Great day! Very engaged during art."
  },
  {
    id: 2,
    childName: "Sophie Chen",
    date: "2025-12-19",
    breakfast: "Pancakes with syrup (dairy-free)",
    lunch: "Turkey sandwich, grapes, celery sticks",
    snack: "Fruit cup",
    activities: ["Music class", "Reading corner", "Building blocks"],
    napTime: "Not applicable",
    notes: "Enjoyed music class today!"
  },
  {
    id: 3,
    childName: "Noah Williams",
    date: "2025-12-19",
    breakfast: "Cereal with milk",
    lunch: "Spaghetti, broccoli, orange slices",
    snack: "Yogurt",
    activities: ["Circle time", "Outdoor play", "Sensory play"],
    napTime: "1:00 PM - 2:00 PM",
    notes: "Used inhaler before outdoor play as precaution."
  },
];

// Calendar & Scheduling Data
// Upcoming Events
export const upcomingEventsData = [
  {
    id: 1,
    title: "Thanksgiving Break",
    type: "Holiday",
    time: "All Day",
    date: "October 27, 2025",
    badge: "Holiday",
    badgeColor: "red",
  },
  {
    id: 2,
    title: "Staff Meeting",
    type: "Meeting",
    time: "2pm",
    date: "October 29, 2025",
    badge: "Meeting",
    badgeColor: "blue",
  },
  {
    id: 3,
    title: "Zoo Field Trip",
    type: "Field Trip",
    time: "9am",
    date: "November 2, 2025",
    badge: "Field Trip",
    badgeColor: "green",
  },
];

// Lesson Plans
export const lessonPlansData = [
  {
    id: 1,
    title: "Winter Wonderland",
    week: "Week 1",
    classroom: "Preschool 1",
    activities: ["Snow art", "Winter Stories", "Ice Experiments"],
    createdBy: "Sarah",
  },
  {
    id: 2,
    title: "Winter Wonderland",
    week: "Week 1",
    classroom: "Preschool 1",
    activities: ["Snow art", "Winter Stories", "Ice Experiments"],
    createdBy: "Sarah",
  },
  {
    id: 3,
    title: "Winter Wonderland",
    week: "Week 1",
    classroom: "Preschool 1",
    activities: ["Snow art", "Winter Stories", "Ice Experiments"],
    createdBy: "Sarah",
  },
  {
    id: 4,
    title: "Winter Wonderland",
    week: "Week 1",
    classroom: "Preschool 1",
    activities: ["Snow art", "Winter Stories", "Ice Experiments"],
    createdBy: "Sarah",
  },
];

// Tour Requests
export const tourRequestsData = [
  {
    id: 1,
    name: "Noah Johnson",
    initials: "NJ",
    age: "3 years old",
    time: "2pm",
    date: "October 29, 2025",
  },
  {
    id: 2,
    name: "Noah Johnson",
    initials: "NJ",
    age: "3 years old",
    time: "2pm",
    date: "October 29, 2025",
  },
];

// Keep old structure for backward compatibility
export const calendarEvents = [
  {
    id: 1,
    title: "Winter Holiday Party",
    date: "2025-12-22",
    time: "2:00 PM - 4:00 PM",
    type: "event",
    description: "Annual winter celebration with parents and children"
  },
  {
    id: 2,
    title: "Staff Training Day",
    date: "2025-12-28",
    time: "9:00 AM - 3:00 PM",
    type: "staff",
    description: "Professional development - Center closed to students"
  },
  {
    id: 3,
    title: "New Year's Holiday",
    date: "2026-01-01",
    time: "All Day",
    type: "holiday",
    description: "Center closed"
  },
  {
    id: 4,
    title: "Parent-Teacher Conferences",
    date: "2026-01-15",
    time: "3:00 PM - 6:00 PM",
    type: "meeting",
    description: "Individual meetings scheduled throughout the day"
  },
  {
    id: 5,
    title: "Art Program Launch",
    date: "2026-01-05",
    time: "10:00 AM - 11:00 AM",
    type: "event",
    description: "First session of new weekly art program"
  },
];

// Transaction Reports (for dashboard)
export const transactionsReports = [
  { id: 1, parent: "Emily Johnson", amount: "$1,200", status: "Paid", date: "2025-12-01" },
  { id: 2, parent: "Michael Chen", amount: "$800", status: "Paid", date: "2025-12-03" },
  { id: 3, parent: "Jessica Brown", amount: "$1,200", status: "Paid", date: "2025-12-02" },
];

// Settings Data
export const settingsData = {
  centerName: "SolaraCare",
  address: "123 Sunshine Lane, Happy Valley, CA 94000",
  phone: "(555) 100-2000",
  email: "info@solaracare.com",
  operatingHours: "Monday - Friday, 7:00 AM - 6:00 PM",
  capacity: 50,
  currentEnrollment: 45,
  staffCount: 12,
};