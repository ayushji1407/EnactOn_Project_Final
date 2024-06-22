export class ErrorHandler extends Error {
     constructor(message, statusCode){
          super(message);
          this.statusCode = statusCode
     }
}



export const errorMiddleware  = (err, req, res, next) => {
     console.error(err.stack);
     res.status(500).json({
         success: false,
         message: err.message || 'Internal Server Error',
     });
 };