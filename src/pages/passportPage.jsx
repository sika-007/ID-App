import Passport from "../components/Passport";

// Note that this data can and most likely should come via the backend API
const passportData = {
  firstName: "John",
  lastName: "Doe",
  otherNames: "Patrick",
  photoUrl: "",
  dob: "01/01/1990",
  placeOfBirth: "New York, USA",
  nationality: "American",
  sex: "Male",
  passportNumber: "ABC123456",
  issueDate: "01/01/2020",
  expiryDate: "01/01/2030",
};

const passportPage = () => {
  return (
    <div className="container mx-auto mt-8 max-w-[1000px]">
      <Passport {...passportData} />
    </div>
  );
};

export default passportPage;
