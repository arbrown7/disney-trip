var Sequence = require('../models/sequence');

var maxTripId;
var maxLogId;
var sequenceId = null;

function SequenceGenerator() {
  Sequence.findOne()
    .then(sequence => {
      sequenceId = sequence._id;
      maxTripId = sequence.maxTripId;
      maxLogId = sequence.maxLogId;
      maxContactId = sequence.maxContactId;
    })
    .catch(err => {
      console.log('Error initializing sequence generator: ' + err);
    });
}

SequenceGenerator.prototype.nextId = function(collectionType) {

  var updateObject = {};
  var nextId;

  switch (collectionType) {
    case 'trips':
      maxTripId++;
      updateObject = {maxTripId: maxTripId};
      nextId = maxTripId;
      break;
    case 'logs':
      maxLogId++;
      updateObject = {maxLogId: maxLogId};
      nextId = maxLogId;
      break;
    default:
      return -1;
  }

Sequence.updateOne({_id: sequenceId}, {$set: updateObject})
  .then(() => {})
  .catch(err => {
    console.log('nextId error = ' + err);
});

  return nextId;
}

module.exports = new SequenceGenerator();
