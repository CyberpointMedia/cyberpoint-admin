import { useState } from 'react';
import Image from 'next/image';
import UserCircleImg from '@/assets/img1.jpg';
import Layout from '../components/Layout';

export default function Index() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Layout isCollapsed={isCollapsed}>      
      <div className="flex justify-between items-center border-b shadow-md py-5 px-6 bg-white">
        <button id="toggleSidebar" onClick={toggleCollapse}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-6 h-6 text-xl">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>

        <div className="relative">
          <div className="flex items-center space-x-4 cursor-pointer" onClick={toggleDropdown}>
            {/* <img src="https://via.placeholder.com/40" alt="Admin" className="w-10 h-10 rounded-full" /> */}
            <div className="hidden md:block">
              <h4 className="font-semibold">Admin Name</h4>
              <p className="text-sm text-gray-400">Admin</p>
            </div>
            <i className="fas fa-chevron-down ml-2 hidden md:block"></i>
          </div>
          {isDropdownOpen && (
            <div id="userDropdownMenu" className="absolute right-0 w-48 bg-white text-gray-800 rounded shadow-lg">
              <a href="#" className="block px-4 py-2 hover:text-[#ff561d]">Profile</a>
              <a href="#" className="block px-4 py-2 hover:text-[#ff561d]">Settings</a>
              <a href="/login" className="block px-4 py-2 hover:text-[#ff561d]">Logout</a>
            </div>
          )}
        </div>
      </div>


      <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4 text-left">Dashboard</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                
                <div className="p-5 border border-[#ddd] bg-white rounded-[5px]">
                    <div className="flex justify-center items-center w-9 h-9 rounded-full bg-[#ff561d] mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_84_931)">
                                <path d="M16.2758 14.1194L12.9295 11.6097V6.4974C12.9295 5.98337 12.514 5.56787 12 5.56787C11.4859 5.56787 11.0704 5.98337 11.0704 6.4974V12.0745C11.0704 12.3673 11.208 12.6434 11.4422 12.8181L15.1603 15.6067C15.3276 15.7322 15.5228 15.7926 15.7171 15.7926C16.0006 15.7926 16.2794 15.6652 16.4616 15.4198C16.7703 15.0099 16.6866 14.4271 16.2758 14.1194Z" fill="white"></path>
                                <path d="M12 0C5.3828 0 0 5.3828 0 12C0 18.6172 5.3828 24 12 24C18.6172 24 24 18.6172 24 12C24 5.3828 18.6172 0 12 0ZM12 22.141C6.40898 22.141 1.85902 17.591 1.85902 12C1.85902 6.40898 6.40898 1.85902 12 1.85902C17.592 1.85902 22.141 6.40898 22.141 12C22.141 17.591 17.591 22.141 12 22.141Z" fill="white"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_84_931">
                                    <rect width="24" height="24" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <h6 className="text-sm font-normal text-black mb-2">
                        Average Article Time
                    </h6>
                    <div className="flex items-center gap-2">
                        <div className="text-3xl font-semibold text-black">
                            2
                        </div>
                        <div className="px-2 py-1 font-semibold text-sm text-[#169D5C] border border-[#169D5C] rounded-[5px]">
                            +4.4%
                            <svg className="ms-1 inline-block" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                <path d="M0.598935 5.36802L3.61731 2.16099C3.82481 1.94052 4.17519 1.94052 4.38269 2.16099L7.40108 5.36802C7.62786 5.60899 7.45703 6.00439 7.12613 6.00439L0.87391 6.00439C0.542985 6.00439 0.37216 5.60899 0.598935 5.36802Z" fill="#169D5C"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="p-5 border border-[#ddd] bg-white rounded-[5px]">
                    <div className="flex justify-center items-center w-9 h-9 rounded-full bg-[#ff561d] mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8.57174 12C9.41951 12 10.2482 11.7486 10.9531 11.2776C11.658 10.8066 12.2074 10.1371 12.5318 9.35385C12.8562 8.57059 12.941 7.70873 12.7756 6.87726C12.6101 6.04579 12.2018 5.28205 11.6023 4.68264C11.0028 4.08323 10.239 3.67506 9.40749 3.50976C8.57599 3.34446 7.71414 3.42945 6.93095 3.75398C6.14775 4.07851 5.47838 4.62801 5.00749 5.33298C4.5366 6.03794 4.28534 6.86672 4.28549 7.71449C4.28668 8.85084 4.73868 9.9403 5.54227 10.7437C6.34586 11.5472 7.43539 11.999 8.57174 12ZM8.57174 4.92824C9.12281 4.92824 9.6615 5.09165 10.1197 5.39781C10.5779 5.70397 10.935 6.13912 11.1459 6.64824C11.3568 7.15736 11.412 7.71758 11.3045 8.25806C11.1969 8.79854 10.9316 9.295 10.5419 9.68467C10.1523 10.0743 9.65579 10.3397 9.11531 10.4472C8.57483 10.5547 8.01461 10.4995 7.50549 10.2887C6.99637 10.0778 6.56122 9.72065 6.25506 9.26245C5.9489 8.80425 5.78549 8.26556 5.78549 7.71449C5.78609 6.97572 6.07983 6.26737 6.60222 5.74497C7.12462 5.22258 7.83297 4.92884 8.57174 4.92824Z" fill="white"></path>
                            <path d="M17.625 12.375C18.2554 12.375 18.8717 12.1881 19.3959 11.8378C19.9201 11.4876 20.3286 10.9897 20.5699 10.4073C20.8111 9.82487 20.8742 9.18397 20.7513 8.56565C20.6283 7.94734 20.3247 7.37938 19.8789 6.9336C19.4331 6.48782 18.8652 6.18424 18.2469 6.06125C17.6285 5.93826 16.9876 6.00138 16.4052 6.24264C15.8228 6.48389 15.3249 6.89244 14.9747 7.41662C14.6244 7.9408 14.4375 8.55707 14.4375 9.1875C14.4385 10.0326 14.7746 10.8428 15.3722 11.4403C15.9698 12.0379 16.7799 12.374 17.625 12.375ZM17.625 7.5C17.9588 7.5 18.285 7.59897 18.5625 7.7844C18.84 7.96982 19.0563 8.23337 19.184 8.54172C19.3118 8.85007 19.3452 9.18937 19.2801 9.51672C19.215 9.84406 19.0542 10.1447 18.8182 10.3807C18.5822 10.6167 18.2816 10.7775 17.9542 10.8426C17.6269 10.9077 17.2876 10.8743 16.9792 10.7465C16.6709 10.6188 16.4073 10.4025 16.2219 10.125C16.0365 9.84752 15.9375 9.52126 15.9375 9.1875C15.9379 8.74007 16.1158 8.31108 16.4322 7.9947C16.7486 7.67832 17.1776 7.5004 17.625 7.5Z" fill="white"></path>
                            <path d="M17.625 13.2524C16.8682 13.2547 16.1197 13.4093 15.4239 13.7069C14.7281 14.0046 14.0993 14.4392 13.575 14.9849C12.4322 14.0351 11.0424 13.4303 9.56845 13.2414C8.09446 13.0526 6.59716 13.2874 5.25174 13.9184C3.90633 14.5494 2.76843 15.5505 1.97121 16.8046C1.17398 18.0587 0.750391 19.5139 0.75 20.9999C0.75 21.1988 0.829018 21.3896 0.96967 21.5303C1.11032 21.6709 1.30109 21.7499 1.5 21.7499H15.645C15.8439 21.7499 16.0347 21.6709 16.1753 21.5303C16.316 21.3896 16.395 21.1988 16.395 20.9999C16.3937 20.5396 16.3518 20.0803 16.2698 19.6274H22.5C22.6989 19.6274 22.8897 19.5484 23.0303 19.4078C23.171 19.2671 23.25 19.0763 23.25 18.8774C23.2484 17.3861 22.6553 15.9563 21.6007 14.9017C20.5462 13.8472 19.1164 13.254 17.625 13.2524ZM2.29425 20.2499C2.46306 18.8121 3.1205 17.4759 4.15659 16.4649C5.19268 15.4538 6.54457 14.8292 7.98605 14.6956C9.42754 14.562 10.8712 14.9275 12.0755 15.7309C13.2797 16.5343 14.1716 17.7269 14.6017 19.1092C14.7216 19.4804 14.8047 19.8625 14.85 20.2499H2.29425ZM15.8333 18.1274C15.5398 17.3787 15.1322 16.68 14.625 16.0559C15.1463 15.4995 15.8118 15.0986 16.5475 14.898C17.2831 14.6974 18.06 14.7048 18.7916 14.9196C19.5232 15.1343 20.1809 15.5479 20.6915 16.1142C21.202 16.6806 21.5453 17.3775 21.6833 18.1274H15.8333Z" fill="white"></path>
                        </svg>
                    </div>
                    <h6 className="text-sm font-normal text-black mb-2">
                        Total Users
                    </h6>
                    <div className="flex items-center gap-2">
                        <div className="text-3xl font-semibold text-black">
                            139
                        </div>
                        <div className="px-2 py-1 font-semibold text-sm text-[#169D5C] border border-[#169D5C] rounded-[5px]">
                            +2.6%
                            <svg className="ms-1 inline-block" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                <path d="M0.598935 5.36802L3.61731 2.16099C3.82481 1.94052 4.17519 1.94052 4.38269 2.16099L7.40108 5.36802C7.62786 5.60899 7.45703 6.00439 7.12613 6.00439L0.87391 6.00439C0.542985 6.00439 0.37216 5.60899 0.598935 5.36802Z" fill="#169D5C"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="p-5 border border-[#ddd] bg-white rounded-[5px]">
                    <div className="flex justify-center items-center w-9 h-9 rounded-full bg-[#ff561d] mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_84_940)">
                                <path d="M12 13.5183C4.78889 13.5183 0.8175 16.9297 0.8175 23.1242C0.8175 23.608 1.20961 24.0001 1.69341 24.0001H22.3065C22.7903 24.0001 23.1825 23.608 23.1825 23.1242C23.1825 16.93 19.2111 13.5183 12 13.5183ZM2.60119 22.2483C2.94572 17.6167 6.10336 15.2702 12 15.2702C17.8966 15.2702 21.0543 17.6167 21.3991 22.2483H2.60119Z" fill="white"></path>
                                <path d="M12 0C8.68758 0 6.1898 2.54803 6.1898 5.92673C6.1898 9.40439 8.79623 12.2333 12 12.2333C15.2038 12.2333 17.8102 9.40439 17.8102 5.92702C17.8102 2.54803 15.3124 0 12 0ZM12 10.4818C9.76205 10.4818 7.94161 8.43853 7.94161 5.92702C7.94161 3.50775 9.64847 1.75181 12 1.75181C14.3139 1.75181 16.0584 3.54656 16.0584 5.92702C16.0584 8.43853 14.238 10.4818 12 10.4818Z" fill="white"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_84_940">
                                    <rect width="24" height="24" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <h6 className="text-sm font-normal text-black mb-2">
                        New Users
                    </h6>
                    <div className="flex items-center gap-2">
                        <div className="text-3xl font-semibold text-black">
                            90
                        </div>
                        <div className="px-2 py-1 font-semibold text-sm text-[#169D5C] border border-[#169D5C] rounded-[5px]">
                            +3.1%
                            <svg className="ms-1 inline-block" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                <path d="M0.598935 5.36802L3.61731 2.16099C3.82481 1.94052 4.17519 1.94052 4.38269 2.16099L7.40108 5.36802C7.62786 5.60899 7.45703 6.00439 7.12613 6.00439L0.87391 6.00439C0.542985 6.00439 0.37216 5.60899 0.598935 5.36802Z" fill="#169D5C"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="p-5 border border-[#ddd] bg-white rounded-[5px]">
                    <div className="flex justify-center items-center w-9 h-9 rounded-full bg-[#ff561d] mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_84_938)">
                                <path d="M18 4.80005V7.20005H19.92L13.2 13.92L8.4 9.12005L0 17.5201L1.68 19.2L8.4 12.48L13.2 17.28L21.6 8.88005V10.8H24V4.80005H18Z" fill="white"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_84_938">
                                    <rect width="24" height="24" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <h6 className="text-sm font-normal text-black mb-2">
                        Words Find
                    </h6>
                    <div className="flex items-center gap-2">
                        <div className="text-3xl font-semibold text-black">
                            7
                        </div>
                        <div className="px-2 py-1 font-semibold text-sm text-[#169D5C] border border-[#169D5C] rounded-[5px]">
                            +3.1%
                            <svg className="ms-1 inline-block" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                <path d="M0.598935 5.36802L3.61731 2.16099C3.82481 1.94052 4.17519 1.94052 4.38269 2.16099L7.40108 5.36802C7.62786 5.60899 7.45703 6.00439 7.12613 6.00439L0.87391 6.00439C0.542985 6.00439 0.37216 5.60899 0.598935 5.36802Z" fill="#169D5C"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mt-8">
                <div className="border border-[#ddd] rounded-[5px] p-4 w-full md:w-3/4 shadow-custom">
                    <div className="flex justify-between items-start mb-4">
                        <div className="">
                            <div className="total_users text-sm font-normal text-black mb-2">Total Users</div>
                            <div className="flex items-center gap-2">
                                <div className="text-3xl font-semibold text-black">
                                    139
                                </div>
                                <div className="px-2 py-1 font-semibold text-sm text-[#169D5C] border border-[#169D5C] rounded-[5px]">
                                    +2.5%
                                    <svg className="ms-1 inline-block" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                        <path d="M0.598935 5.36802L3.61731 2.16099C3.82481 1.94052 4.17519 1.94052 4.38269 2.16099L7.40108 5.36802C7.62786 5.60899 7.45703 6.00439 7.12613 6.00439L0.87391 6.00439C0.542985 6.00439 0.37216 5.60899 0.598935 5.36802Z" fill="#169D5C"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <select id="timeFilter" className="border rounded border-[#ddd] p-2 sm:w-[120px] w-24 appearance-none selectArrow">
                            <option value="365">Last Year</option>
                            <option value="30">Last 30 Days</option>
                            <option value="1">Last Day</option>
                        </select>
                    </div>
                    <canvas id="myChart" width="100%" height="542"></canvas>
                </div>
                <div className="md:w-1/4 w-full rounded-[5px] border border-[#ddd] bg-white overflow-hidden shadow-custom">
                    <div className="border-b border-[#ddd] p-4">
                        <h3 className="text-lg text-black font-medium p-p">Events &amp; News</h3>
                    </div>
                    <div className="overflow-y-scroll scrollbar bg-white">
                        <ul className="news-list p-4 space-y-4 h-[475px]">
                                    <li className="flex flex-col sm:flex-row gap-3 border-b border-[#ddd] pb-4">
                                        <div className="w-12">
                                          <Image src={UserCircleImg} alt="#" loading="lazy" />
                                        </div>
                                        <div>
                                            <div className="text-base">
                                                <span className="mr-2">
                                                    mukes@gmail.com
                                                </span>
                                                <span className="text-[13px]">
                                                    mukesh@gmail.com
                                                </span>
                                            </div>
                                            <div className="mb-1">
                                                <a href="javascript:void(0);" className="text-sm font-medium text-[#ff561d] hover:opacity-50">
                                                    Testing-post-6
                                                </a>
                                            </div>
                                            <div className="text-[#03316A] text-opacity-50 text-sm">
                                                <svg className="inline-block me-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <g clip-path="url(#clip0_84_1117)">
                                                    <path d="M2.11555 14H11.8844C12.9085 14 13.7407 13.1678 13.7407 12.1437V2.89332C13.7407 1.86925 12.9085 1.03702 11.8844 1.03702H11.1482V0.518509C11.1482 0.23332 10.9148 0 10.6296 0C10.3444 0 10.1111 0.23332 10.1111 0.518509V1.03702H3.8889V0.518509C3.8889 0.23332 3.65553 0 3.37034 0C3.08516 0 2.85183 0.23332 2.85183 0.518509V1.03702H2.11555C1.09148 1.03702 0.259247 1.86925 0.259247 2.89332V12.1437C0.259247 13.1678 1.09148 14 2.11555 14ZM1.29631 2.89332C1.29631 2.44222 1.66445 2.07408 2.11555 2.07408H2.85183V2.59259C2.85183 2.87778 3.08516 3.1111 3.37034 3.1111C3.65553 3.1111 3.88885 2.87778 3.88885 2.59259V2.07408H10.1111V2.59259C10.1111 2.87778 10.3444 3.1111 10.6296 3.1111C10.9148 3.1111 11.1481 2.87778 11.1481 2.59259V2.07408H11.8844C12.3355 2.07408 12.7036 2.44222 12.7036 2.89332V4.40741H1.29631V2.89332ZM1.29631 5.44443H12.7037V12.1437C12.7037 12.5948 12.3356 12.9629 11.8845 12.9629H2.11555C1.66445 12.9629 1.29631 12.5948 1.29631 12.1437V5.44443Z" fill="#03316A" fill-opacity="0.5"></path>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_84_1117">
                                                    <rect width="14" height="14" fill="white"></rect>
                                                    </clipPath>
                                                    </defs>
                                                </svg>
                                                Mon Jun 17 2024
                                            </div>
                                        </div>
                                    </li>
                                    
                                        
                                
                                    <li className="flex flex-col sm:flex-row gap-3 border-b border-[#ddd] pb-4">
                                        <div className="w-12">
                                            <Image src={UserCircleImg} alt="#" loading="lazy" />
                                        </div>
                                        <div>
                                            <div className="text-base">
                                                <span className="mr-2">
                                                    mukes@gmail.com
                                                </span>
                                                <span className="text-[13px]">
                                                    mukesh@gmail.com
                                                </span>
                                            </div>
                                            <div className="mb-1">
                                                <a href="javascript:void(0);" className="text-sm font-medium text-[#ff561d] hover:opacity-50">
                                                    Testing-post-5
                                                </a>
                                            </div>
                                            <div className="text-[#03316A] text-opacity-50 text-sm">
                                                <svg className="inline-block me-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <g clip-path="url(#clip0_84_1117)">
                                                    <path d="M2.11555 14H11.8844C12.9085 14 13.7407 13.1678 13.7407 12.1437V2.89332C13.7407 1.86925 12.9085 1.03702 11.8844 1.03702H11.1482V0.518509C11.1482 0.23332 10.9148 0 10.6296 0C10.3444 0 10.1111 0.23332 10.1111 0.518509V1.03702H3.8889V0.518509C3.8889 0.23332 3.65553 0 3.37034 0C3.08516 0 2.85183 0.23332 2.85183 0.518509V1.03702H2.11555C1.09148 1.03702 0.259247 1.86925 0.259247 2.89332V12.1437C0.259247 13.1678 1.09148 14 2.11555 14ZM1.29631 2.89332C1.29631 2.44222 1.66445 2.07408 2.11555 2.07408H2.85183V2.59259C2.85183 2.87778 3.08516 3.1111 3.37034 3.1111C3.65553 3.1111 3.88885 2.87778 3.88885 2.59259V2.07408H10.1111V2.59259C10.1111 2.87778 10.3444 3.1111 10.6296 3.1111C10.9148 3.1111 11.1481 2.87778 11.1481 2.59259V2.07408H11.8844C12.3355 2.07408 12.7036 2.44222 12.7036 2.89332V4.40741H1.29631V2.89332ZM1.29631 5.44443H12.7037V12.1437C12.7037 12.5948 12.3356 12.9629 11.8845 12.9629H2.11555C1.66445 12.9629 1.29631 12.5948 1.29631 12.1437V5.44443Z" fill="#03316A" fill-opacity="0.5"></path>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_84_1117">
                                                    <rect width="14" height="14" fill="white"></rect>
                                                    </clipPath>
                                                    </defs>
                                                </svg>
                                                Mon Jun 17 2024
                                            </div>
                                        </div>
                                    </li>
                                    
                                        
                                
                                    <li className="flex flex-col sm:flex-row gap-3 border-b border-[#ddd] pb-4">
                                        <div className="w-12">
                                            <Image src={UserCircleImg} alt="#" loading="lazy" />
                                        </div>
                                        <div>
                                            <div className="text-base">
                                                <span className="mr-2">
                                                    mukes@gmail.com
                                                </span>
                                                <span className="text-[13px]">
                                                    mukesh@gmail.com
                                                </span>
                                            </div>
                                            <div className="mb-1">
                                                <a href="javascript:void(0);" className="text-sm font-medium text-[#ff561d] hover:opacity-50">
                                                    Testing-post-4
                                                </a>
                                            </div>
                                            <div className="text-[#03316A] text-opacity-50 text-sm">
                                                <svg className="inline-block me-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <g clip-path="url(#clip0_84_1117)">
                                                    <path d="M2.11555 14H11.8844C12.9085 14 13.7407 13.1678 13.7407 12.1437V2.89332C13.7407 1.86925 12.9085 1.03702 11.8844 1.03702H11.1482V0.518509C11.1482 0.23332 10.9148 0 10.6296 0C10.3444 0 10.1111 0.23332 10.1111 0.518509V1.03702H3.8889V0.518509C3.8889 0.23332 3.65553 0 3.37034 0C3.08516 0 2.85183 0.23332 2.85183 0.518509V1.03702H2.11555C1.09148 1.03702 0.259247 1.86925 0.259247 2.89332V12.1437C0.259247 13.1678 1.09148 14 2.11555 14ZM1.29631 2.89332C1.29631 2.44222 1.66445 2.07408 2.11555 2.07408H2.85183V2.59259C2.85183 2.87778 3.08516 3.1111 3.37034 3.1111C3.65553 3.1111 3.88885 2.87778 3.88885 2.59259V2.07408H10.1111V2.59259C10.1111 2.87778 10.3444 3.1111 10.6296 3.1111C10.9148 3.1111 11.1481 2.87778 11.1481 2.59259V2.07408H11.8844C12.3355 2.07408 12.7036 2.44222 12.7036 2.89332V4.40741H1.29631V2.89332ZM1.29631 5.44443H12.7037V12.1437C12.7037 12.5948 12.3356 12.9629 11.8845 12.9629H2.11555C1.66445 12.9629 1.29631 12.5948 1.29631 12.1437V5.44443Z" fill="#03316A" fill-opacity="0.5"></path>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_84_1117">
                                                    <rect width="14" height="14" fill="white"></rect>
                                                    </clipPath>
                                                    </defs>
                                                </svg>
                                                Mon Jun 17 2024
                                            </div>
                                        </div>
                                    </li>
                                    
                                        
                                
                                    <li className="flex flex-col sm:flex-row gap-3 border-b border-[#ddd] pb-4">
                                        <div className="w-12">
                                            <Image src={UserCircleImg} alt="#" loading="lazy" />
                                        </div>
                                        <div>
                                            <div className="text-base">
                                                <span className="mr-2">
                                                    mukes@gmail.com
                                                </span>
                                                <span className="text-[13px]">
                                                    mukesh@gmail.com
                                                </span>
                                            </div>
                                            <div className="mb-1">
                                                <a href="javascript:void(0);" className="text-sm font-medium text-[#ff561d] hover:opacity-50">
                                                    Testing-post-3
                                                </a>
                                            </div>
                                            <div className="text-[#03316A] text-opacity-50 text-sm">
                                                <svg className="inline-block me-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <g clip-path="url(#clip0_84_1117)">
                                                    <path d="M2.11555 14H11.8844C12.9085 14 13.7407 13.1678 13.7407 12.1437V2.89332C13.7407 1.86925 12.9085 1.03702 11.8844 1.03702H11.1482V0.518509C11.1482 0.23332 10.9148 0 10.6296 0C10.3444 0 10.1111 0.23332 10.1111 0.518509V1.03702H3.8889V0.518509C3.8889 0.23332 3.65553 0 3.37034 0C3.08516 0 2.85183 0.23332 2.85183 0.518509V1.03702H2.11555C1.09148 1.03702 0.259247 1.86925 0.259247 2.89332V12.1437C0.259247 13.1678 1.09148 14 2.11555 14ZM1.29631 2.89332C1.29631 2.44222 1.66445 2.07408 2.11555 2.07408H2.85183V2.59259C2.85183 2.87778 3.08516 3.1111 3.37034 3.1111C3.65553 3.1111 3.88885 2.87778 3.88885 2.59259V2.07408H10.1111V2.59259C10.1111 2.87778 10.3444 3.1111 10.6296 3.1111C10.9148 3.1111 11.1481 2.87778 11.1481 2.59259V2.07408H11.8844C12.3355 2.07408 12.7036 2.44222 12.7036 2.89332V4.40741H1.29631V2.89332ZM1.29631 5.44443H12.7037V12.1437C12.7037 12.5948 12.3356 12.9629 11.8845 12.9629H2.11555C1.66445 12.9629 1.29631 12.5948 1.29631 12.1437V5.44443Z" fill="#03316A" fill-opacity="0.5"></path>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_84_1117">
                                                    <rect width="14" height="14" fill="white"></rect>
                                                    </clipPath>
                                                    </defs>
                                                </svg>
                                                Mon Jun 17 2024
                                            </div>
                                        </div>
                                    </li>
                                    
                                        
                                
                                    <li className="flex flex-col sm:flex-row gap-3 border-b border-[#ddd] pb-4">
                                        <div className="w-12">
                                            <Image src={UserCircleImg} alt="#" loading="lazy" />
                                        </div>
                                        <div>
                                            <div className="text-base">
                                                <span className="mr-2">
                                                    mukes@gmail.com
                                                </span>
                                                <span className="text-[13px]">
                                                    mukesh@gmail.com
                                                </span>
                                            </div>
                                            <div className="mb-1">
                                                <a href="javascript:void(0);" className="text-sm font-medium text-[#ff561d] hover:opacity-50">
                                                    Testing-post-2
                                                </a>
                                            </div>
                                            <div className="text-[#03316A] text-opacity-50 text-sm">
                                                <svg className="inline-block me-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <g clip-path="url(#clip0_84_1117)">
                                                    <path d="M2.11555 14H11.8844C12.9085 14 13.7407 13.1678 13.7407 12.1437V2.89332C13.7407 1.86925 12.9085 1.03702 11.8844 1.03702H11.1482V0.518509C11.1482 0.23332 10.9148 0 10.6296 0C10.3444 0 10.1111 0.23332 10.1111 0.518509V1.03702H3.8889V0.518509C3.8889 0.23332 3.65553 0 3.37034 0C3.08516 0 2.85183 0.23332 2.85183 0.518509V1.03702H2.11555C1.09148 1.03702 0.259247 1.86925 0.259247 2.89332V12.1437C0.259247 13.1678 1.09148 14 2.11555 14ZM1.29631 2.89332C1.29631 2.44222 1.66445 2.07408 2.11555 2.07408H2.85183V2.59259C2.85183 2.87778 3.08516 3.1111 3.37034 3.1111C3.65553 3.1111 3.88885 2.87778 3.88885 2.59259V2.07408H10.1111V2.59259C10.1111 2.87778 10.3444 3.1111 10.6296 3.1111C10.9148 3.1111 11.1481 2.87778 11.1481 2.59259V2.07408H11.8844C12.3355 2.07408 12.7036 2.44222 12.7036 2.89332V4.40741H1.29631V2.89332ZM1.29631 5.44443H12.7037V12.1437C12.7037 12.5948 12.3356 12.9629 11.8845 12.9629H2.11555C1.66445 12.9629 1.29631 12.5948 1.29631 12.1437V5.44443Z" fill="#03316A" fill-opacity="0.5"></path>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_84_1117">
                                                    <rect width="14" height="14" fill="white"></rect>
                                                    </clipPath>
                                                    </defs>
                                                </svg>
                                                Mon Jun 17 2024
                                            </div>
                                        </div>
                                    </li>
                                    
                                        
                        </ul>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto border rounded-[5px] border-[#ddd] bg-white mt-8">
                <h2 className="text-lg font-medium text-black px-4 my-5">User Activity Details</h2>
                <table className="w-full min-w-full divide-y divide-gray-200 sm:rounded-lg UserActivitiyDetails">
                    <thead className="text-left bg-white">
                        <tr className="">
                            <th scope="col" className="px-4 py-3 bg-white">Id</th>
                            <th scope="col" className="px-4 py-3 bg-white">User name</th>
                            <th scope="col" className="px-4 py-3 bg-white">Ip</th>
                            <th scope="col" className="px-4 py-3 bg-white">Location</th>
                            <th scope="col" className="px-4 py-3 bg-white">Action</th>
                            <th scope="col" className="px-4 py-3 bg-white">Timestamp</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        
                            <tr className="bg-white">
                                <th scope="row" className="px-4 py-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                    1
                                </th>
                                <td className="px-4 py-4">
                                    Guest
                                </td>
                                <td className="px-4 py-4">
                                    ::1
                                </td>
                                <td className="px-4 py-4">
                                    Unknown
                                </td>
                                <td className="px-4 py-4">
                                    <a href="javascript:void(0);" className="text-[#007bff] hover:opacity-50">
                                        Login
                                    </a>
                                </td>
                                <td className="px-4 py-4">
                                    17/9/2024, 9:50:05 am
                                </td>
                            </tr>
                            
                            <tr className="bg-white">
                                <th scope="row" className="px-4 py-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                    2
                                </th>
                                <td className="px-4 py-4">
                                    
                                </td>
                                <td className="px-4 py-4">
                                    ::1
                                </td>
                                <td className="px-4 py-4">
                                    Unknown
                                </td>
                                <td className="px-4 py-4">
                                    <a href="javascript:void(0);" className="text-[#007bff] hover:opacity-50">
                                        Logout
                                    </a>
                                </td>
                                <td className="px-4 py-4">
                                    17/9/2024, 9:49:57 am
                                </td>
                            </tr>
                            
                            <tr className="bg-white">
                                <th scope="row" className="px-4 py-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                    3
                                </th>
                                <td className="px-4 py-4">
                                    Guest
                                </td>
                                <td className="px-4 py-4">
                                    ::1
                                </td>
                                <td className="px-4 py-4">
                                    Unknown
                                </td>
                                <td className="px-4 py-4">
                                    <a href="javascript:void(0);" className="text-[#007bff] hover:opacity-50">
                                        Login
                                    </a>
                                </td>
                                <td className="px-4 py-4">
                                    17/9/2024, 9:48:57 am
                                </td>
                            </tr>
                            
                            <tr className="bg-white">
                                <th scope="row" className="px-4 py-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                    4
                                </th>
                                <td className="px-4 py-4">
                                    Guest
                                </td>
                                <td className="px-4 py-4">
                                    ::1
                                </td>
                                <td className="px-4 py-4">
                                    Unknown
                                </td>
                                <td className="px-4 py-4">
                                    <a href="javascript:void(0);" className="text-[#007bff] hover:opacity-50">
                                        Login
                                    </a>
                                </td>
                                <td className="px-4 py-4">
                                    18/6/2024, 9:24:28 am
                                </td>
                            </tr>
                            
                            <tr className="bg-white">
                                <th scope="row" className="px-4 py-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                    5
                                </th>
                                <td className="px-4 py-4">
                                    Guest
                                </td>
                                <td className="px-4 py-4">
                                    ::1
                                </td>
                                <td className="px-4 py-4">
                                    Unknown
                                </td>
                                <td className="px-4 py-4">
                                    <a href="javascript:void(0);" className="text-[#007bff] hover:opacity-50">
                                        Login
                                    </a>
                                </td>
                                <td className="px-4 py-4">
                                    17/6/2024, 5:58:14 pm
                                </td>
                            </tr>
                            
                            <tr className="bg-white">
                                <th scope="row" className="px-4 py-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                    6
                                </th>
                                <td className="px-4 py-4">
                                    admin@gmail.com
                                </td>
                                <td className="px-4 py-4">
                                    ::1
                                </td>
                                <td className="px-4 py-4">
                                    Unknown
                                </td>
                                <td className="px-4 py-4">
                                    <a href="javascript:void(0);" className="text-[#007bff] hover:opacity-50">
                                        Logout
                                    </a>
                                </td>
                                <td className="px-4 py-4">
                                    17/6/2024, 5:57:39 pm
                                </td>
                            </tr>
                            
                            <tr className="bg-white">
                                <th scope="row" className="px-4 py-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                    7
                                </th>
                                <td className="px-4 py-4">
                                    Guest
                                </td>
                                <td className="px-4 py-4">
                                    ::1
                                </td>
                                <td className="px-4 py-4">
                                    Unknown
                                </td>
                                <td className="px-4 py-4">
                                    <a href="javascript:void(0);" className="text-[#007bff] hover:opacity-50">
                                        Login
                                    </a>
                                </td>
                                <td className="px-4 py-4">
                                    17/6/2024, 5:57:30 pm
                                </td>
                            </tr>
                            
                            <tr className="bg-white">
                                <th scope="row" className="px-4 py-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                    8
                                </th>
                                <td className="px-4 py-4">
                                    mukes@gmail.com
                                </td>
                                <td className="px-4 py-4">
                                    ::1
                                </td>
                                <td className="px-4 py-4">
                                    Unknown
                                </td>
                                <td className="px-4 py-4">
                                    <a href="javascript:void(0);" className="text-[#007bff] hover:opacity-50">
                                        Logout
                                    </a>
                                </td>
                                <td className="px-4 py-4">
                                    17/6/2024, 5:57:13 pm
                                </td>
                            </tr>
                            
                            <tr className="bg-white">
                                <th scope="row" className="px-4 py-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                    9
                                </th>
                                <td className="px-4 py-4">
                                    Guest
                                </td>
                                <td className="px-4 py-4">
                                    ::1
                                </td>
                                <td className="px-4 py-4">
                                    Unknown
                                </td>
                                <td className="px-4 py-4">
                                    <a href="javascript:void(0);" className="text-[#007bff] hover:opacity-50">
                                        Login
                                    </a>
                                </td>
                                <td className="px-4 py-4">
                                    17/6/2024, 4:26:23 pm
                                </td>
                            </tr>
                            
                            <tr className="bg-white">
                                <th scope="row" className="px-4 py-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                    10
                                </th>
                                <td className="px-4 py-4">
                                    Guest
                                </td>
                                <td className="px-4 py-4">
                                    ::1
                                </td>
                                <td className="px-4 py-4">
                                    Unknown
                                </td>
                                <td className="px-4 py-4">
                                    <a href="javascript:void(0);" className="text-[#007bff] hover:opacity-50">
                                        Login
                                    </a>
                                </td>
                                <td className="px-4 py-4">
                                    17/6/2024, 4:13:07 pm
                                </td>
                            </tr>
                            
                    </tbody>
                </table>
            </div>
        </div>
    </Layout>
  );
}
