function changeKievToKyiv(from, to){ //We create a function that manages to obtain every reference to Kiev on the web page. 
    
getEveryTextNode().forEach(function(node){
    
    node.nodeValue = node.nodeValue.replace(new RegExp(changeMaker(from), 'g'), to);
    
    });
    
    
    
function changeMaker(str){ //We use this regular expression to catch instances of "Kiev" so that we can change it to Kyiv.
    return (str+' ').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
}

}

// We call the function changeKievToKyiv here.
changeKievToKyiv('kiev', 'kyiv');

changeKievToKyiv('Kiev', 'Kyiv');
