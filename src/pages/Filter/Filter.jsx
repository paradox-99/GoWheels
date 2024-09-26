import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Filter = () => {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  const [upazillas, setUpazillas] = useState([]);


  const handleDivisionChange = (e) => {
    const division = e.target.value;
    setSelectedDivision(division);
    setSelectedDistrict(""); // Reset district on division change
    setUpazillas([]); // Reset upazillas on division change
    setDistricts(Object.keys(locationData[division] || {}));
  };

  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    setUpazillas(locationData[selectedDivision][district] || []);
  };

  const handleFilter = async (e) => {
    e.preventDefault();
    const form = e.target;
    const firstDate = form.firstDate.value;
    const firstTime = form.firstTime.value;
    const lastDate = form.lastDate.value;
    const lastTime = form.lastTime.value;
    const division = form.division.value;
    const district = form.district.value;
    const upazilla = form.upazilla.value;

    const filterData = {
      firstDate,
      firstTime,
      lastDate,
      lastTime,
      division,
      district,
      upazilla,
    };

    console.log(filterData);


    



  };

  const locationData = {
    Dhaka: {
      Dhaka: ["Dhamrai", "Dohar", "Keraniganj", "Nawabganj", "Savar"],
      Faridpur: [
        "Alfadanga",
        "Bhanga",
        "Boalmari",
        "Charbhadrasan",
        "Faridpur Sadar",
        "Madhukhali",
        "Nagarkanda",
        "Sadarpur",
        "Saltha",
      ],
      Gazipur: ["Gazipur Sadar", "Kaliakair", "Kaliganj", "Kapasia", "Sreepur"],
      Gopalganj: [
        "Gopalganj Sadar",
        "Kashiani",
        "Kotalipara",
        "Muksudpur",
        "Tungipara",
      ],
      Kishoreganj: [
        "Austagram",
        "Bajitpur",
        "Bhairab",
        "Hossainpur",
        "Itna",
        "Karimganj",
        "Katiadi",
        "Kuliarchar",
        "Kishoreganj Sadar",
        "Mithamain",
        "Nikli",
        "Pakundia",
        "Tarail",
      ],
      Madaripur: ["Kalkini", "Madaripur Sadar", "Rajoir", "Shibchar"],
      Manikganj: [
        "Daulatpur",
        "Ghior",
        "Harirampur",
        "Manikganj Sadar",
        "Saturia",
        "Shivalaya",
        "Singair",
      ],
      Munshiganj: [
        "Gazaria",
        "Lohajang",
        "Munshiganj Sadar",
        "Sirajdikhan",
        "Sreenagar",
        "Tongibari",
      ],
      Narayanganj: [
        "Araihazar",
        "Bandar",
        "Narayanganj Sadar",
        "Rupganj",
        "Sonargaon",
      ],
      Narsingdi: [
        "Belabo",
        "Monohardi",
        "Narsingdi Sadar",
        "Palash",
        "Raipura",
        "Shibpur",
      ],
      Rajbari: [
        "Baliakandi",
        "Goalandaghat",
        "Pangsha",
        "Rajbari Sadar",
        "Kalukhali",
      ],
      Shariatpur: [
        "Bhedarganj",
        "Damudya",
        "Gosairhat",
        "Naria",
        "Shariatpur Sadar",
        "Zanjira",
      ],
      Tangail: [
        "Basail",
        "Bhuapur",
        "Delduar",
        "Dhanbari",
        "Ghatail",
        "Gopalpur",
        "Kalihati",
        "Madhupur",
        "Mirzapur",
        "Nagarpur",
        "Sakhipur",
        "Tangail Sadar",
      ],
    },
    Rajshahi: {
      Bogura: [
        "Adamdighi",
        "Dhunat",
        "Gabtali",
        "Kahaloo",
        "Nandigram",
        "Sariakandi",
        "Shajahanpur",
        "Sherpur",
        "Shibganj",
        "Sonatala",
        "Bogura Sadar",
      ],
      Joypurhat: [
        "Akkelpur",
        "Joypurhat Sadar",
        "Kalai",
        "Khetlal",
        "Panchbibi",
      ],
      Naogaon: [
        "Atrai",
        "Badalgachhi",
        "Manda",
        "Dhamoirhat",
        "Mohadevpur",
        "Naogaon Sadar",
        "Niamatpur",
        "Patnitala",
        "Porsha",
        "Raninagar",
        "Sapahar",
      ],
      Natore: [
        "Bagatipara",
        "Baraigram",
        "Gurudaspur",
        "Lalpur",
        "Natore Sadar",
        "Singra",
      ],
      Chapainawabganj: [
        "Bholahat",
        "Gomastapur",
        "Nachole",
        "Shibganj",
        "Chapainawabganj Sadar",
      ],
      Pabna: [
        "Atgharia",
        "Bera",
        "Bhangura",
        "Chatmohar",
        "Faridpur",
        "Ishwardi",
        "Pabna Sadar",
        "Santhia",
        "Sujanagar",
      ],
      Rajshahi: [
        "Bagha",
        "Charghat",
        "Durgapur",
        "Godagari",
        "Mohanpur",
        "Paba",
        "Puthia",
        "Rajshahi Sadar",
        "Tanore",
      ],
      Sirajganj: [
        "Belkuchi",
        "Chauhali",
        "Kamarkhanda",
        "Kazipur",
        "Raiganj",
        "Shahjadpur",
        "Sirajganj Sadar",
        "Tarash",
        "Ullahpara",
      ],
    },
    Rangpur: {
      Dinajpur: [
        "Birampur",
        "Birganj",
        "Biral",
        "Bochaganj",
        "Chirirbandar",
        "Dinajpur Sadar",
        "Ghoraghat",
        "Hakimpur",
        "Kaharole",
        "Khansama",
        "Nawabganj",
        "Parbatipur",
      ],
      Gaibandha: [
        "Fulchhari",
        "Gaibandha Sadar",
        "Gobindaganj",
        "Palashbari",
        "Sadullapur",
        "Saghata",
        "Sundarganj",
      ],
      Kurigram: [
        "Bhurungamari",
        "Char Rajibpur",
        "Chilmari",
        "Kurigram Sadar",
        "Nageshwari",
        "Phulbari",
        "Rajarhat",
        "Rowmari",
        "Ulipur",
      ],
      Lalmonirhat: [
        "Aditmari",
        "Hatibandha",
        "Kaliganj",
        "Lalmonirhat Sadar",
        "Patgram",
      ],
      Nilphamari: [
        "Dimla",
        "Domar",
        "Jaldhaka",
        "Kishoreganj",
        "Nilphamari Sadar",
        "Saidpur",
      ],
      Panchagarh: ["Atwari", "Boda", "Debiganj", "Panchagarh Sadar", "Tetulia"],
      Rangpur: [
        "Badarganj",
        "Gangachara",
        "Kaunia",
        "Mithapukur",
        "Pirgachha",
        "Pirganj",
        "Rangpur Sadar",
        "Taraganj",
      ],
      Thakurgaon: [
        "Baliadangi",
        "Haripur",
        "Pirganj",
        "Ranisankail",
        "Thakurgaon Sadar",
      ],
    },
    Chattogram: {
      Bandarban: [
        "Bandarban Sadar",
        "Thanchi",
        "Lama",
        "Ruma",
        "Rowangchhari",
        "Ali Kadam",
        "Naikhongchhari",
      ],
      Brahmanbaria: [
        "Brahmanbaria Sadar",
        "Ashuganj",
        "Bancharampur",
        "Nabinagar",
        "Nasirnagar",
        "Sarail",
        "Kasba",
        "Akhaura",
      ],
      Chandpur: [
        "Chandpur Sadar",
        "Faridganj",
        "Haimchar",
        "Haziganj",
        "Kachua",
        "Matlab Dakshin",
        "Matlab Uttar",
        "Shahrasti",
      ],
      Chattogram: [
        "Anwara",
        "Banshkhali",
        "Boalkhali",
        "Chandanaish",
        "Chattogram Sadar",
        "Fatikchhari",
        "Hathazari",
        "Lohagara",
        "Mirsharai",
        "Patiya",
        "Rangunia",
        "Raozan",
        "Sandwip",
        "Satkania",
        "Sitakunda",
      ],
      "Cox's Bazar": [
        "Chakaria",
        "Cox's Bazar Sadar",
        "Kutubdia",
        "Maheshkhali",
        "Pekua",
        "Ramu",
        "Teknaf",
        "Ukhia",
      ],
      Cumilla: [
        "Barura",
        "Brahmanpara",
        "Burichang",
        "Chandina",
        "Chauddagram",
        "Cumilla Sadar",
        "Cumilla Sadar Dakshin",
        "Daudkandi",
        "Debidwar",
        "Homna",
        "Laksam",
        "Meghna",
        "Monohorgonj",
        "Muradnagar",
        "Nangalkot",
        "Titas",
      ],
      Feni: [
        "Chhagalnaiya",
        "Daganbhuiyan",
        "Feni Sadar",
        "Fulgazi",
        "Parshuram",
        "Sonagazi",
      ],
      Khagrachari: [
        "Dighinala",
        "Khagrachari Sadar",
        "Lakshmichhari",
        "Mahalchhari",
        "Manikchhari",
        "Matiranga",
        "Panchhari",
        "Ramgarh",
      ],
      Lakshmipur: [
        "Lakshmipur Sadar",
        "Raipur",
        "Ramganj",
        "Ramgati",
        "Kamalnagar",
      ],
      Noakhali: [
        "Begumganj",
        "Chatkhil",
        "Companiganj",
        "Hatiya",
        "Kabirhat",
        "Noakhali Sadar",
        "Senbagh",
        "Sonaimuri",
        "Subarnachar",
      ],
      Rangamati: [
        "Baghaichhari",
        "Barkal",
        "Juraichhari",
        "Kaptai",
        "Kawkhali",
        "Langadu",
        "Nannerchar",
        "Rajasthali",
        "Rangamati Sadar",
      ],
    },
    Sylhet: {
      Habiganj: [
        "Ajmiriganj",
        "Bahubal",
        "Baniachong",
        "Chunarughat",
        "Habiganj Sadar",
        "Lakhai",
        "Madhabpur",
        "Nabiganj",
      ],
      Moulvibazar: [
        "Barlekha",
        "Juri",
        "Kamalganj",
        "Kulaura",
        "Moulvibazar Sadar",
        "Rajnagar",
        "Sreemangal",
      ],
      Sunamganj: [
        "Bishwamvarpur",
        "Chhatak",
        "Derai",
        "Dharampasha",
        "Dowarabazar",
        "Jagannathpur",
        "Jamalganj",
        "Sullah",
        "Sunamganj Sadar",
        "Shantiganj",
        "Tahirpur",
      ],
      Sylhet: [
        "Balaganj",
        "Beanibazar",
        "Bishwanath",
        "Companiganj",
        "Dakshin Surma",
        "Fenchuganj",
        "Golapganj",
        "Gowainghat",
        "Jaintiapur",
        "Kanaighat",
        "Osmani Nagar",
        "Sylhet Sadar",
      ],
    },
    Khulna: {
      Bagerhat: [
        "Bagerhat Sadar",
        "Chitalmari",
        "Fakirhat",
        "Kachua",
        "Mollahat",
        "Mongla",
        "Morrelganj",
        "Rampal",
        "Sarankhola",
      ],
      Chuadanga: ["Alamdanga", "Chuadanga Sadar", "Damurhuda", "Jibannagar"],
      Jashore: [
        "Abhaynagar",
        "Bagherpara",
        "Chaugachha",
        "Jhikargachha",
        "Keshabpur",
        "Jashore Sadar",
        "Manirampur",
        "Sharsha",
      ],
      Jhenaidah: [
        "Harinakunda",
        "Jhenaidah Sadar",
        "Kaliganj",
        "Kotchandpur",
        "Maheshpur",
        "Shailkupa",
      ],
      Khulna: [
        "Batiaghata",
        "Dacope",
        "Dumuria",
        "Dighalia",
        "Koyra",
        "Paikgachha",
        "Phultala",
        "Rupsha",
        "Terokhada",
        "Khulna Sadar",
      ],
      Kushtia: [
        "Bheramara",
        "Daulatpur",
        "Khoksa",
        "Kumarkhali",
        "Kushtia Sadar",
        "Mirpur",
      ],
      Magura: ["Magura Sadar", "Mohammadpur", "Shalikha", "Sreepur"],
      Meherpur: ["Gangni", "Meherpur Sadar", "Mujibnagar"],
      Narail: ["Kalia", "Lohagara", "Narail Sadar"],
      Satkhira: [
        "Assasuni",
        "Debhata",
        "Kalaroa",
        "Kaliganj",
        "Satkhira Sadar",
        "Shyamnagar",
        "Tala",
      ],
    },
    Barisal: {
      Barguna: [
        "Amtali",
        "Bamna",
        "Barguna Sadar",
        "Betagi",
        "Patharghata",
        "Taltali",
      ],
      Barisal: [
        "Agailjhara",
        "Babuganj",
        "Bakerganj",
        "Banaripara",
        "Barisal Sadar",
        "Gournadi",
        "Hizla",
        "Mehendiganj",
        "Muladi",
        "Wazirpur",
      ],
      Bhola: [
        "Bhola Sadar",
        "Burhanuddin",
        "Char Fasson",
        "Daulatkhan",
        "Lalmohan",
        "Manpura",
        "Tazumuddin",
      ],
      Jhalokathi: ["Jhalokathi Sadar", "Kathalia", "Nalchity", "Rajapur"],
      Patuakhali: [
        "Bauphal",
        "Dashmina",
        "Galachipa",
        "Kalapara",
        "Mirzaganj",
        "Patuakhali Sadar",
        "Dumki",
        "Rangabali",
      ],
      Pirojpur: [
        "Bhandaria",
        "Kawkhali",
        "Mathbaria",
        "Nazirpur",
        "Nesarabad",
        "Pirojpur Sadar",
        "Zianagar",
      ],
    },
    Mymensingh: {
      Jamalpur: [
        "Baksiganj",
        "Dewanganj",
        "Islampur",
        "Jamalpur Sadar",
        "Madarganj",
        "Melandaha",
        "Sarishabari",
      ],
      Mymensingh: [
        "Bhaluka",
        "Dhobaura",
        "Fulbaria",
        "Gaffargaon",
        "Gouripur",
        "Haluaghat",
        "Ishwarganj",
        "Mymensingh Sadar",
        "Muktagachha",
        "Nandail",
        "Phulpur",
        "Trishal",
      ],
      Netrokona: [
        "Atpara",
        "Barhatta",
        "Durgapur",
        "Khaliajuri",
        "Kalmakanda",
        "Kendua",
        "Madan",
        "Mohanganj",
        "Netrokona Sadar",
        "Purbadhala",
      ],
      Sherpur: [
        "Jhenaigati",
        "Nakla",
        "Nalitabari",
        "Sherpur Sadar",
        "Sreebardi",
      ],
    },
  };

  console.log(selectedDistrict)


  return (
    <div>
      <form
        onSubmit={handleFilter}
        className="flex justify-center items-center flex-col lg:flex-row gap-4 bg-[#0000001a] py-2 lg:rounded-full rounded-lg"
      >
        <div className="flex justify-center items-center flex-col lg:flex-row rounded-full gap-5">
          <div className="px-5">
            <p>Where</p>
            <div className="flex justify-between items-center">
              <select
                name="division"
                onChange={handleDivisionChange}
                id="division"
                className="outline-none w-[30%] bg-transparent border-b-primary border-b-2 py-1 lg:py-2 px-2 text-secondary"
                required
              >
                <option defaultChecked className="text-gray-400">
                  Division
                </option>
                {Object.keys(locationData).map((division) => (
                  <option key={division} value={division}>
                    {division}
                  </option>
                ))}
              </select>
              {districts && (
                <select
                  name="district"
                  onChange={handleDistrictChange}
                  id="district"
                  className="outline-none w-[33%] bg-transparent border-b-primary py-1 lg:py-2 px-2 text-secondary border-b-2"
                  required
                >
                  <option defaultChecked className="text-gray-400">
                    District
                  </option>
                  {districts.map((district) => (
                    <option key={district}>{district}</option>
                  ))}
                </select>
              )}
              {upazillas && (
                <select
                  name="upazilla"
                  id="upazilla"
                  className="outline-none w-[33%] bg-transparent border-b-primary border-b-2 py-1 lg:py-2 px-2 text-secondary"
                  required
                >
                  <option value="">Upazilla</option>
                  {upazillas.map((upazilla) => (
                    <option key={upazilla} value={upazilla}>
                      {upazilla}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
          <div className="px-5">
            <p>From</p>
            <div className="flex justify-center items-center">
              <input
                type="date"
                name="firstDate"
                id="firstDate"
                className="outline-none w-full bg-transparent border-b-primary py-1 lg:py-2 px-2 text-secondary border-b-2 cursor-pointer"
                placeholder="firstDate"
                required
              />
              <input
                type="time"
                name="firstTime"
                id="firstTime"
                className="outline-none w-full bg-transparent border-b-primary py-1 lg:py-2 px-2 text-secondary border-b-2 cursor-pointer"
                placeholder="Address lastDate"
                required
              />
            </div>
          </div>
          <div className="px-5">
            <p>Until</p>
            <div className="flex justify-center items-center">
              <input
                type="date"
                name="lastDate"
                id="lastDate"
                className="outline-none w-full bg-transparent border-b-primary py-1 lg:py-2 px-2 text-secondary border-b-2 cursor-pointer"
                placeholder="Address lastDate"
                required
              />
              <input
                type="time"
                name="lastTime"
                id="lastTime"
                className="outline-none w-full py-1 bg-transparent border-b-primary lg:py-2 px-2 text-secondary border-b-2 cursor-pointer"
                placeholder="Address lastTime"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <button className="bg-primary hover:bg-transparent hover:border-2 border-primary hover:text-primary duration-500 active:scale-75 shadow-inner shadow-secondary border-2 p-3 text-background rounded-full font-nunito font-semibold">
            <FaSearch className="text-2xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
