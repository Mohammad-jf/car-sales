import React from 'react';
import carsData from '@/data/carsData';
import CarsPage from '@/components/templates/CarsPage';
import Category from '@/components/module/Category';
import SearchBar from '@/components/module/SearchBar';
import AllButton from '@/components/module/AllButton';

export default function Home() {
  return (
    <div>
      <SearchBar />
      <Category />
      <AllButton />
      <CarsPage carsData={carsData.slice(0, 3)} />
    </div>
  );
}
