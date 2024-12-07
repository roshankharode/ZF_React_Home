import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    
    // Retrieve the last selected plant from localStorage or set a default value
    const storedPlant = localStorage.getItem('plantName') || 'Anting';

    // Initialize state to store plant filter and plant data
    this.state = {
      selectedPlant: storedPlant, // Set the default filter from localStorage
      plants: [
        { id: 1, name: 'Anting' },
        { id: 2, name: 'Auburn' },
        { id: 3, name: 'Brest, France' },
        { id: 4, name: 'College Road' },
        { id: 5, name: 'Czestochowa' },
        { id: 6, name: 'Limeira, Brazil' },
        { id: 7, name: 'Marshall' },
        { id: 8, name: 'Peterlee' },
        { id: 9, name: 'Reynosa' }
      ],
      data: [
        { id: 1, plant: 'Anting', contact: 'Vivi Sun (Braking Electronics & EPB ECU), Lisa Lu (Steering Electronics), Jing Zhu (Safety Electronics & DAS)', sqa: 'Alex Zhang' },
        { id: 2, plant: 'Auburn', contact: 'Christina Bobbett', sqa: 'Regis Thepaut' },
        { id: 3, plant: 'Brest, France', contact: '', sqa: 'Lukasz Lawniczak, Klaudia Lewandowska' },
        { id: 4, plant: 'College Road', contact: 'Robert Webster, Lukasz Lawniczak, Klaudia Lewandowska', sqa: 'Lukasz Lawniczak, Klaudia Lewandowska' },
        { id: 5, plant: 'Czestochowa', contact: 'Rafal Parada', sqa: '' },
        { id: 6, plant: 'Limeira, Brazil', contact: 'Gian Correa', sqa: 'Christopher Sugden, Luis Fontolan' },
        { id: 7, plant: 'Marshall', contact: 'Amanda Duncan, Melissa Gentry, Maggie Murphy, Brandi O\'Rourke', sqa: 'Rob Crumrin (send to Maggie Murphy)' },
        { id: 8, plant: 'Peterlee', contact: 'Suzanne Kelly', sqa: 'Matthew Grossett (send to Suzanne Kelly)' },
        { id: 9, plant: 'Reynosa', contact: '', sqa: 'Keith Holmquist' }
      ]
    };
  }

  // Handle dropdown change to filter data based on selected plant
  handlePlantChange = (event) => {
    const selectedPlant = event.target.value;
    // Update state and store the selected plant in localStorage
    this.setState({ selectedPlant });
    localStorage.setItem('plantName', selectedPlant); // Store selected plant in localStorage
  };

  render() {
    const { selectedPlant, plants, data } = this.state;

    // Create a sorted copy of plants (avoid mutating the original array)
    const sortedPlants = [...plants].sort((a, b) => a.name.localeCompare(b.name));

    // Filter rows based on the selected plant name
    const filteredData = selectedPlant ? data.filter(row => row.plant === selectedPlant) : data;

    return (
      <div>
        <div className="filter-dropdown">
          <label htmlFor="plantFilter">Plant Contact: </label>
          <select id="plantFilter" onChange={this.handlePlantChange} value={selectedPlant}>
            <option value="">All Plants</option>
            {sortedPlants.map((plant) => (
              <option key={plant.id} value={plant.name}>{plant.name}</option>
            ))}
          </select>
        </div>

        <table className="table">
          <thead className="thead-dark table-primary">
            <tr>
              <th scope="col">Sr No</th>
              <th scope="col">Plant Name</th>
              <th scope="col">Main Plant Contact</th>
              <th scope="col">SQA from Plant</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={row.id}>
                <th scope="row">{index + 1}</th>
                <td>{row.plant}</td>
                <td>{row.contact}</td>
                <td>{row.sqa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyComponent;
