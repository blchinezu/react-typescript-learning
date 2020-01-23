import React from 'react';
import jsonCities from './data/cities.json';
import {FormControl, InputLabel, Select} from "@material-ui/core";

interface CityChooserProps {
  city: number,
  handleChangedCity: (event: React.ChangeEvent<{ name?: string; value: unknown }>) => void,
}

let cities: {
  id: number,
  name: string,
}[] = [];

for (let i in jsonCities) {
  cities.push({
    id: jsonCities[i]['i'],
    name: jsonCities[i]['n'] + ', ' + jsonCities[i]['c'],
  });
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
        <option key={''} value={0}></option>
        {cities.map((city, key) =>
          <option key={key} value={city.id}>{city.name}</option>
        )}
      </Select>
    </FormControl>
  );
}

export default CityChooser;
