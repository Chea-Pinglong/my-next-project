interface ValidationError {
  path: string;
  message: string;
}

export async function validate(schema: any, data: any) : Promise<void> {
  try {
    await schema.validate(data, { absortEarly: false });
  } catch (error) {
    const fieldErrors = {};

    if(error.inner){

        error.inner.forEach((err: any) => {
          fieldErrors[err.path] = err.message;
        });
    }else{
        
    }

    throw fieldErrors;
  }
}
