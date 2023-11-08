import React, { useEffect, useState } from "react";

function ContainerInformation({ url }) {
  const [information, setInformation] = useState([]);

  useEffect(() => {
    const fetchInformation = async () => {
      const res = await fetch(`${url}information`);
      const data = await res.json();
      setInformation(data);
    };

    fetchInformation();
  }, [url]);

  return (
    <div className="w3-border-bottom w3-border-gray">
      {information.map(({ id, description, icon }) => {
        return (
          <p key={id}>
            <i
              className={`w3-margin-right w3-large w3-text-teal fa fa-fw fa-${icon}`}
            ></i>
            {description}
          </p>
        );
      })}
    </div>
  );
}

export default ContainerInformation;
