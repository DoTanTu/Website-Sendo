function changValue(size){
    switch(size){
        case 1:
            return "M"
        case 2:
            return "L";
        case 3:
            return "XL";
        case 4:
            return "2XL";
        default: return "";
    }
}
export default changValue;