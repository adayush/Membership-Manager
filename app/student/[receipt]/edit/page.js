"use client";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import config from "@/config";

export default function EditStudent({ params }) {
  const [isFormLoaded, setIsFormLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState();
  const [formData, setFormData] = useState({
    receipt_number: null,
    branch: null,
    name: null,
    phone_number: null,
    expiry_date: null,
  });
  const [errors, setErrors] = useState({
    receipt_number: null,
    branch: null,
    name: null,
    phone_number: null,
    expiry_date: null
  })

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/student?receipt=${params.receipt}`)
      .then(response => response.json())
      .then((data) => {
        setFormData(data)
        setIsFormLoaded(true)
      })
  }, [params.receipt])

  const validate = () => {
    const newErrors = {
      receipt_number: null,
      branch: null,
      name: null,
      phone_number: null,
      expiry_date: null
    }

    if (!formData.receipt_number) {
      newErrors["receipt_number"] = 'Please input a receipt number.'
    } else if (formData.receipt_number <= 0) {
      newErrors["receipt_number"] = 'Receipt number cannot be less than 1.'
    }
    if (!formData.branch) {
      newErrors["branch"] = 'Please select a branch.'
    }
    if (!formData.name) {
      newErrors["name"] = 'Please input student name.'
    } else if (formData.name.length < 3) {
      newErrors["name"] = 'Name is too short.'
    }
    if (!formData.phone_number) {
      newErrors["phone_number"] = 'Please input phone number.'
    } else if (formData.phone_number < 1000000000 || formData.phone_number > 9999999999) {
      newErrors["phone_number"] = 'Phone number must have 10 digits, please check'
    }
    if (!formData.expiry_date) {
      newErrors["expiry_date"] = 'Please input membershp expiry date.'
    }

    let isValid = true

    for (const key in newErrors) {
      if (newErrors[key]) {
        isValid = false;
        break;
      }
    }
    setErrors(newErrors)
    return isValid;
  }

  const router = useRouter();

  const handleChange = (event, property) => {
    setFormData({
      ...formData,
      [property]: event.target.value,
    });
  };

  const handleSubmit = () => {
    if (!validate()) return;

    setIsLoading(true);

    fetch(`${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/student/edit`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    })
      .then(res => {
        if (res.status === 200) {
          // redirect to Home
          setFormStatus("Success");
          setTimeout(() => router.push('/'), 1000);
        } else {
          // failed to add student
          setFormStatus("Failed");
        }
      });
    setIsLoading(false);
  };

  if (!isFormLoaded) {
    return (
      <main className="p-6 sm:p-24">
      <div className="flex flex-col gap-5 m-auto max-w-sm [&>div>label]:block [&>div>label]:text-gray-800 [&>div>label]:text-sm [&>div>label]:font-medium [&>div>label]:mb-1 [&>div>input]:p-2 [&>div>input]:border-[1px] [&>div>input]:border-gray-300 [&>div>input]:rounded-sm [&>div>input]:bg-gray-100 [&>div>input]:w-full">
        <h1 className="text-xl sm:text-2xl font-medium mb-2 text-center">
          Edit Student
        </h1>
        <FormStatus formStatus="Loading" />
      </div>
    </main>
    )
  }

  return (
    <main className="p-6 sm:p-24">
      <div className="flex flex-col gap-5 m-auto max-w-sm [&>div>label]:block [&>div>label]:text-gray-800 [&>div>label]:text-sm [&>div>label]:font-medium [&>div>label]:mb-1 [&>div>input]:p-2 [&>div>input]:border-[1px] [&>div>input]:border-gray-300 [&>div>input]:rounded-sm [&>div>input]:bg-gray-100 [&>div>input]:w-full">
        <h1 className="text-xl sm:text-2xl font-medium mb-2 text-center">
          Edit Student
        </h1>
        <FormStatus formStatus={formStatus} />
        <div>
          <label>Receipt Number</label>
          <input
            type="number"
            autoComplete="off"
            value={formData.receipt_number}
            required
            onChange={(e) => handleChange(e, "receipt_number")}
          />
          <span className="text-red-500">{errors["receipt_number"]}</span>
        </div>
        <div>
          <label>Branch</label>
          <select
            type="select"
            onChange={(e) => handleChange(e, "branch")}
            value={formData.branch}
            required
            className="p-2 border-[1px] border-gray-300 rounded-sm bg-gray-100 w-full"
          >
            <option value="default" disabled>
              Select Branch
            </option>
            {Object.keys(config.branch_list).map(branch => (
              <option key={branch} value={branch}>{config.branch_list[branch]}</option>
            ))}
          </select>
          <span className="text-red-500">{errors["branch"]}</span>
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            autoComplete="off"
            required
            value={formData.name}
            onChange={(e) => handleChange(e, "name")}
          />
          <span className="text-red-500">{errors["name"]}</span>
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="number"
            autoComplete="off"
            min={999999999}
            max={9999999999}
            required
            value={formData.phone_number}
            onChange={(e) => handleChange(e, "phone_number")}
          />
          <span className="text-red-500">{errors["phone_number"]}</span>
        </div>
        <div>
          <label>Membership Expiry Date</label>
          <input
            type="date"
            autoComplete="off"
            required
            min={new Date().toISOString().split("T")[0]}
            value={formData.expiry_date}
            onChange={(e) => handleChange(e, "expiry_date")}
          />
          <span className="text-red-500">{errors["expiry_date"]}</span>
        </div>
        <button
          className="w-full text-center text-white text-lg rounded bg-black p-3 mt-8 hover:bg-[#fbd331] hover:text-black hover:font-semibold"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? 'Please wait' : 'Submit'}
        </button>
      </div>
    </main>
  );
}


function FormStatus({ formStatus }) {
  if (!formStatus) return;
  else if (formStatus === "Loading") {
    return (
      <div className="border-2 border-blue-200 p-2 rounded-md text-blue-500">
        <p>⏳ Loading student data...</p>
      </div>
    )
  }
  else if (formStatus === "Success") {
    return (
      <div className="border-2 border-green-200 p-2 rounded-md text-green-500">
        <p>✅ Student updated. Redirecting to home...</p>
      </div>
    )
  } else {
    return (
      <div className="border-2 border-red-200 p-2 rounded-md text-red-500">
        <p>❗️ Failed updating student data.</p>
      </div>
    );
  }
}