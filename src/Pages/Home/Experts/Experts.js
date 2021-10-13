import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Expert from "../Expert/Expert";

const Experts = () => {
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    fetch("expertsFake.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);
  return (
    <div>
      <Row xs={1} md={4} className="g-4 mx-5">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </Row>
    </div>
  );
};

export default Experts;
