import "./screen.css";
import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, Button, TextField } from '@mui/material';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

function ApiScreen() {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const countriesPerPage = 15;

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    // Reset to the first page when searching
    setCurrentPage(1);
  };

  const filteredCountries = countries.filter((country) => {
    const countryName = country.name.common.toLowerCase();
    return countryName.includes(searchInput.toLowerCase());
  });

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry);

  return (
    <div>
      <h1>Country Information</h1>
      <TextField
        label="Search by Country Name"
        variant="outlined"
        fullWidth
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell>Area (sq km)</TableCell>
              <TableCell>Capital</TableCell>
              <TableCell>Car Code</TableCell>
              <TableCell>Coat of Arms</TableCell>
              <TableCell>Continent</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentCountries.map((country, index) => (
              <TableRow key={index}>
                <TableCell>{country.name.common}</TableCell>
                <TableCell>{country.area}</TableCell>
                <TableCell>{country.capital}</TableCell>
                <TableCell>{country.cca2}</TableCell>
                <TableCell>
                  <img src={country.flags.png} alt="Coat of Arms" width="50" />
                </TableCell>
                <TableCell>{country.region}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredCountries.length / countriesPerPage) }, (_, index) => (
          <Button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            variant={currentPage === index + 1 ? "contained" : "outlined"}
            color="primary"
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ApiScreen;
