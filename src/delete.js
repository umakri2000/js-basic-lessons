onst book = {
    'main title': 'JavaScript',
    subtitle: 'The Definitive Guide',
    for: 'all audiences',
    author: {
      firstname: 'Alan',
      surname: 'Walker'
    }
  }
  let len
  // book = null;
  // if(book){
  //     if(book.subtitle){
  //         len = book.subtitle.length;
  //         console.log(len);
  //     }
  //     else
  //         console.log("book.subtitle undefined:");
  // }
  // else
  //     console.log("book is null");
  
  len = book && book.subtitle && book.subtitle.length
  if (len) { console.log(len) }
  console.log(book.author)
  delete book.author
  console.log(book.author)
  
  console.log(book['main title'])
  delete book['main title']
  console.log(book['main title'])
  
  const o6 = { x: 100 }
  console.log(o6.x)
  delete o6.x
  console.log(o6.x)
  console.log(o6.tostring)
  delete o6.tostring
  console.log(o6.tostring)