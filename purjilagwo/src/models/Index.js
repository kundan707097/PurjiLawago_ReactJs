export const Register = {
  mobileNumber: '',
  user_Name: '',
  password: '',
  isDocotrsOrPatiets: false,
};

export const LoginValue = {
  emailOrPhoneNumber: '',
  password: '',
};


export const DoctorProfileData = {
  Id: 0,
  Image: "",
  Name: "",
  PhoneNumber: "",
  Email: "",
  Gender: "",
  DateOfBirth: "",
  Education: "",
  Experience: "",
  Specialization: "",
  Keywords: "",
  Description: "",
  LunchTime: "",
  AvailableTime: "",
  ConsultantFee: "",
  HouseNoStreetArea: "",
  ColonyStreetLocality: "",
  City: "",
  State: "",
  Country: "",
  Days: "",
  Pincode: "",
  ExtraPhoneNumbers: "",
  Language: "",
  HospitalName: "",
}

export const PatientProfileData = {
  id: 0,
  user_Name: "",
  profile_Picture: "",
  moblie_Number: "",
  email: "",
  patient_Address: "",
  city: "",
  state: "",
  pinCode: "",
  gender: "",
  dateOfBirth: ""

}

export const DoctorAppointmentDashboardTable = {
  Id: 0,
  StartDate: new Date(),
  EndDate: new Date(),
  Sorting: null,
  FilterText: "",
  MaxResultCount: 0,
  SkipCount: 0

}
export const PatientAppointmentDashboardTable = {
  id: 0,
  startDate: new Date(),
  endDate: new Date(),
  sorting: null,
  filterText: "",
  maxResultCount: 0,
  skipCount: 0,
}

export const AdminDashboardTable = {
  Id: 0,
  StartDate: new Date(),
  EndDate: new Date(),
  FilterText: "",
}

export const DoctorExcelInput ={
  Id:0,
  StartDate: new Date(),
  EndDate: new Date(),
  FilterText: "",
}