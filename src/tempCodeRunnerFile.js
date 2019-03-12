  generateMovieCards = () => {
    // map over your movieData array and return the correct
    movieData.map((data, index) => <li key={index}>{data}</li>);
  };