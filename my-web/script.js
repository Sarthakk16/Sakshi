function viewDetails(artwork) {
    let title, price, description;
  
    if (artwork === 'art1') {
      title = 'Abstract 1';
      price = '$200';
      description = 'A beautiful abstract painting with bold colors and dynamic shapes.';
    } else if (artwork === 'art2') {
      title = 'Landscape 1';
      price = '$300';
      description = 'A serene landscape painting depicting a sunset over mountains.';
    } else if (artwork === 'art3') {
      title = 'Portrait 1';
      price = '$250';
      description = 'A portrait painting capturing the essence of the subject.';
    } 
    // Add more conditions for other artworks
  
    alert(`
      Title: ${title}
      Price: ${price}
      Description: ${description}
    `);
  }
  
  function filterCategory(category) {
    const artworks = document.querySelectorAll('.artwork');
    
    artworks.forEach(artwork => {
      if (category === 'all' || artwork.getAttribute('data-category') === category) {
        artwork.style.display = 'inline-block';
      } else {
        artwork.style.display = 'none';
      }
    });
  }
  