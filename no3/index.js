function findFirstStringInBracket (str){
    let openingBracketLocation = str.indexOf("(")+1
    let closingBracketLocation = str.indexOf(")")
    let charKept = (closingBracketLocation - openingBracketLocation)
    if (str.length > 0){
        if(openingBracketLocation >= 0 && closingBracketLocation >= 0){
            console.log(str.substr(openingBracketLocation,charKept))
        }
        else{
            return ''
            
        }
    }
    else{
        return ''
        
    }
}