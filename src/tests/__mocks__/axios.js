export const get = url =>{
  console.log('mock ---------------- axios get')
  return Promise.resolve({data:{title:"hello charlie"}})
}

export const post = (url, body) =>{
  console.log('mock ---------------- axios post')
  return Promise.resolve({data:{title:"hello charlie"}})
}