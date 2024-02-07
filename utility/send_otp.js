
exports.GenerateOTP = () => {
    const Keys = "123456789";
    const length = 6;
    Code = "";
    for (let i = 0; i < length; i++) {
        Code += Keys.charAt(Math.floor(Math.random() * Keys.length));
    };

    return Code;
};

// Function To Generate Unique ID
exports.GenerateUniqueID1 = (count, string, prefix) => {
    var str = "";
   for (var i = 0; i < count; i++) { 
    if (string[i] != "-") {
      str += string[i];
    } 
  }
    return prefix + str;};
  
   