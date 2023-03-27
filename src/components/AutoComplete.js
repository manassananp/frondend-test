import React, { useState, useEffect } from "react";
import { AutoComplete } from "primereact/autocomplete";
import GetAPI from "../service/GetAPI";
import { BlockUI } from "primereact/blockui";

function AutoCompleteComponent() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, loading, errors] = GetAPI("https://restcountries.com/v3.1/all");

  //   const [loading, setLoading] = useState(false);
  //   const [errors, setErrors] = useState(null);
  // const [data, loading, errors] = GetAPI("https://restcountries.com/v3.1/all");

  useEffect(() => {
    fetchData();
    setIsLoading(loading);
  }, [data]);

  const fetchData = async () => {
    setCountries(data.map((item) => item.name));
  };

  const search = (event) => {
    // Timeout to emulate a network connection
    // setIsLoading(true);

    setTimeout(() => {
      let _filteredCountries;
      if (!event.query.trim().length) {
        _filteredCountries = [...countries];
      } else {
        _filteredCountries = countries.filter((country) => {
          return country.common
            .toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }
      setFilteredCountries(_filteredCountries);
      // setIsLoading(false);
    }, 250);
  };

  return (
    <div>
      <div>
        <label htmlFor="autoComplete">Auto Complete (Country)</label>
        <div className="card flex mt-2">
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <AutoComplete
              field="common"
              value={selectedCountry}
              suggestions={filteredCountries}
              completeMethod={search}
              onChange={(e) => setSelectedCountry(e.value)}
            />
          </span>
        </div>
        <BlockUI blocked={isLoading} fullScreen></BlockUI>
      </div>
    </div>
  );
}

export default AutoCompleteComponent;
