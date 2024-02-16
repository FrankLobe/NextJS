"use client"

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";

function Contact() {

    useEffect(() => {
        document.title = "Frank Lobe - Contact";
    }, []);

    const [errorMessages, setErrorMessages] = useState([]);

    const [city, setCity] = useState("");
    const cityChange = (event) => {
        setCity(event.target.value);
    }

    const [companyAddress, setCompanyAddress] = useState("");
    const companyAddressChange = (event) => {
        setCompanyAddress(event.target.value);
    }

    const [companyName, setCompanyName] = useState("");
    const [isCompanyNameValid, setIsCompanyNameValid] = useState(false);
    const companyNameChange = (event) => {
        setCompanyName(event.target.value);
        if (event.target.value.trim() !== "") {
            setIsCompanyNameValid(true);
          } else {
            setIsCompanyNameValid(false);
          }
    }

    const [companyWebsite, setCompanyWebsite] = useState("");
    const companyWebsiteChange = (event) => {
        setCompanyWebsite(event.target.value);
    }

    const [country, setCountry] = useState("Canada");
    const countryChange = (event) => {
        setCountry(event.target.value);

        if (event.target.value === "Canada") {
            setProvinceLabel("Province");
            setPostalCodeLabel("Postal Code");
        } else if (event.target.value === "United States") {
            setProvinceLabel("State");
            setPostalCodeLabel("ZIP Code");
        }
    }

    const [emailAddress, setEmailAddress] = useState("");
    const [isEmailAddressValid, setIsEmailAddressValid] = useState(false);
    const emailAddressChange = (event) => {
        setEmailAddress(event.target.value);
        if (event.target.value.trim() !== "") {
            setIsEmailAddressValid(true);
          } else {
            setIsEmailAddressValid(false);
          }
    }

    const [firstName, setFirstName] = useState("");
    const [isFirstNameValid, setIsFirstNameValid] = useState(false);
    const firstNameChange = (event) => {
        setFirstName(event.target.value);
        if (event.target.value.trim() !== "") {
            setIsFirstNameValid(true);
          } else {
            setIsFirstNameValid(false);
          }
    }

    const [jobPosting, setJobPosting] = useState("");
    const jobPostingChange = (event) => {
        setJobPosting(event.target.value);
    }

    const [jobType, setJobType] = useState("Progress OpenEdge 4GL/ABL Application Development");
    const jobTypeChange = (event) => {
        setJobType(event.target.value);
    }

    const [lastName, setLastName] = useState("");
    const lastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const [onlineProfile, setOnlineProfile] = useState("");
    const onlineProfileChange = (event) => {
        setOnlineProfile(event.target.value);
    }

    const [positionTitle, setPositionTitle] = useState("");
    const positionTitleChange = (event) => {
        setPositionTitle(event.target.value);
    }

    const [postalCode, setPostalCode] = useState("");
    const postalCodeChange = (event) => {
        setPostalCode(event.target.value);
    }
    const [postalCodeLabel, setPostalCodeLabel] = useState("Postal Code");

    const [province, setProvince] = useState("");
    const provinceChange = (event) => {
        setProvince(event.target.value);
    }
    const [provinceLabel, setProvinceLabel] = useState("Province");

    const [telephoneNumber, setTelephoneNumber] = useState("");
    const [isTelephoneNumberValid, setIsTelephoneNumberValid] = useState(false);
    const telephoneNumberChange = (event) => {
        setTelephoneNumber(event.target.value);
        if (event.target.value.trim() !== "") {
            setIsTelephoneNumberValid(true);
          } else {
            setIsTelephoneNumberValid(false);
          }
    }

    const [title, setTitle] = useState("");
    const titleChange = (event) => {
        setTitle(event.target.value);
    }

    const router = useRouter();

    const submitContact = async (event) => {

        event.preventDefault();

        const contactData = {
            "city": city,
            "companyAddress": companyAddress,
            "companyName": companyName,
            "companyWebsite": companyWebsite,
            "country": country,
            "emailAddress": emailAddress,
            "firstName": firstName,
            "jobPosting": jobPosting,
            "jobType": jobType,
            "lastName": lastName,
            "onlineProfile": onlineProfile,
            "positionTitle": positionTitle,
            "postalCode": postalCode,
            "province": province,
            "telephoneNumber": telephoneNumber,
            "title": title,
        };

        let errorMessages = [];

        if (firstName === "") {
            errorMessages.push("First name  is a required value.");
        }

        if (companyName === "") {
            errorMessages.push("Company name is a required value.");
        };

        if (emailAddress === "" && telephoneNumber === "") {
            errorMessages.push("Email address or telephone number is a required value.");
        };

        if (errorMessages.length !== 0) {
            setErrorMessages(errorMessages);
        }
        else {
            try {
                
                const response = await axios.post("http://127.0.0.1:8000/contact", {
                    contact: contactData
                });

                if (response.status !== 200) {
                    throw new Error("Failed to get response");
                }

                errorMessages = response.data.errorMessages;

                const contact = response.data.contact;

                localStorage.setItem("contact", JSON.stringify(contact));

                if (response.data.status === "Error") {
                    setErrorMessages(errorMessages);
                    setCity(contact.city);
                    setCompanyAddress(contact.companyAddress);
                    setCompanyName(contact.companyName);
                    setCompanyWebsite(contact.companyWebsite);
                    setCountry(contact.country);
                    setEmailAddress(contact.emailAddress);
                    setFirstName(contact.firstName);
                    setJobPosting(contact.jobPosting);
                    setJobType(contact.jobType);
                    setLastName(contact.lastName);
                    setOnlineProfile(contact.onlineProfile);
                    setPositionTitle(contact.positionTitle);
                    setPostalCode(contact.postalCode);
                    setProvince(contact.province);
                    setTelephoneNumber(contact.telephoneNumber);
                    setTitle(contact.title);
                }
                else {
                    setErrorMessages([]);
                    setCity("");
                    setCompanyAddress("");
                    setCompanyName("");
                    setCompanyWebsite("");
                    setCountry("");
                    setEmailAddress("");
                    setFirstName("");
                    setJobPosting("");
                    setJobType("");
                    setLastName("");
                    setOnlineProfile("");
                    setPositionTitle("");
                    setPostalCode("");
                    setProvince("");
                    setTelephoneNumber("");
                    setTitle("");

                    router.push(`/coverletter/${contact._id}`);
                }
            } catch (error) {
                console.error("Error posting contact:", error);
                router.push("/error");
            }
        }
    };

    return (
        <div>
            <Header PageName="Contact" />
            <div className="container p-5 shadow-lg">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <form noValidate validated="false" onSubmit={submitContact}>
                            <div id="errors">
                                {errorMessages.map((errorMessage, index) => (
                                    <p key={index} className="alert alert-danger mb-2">{errorMessage}</p>
                                ))}
                            </div>
                            <section>
                                <h4>Contact Information</h4>
                                <div className="container p-5 my-5 border">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group mb-3">
                                                <label id="firstNameLabel" htmlFor="firstName" className="form-label">First Name</label>
                                                <input id="firstName" name="firstName" type="text" className={isFirstNameValid ? "form-control is-valid" : "form-control is-invalid"} value={firstName} onChange={firstNameChange} required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group mb-3">
                                                <label id="lastNameLabel" htmlFor="lastName" className="form-label">Last Name</label>
                                                <input id="lastName" name="lastName" type="text" className="form-control is-valid" value={lastName} onChange={lastNameChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group mb-3">
                                                <label id="titleLabel" htmlFor="title" className="form-label">Title</label>
                                                <input id="title" name="title" type="text" className="form-control is-valid" value={title} onChange={titleChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group mb-3">
                                                <label id="onlineProfileLabel" htmlFor="onlineProfile" className="form-label">Online Profile</label>
                                                <input id="onlineProfile" name="onlineProfile" type="url" className="form-control is-valid" value={onlineProfile} onChange={onlineProfileChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group mb-3">
                                                <label id="emailAddressLabel" htmlFor="emailAddress" className="form-label">Email Address</label>
                                                <input id="emailAddress" name="emailAddress" type="email" className={isEmailAddressValid ? "form-control is-valid" : "form-control is-invalid"} required value={emailAddress} onChange={emailAddressChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group mb-3">
                                                <label id="telephoneNumberLabel" htmlFor="telephoneNumber" className="form-label">Telephone Number</label>
                                                <input id="telephoneNumber" name="telephoneNumber" type="tel" className={isTelephoneNumberValid ? "form-control is-valid" : "form-control is-invalid"} required value={telephoneNumber} onChange={telephoneNumberChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <h4>Company Information</h4>
                                <div className="container p-5 my-5 border">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group mb-3">
                                                <label id="companyNameLabel" htmlFor="companyName" className="form-label">Company Name</label>
                                                <input id="companyName" name="companyName" type="text" className={isCompanyNameValid ? "form-control is-valid" : "form-control is-invalid"} required value={companyName} onChange={companyNameChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group mb-3">
                                                <label id="companyWebsiteLabel" htmlFor="companyWebsite" className="form-label">Company Website</label>
                                                <input id="companyWebsite" name="companyWebsite" type="url" className="form-control is-valid" value={companyWebsite} onChange={companyWebsiteChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group mb-3">
                                                <label id="companyAddressLabel" htmlFor="companyAddress" className="form-label">Company Address</label>
                                                <input id="companyAddress" name="companyAddress" type="text" className="form-control is-valid" value={companyAddress} onChange={companyAddressChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group mb-3">
                                                <label id="cityLabel" htmlFor="city" className="form-label">City</label>
                                                <input id="city" name="city" type="text" className="form-control is-valid" value={city} onChange={cityChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="mb-3">
                                                <label id="provinceLabel" htmlFor="province" className="form-label">{provinceLabel}</label>
                                                <input id="province" name="province" type="text" className="form-control is-valid" value={province} onChange={provinceChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group mb-3">
                                                <label id="postalCodeLabel" htmlFor="postalCode" className="form-label">{postalCodeLabel}</label>
                                                <input id="postalCode" name="postalCode" type="text" className="form-control is-valid" value={postalCode} onChange={postalCodeChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group mb-3">
                                                <label id="countryLabel" htmlFor="country" className="form-label">Country</label>
                                                <select id="country" name="country" className="form-select is-valid" value={country} onChange={countryChange}>
                                                    <option>Canada</option>
                                                    <option>United States</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <h4>Job Information</h4>
                                <div className="container p-5 my-5 border">
                                    <div className="row">
                                        <div className="col-md-12 col-12">
                                            <div className="form-group mb-3">
                                                <label id="positionTitleLabel" htmlFor="positionTitle" className="form-label">Position Title</label>
                                                <input id="positionTitle" name="positionTitle" type="text" className="form-control is-valid" value={positionTitle} onChange={positionTitleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group mb-3">
                                                <label id="jobPostingLabel" htmlFor="jobPosting" className="form-label">Job Posting URL</label>
                                                <input id="jobPosting" name="jobPosting" type="url" className="form-control is-valid" value={jobPosting} onChange={jobPostingChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group mb-3">
                                                <label id="jobTypeLabel" htmlFor="jobType" className="form-label">Job Type</label>
                                                <select id="jobType" name="jobType" className="form-select is-valid" value={jobType} onChange={jobTypeChange}>
                                                <option>Progress OpenEdge 4GL/ABL Application Development</option>
                                                <option>Machine Learning Engineering</option>
                                                <option>Website Development</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <button id="submitContact" type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </div >
    );
}

export default Contact;