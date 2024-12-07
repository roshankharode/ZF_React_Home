import React, { useState, useEffect } from 'react';
import Purchasing from './Purchasing';
import Plant from './Plant';
import '../App.css';

const CopyButton = ({ text }) => (
  <button className="mailBtn" onClick={() => navigator.clipboard.writeText(text).then(
    () => alert('Copied to clipboard!'),
    (err) => console.error('Failed to copy: ', err)
  )} style={{ marginLeft: '10px' }}>
    <span className="text">Copy</span>


  </button>
);

function MailSubscription() {
  const [savedPartName, setSavedPartName] = useState('');
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const storedName = localStorage.getItem('partname');
    const formdata = localStorage.getItem('formData');

    if (formdata) {
      setFormData(JSON.parse(formdata));
    }
    setSavedPartName(storedName);
  }, []);

  const subject1 = `${formData?.partNumber || 'N/A'}, Part release notification`;
  const message1 = `This is to notify you that ${formData?.partNumber || 'N/A'}, ${savedPartName || 'N/A'}, has been ${formData?.releaseType || 'N/A'} through ${formData?.cnNumber || 'N/A'}.`;

  const subject2 = `Verify ${formData?.cnNumber || 'N/A'}, Resolve Notification`;
  const message2 = `${formData?.cnNumber || 'N/A'}, Version: A Closed, Verify State Electrical part, Manufacturer part, all documents added in Related objects of Electrical part and Manufacturer part in Windchill and Electrical part State in EDM.`;

  return (
    <div className="">
      <div className="subcription">
        <div className="">
          <div className="">
            <h4 style={{textAlign:'center'}}>Mail Subscription</h4>
            <div>
              <div>
                <strong>Subject:</strong> {subject1}
                <CopyButton className="mailBtn" text={subject1} />
              </div>
              <div>
                <strong>Message:</strong> {message1}
                <CopyButton className="mailBtn" text={message1} />
              </div>
              <br />
              <div>
                <strong>Subject:</strong> {subject2}
                <CopyButton className="mailBtn" text={subject2} />
              </div>
              <div>
                <strong>Message:</strong> {message2}
                <CopyButton className="mailBtn" text={message2} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Plant />
      </div>
      <div className="">
        <Purchasing />
      </div>
    </div>
  );
}

export default MailSubscription;
