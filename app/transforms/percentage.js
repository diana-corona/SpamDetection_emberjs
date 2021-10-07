import Transform from '@ember-data/serializer/transform';

export default class PercentageTransform extends Transform {
  deserialize(serialized) {
    serialized = parseFloat(serialized, 10).toFixed(4);
    return serialized * 100;
  }

  serialize(deserialized) {
    serialized = parseFloat(deserialized, 10).toFixed(4);
    return deserialized / 100;
  }
}
