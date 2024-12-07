import React, { useState, useEffect } from 'react';

// Sample data (you can add more data as required)
const data = [
    { id: 1, name: 'RES, THNF', std: 'A0009F4036;ZFN 9003;ZFN 1160;A0009A0082;A0009A0114;A0009A0055' },
    { id: 2, name: 'RES, THKF', std: 'A0009F4036;ZFN 9003;ZFN 1160;A0009A0082;A0009A0114;A0009A0055' },
    { id: 3, name: '', std: 'A0009F4036;ZFN 9003;ZFN 1160;A0009A0082;A0009A0114;A0009A0055' },
    { id: 4, name: 'RES, MELFS', std: 'A0009F4036;ZFN 9003;ZFN 1160;A0009A0082;A0009A0114;A0009A0055' },
    { id: 5, name: 'RES, SHUNT', std: 'A0009F4036;ZFN 9003;ZFN 1160;A0009A0082;A0009A0114;A0009A0055' },
    { id: 6, name: 'RES, SPECIALTY', std: 'A0009F4036;ZFN 9003;ZFN 1160;A0009A0082;A0009A0114;A0009A0055' },
    { id: 7, name: 'RES, VAR MECH', std: 'A0009F4041;ZFN 9003;ZFN 1160;A0009A0082;A0009A0119;A0009A0055' },
    { id: 8, name: 'RES, NETWORK', std: 'A0009F4037;ZFN 9003;ZFN 1160;A0009A0082;A0009A0131;A0009A0055' },
    { id: 9, name: 'RES, THERM', std: 'A0009F4039;ZFN 9003;ZFN 1160;A0009A0082;A0009A0130;A0009A0055' },
    { id: 10, name: 'RES, VAR', std: 'A0009F4041;ZFN 9003;ZFN 1160;A0009A0082;A0009A0119;A0009A0055' },
    { id: 11, name: 'Resistor Dual Source', std: 'A0024Y1689;ZFN 9003;ZFN 1160;A0024Y3147;A0009A0114;A0009A0055' },
    { id: 12, name: 'CAP, CERM', std: 'A0009F4013;ZFN 9003;ZFN 1160;A0009A0082;A0009A0103;A0009A0055' },
    { id: 13, name: 'CAP, ALIC', std: 'A0009F4015;ZFN 9003;ZFN 1160;A0009A0082;A0009A0107;A0009A0055' },
    { id: 14, name: 'CAP, CERM-ARRAY', std: 'A0009F4014;ZFN 9003;ZFN 1160;A0009A0082;A0009A0131;A0009A0055' },
    { id: 15, name: 'CAP, FILM', std: 'A0009F4018;ZFN 9003;ZFN 1160;A0009A0082;A0009A0126;A0009A0055' },
    { id: 16, name: 'CAP, TANT', std: 'A0009F4015;ZFN 9003;ZFN 1160;A0009A0082;A0009A0107;A0009A0055' },
    { id: 17, name: 'STD TERM CAP-(TDK)', std: 'No Standard notes spec sheet to be added, add dummy document if working through EPR to avoid resubmit task' },
    { id: 18, name: 'FLEX TERM CAP-(TDK)', std: 'No Standard notes spec sheet to be added, add dummy document if working through EPR to avoid resubmit task' },
    { id: 19, name: 'Capacitor Dual Source', std: 'A0024Y1690;ZFN 9003;ZFN 1160;A0024Y3147;A0009A0103;A0009A0055' },
    { id: 20, name: 'STD TERM CAP-(TDK) - Dual Source', std: 'No Standard notes spec sheet to be added, add dummy document if working through EPR to avoid resubmit task' },
    { id: 21, name: 'FLEX TERM CAP-(TDK) - Dual Source', std: 'No Standard notes spec sheet to be added, add dummy document if working through EPR to avoid resubmit task' },
    { id: 22, name: 'DIODE, RECT', std: 'A0009F4023;ZFN 9003;ZFN 1160;A0009A0082;A0009A0094;A0009A0055' },
    { id: 23, name: 'DIODE, STKY ', std: 'A0009F4023;ZFN 9003;ZFN 1160;A0009A0082;A0009A0094;A0009A0055' },
    { id: 24, name: 'DIODE, SWTG', std: 'A0009F4023;ZFN 9003;ZFN 1160;A0009A0082;A0009A0094;A0009A0055' },
    { id: 25, name: 'DIODE, ZNR', std: 'A0009F4023;ZFN 9003;ZFN 1160;A0009A0082;A0009A0094;A0009A0055' },
    { id: 26, name: 'DIODE, OTHERS', std: 'A0009F4023;ZFN 9003;ZFN 1160;A0009A0082;A0009A0094;A0009A0055' },
    { id: 27, name: 'IND, CHIP', std: 'A0009F4034;ZFN 9003;ZFN 1160;A0009A0082;A0009A0110;A0009A0055' },
    { id: 28, name: 'IND, PWR', std: 'A0009F4034;ZFN 9003;ZFN 1160;A0009A0082;A0009A0110;A0009A0055' },
    { id: 29, name: 'IND, VAR', std: 'A0009F4034;ZFN 9003;ZFN 1160;A0009A0082;A0009A0110;A0009A0055' },
    { id: 30, name: 'TRANSIENT PROTECTOR, TVS', std: 'A0009F4023;ZFN 9003;ZFN 1160;A0009A0082;A0009A0094;A0009A0055' },
    { id: 31, name: 'TRANSIENT PROTECTOR, VARISTOR', std: 'A0009F4046;ZFN 9003;ZFN 1160;A0009A0082;A0009A0101;A0009A0055' },
    { id: 32, name: 'COIL, IND', std: 'A0009N6780;ZFN 9003;ZFN 1160;A0009A0082;A0009A0110;A0009A0055' },
    { id: 33, name: 'TRANS, BIPOLAR', std: 'A0009F4047;ZFN 9003;ZFN 1160;A0009A0082;A0009A0094;A0009A0055' },
    { id: 34, name: 'TRANS, BIAS-RES', std: 'A0009F4047;ZFN 9003;ZFN 1160;A0009A0082;A0009A0094;A0009A0055' },
    { id: 35, name: 'TRANS, HIGH-FREQ ', std: 'A0009F4047;ZFN 9003;ZFN 1160;A0009A0082;A0009A0094;A0009A0055' },
    { id: 36, name: 'TRANS, DARLINGTON', std: 'A0009F4047;ZFN 9003;ZFN 1160;A0009A0082;A0009A0094;A0009A0055' },
    { id: 37, name: 'TRANS, MISC', std: 'A0009F4047;ZFN 9003;ZFN 1160;A0009A0082;A0009A0094;A0009A0055' },
    { id: 38, name: 'TRANS, MOSFET', std: 'A0009F4047;ZFN 9003;ZFN 1160;A0009A0082;A0009A0094;A0009A0055' },
    { id: 39, name: 'TRANS, JFET', std: 'A0009F4047;ZFN 9003;ZFN 1160;A0009A0082;A0009A0094;A0009A0055' },
    { id: 40, name: 'TRANS, IGBT', std: 'A0009F4047;ZFN 9003;ZFN 1160;A0009A0082;A0009A0094;A0009A0055' },
    { id: 41, name: 'IC, ADC', std: 'A0009F4028;ZFN 9003;ZFN 1160;A0009A0082;A0009A0085;A0009A0055' },
    { id: 42, name: 'IC, ASICS', std: 'A0009F4031;ZFN 9003;ZFN 1160;A0009A0082;A0009A0086;A0009A0055' },
    { id: 43, name: 'IC, AMP MISC', std: 'A0009F4028;ZFN 9003;ZFN 1160;A0009A0082;A0009A0085;A0009A0055' },
    { id: 44, name: 'IC, ANALOG-CHANNEL', std: 'A0009F4028;ZFN 9003;ZFN 1160;A0009A0082;A0009A0085;A0009A0055' },
    { id: 45, name: 'IC, COMPARATOR', std: 'A0009F4028;ZFN 9003;ZFN 1160;A0009A0082;A0009A0085;A0009A0055' },
    { id: 46, name: 'IC, DAC', std: 'A0009F4028;ZFN 9003;ZFN 1160;A0009A0082;A0009A0085;A0009A0055' },
    { id: 47, name: 'IC, INTERFACE-COMM', std: 'A0009F4028;ZFN 9003;ZFN 1160;A0009A0082;A0009A0085;A0009A0055' },
    { id: 48, name: 'IC, DIGITAL-LOGIC', std: 'A0009F4028;ZFN 9003;ZFN 1160;A0009A0082;A0009A0085;A0009A0055' },
    { id: 49, name: 'IC, MICROPROCESSOR', std: 'A0009F4028;ZFN 9003;ZFN 1160;A0009A0082;A0009A0085;A0009A0055' },
    { id: 50, name: 'IC, MICRO BLANK', std: 'A0009F4028;ZFN 9003;ZFN 1160;A0009A0082;A0009A0085;A0009A0055' },
    { id: 51, name: 'IC, MICRO PROG', std: 'A0009L1250;ZFN 9003;A0009A0082;A0009L1227' },
    { id: 52, name: 'IC, OP-AMP', std: 'A0009F4028;ZFN 9003;ZFN 1160;A0009A0082;A0009A0085;A0009A0055' },
    { id: 53, name: 'IC, POWER-DRIVER', std: 'A0009F4028;ZFN 9003;ZFN 1160;A0009A0082;A0009A0085;A0009A0055' },
    { id: 54, name: 'IC, PROGRAMMABLE-ARRAY', std: 'A0009F4028;ZFN 9003;ZFN 1160;A0009A0082;A0009A0085;A0009A0055' },
    { id: 55, name: 'IC, SENSOR ACCELERATION', std: 'A0009F4032;ZFN 9003;ZFN 1160;A0009A0082;A0009A0090;A0009A0055' },
    { id: 56, name: 'IC, SENSOR IMAGE', std: 'A0009T7258;ZFN 9003;ZFN 1160;A0009A0082;A0009A0178;A0009A0055' },
    { id: 57, name: 'IC, SENSOR MOTION', std: 'A0009N6778;ZFN 9003;ZFN 1160;A0009A0082;A0009A0156;A0009A0055' },
    { id: 58, name: 'IC, SENSOR PRESSURE', std: 'A0009F4033;ZFN 9003;ZFN 1160;A0009A0082;A0009A0091;A0009A0055' },
    { id: 59, name: 'IC, WIRELESS', std: 'A0009F4028;ZFN 9003;ZFN 1160;A0009A0082;A0009A0085;A0009A0055' },
    { id: 60, name: 'MEMORY, NON-VOLATILE PROG', std: 'A0009L1250;ZFN 9003;A0009A0082;A0009L1227' },
    { id: 61, name: 'MEMORY, NON-VOL BLANK', std: 'A0009F4028;ZFN 9003;ZFN 1160;A0009A0082;A0009A0085;A0009A0055' },
    { id: 62, name: 'MEMORY, COMBO', std: 'A0009F4028;ZFN 9003;ZFN 1160;A0009A0082;A0009A0085;A0009A0055' },
    { id: 63, name: 'MEMORY, VOLATILE', std: 'A0009F4028;ZFN 9003;ZFN 1160;A0009A0082;A0009A0085;A0009A0055' },
    { id: 64, name: 'CONN, HEADER', std: 'Go to Sheet - Connector Standard Notes & Spec' },
    { id: 65, name: 'CONN, NON-HEADER', std: 'Go to Sheet - Connector Standard Notes & Spec' },
    { id: 66, name: 'FILTER, BP, PIEZOELETRIC', std: 'A0009F4025;A0009A0149;ZFN 9003;ZFN 1160;A0009A0082;A0009A0055' },
    { id: 67, name: 'FUSE', std: 'A0009F4026;A0009A0158;ZFN 9003;ZFN 1160;A0009A0082;A0009A0055' },
    { id: 68, name: 'RELAY MECHANICAL', std: 'A0009F4035;A0009E4159;ZFN 9003;ZFN 1160;A0009A0082;A0009A0055' },
    { id: 69, name: 'RESONATOR, CERAMIC', std: 'A0009F4042;A0009A0088;ZFN 9003;ZFN 1160;A0009A0082;A0009A0055' },
    { id: 70, name: 'RESONATOR, CRYSTAL', std: 'A0009F4043;A0009A0099;ZFN 9003;ZFN 1160;A0009A0082;A0009A0055' },
    { id: 71, name: 'CURRENT COMPENSATION CHOKES', std: 'A0009N6783;A0009A0110;ZFN 9003;ZFN 1160;A0009A0082;A0009A0055' },
    { id: 72, name: 'OSCILLATOR', std: 'A0009N6393;A0009P7101;ZFN 9003;ZFN 1160;A0009A0082;A0009A0055' },
    { id: 73, name: 'FILTER, EMI', std: 'A0009P7103;A0009A0142;ZFN 9003;ZFN 1160;A0009A0082;A0009A0055' },
    { id: 74, name: 'IC TEMPERATURE SENSOR', std: 'A0009U4436;A0009A0085;ZFN 9003;ZFN 1160;A0009A0082;A0009A0055' },
    { id: 75, name: 'SUPPLIER PROVIDED STANDARD NOTES', std: 'A0024Y1691;ZFN 9003;ZFN 1160;A0009A0082;A0009A0055' },
    { id: 76, name: 'MCM', std: 'A0052E9332;A0040A6962;ZFN 9003;ZFN 1160;A0009A0082;A0009A0055' },
    { id: 77, name: 'IC STANDARD NOTES_BLR', std: 'A0014E3362;ZFN 9003;ZFN 1160;A0009A0082;A0009A0085;A0009A0055;A0009A0068' },
    { id: 78, name: 'IC SENSOR IMAGE_BLR', std: 'A0024Y1692;ZFN 9003;ZFN 1160;A0009A0082;A0009A0178;A0009A0055;A0009A0068' },
    { id: 79, name: 'IC CUSTOM_COPPER WIRE_BLR', std: 'A0014E3413;ZFN 9003;ZFN 1160;A0009A0082;A0009A0086;A0009A0055;A0009A0072;A0009A0068' },
    { id: 80, name: ' IC_COPPER WIRE_BLR', std: 'A0014E3366;ZFN 9003;ZFN 1160;A0009A0082;A0009A0085;A0009A0055;A0009A0072;A0009A0068' },
    { id: 81, name: 'IC CUSTOM_BLR', std: 'A0014E3368;ZFN 9003;ZFN 1160;A0009A0082;A0009A0086;A0009A0055;A0009A0068' },
    { id: 82, name: 'MCM_BLR', std: 'A0056V4315;A0040A6962;ZFN 9003;ZFN 1160;A0009A0082;A0009A0056;A0009A0068' }

];

function StdNotes() {
    const [searchTerm, setSearchTerm] = useState('');
    const [savedPartName, setSavedPartName] = useState('');

    // Check if partname is already stored when the component mounts
    useEffect(() => {
        const storedName = localStorage.getItem('partname');
        if (storedName) {
            setSavedPartName(storedName);
        }
    }, []);

    // Filter data based on search term
    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.std.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Function to copy a text to clipboard
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
          alert("Coppied")
                

    }).catch (err => {
        console.error("Failed to copy text: ", err);
    });
};

// Function to add data to local storage (save only the first partname)
const addToLocalStorage = (item) => {
    // Remove the old partname and add the new one
    localStorage.setItem('partname', item.name);
    setSavedPartName(item.name);
    alert(`Part name "${item.name}" saved to local storage.`);
};

const handleClearClick = () => {
    setSearchTerm('');
};
return (
    <div style={{ paddingTop: '80px' }}>
        <div className="searchBar">

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Enter Part Type"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
            />
            <button onClick={handleClearClick}>Clear</button>
        </div>

        {/* Table or List of Items */}
        <table class="table table-sm table-hover">
            <thead>
                <tr class="bg-primary">
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Standard Notes</th>
                    <th scope="col">Actions</th> {/* Add a column for actions */}
                </tr>
            </thead>
            <tbody>
                {filteredData.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name || "No Name"}</td>
                        {/* <td>{item.std}</td> */}
                        <td>
                            {/* Buttons for Copying and Adding to Local Storage */}
                            <button className="stdBtn" onClick={() => copyToClipboard(item.std)}> <span class="text">Copy</span>
                                <span className="svgIcon">
                                    <svg fill="white" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path></svg>
                                </span>

                            </button>
                        </td>

                        <td>
                            <button className="stdBtn" onClick={() => addToLocalStorage(item)}>Subcribe</button>

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>


    </div>
);
}

export default StdNotes;
