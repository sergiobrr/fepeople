import helpers from "../../src/helpers/resource";

test('normalizeFields remove commons unallowed fields from object', () => {
  expect(helpers.normalizeFields({
    some_other_field: 123,
    _etag:'123',
    _created: '123',
    _links: '123',
    _updated: '123'
  })).toStrictEqual({
    some_other_field: 123
  });
});
