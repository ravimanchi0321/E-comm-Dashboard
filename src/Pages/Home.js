import React from "react";

const Home = () => {
  // Details for the box
  const details = ['My Page', 'Dataset', 'Add Version', 'Payment'];

  return (
    <div>
      <h1>Box with Page Details</h1>

      {/* Box with details */}
      <div className="box" style={boxStyle}>
        {details.map((detail, index) => (
          <div key={index}>{detail}</div>
        ))}
      </div>
    </div>
  );
};

// Inline styles (You can also move them to a separate CSS file)
const boxStyle = {
  width: '200px',
  height: '400px',
  border: '1px solid black',
  borderRadius: '20px',
  fontSize: '15px',
  padding: '10px',
  textAlign: 'center',
  lineHeight: '5.8em',
  wordWrap: 'break-word',
  backgroundColor: '#F5F5F5' // Updated color
};

export default Home;
