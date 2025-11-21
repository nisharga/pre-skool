"use client";

import { all_routes } from "@/router/all_routes";
import { usePathname } from "next/navigation";
import  { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Assuming you're using React Router

const Loader = () => {
  const routes = all_routes
  const location = usePathname();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
      

    if (location === routes.adminDashboard || location === routes.teacherDashboard 
      || location === routes.studentDashboard || location === routes.parentDashboard 
    ) {
      
      // Show the loader when navigating to a new route
      setShowLoader(true);

      // Hide the loader after 2 seconds
      const timeoutId = setTimeout(() => {
        setShowLoader(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId); // Clear the timeout when component unmounts
      };
    }else {
      setShowLoader(false)
    }
  }, [location]);

  return (
    <>
      {showLoader && <Preloader />}
      <div>
        {/* Your other content goes here */}
      </div>
    </>
  );
};

const Preloader = () => {
  return (
    <div id="global-loader">
		<div className="page-loader"></div>
	</div>
  );
};

export default Loader;
