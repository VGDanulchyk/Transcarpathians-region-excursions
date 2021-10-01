import React from 'react';
import ExcursionsCreator from './TrekEditor';
import ExcursionsCreatorList from './TrekList/TrekList';
import Filter from './Filter/Filter';

const TrekSection = () => {
  return (
    <section>
      <ExcursionsCreator />
      <Filter />
      <ExcursionsCreatorList />
    </section>
  );
};

export default TrekSection;
