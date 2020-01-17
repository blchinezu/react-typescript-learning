import React from 'react';
import {FormControl, InputLabel, Select} from "@material-ui/core";
import jsonCities from './data/cities.json';

interface CityChooserProps {
  city: number,
  handleChangedCity: (event: React.ChangeEvent<{ name?: string; value: unknown }>) => void,
}

let cities: {
  id: number,
  name: string,
}[] = [];

for (let data in jsonCities) {
  cities.push({
    id: data['i'],
    name: data['n'] + ', ' + data['c'],
  });
}

const CityChooser: React.FC<CityChooserProps> = (props) => {
  return (

    <FormControl variant="filled" style={{width: '100%'}}>
      <Autocomplete
      id="country-select-demo"
      style={{ width: 300 }}
      options={countries}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={option => option.label}
      renderOption={option => (
        <React.Fragment>
          <span>{countryToFlag(option.code)}</span>
          {option.label} ({option.code}) +{option.phone}
        </React.Fragment>
      )}
      renderInput={params => (
        <TextField
          {...params}
          label="Choose a country"
          variant="outlined"
          fullWidth
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
      <InputLabel htmlFor="filled-city-native-simple">City</InputLabel>
      <Select
        native
        value={props.city}
        onChange={event => props.handleChangedCity(event)}
        inputProps={{
          name: 'City',
          id: 'filled-city-native-simple',
        }}
      >

        <option key={0} value={''}></option>
        {countries.map((country, key) =>
          <optgroup key={key} label="{country}">
            {cities[country].map((city, _) =>
              <option key={city.id} value={city.id}>{city.name}</option>
            )}
          </optgroup>
        )}
      </Select>
    </FormControl>
  );
}

export default CityChooser;
