
    const mongoose = require(“mongoose”);
    const Schema = mongoose.Schema;
    const Tags = new Schema(
    
        
        
        {
            label: String
            }
        
        
        
    );
    const TagsModel = mongoose.model("tags", Tags);
    module.exports = TagsModel ;
    