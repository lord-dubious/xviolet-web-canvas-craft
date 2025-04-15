
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the Dashboard page
    navigate('/');
  }, [navigate]);

  return <div>Redirecting to Dashboard...</div>;
};

export default Index;
