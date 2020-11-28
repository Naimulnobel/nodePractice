const EventEmitter = require('events');

class School extends EventEmitter {
    startPerid(){
        console.log('class Strated')
    

        setTimeout(() => {
            // raise an event
            this.emit( 'bellRing',
                {
                    period: 'first',
                    text:'period ended',
                }
            )
        }, 2000);

    }

}
module.exports=School;