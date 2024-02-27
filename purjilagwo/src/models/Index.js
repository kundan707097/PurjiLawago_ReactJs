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


export const DoctorProfileData ={
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
}

export const PatientProfileData = {
  id : 0,
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

export const DoctorAppointmentDashboardTable ={
  bookingId: 0,
  time: "",
  patientName: "",
  phoneNumber: "",
  status: "",
  pagePerRow: 0,
  totalPateint: 0,
  thisMonth: 0,
  totalBooking: 0,
  totalPending: 0,
  totalCancel: 0,
}