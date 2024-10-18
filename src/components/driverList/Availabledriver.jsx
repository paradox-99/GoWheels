
const Availabledriver = ({ driver, isLoading, refetch }) => {
    console.log(driver)

    const { firstName, lastName, image, gender, userEmail, dateOfBirth, phone} = driver || {}

    return (
        <div className="border border-primary rounded-xl px-3 py-2 flex justify-between items-center gap-2">
            <div>
                <h1>{firstName} {lastName}</h1>
                <img className="w-16 h-16 rounded-full" src={image} alt="" />

            </div>

            <div className="space-y-2 font-merriweather ">
                <h1>gender: {gender}</h1>
                <h1>email: {userEmail}</h1>
                <h1>phone: {phone}</h1>
                <h1>DOB: {dateOfBirth}</h1>
            </div>
        </div>
    );
};

export default Availabledriver;