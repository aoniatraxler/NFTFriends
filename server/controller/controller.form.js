const { User, Event } = require('../model/models.js');

const postEvent = async (req, res) => {
    try {
        const { group, host, date, venue, street, postcode, city, online, link, attendees } = req.body;
        const event = await Event.create({ group: group, host: host, date: date, venue: venue, street: street, postcode: postcode, city: city, online: online, link: link, attendees: attendees });
        res.send(event);
        res.status(201);
        return event;

    }
    catch (err) {
        console.log(err, "error");
        res.status(400);
        res.end();
    }

}


module.exports = { postEvent };

