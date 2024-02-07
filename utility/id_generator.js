const uuid = require('uuid')


exports.GenerateOTP = () => {
    const Keys = "123456789";
    const length = 6;
    const CodeArray = Array.from({ length }, () =>
        Keys.charAt(Math.floor(Math.random() * Keys.length))
    );
    const Code = CodeArray.join('');
    return Code;
};


exports.GenerateUniqueID = (count, string, name) => {
    const _sym = string + name;
    const strArray = Array.from({ length: count }, () =>
        _sym[parseInt(Math.random() * _sym.length)]
    );
    const str = strArray.join('');
    return str;
};


GenerateUniqueID1 = (count, string, prefix) => {
    const filteredChars = Array.from({ length: count }, (_, i) => string[i]).filter(char => char !== "-");
    const str = filteredChars.join('');

    return prefix + str;
};

// exports.master_wallet_id_generator = (GenerateUniqueID1(11, uuid.v1(), "W")).toUpperCase()
// exports.admin_wallet_id = (GenerateUniqueID1(11, uuid.v1(), "W")).toUpperCase()
// exports.network_id_generator = (GenerateUniqueID1(5, uuid.v1(), "NID")).toUpperCase()
// exports.pair_id_generator  = ( prefix) => {
//     return   (GenerateUniqueID1(5, uuid.v1(), prefix)).toUpperCase();

// };
exports.ticket_id_generator = function () { return (GenerateUniqueID1(11, uuid.v1(), "T")).toUpperCase() }


