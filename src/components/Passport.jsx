import PropTypes from "prop-types";

const Passport = ({
  firstName,
  lastName,
  otherNames,
  dob,
  placeOfBirth,
  nationality,
  sex,
  passportNumber,
  issueDate,
  expiryDate,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-6 shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Passport Information</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-gray-600 font-semibold">First Name:</p>
          <p className="text-gray-800">{firstName}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Last Name:</p>
          <p className="text-gray-800">{lastName}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Other Names:</p>
          <p className="text-gray-800">{otherNames}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Date of Birth:</p>
          <p className="text-gray-800">{dob}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Place of Birth:</p>
          <p className="text-gray-800">{placeOfBirth}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Nationality:</p>
          <p className="text-gray-800">{nationality}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Sex:</p>
          <p className="text-gray-800">{sex}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Passport Number:</p>
          <p className="text-gray-800">{passportNumber}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Date of Issue:</p>
          <p className="text-gray-800">{issueDate}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Expiry Date:</p>
          <p className="text-gray-800">{expiryDate}</p>
        </div>
        <div className="col-span-2">
          <h3 className="text-xl font-semibold mb-2">Passport Photo</h3>
          {/* Add photo component or placeholder */}
          <div className="bg-gray-200 w-48 h-64 flex justify-center items-center rounded-md">
            Passport Photo
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passport;

Passport.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  otherNames: PropTypes.string,
  photoUrl: PropTypes.string,
  dob: PropTypes.string,
  placeOfBirth: PropTypes.string,
  nationality: PropTypes.string,
  sex: PropTypes.string,
  passportNumber: PropTypes.string,
  issueDate: PropTypes.string,
  expiryDate: PropTypes.string,
};
