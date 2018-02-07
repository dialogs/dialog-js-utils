/*
 * Copyright 2018 Dialog LLC <info@dlg.im>
 */

const { name } = require('../package.json');

function onHandleTag(ev) {
  for (const tag of ev.data.tag) {
    if (tag.importPath) {
      tag.importPath = name;
    }
  }
}

module.exports = {
  onHandleTag
};
