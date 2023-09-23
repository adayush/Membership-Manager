"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import config from "@/config";

export default function EditStaff() {
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState();
  const [formData, setFormData] = useState({
    name: "",
    branch: "default",
    phone_number: "",
    email: "",
    is_active: true
  });
  const [errors, setErrors] = useState({
    name: null,
    branch: null,
    phone_number: null,
    email: null,
    is_active: null
  })

  const validate = () => {
    const newErrors = {
      name: null,
      branch: null,
      phone_number: null,
      email: null,
      is_active: null
    }

    if (!formData.name) {
      newErrors["receipt_number"] = 'Please input a name.'
    }
    if (!formData.branch) {
      newErrors["branch"] = 'Please select a branch.'
    } else if (formData.name.length < 3) {
      newErrors["name"] = 'Name is too short.'
    }
    if (!formData.phone_number) {
    } else if (formData.phone_number < 1000000000 || formData.phone_number > 9999999999) {
      newErrors["phone_number"] = 'Phone number must have 10 digits, please check'
    }
    if (!formData.is_active) {
      newErrors["is_active"] = 'Please select staff status.'
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

    fetch(`${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/staff/new`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    })
      .then(res => {
        if (res.status === 200) {
          // redirect to Home
          setFormStatus("Success");
          setTimeout(() => router.push('/staff'), 1000);
        } else {
          // failed to add student
          setFormStatus("Failed");
        }
      });
    setIsLoading(false);
  };


  return (
    <main className="p-6 sm:p-24">
      <div className="flex flex-col gap-5 m-auto max-w-sm [&>div>label]:block [&>div>label]:text-gray-800 [&>div>label]:text-sm [&>div>label]:font-medium [&>div>label]:mb-1 [&>div>input]:p-2 [&>div>input]:border-[1px] [&>div>input]:border-gray-300 [&>div>input]:rounded-sm [&>div>input]:bg-gray-100 [&>div>input]:w-full">
        <h1 className="text-xl sm:text-2xl font-medium mb-2 text-center">
          New Staff
        </h1>
        <FormStatus formStatus={formStatus} />
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
          <label>Phone Number</label>
          <input
            type="number"
            min={999999999}
            max={9999999999}
            defaultValue={formData.phone_number}
            onChange={(e) => handleChange(e, "phone_number")}
          />
          <span className="text-red-500">{errors["phone_number"]}</span>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            defaultValue={formData.email}
            onChange={(e) => handleChange(e, "email")}
          />
          <span className="text-red-500">{errors["email"]}</span>
        </div>
        <div>
          <label>Staff status</label>
          <select
            type="select"
            onChange={(e) => handleChange(e, "branch")}
            value={formData.is_active ? "true" : "false"}
            required
            className="p-2 border-[1px] border-gray-300 rounded-sm bg-gray-100 w-full"
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
          <span className="text-red-500">{errors["is_active"]}</span>
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
        <p>⏳ Loading staff data...</p>
      </div>
    )
  }
  else if (formStatus === "Success") {
    return (
      <div className="border-2 border-green-200 p-2 rounded-md text-green-500">
        <p>✅ Staff updated. Redirecting to staff dashboard...</p>
      </div>
    )
  } else {
    return (
      <div className="border-2 border-red-200 p-2 rounded-md text-red-500">
        <p>❗️ Failed updating staff data.</p>
      </div>
    );
  }
}