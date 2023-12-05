// SearchAndFilter.js
import React from "react";

const SearchAndFilter = ({
  search,
  onSearchChange,
  domains,
  onDomainChange,
  genders,
  onGenderChange,
  onAvailabilityChange,
}) => {
  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search users by name"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="filters">
        <h4>Filter Users By</h4>
        <label>
          <b>Domain :</b>
          <select onChange={(e) => onDomainChange(e.target.value)}>
            <option value="">All</option>
            {domains?.map((domain) => (
              <option value={domain} key={domain}>
                {domain}
              </option>
            ))}
          </select>
        </label>

        <label>
          <b>Gender :</b>
          <select onChange={(e) => onGenderChange(e.target.value)}>
            <option disabled>Select</option>
            <option value="">All</option>
            {genders?.map((gender) => (
              <option value={gender} key={gender}>
                {gender}
              </option>
            ))}
          </select>
        </label>
        <label>
          <b>Availability :</b>
          <select onChange={(e) => onAvailabilityChange(e.target.value)}>
            <option value={""}>Any</option>
            <option value={"true"}>Yes</option>
            <option value={"false"}>No</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default SearchAndFilter;
