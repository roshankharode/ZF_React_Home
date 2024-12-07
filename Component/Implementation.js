import React, { useState, useEffect } from 'react';

const CnImplementation = () => {
  const [copyNotificationVisible, setCopyNotificationVisible] = useState(false);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');

    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  const handlePartNumberChange = (e) => {
    const newPartNumber = e.target.value.trim();
    // Store the part number in localStorage
    localStorage.setItem('input1', newPartNumber);  // Save part number to localStorage
  };

  const handleCopyPartNumber = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopyNotificationVisible(true);
        setTimeout(() => setCopyNotificationVisible(false), 2000);
      })
      .catch(() => {
        console.error('Failed to copy text.');
      });
  };

  const renderTableRows = () => {
    const rows = [
      {
        no: 1,
        task: 'Electrical Part Classification Activity',
        assignee: 'Creator',
        sequence: 1,
        description: 'Electrical Part Classification Activity for part',
        tooltip: 'Tooltip content goes here.',
      },
      {
        no: 2,
        task: 'Component Engineer Review and Approval',
        assignee: 'Creator',
        sequence: 2,
        description: 'Request CE approval for part',
        tooltip: 'You have been assigned a task CA000XXXXXX, A for the change notice. Add the required information needed from CE in "Implementation Plan description" field.',
      },
      {
        no: 3,
        task: 'ECAD Library Part Creation Activity',
        assignee: 'Creator',
        sequence: 2,
        description: 'CAD Activities - PDB, CAD, 3D, Part Delivery for part',
        tooltip: 'Following activities need to be done in order to complete task ECAD Library Part Creation Activity...',
      },
      {
        no: 4,
        task: 'MCAD 3D Model Creation for Electrical Part',
        assignee: 'Creator',
        sequence: 2,
        description: '-',
        tooltip: '',
      },
      {
        no: 5,
        task: 'Engineer Review and Approval',
        assignee: 'Creator',
        sequence: 3,
        description: 'Engineer Review and Approval for part',
        tooltip: 'You have been assigned a task CA000XXXXXX, A for the change notice. Once Electrical Part Classification Activity and ECAD Library Part Creation Activity are completed...',
      },
      {
        no: 6,
        task: 'ECAD Librarian Final Review',
        assignee: 'Creator',
        sequence: 4,
        description: 'ECAD Librarian Final Review for part',
        tooltip: 'You have been assigned a task CA000XXXXXX, A for the change notice. Once Component Engineer Review and Approval, MCAD 3D Model Creation for Electrical Part...',
      },
      {
        no: 7,
        task: `MRP Update - Plant Name – ${formData?.plantName || 'Select Plant Name'}`,
        assignee: 'Geborek',
        sequence: 5,
        description: '-',
        tooltip: '',
      },
    ];

    return rows.map((row) => (
      <tr key={row.no}>
        <th scope="row">{row.no}</th>
        {/* Rendering the task column with a clickable action */}
        <td onClick={() => handleCopyPartNumber(row.task)}>
          {row.task}
        </td>
        <td>{row.assignee}</td>
        <td>{row.sequence}</td>
        <td
          onClick={() =>
            handleCopyPartNumber(
              row.description.replace('part', formData?.partNumber || 'Enter Part Number')
            )
          }
          className="description"
          data-partnumber-description={
            row.description.replace('part', formData?.partNumber || 'Enter Part Number')
          }
        >
          {row.description.replace('part', formData?.partNumber || 'Enter Part Number')}
        </td>
        <td>
          <div className="info-icon">
            ℹ️
            {/* Tooltip logic could be applied here */}
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <div className="PlanTable">
      <h5 className="heading">
        General Implementation Plan for Intent CN for Off-the-shelf Single source multiple electrical parts
        (e.g. Diode, Connector, Resistor, Power Supply, etc.)
      </h5>
      <div>
      </div>

      <div className="wholeTable">
        <table className="table table-bordered border-dark table-hover">
          <thead className="table-primary">
            <tr>
              <th scope="col">No</th>
              <th scope="col">CA Task Name</th>
              <th scope="col">Assignee</th>
              <th scope="col">Sequence</th>
              <th scope="col">ECAD Librarian action</th>
              <th scope="col">More Information</th>
            </tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
      </div>

      {copyNotificationVisible && (
        <div id="copyNotification">Copied!</div>
      )}
    </div>
  );
};

export default CnImplementation;
