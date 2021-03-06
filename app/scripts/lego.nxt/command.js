var Nxt;
(function (Nxt) {
    var Command = (function () {
        function Command(values) {
            this._bytes = [];
            this.append(values);
        }
        Command.prototype.append = function (values) {
            this._bytes = this._bytes.concat(values);
            /*
            values.forEach(value => {
            
            var splits: number[] = this.numberToBytes(value);
            splits.forEach(split => {
            this._bytes.push(split);
            })
            });
            */
        };

        //Convert number to bytes in Nxt expected format - unsigned 0xFF hex LSB first
        //HACK: There has to be a better way to do this!
        /*
        numberToBytes(value: number) : number[]
        {
        var negative = (value < 0);
        
        //Make unsigned
        if(negative) {
        value = (value >>> 0);
        }
        
        //Pad start if uneven
        var hex = value.toString(16).toUpperCase();
        if(hex.length % 2 != 0) {
        hex = "0" + hex;
        }
        
        //Split into pairs
        var bytes = hex.split(/(?=(?:..)*$)/);
        
        //Move lsb to front
        var lsb = bytes.pop();
        bytes.unshift(lsb);
        
        //Convert to numbers
        var result = [];
        for(var i=0; i < bytes.length; i++) {
        if(negative && bytes[i] == "FF") { continue; }
        
        result.push(parseInt("0x" + bytes[i]));
        }
        
        return result;
        }
        */
        Command.prototype.toArrayBuffer = function () {
            //alert(this._bytes.toString());
            console.log("NXT " + this._bytes.toString());

            return new Uint8Array(this._bytes).buffer;
        };
        Command.Types = { DirectReply: 0x00, SystemReply: 0x01, Direct: 0x80, System: 0x81 };
        return Command;
    })();
    Nxt.Command = Command;
})(Nxt || (Nxt = {}));
//# sourceMappingURL=command.js.map
