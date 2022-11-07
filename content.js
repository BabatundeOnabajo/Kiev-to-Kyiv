function changeKievToKyiv(from, to){ //We create a function that manages to obtain every reference to Kiev on the web page. 
    
    
 getEveryTextNode().forEach(function(node){ //The getEveryTextNode() function is defined further down below in our code.
    
    node.nodeValue = node.nodeValue.replace(new RegExp(changeMaker(from), 'g'), to);
    
    });
    
    
function getEveryTextNode(){
    
    var result = [];
    
    (function nodeScanner(node){
        if(node.childNodes.length){
            for(var i = 0; i < node.childNodes.length; i++){
                nodeScanner(node.childNodes[i]);
            }
        }else if(node.nodeType == Node.TEXT_NODE){
            result.push(node);
        }
    })(document);
    
    return result;
    
}    
    
    
function changeMaker(str){ //We use this regular expression to catch instances of "Kiev" so that we can change it to Kyiv.
    return (str+' ').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"); //This is the exact regular expression we use. We use the "g" flag to ensure that we catch every instance of Kiev on the webpage.
}

}

// We call the function changeKievToKyiv here.
changeKievToKyiv('kiev', 'kyiv');

changeKievToKyiv('Kiev', 'Kyiv');
