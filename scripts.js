function drawTree(treeHeight) {
      
  for ( i = 0 ; i <= treeHeight ; i++) {
    var star = " ";
      for ( j = 0 ; j === i ; j++ ) {
      	star += '*';
      }
    
     console.log(star);
  }
}
drawTree(1)
drawTree(2)
drawTree(5)