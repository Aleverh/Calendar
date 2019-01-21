export const getEventsCollision = events => {
    events.map( (event, index) => {
        const eventEndPoint = event.start + event.duration;
        for (let i = 0; i < events.length - 1; i++){
            const currentEventEnd = events[i].duration + events[i].start;
            if (index !== i && event.start < currentEventEnd && eventEndPoint > events[i].start) {
                if (events[i].left === undefined){
                    event.left = '0';
                    events[i].left = '50%';
                } else {
                    event.left = '50%';
                }
                event.isCollision = true;
                events[i].isCollision = true;
            }
        }
    })
};