const statusCode = {
  ERROR: (code,msg,data) => {
      return {
        data:data,
        head:{
          code: code,
          success:'false',
          msg:msg
        }
          
      }
  },

  SUCCESS: (code,msg, data) => {
      return {
        data:data,
        head:{
          code:code,
          success:'true',
          msg:msg
        }
      }
  }
}

module.exports = statusCode