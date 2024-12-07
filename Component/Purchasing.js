import React, { Component } from 'react';

class Purchasing extends Component {
  state = {
    selectedPortfolio: 'Anting',  // Set default filter to Anting
  };

  // Handle the dropdown change to filter by selected portfolio
  handlePortfolioChange = (event) => {
    this.setState({ selectedPortfolio: event.target.value });
  };

  render() {
    // Data for the portfolios and other information
    const portfolios = [
      'Anting', 'DAS Camera', 'DAS Radar', 'Integrated', 'Passive Safety', 
      'Braking', 'Steering', 'Powertrain', 'All AP', 'CAT0'
    ];

    // Table rows data (adding 'Anting' as an example)
    const rows = [
      { id: 1, portfolio: 'Anting', programBuyer: 'Vivi Sun', backup: 'Alex Zhang' },
      { id: 2, portfolio: 'DAS Camera', programBuyer: 'Iwona Stacherczak', backup: 'Dave Thompson' },
      { id: 3, portfolio: 'DAS Radar', programBuyer: 'Elaine Burford', backup: 'Dave Thompson' },
      { id: 4, portfolio: 'Integrated', programBuyer: 'Katie Martin', backup: 'Dave Thompson' },
      { id: 5, portfolio: 'Passive Safety', programBuyer: 'Jerry Ling', backup: 'Jerry Ling' },
      { id: 6, portfolio: 'Braking', programBuyer: 'Mark A. Smith', backup: 'John Lee' },
      { id: 7, portfolio: 'Steering', programBuyer: 'Leandro Oliveira', backup: 'John Lee' },
      { id: 8, portfolio: 'Powertrain', programBuyer: 'Chris Bevan', backup: 'John Lee' },
      { id: 9, portfolio: 'All AP', programBuyer: 'James Zhao', backup: 'Carlos Gomes' },
      { id: 10, portfolio: 'CAT0', programBuyer: 'Kristin Edison', backup: 'Carlos Gomes' },
    ];

    // Filter rows based on the selected portfolio
    const filteredRows = this.state.selectedPortfolio
      ? rows.filter(row => row.portfolio === this.state.selectedPortfolio)
      : rows;

    return (
      <div>
        <div className="filter-dropdown ">
          <label htmlFor="portfolioFilter ">Purchasing: </label>
          <select
            id="portfolioFilter"
            value={this.state.selectedPortfolio}
            onChange={this.handlePortfolioChange}
          >
            <option value="">All Portfolios</option>
            {portfolios.map((portfolio, index) => (
              <option key={index} value={portfolio}>
                {portfolio}
              </option>
            ))}
          </select>
        </div>

        <table className='table' >
          <thead className="thead-dark table-primary">
            <tr>
              <th scope="col">Sr No</th>
              <th scope="col">Portfolio</th>
              <th scope="col">Program Buyer</th>
              <th scope="col">Backup</th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row) => (
              <tr key={row.id}>
                <th scope="row">{row.id}</th>
                <td>{row.portfolio}</td>
                <td>{row.programBuyer}</td>
                <td>{row.backup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Purchasing;
