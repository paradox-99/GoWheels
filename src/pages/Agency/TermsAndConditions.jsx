import { Divider } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {

    const [value, setValue] = useState(false);
    const navigate = useNavigate();

    const termsAndConditions = (e) => { setValue(e.target.checked) }

    const checkStep = (step) => {
        if (step === "forward") {
            if (value) {
                navigate("/join/agencyRegister");
            }
            else {
                toast.error("Please accept the Terms and Conditions");
            }
        }
        else {
            navigate('/join/signUpOne');
        }
    }

    return (
        <div className="max-w-7xl flex flex-col items-center justify-center mx-auto">
            <div className="mt-10 p-10 border rounded">
                <div className="mb-2">
                    <h1 className="text-2xl font-semibold text-center">GoWheels - এ এজেন্সি নিবন্ধনের জন্য শর্তাবলী</h1>
                    <p className="text-lg mt-5"><span className="font-semibold">কার্যকর তারিখ:</span> ১ জুলাই, ১০২৪</p>
                </div>
                <Divider></Divider>
                <div className="mt-4">
                    <ol className="list-inside space-y-5">
                        <li><span className="font-semibold">১. যোগ্যতা এবং নিবন্ধনের প্রয়োজনীয়তা</span>
                            <ul className="list-disc list-inside ml-10">
                                <li>এজেন্সিরা অবশ্যই আইনি ভাবে নিবন্ধিত হতে হবে এবং তাদের কার্যক্ষেত্রে লাইসেন্সধারী হতে হবে।</li>
                                <li>বৈধ ব্যবসায়িক নিবন্ধন নম্বর, টিআইএন এবং বীমা তথ্য প্রদান করতে হবে।</li>
                                <li>এজেন্সিরা সঠিক ও আপডেটেড যোগাযোগের তথ্য এবং ঠিকানা রাখতে বাধ্য থাকবে।</li>
                            </ul>
                        </li>
                        <li><span className="font-semibold">২. গাড়ির মান এবং রক্ষণাবেক্ষণ</span>
                            <ul className="list-disc list-inside ml-10">
                                <li>তালিকাভুক্ত গাড়িগুলি চালানোর উপযোগী, নিয়মিত রক্ষণাবেক্ষিত এবং সকল নিরাপত্তা বিধি মেনে চলতে হবে।</li>
                                <li>প্রতিটি গাড়িতে বৈধ বীমা থাকা বাধ্যতামূলক।</li>
                                <li>এজেন্সিগুলো নিয়মিত গাড়ির পরিদর্শন এবং রক্ষণাবেক্ষণ করতে বাধ্য থাকবে।</li>
                            </ul>
                        </li>
                        <li><span className="font-semibold">৩. মূল্য নির্ধারণ এবং পেমেন্ট নীতিমালা</span>
                            <ul className="list-disc list-inside ml-10">
                                <li>এজেন্সিরা সঠিক, প্রতিযোগিতামূলক এবং ন্যায্য ভাড়া নির্ধারণ করবে। সকল প্রযোজ্য কর ও ফি অন্তর্ভুক্ত রাখতে হবে।</li>
                                <li>কমিশন, সার্ভিস ফি এবং পেমেন্ট চক্র [আপনার প্ল্যাটফর্মের নাম] দ্বারা নির্ধারিত হবে। এজেন্সিরা এই হার মেনে চলতে সম্মত থাকবে এবং পেমেন্ট নির্দিষ্ট সময়ে গ্রহণ করবে।</li>
                            </ul>
                        </li>
                        <li><span className="font-semibold">৪. বুকিং, বাতিলকরণ এবং রিফান্ড</span>
                            <ul className="list-disc list-inside ml-10">
                                <li>এজেন্সিরা নিশ্চিত বুকিংসমূহ সম্মান করবে এবং কারণ ব্যতীত বাতিল করতে পারবে না।</li>
                                <li>এজেন্সিরা অনিবার্য বাতিলকরণের ক্ষেত্রে [আপনার প্ল্যাটফর্মের নাম] এবং গ্রাহককে অবিলম্বে অবহিত করবে।</li>
                                <li>বাতিলকরণ বা বিরোধের জন্য রিফান্ড এবং ক্ষতিপূরণ নীতিমালা প্ল্যাটফর্মের নির্দেশিকা অনুযায়ী পরিচালিত হবে।</li>
                            </ul>
                        </li>
                        <li><span className="font-semibold">৫. তথ্যের সঠিকতা এবং স্বচ্ছতা</span>
                            <ul className="list-disc list-inside ml-10">
                                <li>গাড়ির তথ্য, মূল্য এবং সেবার বিষয়ে সঠিক তথ্য সরবরাহের দায়িত্ব এজেন্সিগুলোর।</li>
                                <li>বিভ্রান্তিকর তথ্য বা লিস্টিং অথবা রিভিউ ম্যানিপুলেট করার চেষ্টা করলে শাস্তিমূলক ব্যবস্থা নেওয়া হবে বা অ্যাকাউন্ট সাময়িকভাবে স্থগিত করা হবে।</li>
                                <li>গাড়ির প্রাপ্যতা এবং মূল্যসহ সকল তথ্য বাস্তবসম্মতভাবে আপডেট রাখতে হবে।</li>
                            </ul>
                        </li>
                        <li><span className="font-semibold">৬. বীমা এবং দায়বদ্ধতা</span>
                            <ul className="list-disc list-inside ml-10">
                                <li>সকল গাড়িতে স্থানীয় বিধি অনুসারে বীমা থাকতে হবে এবং এর প্রমাণ GoWheels-এ সংরক্ষিত রাখতে হবে।।</li>
                                <li>গাড়ি ক্ষতি, চুরি, বা দুর্ঘটনার ক্ষেত্রে এজেন্সিগুলো তাদের বীমা প্রদানকারী সাথে সমন্বয় করবে।</li>
                                <li>ভাড়া চলাকালে গাড়ির ক্ষতি বা ব্যক্তিগত আঘাতের জন্য GoWheels দায়ী থাকবে না।</li>
                            </ul>
                        </li>
                        <li><span className="font-semibold">৭. গ্রাহক সেবা এবং আচরণ</span>
                            <ul className="list-disc list-inside ml-10">
                                <li>এজেন্সিগুলোকে সব গ্রাহকের প্রতি সদয়, পেশাদার এবং ন্যায্য আচরণ নিশ্চিত করতে হবে।</li>
                                <li>বৈষম্যমূলক, আপত্তিকর বা অশালীন আচরণের ক্ষেত্রে অ্যাকাউন্ট স্থগিত করা হবে।</li>
                                <li>গ্রাহকের সাথে যে কোন বিরোধ হলে GoWheels কে অবহিত করতে হবে।</li>
                            </ul>
                        </li>
                        <li><span className="font-semibold">৮. অ্যাকাউন্টের সমাপ্তি</span>
                            <ul className="list-disc list-inside ml-10">
                                <li>এজেন্সিগুলো যে কোন সময় তাদের অ্যাকাউন্ট সমাপ্ত করতে পারে, তবে কোন অসামঞ্জস্য পরিশোধ বা বিরোধ থাকলে তা নিষ্পত্তি করতে হবে।</li>
                                <li>GoWheels যে কোন শর্ত লঙ্ঘন, প্রতারণামূলক কার্যক্রম বা বারংবার অভিযোগের কারণে যে কোন অ্যাকাউন্ট স্থগিত বা সমাপ্ত করতে পারে।</li>
                                <li>অ্যাকাউন্টের সমাপ্তি এজেন্সিরা বিদ্যমান বুকিংসমূহ পূরণ থেকে অব্যাহতি পাবে না।</li>
                            </ul>
                        </li>
                        <li><span className="font-semibold">৯. শর্তাবলীর পরিবর্তন</span>
                            <ul className="list-disc list-inside ml-10">
                                <li>[আপনার প্ল্যাটফর্মের নাম] যে কোন সময় শর্তাবলী আপডেট করার অধিকার সংরক্ষণ করে। উল্লেখযোগ্য পরিবর্তনের ক্ষেত্রে এজেন্সিগুলোকে জানানো হবে এবং তাদের আপডেটেড শর্ত মেনে চলার জন্য সম্মতি জানাতে হবে।</li>
                                <li>প্ল্যাটফর্মের ব্যবহারে অগ্রসর হওয়া মানে আপডেটেড শর্তাবলী মেনে নেওয়া।</li>
                            </ul>
                        </li>
                        <li><span className="font-semibold">১০. বিচারযোগ্য আইন</span>
                            <ul className="list-disc list-inside ml-10">
                                <li>এই শর্তাবলী [আপনার বিচারিক এলাকা]-এর আইন দ্বারা পরিচালিত হবে। যে কোন বিরোধ স্থানীয় আইন অনুযায়ী নিষ্পত্তি হবে।</li>
                            </ul>
                        </li>

                    </ol>
                </div>
            </div>
            <div className="mt-16 w-full mb-10">
                <div className="text-base md:text-lg space-x-2 flex justify-center pb-3">
                    <input type="checkbox" name="terms" id="termsAndConditons" onChange={termsAndConditions} />
                    <label htmlFor="termsAndConditions"> I accept the terms and conditions</label>
                </div>
                <div className="flex justify-between py-4 text-white font-nunito font-semibold">
                    <button className="bg-primary px-5 py-2 rounded" onClick={() => checkStep("back")}>Go Back</button>
                    <button className="bg-primary px-5 py-2 rounded" onClick={() => checkStep("forward")}>Contine Registration</button>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;