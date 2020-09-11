export default {
  normalizeFields: function(resource) {
    delete resource._etag;
    delete resource._created;
    delete resource._links;
    delete resource._updated;
    return resource;
  }
}

