import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// zipcode


const locationData = {
    "Dhaka": {
        "Dhaka": ["Dhamrai", "Dohar", "Keraniganj", "Nawabganj", "Savar"],
        "Faridpur": ["Alfadanga", "Bhanga", "Boalmari", "Charbhadrasan", "Faridpur Sadar", "Madhukhali", "Nagarkanda", "Sadarpur", "Saltha"],
        "Gazipur": ["Gazipur Sadar", "Kaliakair", "Kaliganj", "Kapasia", "Sreepur"],
        "Gopalganj": ["Gopalganj Sadar", "Kashiani", "Kotalipara", "Muksudpur", "Tungipara"],
        "Kishoreganj": ["Austagram", "Bajitpur", "Bhairab", "Hossainpur", "Itna", "Karimganj", "Katiadi", "Kuliarchar", "Kishoreganj Sadar", "Mithamain", "Nikli", "Pakundia", "Tarail"],
        "Madaripur": ["Kalkini", "Madaripur Sadar", "Rajoir", "Shibchar"],
        "Manikganj": ["Daulatpur", "Ghior", "Harirampur", "Manikganj Sadar", "Saturia", "Shivalaya", "Singair"],
        "Munshiganj": ["Gazaria", "Lohajang", "Munshiganj Sadar", "Sirajdikhan", "Sreenagar", "Tongibari"],
        "Narayanganj": ["Araihazar", "Bandar", "Narayanganj Sadar", "Rupganj", "Sonargaon"],
        "Narsingdi": ["Belabo", "Monohardi", "Narsingdi Sadar", "Palash", "Raipura", "Shibpur"],
        "Rajbari": ["Baliakandi", "Goalandaghat", "Pangsha", "Rajbari Sadar", "Kalukhali"],
        "Shariatpur": ["Bhedarganj", "Damudya", "Gosairhat", "Naria", "Shariatpur Sadar", "Zanjira"],
        "Tangail": ["Basail", "Bhuapur", "Delduar", "Dhanbari", "Ghatail", "Gopalpur", "Kalihati", "Madhupur", "Mirzapur", "Nagarpur", "Sakhipur", "Tangail Sadar"]
    },
    "Rajshahi": {
        "Bogura": ["Adamdighi", "Dhunat", "Gabtali", "Kahaloo", "Nandigram", "Sariakandi", "Shajahanpur", "Sherpur", "Shibganj", "Sonatala", "Bogura Sadar"],
        "Joypurhat": ["Akkelpur", "Joypurhat Sadar", "Kalai", "Khetlal", "Panchbibi"],
        "Naogaon": ["Atrai", "Badalgachhi", "Manda", "Dhamoirhat", "Mohadevpur", "Naogaon Sadar", "Niamatpur", "Patnitala", "Porsha", "Raninagar", "Sapahar"],
        "Natore": ["Bagatipara", "Baraigram", "Gurudaspur", "Lalpur", "Natore Sadar", "Singra"],
        "Chapainawabganj": ["Bholahat", "Gomastapur", "Nachole", "Shibganj", "Chapainawabganj Sadar"],
        "Pabna": ["Atgharia", "Bera", "Bhangura", "Chatmohar", "Faridpur", "Ishwardi", "Pabna Sadar", "Santhia", "Sujanagar"],
        "Rajshahi": ["Bagha", "Charghat", "Durgapur", "Godagari", "Mohanpur", "Paba", "Puthia", "Rajshahi Sadar", "Tanore"],
        "Sirajganj": ["Belkuchi", "Chauhali", "Kamarkhanda", "Kazipur", "Raiganj", "Shahjadpur", "Sirajganj Sadar", "Tarash", "Ullahpara"]
    },
    "Rangpur": {
        "Dinajpur": ["Birampur", "Birganj", "Biral", "Bochaganj", "Chirirbandar", "Dinajpur Sadar", "Ghoraghat", "Hakimpur", "Kaharole", "Khansama", "Nawabganj", "Parbatipur"],
        "Gaibandha": ["Fulchhari", "Gaibandha Sadar", "Gobindaganj", "Palashbari", "Sadullapur", "Saghata", "Sundarganj"],
        "Kurigram": ["Bhurungamari", "Char Rajibpur", "Chilmari", "Kurigram Sadar", "Nageshwari", "Phulbari", "Rajarhat", "Rowmari", "Ulipur"],
        "Lalmonirhat": ["Aditmari", "Hatibandha", "Kaliganj", "Lalmonirhat Sadar", "Patgram"],
        "Nilphamari": ["Dimla", "Domar", "Jaldhaka", "Kishoreganj", "Nilphamari Sadar", "Saidpur"],
        "Panchagarh": ["Atwari", "Boda", "Debiganj", "Panchagarh Sadar", "Tetulia"],
        "Rangpur": ["Badarganj", "Gangachara", "Kaunia", "Mithapukur", "Pirgachha", "Pirganj", "Rangpur Sadar", "Taraganj"],
        "Thakurgaon": ["Baliadangi", "Haripur", "Pirganj", "Ranisankail", "Thakurgaon Sadar"]
    },
    "Chattogram": {
        "Bandarban": ["Bandarban Sadar", "Thanchi", "Lama", "Ruma", "Rowangchhari", "Ali Kadam", "Naikhongchhari"],
        "Brahmanbaria": ["Brahmanbaria Sadar", "Ashuganj", "Bancharampur", "Nabinagar", "Nasirnagar", "Sarail", "Kasba", "Akhaura"],
        "Chandpur": ["Chandpur Sadar", "Faridganj", "Haimchar", "Haziganj", "Kachua", "Matlab Dakshin", "Matlab Uttar", "Shahrasti"],
        "Chattogram": ["Anwara", "Banshkhali", "Boalkhali", "Chandanaish", "Chattogram Sadar", "Fatikchhari", "Hathazari", "Lohagara", "Mirsharai", "Patiya", "Rangunia", "Raozan", "Sandwip", "Satkania", "Sitakunda"],
        "Cox's Bazar": ["Chakaria", "Cox's Bazar Sadar", "Kutubdia", "Maheshkhali", "Pekua", "Ramu", "Teknaf", "Ukhia"],
        "Cumilla": ["Barura", "Brahmanpara", "Burichang", "Chandina", "Chauddagram", "Cumilla Sadar", "Cumilla Sadar Dakshin", "Daudkandi", "Debidwar", "Homna", "Laksam", "Meghna", "Monohorgonj", "Muradnagar", "Nangalkot", "Titas"],
        "Feni": ["Chhagalnaiya", "Daganbhuiyan", "Feni Sadar", "Fulgazi", "Parshuram", "Sonagazi"],
        "Khagrachari": ["Dighinala", "Khagrachari Sadar", "Lakshmichhari", "Mahalchhari", "Manikchhari", "Matiranga", "Panchhari", "Ramgarh"],
        "Lakshmipur": ["Lakshmipur Sadar", "Raipur", "Ramganj", "Ramgati", "Kamalnagar"],
        "Noakhali": ["Begumganj", "Chatkhil", "Companiganj", "Hatiya", "Kabirhat", "Noakhali Sadar", "Senbagh", "Sonaimuri", "Subarnachar"],
        "Rangamati": ["Baghaichhari", "Barkal", "Juraichhari", "Kaptai", "Kawkhali", "Langadu", "Nannerchar", "Rajasthali", "Rangamati Sadar"]
    },
    "Sylhet": {
        "Habiganj": ["Ajmiriganj", "Bahubal", "Baniachong", "Chunarughat", "Habiganj Sadar", "Lakhai", "Madhabpur", "Nabiganj"],
        "Moulvibazar": ["Barlekha", "Juri", "Kamalganj", "Kulaura", "Moulvibazar Sadar", "Rajnagar", "Sreemangal"],
        "Sunamganj": ["Bishwamvarpur", "Chhatak", "Derai", "Dharampasha", "Dowarabazar", "Jagannathpur", "Jamalganj", "Sullah", "Sunamganj Sadar", "Shantiganj", "Tahirpur"],
        "Sylhet": ["Balaganj", "Beanibazar", "Bishwanath", "Companiganj", "Dakshin Surma", "Fenchuganj", "Golapganj", "Gowainghat", "Jaintiapur", "Kanaighat", "Osmani Nagar", "Sylhet Sadar"]
    },
    "Khulna": {
        "Bagerhat": ["Bagerhat Sadar", "Chitalmari", "Fakirhat", "Kachua", "Mollahat", "Mongla", "Morrelganj", "Rampal", "Sarankhola"],
        "Chuadanga": ["Alamdanga", "Chuadanga Sadar", "Damurhuda", "Jibannagar"],
        "Jashore": ["Abhaynagar", "Bagherpara", "Chaugachha", "Jhikargachha", "Keshabpur", "Jashore Sadar", "Manirampur", "Sharsha"],
        "Jhenaidah": ["Harinakunda", "Jhenaidah Sadar", "Kaliganj", "Kotchandpur", "Maheshpur", "Shailkupa"],
        "Khulna": ["Batiaghata", "Dacope", "Dumuria", "Dighalia", "Koyra", "Paikgachha", "Phultala", "Rupsha", "Terokhada", "Khulna Sadar"],
        "Kushtia": ["Bheramara", "Daulatpur", "Khoksa", "Kumarkhali", "Kushtia Sadar", "Mirpur"],
        "Magura": ["Magura Sadar", "Mohammadpur", "Shalikha", "Sreepur"],
        "Meherpur": ["Gangni", "Meherpur Sadar", "Mujibnagar"],
        "Narail": ["Kalia", "Lohagara", "Narail Sadar"],
        "Satkhira": ["Assasuni", "Debhata", "Kalaroa", "Kaliganj", "Satkhira Sadar", "Shyamnagar", "Tala"]
    },
    "Barisal": {
        "Barguna": ["Amtali", "Bamna", "Barguna Sadar", "Betagi", "Patharghata", "Taltali"],
        "Barisal": ["Agailjhara", "Babuganj", "Bakerganj", "Banaripara", "Barisal Sadar", "Gournadi", "Hizla", "Mehendiganj", "Muladi", "Wazirpur"],
        "Bhola": ["Bhola Sadar", "Burhanuddin", "Char Fasson", "Daulatkhan", "Lalmohan", "Manpura", "Tazumuddin"],
        "Jhalokathi": ["Jhalokathi Sadar", "Kathalia", "Nalchity", "Rajapur"],
        "Patuakhali": ["Bauphal", "Dashmina", "Galachipa", "Kalapara", "Mirzaganj", "Patuakhali Sadar", "Dumki", "Rangabali"],
        "Pirojpur": ["Bhandaria", "Kawkhali", "Mathbaria", "Nazirpur", "Nesarabad", "Pirojpur Sadar", "Zianagar"]
    },
    "Mymensingh": {
        "Jamalpur": ["Baksiganj", "Dewanganj", "Islampur", "Jamalpur Sadar", "Madarganj", "Melandaha", "Sarishabari"],
        "Mymensingh": ["Bhaluka", "Dhobaura", "Fulbaria", "Gaffargaon", "Gouripur", "Haluaghat", "Ishwarganj", "Mymensingh Sadar", "Muktagachha", "Nandail", "Phulpur", "Trishal"],
        "Netrokona": ["Atpara", "Barhatta", "Durgapur", "Khaliajuri", "Kalmakanda", "Kendua", "Madan", "Mohanganj", "Netrokona Sadar", "Purbadhala"],
        "Sherpur": ["Jhenaigati", "Nakla", "Nalitabari", "Sherpur Sadar", "Sreebardi"]
    }
}

const SignupPartTwo = () => {

    const [selectedDivision, setSelectedDivision] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [districts, setDistricts] = useState([]);
    const [upazillas, setUpazillas] = useState([]);
    const navigate = useNavigate();

    const handleDivisionChange = (e) => {
        const division = e.target.value;
        setSelectedDivision(division);
        setSelectedDistrict(''); // Reset district on division change
        setUpazillas([]); // Reset upazillas on division change
        setDistricts(Object.keys(locationData[division] || {}));
    };

    const handleDistrictChange = (e) => {
        const district = e.target.value;
        setSelectedDistrict(district);
        setUpazillas(locationData[selectedDivision][district] || []);
    };

    const handleJoin = (e) => {
        e.preventDefault()
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const gender = form.gender.value;
        const division = form.division.value;
        const district = form.district.value;
        const upazilla = form.upazilla.value;
        const localAddress = form.localAddress.value;
        const dateOfBirth = e.target.birthDay.value;

        console.log(dateOfBirth)
        const info = {firstName, lastName, email, phone, gender, division, district, upazilla, localAddress, dateOfBirth};
        navigate('/join/signUpLastPage', {state: {info}});
    }

    return (
        <div className='lg:w-[40vw] bg-transparent lg:bg-[#fdfefe33] mx-auto px-10 rounded-lg'>
            <div className='text-center mx-auto pt-5'>
                <h1 className='text-3xl lg:text-5xl font-bold text-primary font-merriweather mb-10'>GoWheels</h1>
            </div>
            <section className='mt-3'>
                <form
                    onSubmit={handleJoin}
                    className='font-nunito'>
                    <div className='flex gap-10'>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className='outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary'
                            placeholder='First Name'
                            required />
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            className='outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary'
                            placeholder='Last Name'
                            required />
                    </div>

                    <div className='mt-3 relative space-y-3'>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className='outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary'
                            placeholder='Email'
                            required />
                        <input
                            type="number"
                            name="phone"
                            id="phone"
                            className='outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary'
                            placeholder='Phone number'
                            required />
                        <div className='flex justify-between items-center'>
                            <select
                                name="gender"
                                id="gender"
                                className='outline-none w-[45%] rounded py-1 lg:py-2 px-2 text-secondary'
                                required>
                                <option defaultChecked className='text-gray-400'>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                            <input
                                type="date"
                                name="birthDay"
                                id="birthDay"
                                placeholder='Birth date'
                                className='w-[45%] outline-none rounded py-1 lg:py-2 px-2 text-secondary' />
                        </div>
                        <h3 className='text-lg font-semibold text-white'>Address:</h3>
                        <div className='flex justify-between'>
                            <select name="division" onChange={handleDivisionChange} id="division" className='outline-none w-[30%] rounded py-1 lg:py-2 px-2 text-secondary' required>
                                <option defaultChecked className='text-gray-400'>Division</option>
                                {Object.keys(locationData).map((division) => (
                                    <option key={division} value={division}>
                                        {division}
                                    </option>
                                ))}
                            </select>
                            {districts && (<select name="district" onChange={handleDistrictChange} id="district" className='outline-none w-[33%] rounded py-1 lg:py-2 px-2 text-secondary' required>
                                <option defaultChecked className='text-gray-400'>District</option>
                                {districts.map((district) => (
                                    <option key={district}>{district}</option>
                                ))}
                            </select>
                            )}
                            {upazillas && (
                                <select name='upazilla' id='upazilla' className='outline-none w-[33%] rounded py-1 lg:py-2 px-2 text-secondary' required>
                                    <option value="">Upazilla</option>
                                    {upazillas.map((upazilla) => (
                                        <option key={upazilla} value={upazilla}>
                                            {upazilla}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>
                        <div>
                            <input type="text" name="localAddress" id="localAddress" className='outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary' placeholder='Enter House/road no' required />
                        </div>
                    </div>
                    <div className='pb-10 mt-5 flex justify-between'>
                        <Link to={'/join/register-new'} className='bg-primary text-white rounded py-1 px-2 lg:px-4 font-semibold text-lg lg:text-xl'>Back</Link>
                        <button className='bg-primary text-white rounded py-1 px-2 lg:px-4 font-semibold text-lg lg:text-xl'>Next</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default SignupPartTwo;