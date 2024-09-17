import React, { useState } from 'react';
import { useRouter } from "next/router"; // Import useRouter

export default function Index() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    interface LoginResponse {
        success: boolean;
        message?: string;
      }
      

    const fakeLoginAPI = async (email: string, password: string): Promise<LoginResponse> => {
        return new Promise((resolve) => {
          setTimeout(() => {
            if (email === "admin@gmail.com" && password === "adminpassword") {
              resolve({ success: true });
            } else {
              resolve({ success: false, message: "Invalid credentials" });
            }
          }, 1000);
        });
      };

    const validateInputs = () => {
        if (!email) {
          setError("Email is required.");
          return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setError("Please enter a valid email address.");
          return false;
        }
        if (!password) {
          setError("Password is required.");
          return false;
        }
        return true;
      };
      
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
      
        if (!validateInputs()) return;
      
        try {
          const response = await fakeLoginAPI(email, password);
          if (response.success) {
            router.push("/");
          } else {
            setError(response.message);
          }
        } catch (err) {
          setError("An unexpected error occurred.");
        }
      };
  
  return (
    <div className='relative max-w-md p-4 mx-auto bg-center bg-cover'>
      <div className='flex h-screen'>
        <div className="w-full m-auto rounded-md bg-[#EFEAE3] border border-[#e9e9e9]">
          <div className='py-8 px-5'>
            <a href='javascript:void(0);' className='text-center w-full mb-5 block'>
              <span className="font-semibold text-xl tracking-tight">CyberPoint</span>
            </a>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-5">
                <label className='w-full block text-black text-sm mb-2'>Email</label>
                <input
                  type="email"
                  className="bg-white border border-[#e9e9e9] py-3 inline-block w-full px-4 text-sm focus:outline-none"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value || '')}
                  required
                />
              </div>
              <div className="form-group mb-5">
                <label className='w-full block text-black text-sm mb-2'>Password</label>
                <input
                  type="password"
                  className="bg-white border border-[#e9e9e9] py-3 inline-block w-full px-4 text-sm focus:outline-none"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value || '')}
                />
              </div>
              {error && <p className="error">{error}</p>}
              <button type="submit" className="bg-white w-full border border-[#2E2F30] rounded-full uppercase text-[#2E2F30] py-3 px-4 hover:bg-[#FF561D] hover:border-[#FF561D] hover:text-white transition duration-500">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};