'use strict'

class TestController {
   //Extracting the view class of the HTTP context
    myurl({ view }) {
        return view.render("myview");
    }
}

module.exports = TestController