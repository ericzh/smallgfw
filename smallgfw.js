function GFW(){
    this.d = {}
}

GFW.prototype.set=function(keywords){
        var p = this.d
        var q = {}
        var k = ''
        for(var i=0;i<keywords.length;i++){
            var word = keywords[i]+'\0';
            p = this.d
            for(var j=0;j<word.length;j++){
                var char = word[j].toLowerCase();
                if(p==''){
                    q[k] = {}
                    p = q[k]
                }
                if(!(char in p)){
                    p[char] = ''
                    q = p
                    k = char
                }
                p = p[char] 
            }
        }
}


GFW.prototype.replace=function(text,mask){
        var p = this.d
        var i = 0 
        var j = 0
        var z = 0
        var result = []
        var ln = text.length
        while(i+j<ln){
            t = text[i+j].toLowerCase()
            if(!(t in p)){
                j = 0
                i += 1
                p = this.d
                continue
            }
            p = p[t]
            j+=1
            if('\0' in p){
                p = this.d
                result.push(text.slice(z,i))
                result.push(mask)
                i = i+j
                z = i
                j = 0
            }
        }
        result.push(text.slice(z,i+j))
        return result.join('')
}        

GFW.prototype.check =function(text){
        var p = this.d
        var i = 0 
        var j = 0
        var result = []
        var ln = text.length
        while(i+j<ln){
            t = text[i+j].toLowerCase()
            if(! (t in p) ){
                j = 0
                i += 1
                p = this.d
                continue
            }
            p = p[t]
            j+=1
            if ('\0' in p){
                p = this.d
                result.push((i,j,text.slice(i,i+j)))
                i = i+j
                j = 0
            }
        }
        return result
}

