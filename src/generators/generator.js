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
      var numAlpha = Number(alpha)
      if (numAlpha > 26 || numAlpha < 1){
        return reject({
          'Error': 'Invalid value choose a value between 1 and 26!'
        })
      }
      var alphabetEnd = 65 + numAlpha
      var generatedArray = []
      for(i = 65; i < alphabetEnd; ++i){
          generatedArray.push(String.fromCharCode(i))
          console.log(generatedArray)
      }
      return resolve(generatedArray)
  }catch(e){
      return reject({
        'Error': e
      })
    }
  })
}
