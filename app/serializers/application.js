import RESTSerializer from '@ember-data/serializer/rest';

export default class ApplicationSerializer extends RESTSerializer {
  host = 'https://20jipe19g4.execute-api.us-east-1.amazonaws.com/dev';
}
// import JSONAPISerializer from '@ember-data/serializer/json-api';

// export default class ApplicationSerializer extends JSONAPISerializer {}
