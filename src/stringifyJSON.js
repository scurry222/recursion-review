// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
//check for each data type and modify accordingly

  // if obj is null
  if (obj === null) {
    return 'null';
  }

  if (obj === true || obj === false) {
    return `${obj}`;
  }

  // if obj is number
  if (typeof obj === 'number') {
    return `${obj}`;
  }

  // if obj is string
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }

  // if obj is array
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    let result = '';
    for (let i = 0; i < obj.length; i++) {
      // if (Array.isArray(obj[i])) {
      if (i !== obj.length - 1) {
        result += `${stringifyJSON(obj[i])},`;
      } else {
        result += `${stringifyJSON(obj[i])}`;
      }

    }
    return `[${result}]`;
  }

  // if obj is obj
  if (typeof obj === 'object') {
    let result = '';
    if (Object.entries(obj).length === 0) {
      return '{}';
    }
    const entries = Object.entries(obj);

    for (let i = 0; i < entries.length; i++) {
      if (entries[i][0] !== 'functions' && entries[i][0] !== 'undefined') {
        if (i < entries.length - 1) {
          result += `"${entries[i][0]}":${stringifyJSON(entries[i][1])},`;
        } else {
          result += `"${entries[i][0]}":${stringifyJSON(entries[i][1])}`;
        }
      }

    }
    return `{${result}}`;
  }

};
