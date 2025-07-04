import React, { useEffect } from 'react';

 function FetchExample() {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com')
      .then(response => response.json())
      .then(json => console.log(json));
  }, []);

  return (
  <h5>Open console to see the fetched data</h5>
  )
}

export default FetchExample;