import React from "react";
import * as yup from "yup";
yup.addMethod(yup.mixed, "fileSize", function (maxSize, message) {
  return this.test("fileSize", message, function(value){
    const{path, createError} = this;

    if(value && value.size > maxSize){
      return createError({
        path,
        message
      })
    }
    return true
  });
});

const Schema = yup.object().shape({
  username: yup.string().required().min(3).max(60),
  profile: yup.mixed().required("A profile is required").fileSize(1024*1024*2, "Profile picture should be less than 2MB")
})

export { Schema };
