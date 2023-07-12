import React from 'react';
import useFetch from '@/hooks/useFetch';
import Loading from '@/components/Loading';


const MyComponent = () => {
  const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};

export default MyComponent;
