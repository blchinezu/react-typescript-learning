import React from 'react';
import {FormControl, InputLabel, Select} from "@material-ui/core";

const CITIES = [{
  api: 'Bucharest,ro',
  display: 'Bucharest, Romania',
}, {
  api: 'London,uk',
  display: 'London, United Kingdom',
}];

interface CityChooserProps {
  city: string,
  handleChangedCity: (event: React.ChangeEvent<{ name?: string; value: unknown }>) => void,
}

const CityChooser: React.FC<CityChooserProps> = (props) => {
  return (
    <FormControl variant="filled" style={{width: '100%'}}>
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
        <option value={''}></option>
        {CITIES.map((city, key) =>
          <option key={key} value={city.api}>{city.display}</option>
        )}
      </Select>
    </FormControl>
  );
}

export default CityChooser;
