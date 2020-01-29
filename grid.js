const grid = document.querySelector('.grid')

posts.map((post) => {
  let cell = document.createElement('div')
  
  cell.className = 'gridItem'
  cell.style = `
  	--columnsAmount: ${post.size};
  	background-image: url(images/${post.name});
  `
  
  grid.appendChild(cell)
})