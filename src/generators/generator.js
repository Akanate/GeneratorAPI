module.exports = numGenerator = (num) => {
  return new Promise((resolve,reject) => {
  try{
      var generatedArray = []
      for(i = 0; i < num; ++i){
          generatedArray.push(i)
          console.log(i)
      }
      return resolve(generatedArray)
  }catch(e){
      return reject(e)
    }
  })
}

module.exports = alphaGenerator = (alpha) => {
  return new Promise((resolve,reject) => {
  try{
      var alphabetEnd = 65 + Number(alpha)
      console.log(alphabetEnd)
      var generatedArray = []
      for(i = 65; i < alphabetEnd; ++i){
          generatedArray.push(String.fromCharCode(i))
          console.log(generatedArray)
      }
      return resolve(generatedArray)
  }catch(e){
      return reject(e)
    }
  })
}
