const Joi = require("joi");

module.exports.validate_string_min_max_required = (value, min, max) => {
  const { error } = Joi.string().min(min).max(max).required().validate(value);
  return error;
};

module.exports.validate_number_min_max_required = (value, min, max) => {
  const { error } = Joi.number().min(min).max(max).required().validate(value);
  return error;
};

module.exports.validate_number_required = (value) => {
  const { error } = Joi.number().required().validate(value);

  return error;
};

module.exports.validate_ip = (value) => {
  const { error } = Joi.string()
    .ip({ version: ["ipv4", "ipv6"], cidr: "optional" })
    .required()
    .validate(value);
  return error;
};

module.exports.validate_coordinate = (value) => {
  const { error } = Joi.object({
    latitude: Joi.number().min(-90).max(90).required(),
    longitude: Joi.number().min(-180).max(180).required(),
  }).required().validate(value);

  return error;
};

module.exports.checkStatus = (status) => {
  if (status == 1) {
    return 1;
  }

  if (status == 0) {
    return "Please complete your KYC (Know Your Customer) process to continue.";
  }

  if (status == 2) {
    return "Kindly provide your bank details to proceed.";
  }

  if (status == 3) {
    return "Your bank verification is currently pending and awaiting approval from our administrators.";
  }

  if (status == 5) {
    return "Your account has been blocked.";
  }
};

module.exports.validate_binary_required =   (value) => {
  const { error } = Joi.number().valid(0,1).required().validate(value);
  return error;
};



module.exports.validate_text_required = (value,text) => {
    const { error } = Joi.string().valid(...text).required().validate(value);
    return error;
  }


  // ***************** non required ****************

  module.exports.validate_number_min_max = (value, min, max) => {
    const { error } = Joi.number().min(min).max(max).validate(value);
    return error;
  };
  
  module.exports.validate_string_min_max = (value, min, max) => {
    const { error } = Joi.string().min(min).max(max).validate(value);
    return error;
  };
  
  module.exports.validate_binary =   (value) => {
    const { error } = Joi.number().valid(0,1).validate(value);
    return error;
  };
 
  module.exports.validate_text = (value,text) => {
      const { error } = Joi.string().valid(...text).validate(value);
      return error;
  }


    ////////////new validation /////
    module.exports.validate_email_required = (email) => {
        const { error } = Joi.string().email().required().validate(email);
        return error;
      }
  
  
  
      module.exports.validate_password_required = (password, min, max) => {
        const passwordSchema = Joi.string().min(min).max(max).required();
        const { error } = passwordSchema.validate(password);
        return error;
      };
  
      module.exports.validate_mobile_number = (mobileNumber) => {
        const mobileNumberSchema = Joi.string().pattern(/^\d{10}$/).required();
        const { error } = mobileNumberSchema.validate(mobileNumber);
        return error;
      };
      
  
      module.exports.validate_date_min_max_required = (value, minDate, maxDate) => {
        const { error } = Joi.date().min(minDate).max(maxDate).required().validate(value);
        return error;
      };
      
      
      
      module.exports.validate_date = (dateString) => {
        const schema = Joi.date().iso(); // You can adjust the validation criteria as needed
        const { error } = schema.validate(dateString);
        return error;
      };
  
  
  
  
      module.exports.validate_image = (imageFile) => {
        const allowedExtensions = ['jpg', 'jpeg']; // Example of allowed image extensions
        const maxFileSizeInBytes = 5 * 1024 * 1024; // Example of a maximum file size (5 MB)
      
        const schema = Joi.object({
          originalname: Joi.string().required(),
          mimetype: Joi.string().valid(...allowedExtensions.map(ext => `image/${ext}`)).required(),
          size: Joi.number().max(maxFileSizeInBytes).required()
        });
      
        const { error } = schema.validate(imageFile, { allowUnknown: true });
        return error;
      };
    
//   module.exports.validate_image = (imageFile) => {
//     const allowedExtensions = ['jpg', 'jpeg']; // Example of allowed image extensions
//     const maxFileSizeInBytes = 5 * 1024 * 1024; // Example of a maximum file size (5 MB)
  
//     const schema = Joi.object({
//       originalname: Joi.string().required(),
//       mimetype: Joi.string().valid(...allowedExtensions.map(ext => `image/${ext}`)).required(),
//       size: Joi.number().max(maxFileSizeInBytes).required()
//     });
  
//     const { error } = schema.validate(imageFile, { allowUnknown: true });
//     return error;
//   };



