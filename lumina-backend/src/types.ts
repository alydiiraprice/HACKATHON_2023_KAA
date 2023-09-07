// Data storage
  // object of arrays of objects
export type data = {
  users: user[],
  badges: badge[],
  userTypes: userType[]
};

// User of app
export type user = {
  username: string,
  email: string,
  nameFirst: string,
  nameLast: string,
  password: string,
  badges: earntBadge[],
  dob: Date, // need to install
  gender: string,
  medicalInfo: medicalDataType,
  completedTasks: task[],
  userType: userType
};

// Badge
export type badge = {
  name: string,
  category: string
};

// userType package e.g. teen
export type userType = {
  name: string,
  tasks: task[]
};

// badges earnt by the user and stored as their own
export type earntBadge = {
  badge: badge,
  dateAchieved: Date
};

// medical information
export type medicalDataType = {
  asthma: boolean,
  diabetes_1: boolean,
  diabetes_2: boolean,
  hypertension: boolean,
  cardiovascular: boolean,
  obesity: boolean,
  cancer: boolean
};

// tasks that are either in/complete
// acts as a tracker
export type task = {
  name: string,
  badge: badge,
  pageURL: string
};